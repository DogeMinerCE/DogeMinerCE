// DogeMiner: Community Edition - UI Management
class UIManager {
    constructor(game) {
        this.game = game;
        this.activePanel = 'shop-tab'; // Shop tab is active by default
        this.currentShopTab = 'helpers';
        
        this.setupUI();
    }
    
    setupUI() {
        this.setupPanels();
        this.setupShop();
        this.setupStats();
        this.setupLoading();
    }
    
    setupPanels() {
        // Main tab switching functionality
        window.switchMainTab = (tabName) => {
            // Update tab buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Update tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabName + '-tab').classList.add('active');
            
            // Set active panel
            this.activePanel = tabName + '-tab';
            
            // Update shop content if switching to shop
            if (tabName === 'shop') {
                this.updateShopContent();
            }
        };
        
        // Shop sub-tab switching
        window.switchShopTab = (tabName) => {
            this.currentShopTab = tabName;
            
            // Update sub-tab buttons in shop
            document.querySelectorAll('.shop-tabs .sub-tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Update shop content
            this.updateShopContent();
        };
        
        // Achievements sub-tab switching
        window.switchAchievementsTab = (tabName) => {
            // Update sub-tab buttons in achievements
            document.querySelectorAll('.achievements-tabs .sub-tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Update achievements content
            document.querySelectorAll('.achievements-sub-content').forEach(content => {
                content.classList.remove('active');
            });
            
            if (tabName === 'achievements') {
                document.getElementById('achievements-content').classList.add('active');
            } else if (tabName === 'stats') {
                document.getElementById('stats-content').classList.add('active');
            }
        };
        
    }
    
    setupShop() {
        this.updateShopContent();
    }
    
    updateShopContent() {
        const shopContent = document.getElementById('shop-content');
        if (!shopContent) {
            console.error('shop-content element not found!');
            return;
        }
        shopContent.innerHTML = '';
        this.renderHelperShop(shopContent);
    }
    
    renderHelperShop(container) {
        container.innerHTML = ''; // Clear container completely
        
        const helperEntries = Object.entries(this.game.helperTypes);
        
        // Create 6 helper items (2x3 grid)
        for (let i = 0; i < 6; i++) {
            const item = document.createElement('div');
            item.className = 'shop-grid-item';
            
            if (i < helperEntries.length) {
                const [type, helper] = helperEntries[i];
                const owned = this.game.helpers.filter(h => h.type === type).length;
                const cost = Math.floor(helper.baseCost * Math.pow(1.2, owned));
                const canAfford = this.game.dogecoins >= cost;
                
                
                // Calculate button width based on price length
                const priceText = this.game.formatNumber(cost);
                const priceLength = priceText.length;
                let buttonWidth = '45%'; // Even smaller default width
                
                // Scale button width based on price length
                if (priceLength >= 8) {
                    buttonWidth = '70%'; // Very long prices (millions/billions)
                } else if (priceLength >= 6) {
                    buttonWidth = '60%'; // Long prices (hundreds of thousands)
                } else if (priceLength >= 4) {
                    buttonWidth = '50%'; // Medium prices (thousands)
                } else {
                    buttonWidth = '45%'; // Short prices (hundreds)
                }
                
                item.innerHTML = `
                    <div class="shop-item-quantity">#${owned}</div>
                    <div class="shop-item-title">${helper.name}</div>
                    <div class="shop-item-dps">${helper.baseDps} ĐPS</div>
                    <div class="shop-item-sprite">
                        <img src="${helper.icon}" alt="${helper.name}">
                    </div>
                    <div class="shop-item-description">${helper.description}</div>
                    <button class="shop-buy-btn" data-helper-type="${type}" 
                            ${!canAfford ? 'disabled' : ''} style="width: ${buttonWidth};">
                        <img src="assets/general/dogecoin_70x70.png" alt="DogeCoin" class="buy-btn-icon">
                        <span class="buy-btn-price">${priceText}</span>
                    </button>
                `;
            } else {
                // Empty slot
                item.innerHTML = `
                    <div class="shop-item-empty">
                        <div class="empty-text">Coming Soon!</div>
                    </div>
                `;
            }
            
            container.appendChild(item);
        }
        
        // Add event listeners to all buy buttons
        this.setupShopButtonListeners();
    }
    
    setupShopButtonListeners() {
        // Add event listeners to all buy buttons
        const buyButtons = document.querySelectorAll('.shop-buy-btn[data-helper-type]');
        buyButtons.forEach((button) => {
            // Remove any existing listeners to prevent duplicates
            button.removeEventListener('click', this.handleBuyButtonClick);
            // Add new listener
            button.addEventListener('click', this.handleBuyButtonClick.bind(this));
        });
    }
    
    handleBuyButtonClick(event) {
        const button = event.currentTarget;
        const helperType = button.getAttribute('data-helper-type');
        
        if (helperType && window.game) {
            const success = window.game.buyHelper(helperType);
            if (!success) {
                console.log('Failed to buy helper - insufficient funds');
            }
        } else {
            console.error('Helper type or game not found:', helperType, !!window.game);
        }
    }
    
    renderPickaxeShop(container) {
        Object.entries(this.game.pickaxeTypes).forEach(([type, pickaxe]) => {
            const owned = this.game.pickaxes.includes(type);
            const canBuy = !owned && this.game.dogecoins >= pickaxe.cost;
            
            const item = document.createElement('div');
            item.className = 'shop-item';
            
            item.innerHTML = `
                <div class="shop-item-header">
                    <div class="shop-item-title">${pickaxe.name}</div>
                    <div class="shop-item-price">${owned ? 'Owned' : 'D ' + this.game.formatNumber(pickaxe.cost)}</div>
                </div>
                <div class="shop-item-content">
                    <div class="shop-item-icon">
                        <img src="${pickaxe.icon}" alt="${pickaxe.name}">
                    </div>
                    <div class="shop-item-details">
                        <p>${pickaxe.description}</p>
                        <div class="shop-item-stats">Multiplier: ${pickaxe.multiplier}x ${owned ? '| ✓ Owned' : ''}</div>
                    </div>
                </div>
                <div class="shop-item-footer">
                    <button class="buy-btn" onclick="game.buyPickaxe('${type}')" 
                            ${!canBuy ? 'disabled' : ''}>
                        ${owned ? 'Owned' : 'Buy!'}
                    </button>
                </div>
            `;
            
            container.appendChild(item);
        });
    }
    
    setupStats() {
        // Stats are updated in the main game loop
    }
    
    setupLoading() {
        // Loading screen management
        window.hideLoadingScreen = () => {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        };
        
        window.showLoadingScreen = () => {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.display = 'flex';
            loadingScreen.classList.remove('hidden');
        };
        
        window.updateLoadingProgress = (progress) => {
            const progressBar = document.getElementById('loading-progress');
            progressBar.style.width = progress + '%';
        };
    }
    
    updateShop() {
        if (this.activePanel === 'shop-panel') {
            this.updateShopContent();
        }
    }
    
    
    showLevelUpNotification(levelName) {
        const notification = document.createElement('div');
        notification.className = 'level-up-notification';
        notification.innerHTML = `
            <div class="level-up-content">
                <h3>🚀 Level Up!</h3>
                <p>Welcome to ${levelName}!</p>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
            color: white;
            padding: 15px 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
            z-index: 10000;
            text-align: center;
            animation: levelUpSlide 4s ease-in-out forwards;
        `;
        
        // Add animation keyframes if not already added
        if (!document.getElementById('levelup-animation')) {
            const style = document.createElement('style');
            style.id = 'levelup-animation';
            style.textContent = `
                @keyframes levelUpSlide {
                    0% { transform: translateX(-50%) translateY(-100px); opacity: 0; }
                    20% { transform: translateX(-50%) translateY(0); opacity: 1; }
                    80% { transform: translateX(-50%) translateY(0); opacity: 1; }
                    100% { transform: translateX(-50%) translateY(-100px); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }
    
    showAchievement(title, description) {
        const achievement = document.createElement('div');
        achievement.className = 'achievement-notification';
        achievement.innerHTML = `
            <div class="achievement-content">
                <h4>🏆 ${title}</h4>
                <p>${description}</p>
            </div>
        `;
        
        // Style the achievement notification
        achievement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ffd700, #ffed4e);
            color: #000;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
            z-index: 10000;
            text-align: center;
            animation: achievementPop 3s ease-in-out forwards;
        `;
        
        // Add animation keyframes if not already added
        if (!document.getElementById('achievement-animation')) {
            const style = document.createElement('style');
            style.id = 'achievement-animation';
            style.textContent = `
                @keyframes achievementPop {
                    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                    20% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
                    30% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(achievement);
        
        setTimeout(() => {
            achievement.remove();
        }, 3000);
    }
    
    updateBackground(levelName) {
        const rockImage = document.getElementById('main-rock');
        
        if (this.game.levels[levelName]) {
            const level = this.game.levels[levelName];
            rockImage.src = level.rock;
            
            // Add transition effect for rock
            rockImage.style.opacity = '0';
            
            setTimeout(() => {
                rockImage.style.opacity = '1';
            }, 100);
        }
    }
    
    updateCharacter(characterType = 'standard') {
        const characterImage = document.getElementById('main-character');
        characterImage.src = `assets/general/character/${characterType}.png`;
    }
    
    showComboEffect(comboCount) {
        const comboElement = document.createElement('div');
        comboElement.className = 'combo-effect';
        comboElement.textContent = `${comboCount}x COMBO!`;
        
        comboElement.style.cssText = `
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
            color: #ffd700;
            font-size: 48px;
            font-weight: bold;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
            z-index: 10000;
            pointer-events: none;
            animation: comboPop 2s ease-out forwards;
        `;
        
        // Add animation keyframes if not already added
        if (!document.getElementById('combo-animation')) {
            const style = document.createElement('style');
            style.id = 'combo-animation';
            style.textContent = `
                @keyframes comboPop {
                    0% { transform: translateX(-50%) scale(0); opacity: 0; }
                    50% { transform: translateX(-50%) scale(1.2); opacity: 1; }
                    100% { transform: translateX(-50%) scale(1); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(comboElement);
        
        setTimeout(() => {
            comboElement.remove();
        }, 2000);
    }
}

// Global UI manager instance
let uiManager;
