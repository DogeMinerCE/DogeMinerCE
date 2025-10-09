// DogeMiner: Community Edition - Shop Management
class ShopManager {
    constructor(game) {
        this.game = game;
        this.shopData = this.initializeShopData();
    }
    
    initializeShopData() {
        return {
            helpers: {
                miningShibe: {
                    name: 'Mining Shibe',
                    baseCost: 20,
                    baseDps: 0.2,
                    icon: 'assets/helpers/shibes/shibes-idle-0.png',
                    description: 'Very kind shibe to mine much dogecoin.',
                    category: 'basic'
                },
                dogeKennels: {
                    name: 'Doge Kennels',
                    baseCost: 400,
                    baseDps: 2,
                    icon: 'assets/helpers/kennels/kennels-idle-0.png',
                    description: 'Wow very efficiency, entire kennels to mine dogecoin.',
                    category: 'basic'
                },
                streamerKittens: {
                    name: 'Streamer Kittens',
                    baseCost: 1800,
                    baseDps: 4,
                    icon: 'assets/helpers/kittens/kittens-idle-0.png',
                    description: 'Kittens to stream cute videos to the internet for dogecoin.',
                    category: 'basic'
                },
                spaceRocket: {
                    name: 'Space Rocket',
                    baseCost: 50000,
                    baseDps: 9,
                    icon: 'assets/helpers/rockets/rockets-idle-0.png',
                    description: 'A rocket to fly to the moon.',
                    category: 'advanced'
                },
                timeMachineRig: {
                    name: 'Time Machine Mining Rig',
                    baseCost: 9999999,
                    baseDps: 66,
                    icon: 'assets/helpers/rigs/rigs-idle-0.png',
                    description: 'Mines into the future where infinite dogecoins exist.',
                    category: 'advanced'
                },
                infiniteDogebility: {
                    name: 'Infinite Dogebility Drive',
                    baseCost: 9999999999,
                    baseDps: 999,
                    icon: 'assets/helpers/dogebility/dogebility-idle-0.png',
                    description: 'A ship that instantaneously travels to any place in the Universe. Result? Many Dogecoins.',
                    category: 'advanced'
                },
                jupiterbase: {
                    name: 'Jupiter Base',
                    baseCost: 25000,
                    baseDps: 2500,
                    icon: 'assets/helpers/helpers/jupiterbase/jupiterbase-idle-0.png',
                    description: 'Gas giant mining operations',
                    category: 'advanced'
                },
                titanbase: {
                    name: 'Titan Base',
                    baseCost: 100000,
                    baseDps: 10000,
                    icon: 'assets/helpers/helpers/titanbase/titanbase-idle-0.png',
                    description: 'Saturn moon mining facility',
                    category: 'advanced'
                }
            },
            
            pickaxes: {
                standard: {
                    name: 'Standard Pickaxe',
                    cost: 0,
                    multiplier: 1,
                    icon: 'assets/items/items/pickaxes/standard.png',
                    description: 'Basic mining tool',
                    unlocked: true
                },
                stronger: {
                    name: 'Stronger Pickaxe',
                    cost: 100,
                    multiplier: 2,
                    icon: 'assets/items/items/pickaxes/stronger.png',
                    description: 'More powerful mining',
                    unlocked: true
                },
                golden: {
                    name: 'Golden Pickaxe',
                    cost: 500,
                    multiplier: 5,
                    icon: 'assets/items/items/pickaxes/golden.png',
                    description: 'Luxury mining equipment',
                    unlocked: true
                },
                rocketaxe: {
                    name: 'Rocket Pickaxe',
                    cost: 2000,
                    multiplier: 10,
                    icon: 'assets/items/items/pickaxes/rocketaxe.png',
                    description: 'Space-age mining technology',
                    unlocked: true
                },
                diamond: {
                    name: 'Diamond Pickaxe',
                    cost: 10000,
                    multiplier: 25,
                    icon: 'assets/items/items/pickaxes/diasword.png',
                    description: 'Crystal-clear mining power',
                    unlocked: true
                },
                nuke: {
                    name: 'Nuclear Pickaxe',
                    cost: 50000,
                    multiplier: 100,
                    icon: 'assets/items/items/pickaxes/nuke.png',
                    description: 'Explosive mining capability',
                    unlocked: true
                }
            },
            
            upgrades: {
                clickPower: {
                    name: 'Click Power',
                    baseCost: 50,
                    effect: 'Increases click power by 1',
                    icon: 'assets/general/icons/click.png',
                    description: 'Make each click more powerful',
                    maxLevel: 100
                },
                autoClicker: {
                    name: 'Auto Clicker',
                    baseCost: 1000,
                    effect: 'Automatically clicks every second',
                    icon: 'assets/general/icons/auto.png',
                    description: 'Automate your clicking',
                    maxLevel: 10
                },
                criticalChance: {
                    name: 'Critical Hit',
                    baseCost: 5000,
                    effect: '10% chance for 2x damage',
                    icon: 'assets/general/icons/critical.png',
                    description: 'Chance for critical hits',
                    maxLevel: 20
                },
                helperEfficiency: {
                    name: 'Helper Efficiency',
                    baseCost: 10000,
                    effect: 'Increases all helper DPS by 10%',
                    icon: 'assets/general/icons/efficiency.png',
                    description: 'Make helpers more efficient',
                    maxLevel: 50
                }
            }
        };
    }
    
    getHelperCost(helperType, owned) {
        const helper = this.shopData.helpers[helperType];
        if (!helper) return Infinity;
        
        return Math.floor(helper.baseCost * Math.pow(1.15, owned));
    }
    
    canAffordHelper(helperType) {
        const owned = this.game.helpers.filter(h => h.type === helperType).length;
        const cost = this.getHelperCost(helperType, owned);
        return this.game.dogecoins >= cost;
    }
    
    canAffordPickaxe(pickaxeType) {
        const pickaxe = this.shopData.pickaxes[pickaxeType];
        if (!pickaxe) return false;
        
        return this.game.dogecoins >= pickaxe.cost && !this.game.pickaxes.includes(pickaxeType);
    }
    
    canAffordUpgrade(upgradeType) {
        const upgrade = this.shopData.upgrades[upgradeType];
        if (!upgrade) return false;
        
        const level = this.game.upgrades[upgradeType] || 0;
        if (level >= upgrade.maxLevel) return false;
        
        const cost = Math.floor(upgrade.baseCost * Math.pow(1.5, level));
        return this.game.dogecoins >= cost;
    }
    
    buyHelper(helperType) {
        if (!this.canAffordHelper(helperType)) {
            this.game.showNotification('Not enough Dogecoins!');
            return false;
        }
        
        const owned = this.game.helpers.filter(h => h.type === helperType).length;
        const cost = this.getHelperCost(helperType, owned);
        const helper = this.shopData.helpers[helperType];
        
        this.game.dogecoins -= cost;
        this.game.helpers.push({
            type: helperType,
            dps: helper.baseDps,
            owned: owned + 1
        });
        
        this.game.updateDPS();
        this.game.showNotification(`Bought ${helper.name} for ${this.game.formatNumber(cost)} Dogecoins!`);
        this.game.playSound('check.wav');
        
        return true;
    }
    
    buyPickaxe(pickaxeType) {
        if (!this.canAffordPickaxe(pickaxeType)) {
            this.game.showNotification('Cannot buy this pickaxe!');
            return false;
        }
        
        const pickaxe = this.shopData.pickaxes[pickaxeType];
        
        this.game.dogecoins -= pickaxe.cost;
        this.game.pickaxes.push(pickaxeType);
        this.game.currentPickaxe = pickaxeType;
        
        this.game.showNotification(`Bought ${pickaxe.name}!`);
        this.game.playSound('check.wav');
        
        return true;
    }
    
    buyUpgrade(upgradeType) {
        if (!this.canAffordUpgrade(upgradeType)) {
            this.game.showNotification('Cannot buy this upgrade!');
            return false;
        }
        
        const upgrade = this.shopData.upgrades[upgradeType];
        const level = this.game.upgrades[upgradeType] || 0;
        const cost = Math.floor(upgrade.baseCost * Math.pow(1.5, level));
        
        this.game.dogecoins -= cost;
        this.game.upgrades[upgradeType] = level + 1;
        
        this.game.showNotification(`Bought ${upgrade.name} Level ${level + 1}!`);
        this.game.playSound('check.wav');
        
        return true;
    }
    
    getShopItems(category) {
        return this.shopData[category] || {};
    }
    
    getUnlockedItems(category) {
        const items = this.getShopItems(category);
        const unlocked = {};
        
        Object.entries(items).forEach(([key, item]) => {
            if (this.isItemUnlocked(key, category)) {
                unlocked[key] = item;
            }
        });
        
        return unlocked;
    }
    
    isItemUnlocked(itemKey, category) {
        switch (category) {
            case 'helpers':
                // All helpers are unlocked by default
                return true;
                
            case 'pickaxes':
                const pickaxe = this.shopData.pickaxes[itemKey];
                return pickaxe && pickaxe.unlocked;
                
            case 'upgrades':
                // Unlock upgrades based on progress
                return this.isUpgradeUnlocked(itemKey);
                
            default:
                return false;
        }
    }
    
    isUpgradeUnlocked(upgradeType) {
        // Unlock upgrades based on game progress
        switch (upgradeType) {
            case 'clickPower':
                return this.game.totalMined >= 100;
            case 'autoClicker':
                return this.game.totalMined >= 1000;
            case 'criticalChance':
                return this.game.totalMined >= 5000;
            case 'helperEfficiency':
                return this.game.helpers.length >= 3;
            default:
                return false;
        }
    }
    
    updateShopDisplay() {
        // This will be called by the UI manager to refresh shop displays
        if (uiManager && uiManager.activePanel === 'shop-panel') {
            uiManager.updateShopContent();
        }
    }
    
    getHelperStats(helperType) {
        const helper = this.shopData.helpers[helperType];
        const owned = this.game.helpers.filter(h => h.type === helperType).length;
        const totalDps = helper.baseDps * owned;
        
        return {
            owned,
            totalDps,
            nextCost: this.getHelperCost(helperType, owned)
        };
    }
    
    getUpgradeStats(upgradeType) {
        const upgrade = this.shopData.upgrades[upgradeType];
        const level = this.game.upgrades[upgradeType] || 0;
        const nextCost = Math.floor(upgrade.baseCost * Math.pow(1.5, level));
        
        return {
            level,
            nextCost,
            maxLevel: upgrade.maxLevel,
            isMaxLevel: level >= upgrade.maxLevel
        };
    }
    
    // Special offers and limited-time items
    getSpecialOffers() {
        const offers = [];
        
        // Example: Double DPS weekend
        if (this.isWeekend()) {
            offers.push({
                type: 'doubleDps',
                name: 'Weekend Boost',
                description: 'All helpers produce 2x DPS!',
                icon: 'assets/general/icons/weekend.png',
                active: true
            });
        }
        
        return offers;
    }
    
    isWeekend() {
        const day = new Date().getDay();
        return day === 0 || day === 6; // Sunday or Saturday
    }
    
    applySpecialOffers() {
        const offers = this.getSpecialOffers();
        let multiplier = 1;
        
        offers.forEach(offer => {
            if (offer.active) {
                switch (offer.type) {
                    case 'doubleDps':
                        multiplier *= 2;
                        break;
                }
            }
        });
        
        return multiplier;
    }
}

// Global shop manager instance
let shopManager;
