gdjs.LeaderboardsCode = {};
gdjs.LeaderboardsCode.localVariables = [];
gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects1= [];
gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects2= [];
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_95952Objects1= [];
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_95952Objects2= [];
gdjs.LeaderboardsCode.GDSubmit_9595a_9595ScoreObjects1= [];
gdjs.LeaderboardsCode.GDSubmit_9595a_9595ScoreObjects2= [];
gdjs.LeaderboardsCode.GDDogeCoin_9595LeaderBoardObjects1= [];
gdjs.LeaderboardsCode.GDDogeCoin_9595LeaderBoardObjects2= [];
gdjs.LeaderboardsCode.GDNameInputObjects1= [];
gdjs.LeaderboardsCode.GDNameInputObjects2= [];
gdjs.LeaderboardsCode.GDViewObjects1= [];
gdjs.LeaderboardsCode.GDViewObjects2= [];
gdjs.LeaderboardsCode.GDINFOObjects1= [];
gdjs.LeaderboardsCode.GDINFOObjects2= [];
gdjs.LeaderboardsCode.GDfuture_9595infoObjects1= [];
gdjs.LeaderboardsCode.GDfuture_9595infoObjects2= [];
gdjs.LeaderboardsCode.GDDogeCoin_9595LogoObjects1= [];
gdjs.LeaderboardsCode.GDDogeCoin_9595LogoObjects2= [];
gdjs.LeaderboardsCode.GDSubmitObjects1= [];
gdjs.LeaderboardsCode.GDSubmitObjects2= [];
gdjs.LeaderboardsCode.GDCurrent_9595DogeCoinObjects1= [];
gdjs.LeaderboardsCode.GDCurrent_9595DogeCoinObjects2= [];
gdjs.LeaderboardsCode.GDDogeCoin_9595AmountObjects1= [];
gdjs.LeaderboardsCode.GDDogeCoin_9595AmountObjects2= [];
gdjs.LeaderboardsCode.GDMusic_9595ToggleObjects1= [];
gdjs.LeaderboardsCode.GDMusic_9595ToggleObjects2= [];
gdjs.LeaderboardsCode.GDToggle_9595Music_9595TextObjects1= [];
gdjs.LeaderboardsCode.GDToggle_9595Music_9595TextObjects2= [];
gdjs.LeaderboardsCode.GDToggle_9595Buy_9595Sounds_9595TextObjects1= [];
gdjs.LeaderboardsCode.GDToggle_9595Buy_9595Sounds_9595TextObjects2= [];
gdjs.LeaderboardsCode.GDEnable_9595Rock_9595Hitting_9595TextObjects1= [];
gdjs.LeaderboardsCode.GDEnable_9595Rock_9595Hitting_9595TextObjects2= [];
gdjs.LeaderboardsCode.GDSettings_9595TextObjects1= [];
gdjs.LeaderboardsCode.GDSettings_9595TextObjects2= [];
gdjs.LeaderboardsCode.GDVolume_9595TextObjects1= [];
gdjs.LeaderboardsCode.GDVolume_9595TextObjects2= [];
gdjs.LeaderboardsCode.GDSettings_9595ButtonObjects1= [];
gdjs.LeaderboardsCode.GDSettings_9595ButtonObjects2= [];
gdjs.LeaderboardsCode.GDGo_9595Back_9595ButtonObjects1= [];
gdjs.LeaderboardsCode.GDGo_9595Back_9595ButtonObjects2= [];
gdjs.LeaderboardsCode.GDHit_9595Sound_9595ToggleObjects1= [];
gdjs.LeaderboardsCode.GDHit_9595Sound_9595ToggleObjects2= [];
gdjs.LeaderboardsCode.GDBuy_9595Sound_9595ToggleObjects1= [];
gdjs.LeaderboardsCode.GDBuy_9595Sound_9595ToggleObjects2= [];
gdjs.LeaderboardsCode.GDSquareWhiteSliderObjects1= [];
gdjs.LeaderboardsCode.GDSquareWhiteSliderObjects2= [];
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_9595Objects1= [];
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_9595Objects2= [];
gdjs.LeaderboardsCode.GDEarth_9595UIObjects1= [];
gdjs.LeaderboardsCode.GDEarth_9595UIObjects2= [];
gdjs.LeaderboardsCode.GDSettings_9595Button2Objects1= [];
gdjs.LeaderboardsCode.GDSettings_9595Button2Objects2= [];
gdjs.LeaderboardsCode.GDLeaderBoards_9595ButtonObjects1= [];
gdjs.LeaderboardsCode.GDLeaderBoards_9595ButtonObjects2= [];
gdjs.LeaderboardsCode.GDLeaderboards_9595Button2Objects1= [];
gdjs.LeaderboardsCode.GDLeaderboards_9595Button2Objects2= [];


gdjs.LeaderboardsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.LeaderboardsCode.GDViewObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDViewObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDViewObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardsCode.GDViewObjects1[k] = gdjs.LeaderboardsCode.GDViewObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDViewObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "6dc993e0-0278-4533-b429-e0ff649f38f1", true);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DogeCoin_Amount"), gdjs.LeaderboardsCode.GDDogeCoin_9595AmountObjects1);
{for(var i = 0, len = gdjs.LeaderboardsCode.GDDogeCoin_9595AmountObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDDogeCoin_9595AmountObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Go_Back_Button2"), gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects1[k] = gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Earth", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.LeaderboardsCode.GDSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDSubmitObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDSubmitObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardsCode.GDSubmitObjects1[k] = gdjs.LeaderboardsCode.GDSubmitObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDSubmitObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameInput"), gdjs.LeaderboardsCode.GDNameInputObjects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "6dc993e0-0278-4533-b429-e0ff649f38f1", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), (( gdjs.LeaderboardsCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.LeaderboardsCode.GDNameInputObjects1[0].getText()));
}
}

}


};

gdjs.LeaderboardsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects1.length = 0;
gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects2.length = 0;
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_95952Objects1.length = 0;
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_95952Objects2.length = 0;
gdjs.LeaderboardsCode.GDSubmit_9595a_9595ScoreObjects1.length = 0;
gdjs.LeaderboardsCode.GDSubmit_9595a_9595ScoreObjects2.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595LeaderBoardObjects1.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595LeaderBoardObjects2.length = 0;
gdjs.LeaderboardsCode.GDNameInputObjects1.length = 0;
gdjs.LeaderboardsCode.GDNameInputObjects2.length = 0;
gdjs.LeaderboardsCode.GDViewObjects1.length = 0;
gdjs.LeaderboardsCode.GDViewObjects2.length = 0;
gdjs.LeaderboardsCode.GDINFOObjects1.length = 0;
gdjs.LeaderboardsCode.GDINFOObjects2.length = 0;
gdjs.LeaderboardsCode.GDfuture_9595infoObjects1.length = 0;
gdjs.LeaderboardsCode.GDfuture_9595infoObjects2.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595LogoObjects1.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595LogoObjects2.length = 0;
gdjs.LeaderboardsCode.GDSubmitObjects1.length = 0;
gdjs.LeaderboardsCode.GDSubmitObjects2.length = 0;
gdjs.LeaderboardsCode.GDCurrent_9595DogeCoinObjects1.length = 0;
gdjs.LeaderboardsCode.GDCurrent_9595DogeCoinObjects2.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595AmountObjects1.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595AmountObjects2.length = 0;
gdjs.LeaderboardsCode.GDMusic_9595ToggleObjects1.length = 0;
gdjs.LeaderboardsCode.GDMusic_9595ToggleObjects2.length = 0;
gdjs.LeaderboardsCode.GDToggle_9595Music_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDToggle_9595Music_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDToggle_9595Buy_9595Sounds_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDToggle_9595Buy_9595Sounds_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDEnable_9595Rock_9595Hitting_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDEnable_9595Rock_9595Hitting_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDVolume_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDVolume_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595ButtonObjects1.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595ButtonObjects2.length = 0;
gdjs.LeaderboardsCode.GDGo_9595Back_9595ButtonObjects1.length = 0;
gdjs.LeaderboardsCode.GDGo_9595Back_9595ButtonObjects2.length = 0;
gdjs.LeaderboardsCode.GDHit_9595Sound_9595ToggleObjects1.length = 0;
gdjs.LeaderboardsCode.GDHit_9595Sound_9595ToggleObjects2.length = 0;
gdjs.LeaderboardsCode.GDBuy_9595Sound_9595ToggleObjects1.length = 0;
gdjs.LeaderboardsCode.GDBuy_9595Sound_9595ToggleObjects2.length = 0;
gdjs.LeaderboardsCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.LeaderboardsCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_9595Objects1.length = 0;
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_9595Objects2.length = 0;
gdjs.LeaderboardsCode.GDEarth_9595UIObjects1.length = 0;
gdjs.LeaderboardsCode.GDEarth_9595UIObjects2.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595Button2Objects1.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595Button2Objects2.length = 0;
gdjs.LeaderboardsCode.GDLeaderBoards_9595ButtonObjects1.length = 0;
gdjs.LeaderboardsCode.GDLeaderBoards_9595ButtonObjects2.length = 0;
gdjs.LeaderboardsCode.GDLeaderboards_9595Button2Objects1.length = 0;
gdjs.LeaderboardsCode.GDLeaderboards_9595Button2Objects2.length = 0;

gdjs.LeaderboardsCode.eventsList0(runtimeScene);
gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects1.length = 0;
gdjs.LeaderboardsCode.GDGo_9595Back_9595Button2Objects2.length = 0;
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_95952Objects1.length = 0;
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_95952Objects2.length = 0;
gdjs.LeaderboardsCode.GDSubmit_9595a_9595ScoreObjects1.length = 0;
gdjs.LeaderboardsCode.GDSubmit_9595a_9595ScoreObjects2.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595LeaderBoardObjects1.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595LeaderBoardObjects2.length = 0;
gdjs.LeaderboardsCode.GDNameInputObjects1.length = 0;
gdjs.LeaderboardsCode.GDNameInputObjects2.length = 0;
gdjs.LeaderboardsCode.GDViewObjects1.length = 0;
gdjs.LeaderboardsCode.GDViewObjects2.length = 0;
gdjs.LeaderboardsCode.GDINFOObjects1.length = 0;
gdjs.LeaderboardsCode.GDINFOObjects2.length = 0;
gdjs.LeaderboardsCode.GDfuture_9595infoObjects1.length = 0;
gdjs.LeaderboardsCode.GDfuture_9595infoObjects2.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595LogoObjects1.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595LogoObjects2.length = 0;
gdjs.LeaderboardsCode.GDSubmitObjects1.length = 0;
gdjs.LeaderboardsCode.GDSubmitObjects2.length = 0;
gdjs.LeaderboardsCode.GDCurrent_9595DogeCoinObjects1.length = 0;
gdjs.LeaderboardsCode.GDCurrent_9595DogeCoinObjects2.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595AmountObjects1.length = 0;
gdjs.LeaderboardsCode.GDDogeCoin_9595AmountObjects2.length = 0;
gdjs.LeaderboardsCode.GDMusic_9595ToggleObjects1.length = 0;
gdjs.LeaderboardsCode.GDMusic_9595ToggleObjects2.length = 0;
gdjs.LeaderboardsCode.GDToggle_9595Music_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDToggle_9595Music_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDToggle_9595Buy_9595Sounds_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDToggle_9595Buy_9595Sounds_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDEnable_9595Rock_9595Hitting_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDEnable_9595Rock_9595Hitting_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDVolume_9595TextObjects1.length = 0;
gdjs.LeaderboardsCode.GDVolume_9595TextObjects2.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595ButtonObjects1.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595ButtonObjects2.length = 0;
gdjs.LeaderboardsCode.GDGo_9595Back_9595ButtonObjects1.length = 0;
gdjs.LeaderboardsCode.GDGo_9595Back_9595ButtonObjects2.length = 0;
gdjs.LeaderboardsCode.GDHit_9595Sound_9595ToggleObjects1.length = 0;
gdjs.LeaderboardsCode.GDHit_9595Sound_9595ToggleObjects2.length = 0;
gdjs.LeaderboardsCode.GDBuy_9595Sound_9595ToggleObjects1.length = 0;
gdjs.LeaderboardsCode.GDBuy_9595Sound_9595ToggleObjects2.length = 0;
gdjs.LeaderboardsCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.LeaderboardsCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_9595Objects1.length = 0;
gdjs.LeaderboardsCode.GDBackground_9595_9595Earth_9595Objects2.length = 0;
gdjs.LeaderboardsCode.GDEarth_9595UIObjects1.length = 0;
gdjs.LeaderboardsCode.GDEarth_9595UIObjects2.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595Button2Objects1.length = 0;
gdjs.LeaderboardsCode.GDSettings_9595Button2Objects2.length = 0;
gdjs.LeaderboardsCode.GDLeaderBoards_9595ButtonObjects1.length = 0;
gdjs.LeaderboardsCode.GDLeaderBoards_9595ButtonObjects2.length = 0;
gdjs.LeaderboardsCode.GDLeaderboards_9595Button2Objects1.length = 0;
gdjs.LeaderboardsCode.GDLeaderboards_9595Button2Objects2.length = 0;


return;

}

gdjs['LeaderboardsCode'] = gdjs.LeaderboardsCode;
