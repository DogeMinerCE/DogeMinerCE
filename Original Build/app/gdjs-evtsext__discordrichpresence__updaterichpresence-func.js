
if (typeof gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence !== "undefined") {
  gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence = {};


gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.userFunc0x9c1ea0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.evtTools.discordRP.client) return;

const payload = {
    state: undefined,
    details: undefined,
    startTimestamp: undefined,
    endTimestamp: undefined,
    largeImageKey: undefined,
    largeImageText: undefined,
    smallImageKey: undefined,
    smallImageText: undefined,
};

for (const i in payload) {
    payload[i] = eventsFunctionContext.getArgument(i);
    if (payload[i] === 0 || payload[i] === "") delete payload[i];
};

gdjs.evtTools.discordRP.client.updatePresence(payload);

};
gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.userFunc0x9c1ea0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func = function(runtimeScene, state, details, startTimestamp, endTimestamp, largeImageKey, largeImageText, smallImageKey, smallImageText, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DiscordRichPresence"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DiscordRichPresence"),
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
if (argName === "state") return state;
if (argName === "details") return details;
if (argName === "startTimestamp") return startTimestamp;
if (argName === "endTimestamp") return endTimestamp;
if (argName === "largeImageKey") return largeImageKey;
if (argName === "largeImageText") return largeImageText;
if (argName === "smallImageKey") return smallImageKey;
if (argName === "smallImageText") return smallImageText;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.registeredGdjsCallbacks = [];