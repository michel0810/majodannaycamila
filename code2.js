gdjs.MenuPPalCode = {};
gdjs.MenuPPalCode.localVariables = [];
gdjs.MenuPPalCode.idToCallbackMap = new Map();
gdjs.MenuPPalCode.GDBlueButtonObjects1= [];
gdjs.MenuPPalCode.GDBlueButtonObjects2= [];
gdjs.MenuPPalCode.GDPenguinObjects1= [];
gdjs.MenuPPalCode.GDPenguinObjects2= [];
gdjs.MenuPPalCode.GDLaserObjects1= [];
gdjs.MenuPPalCode.GDLaserObjects2= [];
gdjs.MenuPPalCode.GDmonedasObjects1= [];
gdjs.MenuPPalCode.GDmonedasObjects2= [];
gdjs.MenuPPalCode.GDfireballObjects1= [];
gdjs.MenuPPalCode.GDfireballObjects2= [];
gdjs.MenuPPalCode.GDFireballObjects1= [];
gdjs.MenuPPalCode.GDFireballObjects2= [];
gdjs.MenuPPalCode.GDGreen_9595flagObjects1= [];
gdjs.MenuPPalCode.GDGreen_9595flagObjects2= [];
gdjs.MenuPPalCode.GDpezObjects1= [];
gdjs.MenuPPalCode.GDpezObjects2= [];
gdjs.MenuPPalCode.GDCoin_9595GoldObjects1= [];
gdjs.MenuPPalCode.GDCoin_9595GoldObjects2= [];
gdjs.MenuPPalCode.GDvidaObjects1= [];
gdjs.MenuPPalCode.GDvidaObjects2= [];
gdjs.MenuPPalCode.GDpuntos2Objects1= [];
gdjs.MenuPPalCode.GDpuntos2Objects2= [];


gdjs.MenuPPalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.MenuPPalCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuPPalCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuPPalCode.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuPPalCode.GDBlueButtonObjects1[k] = gdjs.MenuPPalCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuPPalCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena1", true);
}
}

}


};

gdjs.MenuPPalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuPPalCode.GDBlueButtonObjects1.length = 0;
gdjs.MenuPPalCode.GDBlueButtonObjects2.length = 0;
gdjs.MenuPPalCode.GDPenguinObjects1.length = 0;
gdjs.MenuPPalCode.GDPenguinObjects2.length = 0;
gdjs.MenuPPalCode.GDLaserObjects1.length = 0;
gdjs.MenuPPalCode.GDLaserObjects2.length = 0;
gdjs.MenuPPalCode.GDmonedasObjects1.length = 0;
gdjs.MenuPPalCode.GDmonedasObjects2.length = 0;
gdjs.MenuPPalCode.GDfireballObjects1.length = 0;
gdjs.MenuPPalCode.GDfireballObjects2.length = 0;
gdjs.MenuPPalCode.GDFireballObjects1.length = 0;
gdjs.MenuPPalCode.GDFireballObjects2.length = 0;
gdjs.MenuPPalCode.GDGreen_9595flagObjects1.length = 0;
gdjs.MenuPPalCode.GDGreen_9595flagObjects2.length = 0;
gdjs.MenuPPalCode.GDpezObjects1.length = 0;
gdjs.MenuPPalCode.GDpezObjects2.length = 0;
gdjs.MenuPPalCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.MenuPPalCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.MenuPPalCode.GDvidaObjects1.length = 0;
gdjs.MenuPPalCode.GDvidaObjects2.length = 0;
gdjs.MenuPPalCode.GDpuntos2Objects1.length = 0;
gdjs.MenuPPalCode.GDpuntos2Objects2.length = 0;

gdjs.MenuPPalCode.eventsList0(runtimeScene);
gdjs.MenuPPalCode.GDBlueButtonObjects1.length = 0;
gdjs.MenuPPalCode.GDBlueButtonObjects2.length = 0;
gdjs.MenuPPalCode.GDPenguinObjects1.length = 0;
gdjs.MenuPPalCode.GDPenguinObjects2.length = 0;
gdjs.MenuPPalCode.GDLaserObjects1.length = 0;
gdjs.MenuPPalCode.GDLaserObjects2.length = 0;
gdjs.MenuPPalCode.GDmonedasObjects1.length = 0;
gdjs.MenuPPalCode.GDmonedasObjects2.length = 0;
gdjs.MenuPPalCode.GDfireballObjects1.length = 0;
gdjs.MenuPPalCode.GDfireballObjects2.length = 0;
gdjs.MenuPPalCode.GDFireballObjects1.length = 0;
gdjs.MenuPPalCode.GDFireballObjects2.length = 0;
gdjs.MenuPPalCode.GDGreen_9595flagObjects1.length = 0;
gdjs.MenuPPalCode.GDGreen_9595flagObjects2.length = 0;
gdjs.MenuPPalCode.GDpezObjects1.length = 0;
gdjs.MenuPPalCode.GDpezObjects2.length = 0;
gdjs.MenuPPalCode.GDCoin_9595GoldObjects1.length = 0;
gdjs.MenuPPalCode.GDCoin_9595GoldObjects2.length = 0;
gdjs.MenuPPalCode.GDvidaObjects1.length = 0;
gdjs.MenuPPalCode.GDvidaObjects2.length = 0;
gdjs.MenuPPalCode.GDpuntos2Objects1.length = 0;
gdjs.MenuPPalCode.GDpuntos2Objects2.length = 0;


return;

}

gdjs['MenuPPalCode'] = gdjs.MenuPPalCode;
