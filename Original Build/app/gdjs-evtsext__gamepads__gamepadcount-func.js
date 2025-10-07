
if (typeof gdjs.evtsExt__Gamepads__GamepadCount !== "undefined") {
  gdjs.evtsExt__Gamepads__GamepadCount.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__GamepadCount = {};


gdjs.evtsExt__Gamepads__GamepadCount.userFunc0xae3f98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get the last activated controller
const controllerId = gdjs._extensionController.lastActiveController;

// Check if controller is active
const gamepad = gamepads[controllerId];
if (gamepad == null) {
    eventsFunctionContext.returnValue = 0;
} else {
    // Return active controller id
    eventsFunctionContext.returnValue = controllerId + 1;
}

};
gdjs.evtsExt__Gamepads__GamepadCount.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__GamepadCount.userFunc0xae3f98(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Gamepads__GamepadCount.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Gamepads"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Gamepads"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__GamepadCount.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Gamepads__GamepadCount.registeredGdjsCallbacks = [];