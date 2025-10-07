
if (typeof gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord !== "undefined") {
  gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord = {};


gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.userFunc0x9c1398 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const remote = runtimeScene.getGame().getRenderer().getElectronRemote
    ? runtimeScene.getGame().getRenderer().getElectronRemote()
    : runtimeScene.getGame().getRenderer().getElectron() && runtimeScene.getGame().getRenderer().getElectron().remote;

if (!remote) return;
const DRP = remote.require("discord-rich-presence");

if (gdjs.evtTools.discordRP.client) gdjs.evtTools.discordRP.client.disconnect();
gdjs.evtTools.discordRP.client = new DRP(eventsFunctionContext.getArgument("clientId"))
    .on("error", (e) => gdjs.Logger.getLoggerOutput().log("Discord Rich Presence", e));

window.addEventListener("beforeunload", () => gdjs.evtTools.discordRP.client.disconnect());

};
gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.userFunc0x9c1398(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func = function(runtimeScene, clientId, parentEventsFunctionContext) {
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
if (argName === "clientId") return clientId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.registeredGdjsCallbacks = [];