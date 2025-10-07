
if (typeof gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd = {};


gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.userFunc0x9d5560 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const logger = new gdjs.Logger("CrazyGames SDK");

const adType = eventsFunctionContext.getArgument("AdType");

const volume = runtimeScene.getSoundManager().getGlobalVolume();
window.CrazyGames.SDK.ad.requestAd(adType, {
    adStarted: () => {
        gdjs._crazyGamesExtension.isPlayingVideoAd = true;
        runtimeScene.getSoundManager().setGlobalVolume(0);
    },
    adFinished: () => {
        gdjs._crazyGamesExtension.hasVideoAdJustFinishedPlaying = true;
        gdjs._crazyGamesExtension.isPlayingVideoAd = false;
        if (runtimeScene.getSoundManager().getGlobalVolume() === 0) {
            runtimeScene.getSoundManager().setGlobalVolume(volume);
        }
    },
    adError: (error, errorData) => {
        gdjs._crazyGamesExtension.isPlayingVideoAd = false;
        gdjs._crazyGamesExtension.hasVideoAdJustFinishedPlaying = true;
        if (runtimeScene.getSoundManager().getGlobalVolume() === 0) {
            runtimeScene.getSoundManager().setGlobalVolume(volume);
        }
        logger.error(`Error ${adType} ad (callback): `, error, errorData);
    },
});
};
gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.userFunc0x9d5560(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.func = function(runtimeScene, AdType, parentEventsFunctionContext) {
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
if (argName === "AdType") return AdType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.registeredGdjsCallbacks = [];