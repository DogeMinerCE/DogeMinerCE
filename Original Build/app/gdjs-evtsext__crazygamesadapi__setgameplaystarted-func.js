
if (typeof gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted = {};


gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted.userFunc0x9ccea0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
window.CrazyGames.SDK.game.gameplayStart();

};
gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted.userFunc0x9ccea0(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CrazyGamesAdApi__SetGameplayStarted.registeredGdjsCallbacks = [];