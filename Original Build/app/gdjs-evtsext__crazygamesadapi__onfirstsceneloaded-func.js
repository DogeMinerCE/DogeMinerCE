
if (typeof gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded = {};


gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.userFunc0x9c1e18 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._crazyGamesExtension = {
    isSdkReady: false,
    isPlayingVideoAd: false,
    hasVideoAdJustFinishedPlaying: false,
    isAdBlockerDetected: false,
    links: new Map(),
};
};
gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.userFunc0x9c1e18(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CrazyGamesAdApi__LoadSDK.func(runtimeScene, eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__CrazyGamesAdApi__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
