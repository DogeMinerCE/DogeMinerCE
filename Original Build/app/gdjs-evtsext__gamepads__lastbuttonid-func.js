
if (typeof gdjs.evtsExt__Gamepads__LastButtonID !== "undefined") {
  gdjs.evtsExt__Gamepads__LastButtonID.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__LastButtonID = {};


gdjs.evtsExt__Gamepads__LastButtonID.userFunc0xae3f98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//Get function parameter
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;

//Player id is not valid
if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in expression: "Last pressed button (id)", is not valid number, must be between 0 and 4.');
    return;
}

//Return the last button used by the player
eventsFunctionContext.returnValue = gdjs._extensionController.players[playerId].lastButtonUsed;
};
gdjs.evtsExt__Gamepads__LastButtonID.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__LastButtonID.userFunc0xae3f98(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Gamepads__LastButtonID.func = function(runtimeScene, player_ID, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__LastButtonID.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Gamepads__LastButtonID.registeredGdjsCallbacks = [];