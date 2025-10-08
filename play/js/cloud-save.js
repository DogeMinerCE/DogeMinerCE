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
            
            // Automatically load from cloud when user signs in
            if (user && window.game) {
                this.loadFromCloudSilent();
            }
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
                if (window.notificationManager) {
                    window.notificationManager.showWarning('Firebase is still initializing. Please wait a moment.');
                }
                return;
            }

            if (window.notificationManager) {
                window.notificationManager.showInfo('Signing in with Google...');
            }
            
            const result = await window.firebase.signInWithPopup(
                window.firebase.auth, 
                window.firebase.provider
            );
            
            this.currentUser = result.user;
            if (window.notificationManager) {
                window.notificationManager.showSuccess(`Welcome, ${this.currentUser.displayName}!`);
            }
            
        } catch (error) {
            console.error('Sign in error:', error);
            if (window.notificationManager) {
                window.notificationManager.showError('Failed to sign in. Please try again.');
            }
        }
    }

    async signOutUser() {
        try {
            await window.firebase.signOut(window.firebase.auth);
            this.currentUser = null;
            if (window.notificationManager) {
                window.notificationManager.showInfo('Signed out successfully');
            }
        } catch (error) {
            console.error('Sign out error:', error);
            if (window.notificationManager) {
                window.notificationManager.showError('Failed to sign out');
            }
        }
    }

    async saveToCloud() {
        if (!this.currentUser) {
            if (window.notificationManager) {
                window.notificationManager.showWarning('Please sign in first');
            }
            return;
        }

        try {
            if (window.notificationManager) {
                window.notificationManager.showInfo('Saving to cloud...');
            }
            
            // Get current game state
            const gameData = this.getGameState();
            
            // Save to Firestore
            const userDocRef = window.firebase.doc(window.firebase.db, 'users', this.currentUser.uid);
            await window.firebase.setDoc(userDocRef, {
                gameData: gameData,
                lastSaved: new Date().toISOString(),
                version: '1.0.0'
            }, { merge: true });

            if (window.notificationManager) {
                window.notificationManager.showSuccess('Game saved to cloud successfully!');
            }
            
        } catch (error) {
            console.error('Cloud save error:', error);
            if (window.notificationManager) {
                window.notificationManager.showError('Failed to save to cloud. Please try again.');
            }
        }
    }

    async saveToCloudSilent() {
        if (!this.currentUser) {
            return;
        }

        try {
            // Get current game state
            const gameData = this.getGameState();
            
            // Save to Firestore silently
            const userDocRef = window.firebase.doc(window.firebase.db, 'users', this.currentUser.uid);
            await window.firebase.setDoc(userDocRef, {
                gameData: gameData,
                lastSaved: new Date().toISOString(),
                version: '1.0.0'
            }, { merge: true });

            console.log('Game auto-saved to cloud');
            
        } catch (error) {
            console.error('Silent cloud save error:', error);
        }
    }

    async loadFromCloud() {
        if (!this.currentUser) {
            if (window.notificationManager) {
                window.notificationManager.showWarning('Please sign in first');
            }
            return;
        }

        try {
            if (window.notificationManager) {
                window.notificationManager.showInfo('Loading from cloud...');
            }
            
            // Get data from Firestore
            const userDocRef = window.firebase.doc(window.firebase.db, 'users', this.currentUser.uid);
            const docSnap = await window.firebase.getDoc(userDocRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                if (data.gameData) {
                    this.loadGameState(data.gameData);
                    if (window.notificationManager) {
                        window.notificationManager.showSuccess('Game loaded from cloud successfully!');
                    }
                } else {
                    if (window.notificationManager) {
                        window.notificationManager.showWarning('No save data found in cloud');
                    }
                }
            } else {
                if (window.notificationManager) {
                    window.notificationManager.showWarning('No save data found in cloud');
                }
            }
            
        } catch (error) {
            console.error('Cloud load error:', error);
            if (window.notificationManager) {
                window.notificationManager.showError('Failed to load from cloud. Please try again.');
            }
        }
    }

    async loadFromCloudSilent() {
        if (!this.currentUser) {
            return;
        }

        try {
            // Get data from Firestore
            const userDocRef = window.firebase.doc(window.firebase.db, 'users', this.currentUser.uid);
            const docSnap = await window.firebase.getDoc(userDocRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                if (data.gameData) {
                    this.loadGameState(data.gameData);
                    console.log('Game auto-loaded from cloud');
                }
            }
            
        } catch (error) {
            console.error('Silent cloud load error:', error);
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
    window.cloudSaveManager = cloudSaveManager;
});

