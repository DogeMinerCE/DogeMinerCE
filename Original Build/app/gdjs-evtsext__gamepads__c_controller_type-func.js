
if (typeof gdjs.evtsExt__Gamepads__C_Controller_type !== "undefined") {
  gdjs.evtsExt__Gamepads__C_Controller_type.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__C_Controller_type = {};


gdjs.evtsExt__Gamepads__C_Controller_type.userFunc0xaf2c58 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const controllerType = eventsFunctionContext.getArgument("controller_type").toUpperCase();

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in condition: "Gamepad type", is not valid number, must be between 0 and 4.');
    return;
}
if (controllerType === "") {
    console.error('Parameter type in condition: "Gamepad type", is not a string.');
    return;
}

const gamepad = gamepads[playerId];

//we need keep this condition because when use have not yet plug her controller we can't get the controller in the gamepad variable.
if (gamepad == null) return;


if (controllerType == "XBOX") {
    eventsFunctionContext.returnValue = gdjs._extensionController.isXbox(gamepad);
} else {
    eventsFunctionContext.returnValue = gamepad ? gamepad.id.toUpperCase().indexOf(controllerType) !== -1 : false;
}
};
gdjs.evtsExt__Gamepads__C_Controller_type.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__C_Controller_type.userFunc0xaf2c58(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Gamepads__C_Controller_type.func = function(runtimeScene, player_ID, controller_type, parentEventsFunctionContext) {
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
if (argName === "player_ID") return player_ID;
if (argName === "controller_type") return controller_type;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__C_Controller_type.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Gamepads__C_Controller_type.registeredGdjsCallbacks = [];