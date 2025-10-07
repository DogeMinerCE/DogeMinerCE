
if (typeof gdjs.evtsExt__CrazyGamesAdApi__InviteLink !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__InviteLink.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__InviteLink = {};


gdjs.evtsExt__CrazyGamesAdApi__InviteLink.userFunc0x9c0d80 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const roomId = eventsFunctionContext.getArgument("RoomId");
eventsFunctionContext.returnValue = gdjs._crazyGamesExtension.links.get(roomId) || "";
};
gdjs.evtsExt__CrazyGamesAdApi__InviteLink.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__InviteLink.userFunc0x9c0d80(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__InviteLink.func = function(runtimeScene, RoomId, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CrazyGamesAdApi"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CrazyGamesAdApi"),
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
if (argName === "RoomId") return RoomId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__InviteLink.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CrazyGamesAdApi__InviteLink.registeredGdjsCallbacks = [];