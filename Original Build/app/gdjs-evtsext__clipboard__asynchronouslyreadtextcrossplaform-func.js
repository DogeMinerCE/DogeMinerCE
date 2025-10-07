
if (typeof gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform !== "undefined") {
  gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform = {};


gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform.userFunc0x9ef7e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const electron = runtimeScene.getGame().getRenderer().getElectron();
const callback = eventsFunctionContext.getArgument("callback");
const { task } = eventsFunctionContext;
const logger = this.logger || (this.logger = new gdjs.Logger("Clipboard extension"));

if (electron !== null && electron.clipboard) {
    callback.setString(electron.clipboard.readText());
    task.resolve();
} else if (
    typeof cordova !== "undefined" &&
    cordova.plugins &&
    cordova.plugins.clipboard
) {
    cordova.plugins.clipboard.paste(
        text => {
            callback.setString(text);
            task.resolve();
        },
        error => {
            logger.error("An error occured while getting clipboard content: ", error);
            task.resolve();
        }
    );
} else if (
    typeof navigator !== "undefined" &&
    navigator.clipboard &&
    navigator.clipboard.readText
) {
    navigator.clipboard.readText()
        .then(text => {
            callback.setString(text);
            task.resolve();
        })
        .catch(error => {
            logger.error("An error occured while getting clipboard content: ", error.message);
            task.resolve();
        });
} else {
    logger.error("Unable to read from the clipboard: no method found for this platform.");
    task.resolve();
}

};
gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform.userFunc0x9ef7e0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform.func = function(runtimeScene, callback, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Clipboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Clipboard"),
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
if (argName === "callback") return callback;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__Clipboard__AsynchronouslyReadTextCrossPlaform.registeredGdjsCallbacks = [];