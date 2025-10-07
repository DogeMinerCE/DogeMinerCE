// DogeMiner: Community Edition - Save/Load System
class SaveManager {
    constructor(game) {
        this.game = game;
        this.saveKey = 'dogeminer_ce_save';
        this.backupKey = 'dogeminer_ce_backup';
        this.autoSaveInterval = 30000; // 30 seconds
        this.lastSave = Date.now();
        
        this.setupAutoSave();
        this.setupSaveFunctions();
    }
    
    setupAutoSave() {
        setInterval(() => {
            this.autoSave();
        }, this.autoSaveInterval);
        
        // Save before page unload
        window.addEventListener('beforeunload', () => {
            this.saveGame();
        });
    }
    
    setupSaveFunctions() {
        window.saveGame = () => {
            this.saveGame();
        };
        
        window.loadGame = () => {
            this.loadGame();
        };
        
        window.exportSave = () => {
            this.exportSave();
        };
        
        window.importSave = () => {
            this.importSave();
        };
        
        window.resetGame = () => {
            this.resetGame();
        };
    }
    
    saveGame() {
        try {
            const saveData = this.createSaveData();
            const saveString = JSON.stringify(saveData);
            
            // Save to localStorage
            localStorage.setItem(this.saveKey, saveString);
            
            // Create backup
            localStorage.setItem(this.backupKey, saveString);
            
            this.lastSave = Date.now();
            this.game.showNotification('Game saved successfully!');
            
            console.log('Game saved:', saveData);
            return true;
        } catch (error) {
            console.error('Error saving game:', error);
            this.game.showNotification('Error saving game!');
            return false;
        }
    }
    
    loadGame() {
        try {
            const saveString = localStorage.getItem(this.saveKey);
            if (!saveString) {
                this.game.showNotification('No save data found!');
                return false;
            }
            
            const saveData = JSON.parse(saveString);
            this.applySaveData(saveData);
            
            this.game.showNotification('Game loaded successfully!');
            console.log('Game loaded:', saveData);
            return true;
        } catch (error) {
            console.error('Error loading game:', error);
            
            // Try to load backup
            if (this.loadBackup()) {
                this.game.showNotification('Loaded from backup save!');
                return true;
            }
            
            this.game.showNotification('Error loading game!');
            return false;
        }
    }
    
    loadBackup() {
        try {
            const backupString = localStorage.getItem(this.backupKey);
            if (!backupString) return false;
            
            const saveData = JSON.parse(backupString);
            this.applySaveData(saveData);
            
            console.log('Loaded from backup:', saveData);
            return true;
        } catch (error) {
            console.error('Error loading backup:', error);
            return false;
        }
    }
    
    createSaveData() {
        return {
            version: '1.0.0',
            timestamp: Date.now(),
            
            // Game state
            dogecoins: this.game.dogecoins,
            totalMined: this.game.totalMined,
            totalClicks: this.game.totalClicks,
            dps: this.game.dps,
            highestDps: this.game.highestDps,
            currentLevel: this.game.currentLevel,
            
            // Items
            helpers: this.game.helpers,
            pickaxes: this.game.pickaxes,
            currentPickaxe: this.game.currentPickaxe,
            upgrades: this.game.upgrades || {},
            
            // Statistics
            statistics: {
                totalPlayTime: this.game.totalPlayTime || 0,
                highestDps: this.game.highestDps || 0,
                helpersBought: this.game.helpersBought || 0,
                pickaxesBought: this.game.pickaxesBought || 0,
                achievements: this.game.achievements || [],
                startTime: this.game.startTime || Date.now()
            },
            
            // Settings
            settings: {
                soundEnabled: this.game.soundEnabled !== false,
                musicEnabled: this.game.musicEnabled !== false,
                notificationsEnabled: this.game.notificationsEnabled !== false,
                autoSaveEnabled: this.game.autoSaveEnabled !== false
            }
        };
    }
    
    applySaveData(saveData) {
        // Validate save data version
        if (!this.validateSaveData(saveData)) {
            throw new Error('Invalid save data');
        }
        
        // Apply game state
        this.game.dogecoins = saveData.dogecoins || 0;
        this.game.totalMined = saveData.totalMined || 0;
        this.game.totalClicks = saveData.totalClicks || 0;
        this.game.dps = saveData.dps || 0;
        this.game.highestDps = saveData.highestDps || 0;
        this.game.currentLevel = saveData.currentLevel || 'earth';
        
        // Apply items
        this.game.helpers = saveData.helpers || [];
        this.game.pickaxes = saveData.pickaxes || ['standard'];
        this.game.currentPickaxe = saveData.currentPickaxe || 'standard';
        this.game.upgrades = saveData.upgrades || {};
        
        // Apply statistics
        this.game.totalPlayTime = saveData.statistics?.totalPlayTime || 0;
        this.game.highestDps = saveData.statistics?.highestDps || 0;
        this.game.helpersBought = saveData.statistics?.helpersBought || 0;
        this.game.pickaxesBought = saveData.statistics?.pickaxesBought || 0;
        this.game.achievements = saveData.statistics?.achievements || [];
        this.game.startTime = saveData.statistics?.startTime || Date.now();
        
        // Apply settings
        this.game.soundEnabled = saveData.settings?.soundEnabled !== false;
        this.game.musicEnabled = saveData.settings?.musicEnabled !== false;
        this.game.notificationsEnabled = saveData.settings?.notificationsEnabled !== false;
        this.game.autoSaveEnabled = saveData.settings?.autoSaveEnabled !== false;
        
        // Update game state
        this.game.updateDPS();
        this.game.updateUI();
        
        // Update background if level changed
        if (uiManager) {
            uiManager.updateBackground(this.game.currentLevel);
        }
    }
    
    validateSaveData(saveData) {
        if (!saveData || typeof saveData !== 'object') {
            return false;
        }
        
        // Check required fields
        const requiredFields = ['version', 'timestamp', 'dogecoins'];
        for (const field of requiredFields) {
            if (!(field in saveData)) {
                return false;
            }
        }
        
        // Check data types
        if (typeof saveData.dogecoins !== 'number' || saveData.dogecoins < 0) {
            return false;
        }
        
        if (typeof saveData.totalMined !== 'number' || saveData.totalMined < 0) {
            return false;
        }
        
        if (typeof saveData.totalClicks !== 'number' || saveData.totalClicks < 0) {
            return false;
        }
        
        return true;
    }
    
    autoSave() {
        if (this.game.autoSaveEnabled !== false) {
            this.saveGame();
        }
    }
    
    exportSave() {
        try {
            const saveData = this.createSaveData();
            const saveString = JSON.stringify(saveData, null, 2);
            
            // Create download link
            const blob = new Blob([saveString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `dogeminer_ce_save_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            URL.revokeObjectURL(url);
            
            this.game.showNotification('Save exported successfully!');
            return true;
        } catch (error) {
            console.error('Error exporting save:', error);
            this.game.showNotification('Error exporting save!');
            return false;
        }
    }
    
    importSave() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const saveData = JSON.parse(e.target.result);
                    
                    if (this.validateSaveData(saveData)) {
                        if (confirm('This will overwrite your current save. Continue?')) {
                            this.applySaveData(saveData);
                            this.saveGame();
                            this.game.showNotification('Save imported successfully!');
                        }
                    } else {
                        this.game.showNotification('Invalid save file!');
                    }
                } catch (error) {
                    console.error('Error importing save:', error);
                    this.game.showNotification('Error importing save!');
                }
            };
            
            reader.readAsText(file);
        };
        
        input.click();
    }
    
    resetGame() {
        if (confirm('Are you sure you want to reset your game? This cannot be undone!')) {
            if (confirm('This will permanently delete all your progress. Are you absolutely sure?')) {
                // Clear all possible save data
                localStorage.removeItem(this.saveKey);
                localStorage.removeItem(this.backupKey);
                localStorage.removeItem('dogeminer_save'); // Remove old save key
                
                // Clear any other dogeminer-related keys
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key && key.toLowerCase().includes('dogeminer')) {
                        localStorage.removeItem(key);
                    }
                }
                
                // Reset game state directly
                this.game.dogecoins = 0;
                this.game.totalMined = 0;
                this.game.totalClicks = 0;
                this.game.dps = 0;
                this.game.helpers = [];
                this.game.upgrades = [];
                this.game.pickaxes = [];
                this.game.currentPickaxe = 'standard';
                this.game.currentLevel = 'earth';
                
                // Update UI immediately
                this.game.updateUI();
                this.game.updateDPS();
                
                // Show notification
                this.game.showNotification('Game reset successfully!');
                
                // Reload after a short delay to ensure UI updates
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }
        }
    }
    
    getSaveInfo() {
        const saveString = localStorage.getItem(this.saveKey);
        if (!saveString) return null;
        
        try {
            const saveData = JSON.parse(saveString);
            return {
                version: saveData.version,
                timestamp: saveData.timestamp,
                dogecoins: saveData.dogecoins,
                totalMined: saveData.totalMined,
                totalClicks: saveData.totalClicks,
                helpers: saveData.helpers?.length || 0,
                pickaxes: saveData.pickaxes?.length || 0
            };
        } catch (error) {
            console.error('Error reading save info:', error);
            return null;
        }
    }
    
    // Cloud save functionality (placeholder for future implementation)
    async saveToCloud() {
        // This would integrate with a cloud service
        console.log('Cloud save not implemented yet');
        return false;
    }
    
    async loadFromCloud() {
        // This would integrate with a cloud service
        console.log('Cloud load not implemented yet');
        return false;
    }
    
    // Save validation and repair
    repairSave() {
        try {
            const saveString = localStorage.getItem(this.saveKey);
            if (!saveString) return false;
            
            const saveData = JSON.parse(saveString);
            
            // Repair common issues
            if (!saveData.helpers) saveData.helpers = [];
            if (!saveData.pickaxes) saveData.pickaxes = ['standard'];
            if (!saveData.upgrades) saveData.upgrades = {};
            if (!saveData.statistics) saveData.statistics = {};
            if (!saveData.settings) saveData.settings = {};
            
            // Ensure minimum values
            saveData.dogecoins = Math.max(0, saveData.dogecoins || 0);
            saveData.totalMined = Math.max(0, saveData.totalMined || 0);
            saveData.totalClicks = Math.max(0, saveData.totalClicks || 0);
            
            // Save repaired data
            localStorage.setItem(this.saveKey, JSON.stringify(saveData));
            
            this.game.showNotification('Save data repaired!');
            return true;
        } catch (error) {
            console.error('Error repairing save:', error);
            return false;
        }
    }
}

// Global save manager instance
let saveManager;
