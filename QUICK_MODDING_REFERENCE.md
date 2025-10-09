# DogeMiner CE - Quick Modding Reference

## 🚀 Quick Start

### Adding a New Helper
```javascript
// In play/js/game.js, add to helperTypes object:
newHelper: {
    name: 'Your Helper Name',
    baseCost: 100,           // Initial cost
    baseDps: 10,             // Coins per second
    icon: 'assets/helpers/your-helper/icon.png',
    description: 'Helper description'
}
```

### Adding a New Pickaxe
```javascript
// In play/js/game.js, add to pickaxeTypes object:
newPickaxe: {
    name: 'Your Pickaxe Name',
    clickPower: 5,           // Click multiplier
    icon: 'assets/items/pickaxes/your-pickaxe.png',
    description: 'Pickaxe description'
}
```

### Adding a New Background
```javascript
// In play/js/game.js, add to backgrounds array:
this.backgrounds = [
    'backgrounds/bg1.jpg',
    'backgrounds/your-new-bg.jpg',  // Add here
    // ... other backgrounds
];
```

## 🎨 UI Modifications

### Adding a New Tab
1. **HTML** (in `play/index.html`):
```html
<button class="tab-btn" onclick="switchMainTab('yourTab')">
    <span class="tab-text">YOUR TAB</span>
</button>
```

2. **Content** (in `play/index.html`):
```html
<div id="your-tab" class="tab-content">
    <div id="your-content">
        <!-- Your tab content here -->
    </div>
</div>
```

3. **JavaScript** (in `play/js/ui.js`):
```javascript
// Add to switchMainTab function
case 'yourTab':
    // Your tab logic here
    break;
```

### Custom Notifications
```javascript
// Show different notification types
notificationManager.showSuccess('Success message!');
notificationManager.showError('Error message!');
notificationManager.showWarning('Warning message!');
notificationManager.showInfo('Info message!');
notificationManager.showCoin('+100 Coins!');
```

## 💾 Save System

### Adding New Save Data
```javascript
// In play/js/save.js, add to createSaveData():
yourNewData: this.game.yourNewProperty,

// In applySaveData():
this.game.yourNewProperty = saveData.yourNewData || defaultValue;
```

### Custom Achievement
```javascript
// In play/js/game.js
this.achievements = {
    yourAchievement: {
        name: 'Achievement Name',
        description: 'Do something awesome',
        condition: () => this.yourCondition >= 100,
        unlocked: false,
        reward: 1000
    }
};
```

## 🎯 Game Mechanics

### Custom Click Effects
```javascript
// In play/js/game.js, modify handleRockClick():
handleRockClick(event = null) {
    // Your custom logic here
    this.yourCustomMethod();
    
    // Call original logic
    this.totalClicks++;
    // ... rest of original method
}
```

### Custom Animations
```javascript
// Add to game.js
yourCustomAnimation() {
    const element = document.getElementById('your-element');
    element.style.animation = 'yourAnimation 1s ease-in-out';
}
```

```css
/* Add to styles.css */
@keyframes yourAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}
```

## 🔧 Configuration

### Game Settings
```javascript
// In play/js/game.js constructor
this.yourSetting = true;        // Boolean setting
this.yourValue = 100;           // Numeric value
this.yourArray = [];            // Array data
```

### UI Styling
```css
/* Add to play/styles.css */
.your-custom-class {
    background: #ffd700;
    border: 2px solid #ff6b35;
    border-radius: 10px;
    padding: 10px;
}
```

## 📁 File Locations

| What | Where |
|------|-------|
| Game Logic | `play/js/game.js` |
| UI Management | `play/js/ui.js` |
| Shop System | `play/js/shop.js` |
| Save System | `play/js/save.js` |
| Cloud Saves | `play/js/cloud-save.js` |
| Notifications | `play/js/notifications.js` |
| Main HTML | `play/index.html` |
| Main CSS | `play/styles.css` |
| Helper Sprites | `play/assets/helpers/` |
| Pickaxe Sprites | `play/assets/items/pickaxes/` |
| Backgrounds | `play/assets/backgrounds/` |
| Character Sprites | `play/assets/general/character/` |

## 🐛 Common Issues

### Game Not Loading
- Check browser console for errors
- Verify all file paths are correct
- Ensure proper HTML structure

### Assets Not Showing
- Check file paths in code
- Verify files exist in correct directories
- Ensure proper file formats (PNG for sprites, JPG for backgrounds)

### Cloud Saves Not Working
- Verify Firebase configuration
- Check if user is signed in
- Look for console errors

### Performance Issues
- Optimize image file sizes
- Use CSS transforms for animations
- Avoid frequent DOM updates

## 🎮 Testing Your Mods

1. **Local Testing**: Open `play/index.html` in browser
2. **Console Debugging**: Use F12 to check for errors
3. **Cross-Browser**: Test in Chrome, Firefox, Safari
4. **Mobile Testing**: Check responsive design
5. **Save Testing**: Verify saves work correctly

## 📝 Best Practices

- **Keep backups** of original files
- **Test incrementally** - make small changes and test
- **Use version control** (Git) for your modifications
- **Document your changes** for future reference
- **Follow existing code style** and patterns
- **Handle errors gracefully** with try-catch blocks

## 🔗 Useful Resources

- **Firebase Docs**: https://firebase.google.com/docs
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
- **JavaScript ES6**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **HTML5 Canvas**: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

---

*Happy Modding! 🐕💰*
