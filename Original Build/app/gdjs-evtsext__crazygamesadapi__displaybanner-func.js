
if (typeof gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner = {};


gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner.userFunc0x9e97a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const logger = new gdjs.Logger("CrazyGames SDK");
const bannerName = eventsFunctionContext.getArgument("BannerName");
const positionX = eventsFunctionContext.getArgument("PositionX");
const positionY = eventsFunctionContext.getArgument("PositionY");
const adDimension = eventsFunctionContext.getArgument("Size").split("x");
const size = {
    width: Number(adDimension[0]) || 0,
    height: Number(adDimension[1]) || 0
}

// Create a container for the banner if needed
if (document.getElementById(bannerName) === null) {
    const div = document.createElement('div');
    div.id = bannerName;
    div.setAttribute("style", "pointer-events: none; position:fixed; z-index:1; width: " + size.width + "px; height: " + size.height + "px;left:" + positionX + "px; top:" + positionY + "px;");

    const body = document.getElementsByTagName("body")[0];
    // Insert the new container in first position in the body
    body.insertBefore(div, body.firstChild);
}


// Available size '728x90', '300x250', '320x50', '468x60', '320x100'
// x, y coordinates are from the top left of the screen
window.CrazyGames.SDK.banner.requestBanner({
    id: bannerName,
    width: size.width,
    height: size.height,
}, (error, result) => {
    if (error) {
        logger.error("Error on request banner.", error);
    } else {
        // Result is always undefined when requesting banners
        logger.log("End request banner", result === undefined ? "Requesting banners" : result);
        eventsFunctionContext.task.resolve();
    }
});
};
gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner.userFunc0x9e97a8(runtimeScene, eventsFunctionContext);

}


};gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
{gdjs.evtTools.common.resolveAsyncEventsFunction(eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__CrazyGamesAdApi__IsSDKLoaded.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner.func = function(runtimeScene, BannerName, Size, PositionX, PositionY, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "BannerName") return BannerName;
if (argName === "Size") return Size;
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner.eventsList1(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayBanner.registeredGdjsCallbacks = [];