// Cloud Save Manager for DogeMiner CE
class CloudSaveManager {
    constructor() {
        this.currentUser = null;
        this.isInitialized = false;
        this.init();
    }

    async init() {
        // Wait for Firebase to be available
        if (typeof window.firebase === 'undefined') {
            console.log('Waiting for Firebase to initialize...');
            setTimeout(() => this.init(), 100);
            return;
        }

        // Listen for authentication state changes
        window.firebase.onAuthStateChanged(window.firebase.auth, (user) => {
            this.currentUser = user;
            this.updateUI();
        });

        this.isInitialized = true;
        console.log('Cloud Save Manager initialized');
    }

    updateUI() {
        const userInfo = document.getElementById('user-info');
        const signInSection = document.getElementById('sign-in-section');
        const userName = document.getElementById('user-name');

        if (this.currentUser) {
            // User is signed in
            userInfo.style.display = 'block';
            signInSection.style.display = 'none';
            userName.textContent = `Signed in as: ${this.currentUser.displayName || this.currentUser.email}`;
        } else {
            // User is not signed in
            userInfo.style.display = 'none';
            signInSection.style.display = 'block';
        }
    }

    async signInWithGoogle() {
        try {
            if (!this.isInitialized) {
                showNotification('Firebase is still initializing. Please wait a moment.', 'warning');
                return;
            }

            showNotification('Signing in with Google...', 'info');
            
            const result = await window.firebase.signInWithPopup(
                window.firebase.auth, 
                window.firebase.provider
            );
            
            this.currentUser = result.user;
            showNotification(`Welcome, ${this.currentUser.displayName}!`, 'success');
            
        } catch (error) {
            console.error('Sign in error:', error);
            showNotification('Failed to sign in. Please try again.', 'error');
        }
    }

    async signOutUser() {
        try {
            await window.firebase.signOut(window.firebase.auth);
            this.currentUser = null;
            showNotification('Signed out successfully', 'info');
        } catch (error) {
            console.error('Sign out error:', error);
            showNotification('Failed to sign out', 'error');
        }
    }

    async saveToCloud() {
        if (!this.currentUser) {
            showNotification('Please sign in first', 'warning');
            return;
        }

        try {
            showNotification('Saving to cloud...', 'info');
            
            // Get current game state
            const gameData = this.getGameState();
            
            // Save to Firestore
            const userDocRef = window.firebase.doc(window.firebase.db, 'users', this.currentUser.uid);
            await window.firebase.setDoc(userDocRef, {
                gameData: gameData,
                lastSaved: new Date().toISOString(),
                version: '1.0.0'
            }, { merge: true });

            showNotification('Game saved to cloud successfully!', 'success');
            
        } catch (error) {
            console.error('Cloud save error:', error);
            showNotification('Failed to save to cloud. Please try again.', 'error');
        }
    }

    async loadFromCloud() {
        if (!this.currentUser) {
            showNotification('Please sign in first', 'warning');
            return;
        }

        try {
            showNotification('Loading from cloud...', 'info');
            
            // Get data from Firestore
            const userDocRef = window.firebase.doc(window.firebase.db, 'users', this.currentUser.uid);
            const docSnap = await window.firebase.getDoc(userDocRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                if (data.gameData) {
                    this.loadGameState(data.gameData);
                    showNotification('Game loaded from cloud successfully!', 'success');
                } else {
                    showNotification('No save data found in cloud', 'warning');
                }
            } else {
                showNotification('No save data found in cloud', 'warning');
            }
            
        } catch (error) {
            console.error('Cloud load error:', error);
            showNotification('Failed to load from cloud. Please try again.', 'error');
        }
    }

    getGameState() {
        // Get the current game instance
        if (typeof window.game !== 'undefined' && window.game) {
            return {
                dogecoins: window.game.dogecoins,
                dps: window.game.dps,
                helpers: window.game.helpers,
                upgrades: window.game.upgrades,
                totalMined: window.game.totalMined,
                totalClicks: window.game.totalClicks,
                currentLevel: window.game.currentLevel,
                currentPickaxe: window.game.currentPickaxe,
                playTime: window.game.playTime,
                highestDps: window.game.highestDps,
                achievements: window.game.achievements || {},
                settings: {
                    soundEnabled: window.game.soundEnabled,
                    musicEnabled: window.game.musicEnabled,
                    notificationsEnabled: window.game.notificationsEnabled,
                    autoSaveEnabled: window.game.autoSaveEnabled
                }
            };
        }
        return null;
    }

    loadGameState(gameData) {
        // Load the game state into the current game instance
        if (typeof window.game !== 'undefined' && window.game && gameData) {
            window.game.dogecoins = gameData.dogecoins || 0;
            window.game.dps = gameData.dps || 0;
            window.game.helpers = gameData.helpers || {};
            window.game.upgrades = gameData.upgrades || {};
            window.game.totalMined = gameData.totalMined || 0;
            window.game.totalClicks = gameData.totalClicks || 0;
            window.game.currentLevel = gameData.currentLevel || 'earth';
            window.game.currentPickaxe = gameData.currentPickaxe || 'standard';
            window.game.playTime = gameData.playTime || 0;
            window.game.highestDps = gameData.highestDps || 0;
            window.game.achievements = gameData.achievements || {};
            
            // Load settings
            if (gameData.settings) {
                window.game.soundEnabled = gameData.settings.soundEnabled !== undefined ? gameData.settings.soundEnabled : true;
                window.game.musicEnabled = gameData.settings.musicEnabled !== undefined ? gameData.settings.musicEnabled : true;
                window.game.notificationsEnabled = gameData.settings.notificationsEnabled !== undefined ? gameData.settings.notificationsEnabled : true;
                window.game.autoSaveEnabled = gameData.settings.autoSaveEnabled !== undefined ? gameData.settings.autoSaveEnabled : true;
            }

            // Update UI
            window.game.updateUI();
            window.game.updateDPS();
            
            // Update settings checkboxes
            document.getElementById('sound-enabled').checked = window.game.soundEnabled;
            document.getElementById('music-enabled').checked = window.game.musicEnabled;
            document.getElementById('notifications-enabled').checked = window.game.notificationsEnabled;
            document.getElementById('auto-save-enabled').checked = window.game.autoSaveEnabled;
        }
    }
}

// Global functions for HTML onclick handlers
let cloudSaveManager;

function signInWithGoogle() {
    if (cloudSaveManager) {
        cloudSaveManager.signInWithGoogle();
    }
}

function signOutUser() {
    if (cloudSaveManager) {
        cloudSaveManager.signOutUser();
    }
}

function saveToCloud() {
    if (cloudSaveManager) {
        cloudSaveManager.saveToCloud();
    }
}

function loadFromCloud() {
    if (cloudSaveManager) {
        cloudSaveManager.loadFromCloud();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    cloudSaveManager = new CloudSaveManager();
});

