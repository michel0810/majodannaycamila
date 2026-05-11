gdjs.Nivel2Code = {};
gdjs.Nivel2Code.localVariables = [];
gdjs.Nivel2Code.idToCallbackMap = new Map();
gdjs.Nivel2Code.GDSummer_9595BackgroundObjects1= [];
gdjs.Nivel2Code.GDSummer_9595BackgroundObjects2= [];
gdjs.Nivel2Code.GDSummer_9595BackgroundObjects3= [];
gdjs.Nivel2Code.GDNewTiledSpriteObjects1= [];
gdjs.Nivel2Code.GDNewTiledSpriteObjects2= [];
gdjs.Nivel2Code.GDNewTiledSpriteObjects3= [];
gdjs.Nivel2Code.GDGreen_9595Grass_95959PatchObjects1= [];
gdjs.Nivel2Code.GDGreen_9595Grass_95959PatchObjects2= [];
gdjs.Nivel2Code.GDGreen_9595Grass_95959PatchObjects3= [];
gdjs.Nivel2Code.GDPenguinObjects1= [];
gdjs.Nivel2Code.GDPenguinObjects2= [];
gdjs.Nivel2Code.GDPenguinObjects3= [];
gdjs.Nivel2Code.GDShadedLightJoystickObjects1= [];
gdjs.Nivel2Code.GDShadedLightJoystickObjects2= [];
gdjs.Nivel2Code.GDShadedLightJoystickObjects3= [];
gdjs.Nivel2Code.GDCoin_9595GoldObjects1= [];
gdjs.Nivel2Code.GDCoin_9595GoldObjects2= [];
gdjs.Nivel2Code.GDCoin_9595GoldObjects3= [];
gdjs.Nivel2Code.GDcontadorObjects1= [];
gdjs.Nivel2Code.GDcontadorObjects2= [];
gdjs.Nivel2Code.GDcontadorObjects3= [];
gdjs.Nivel2Code.GDvidasObjects1= [];
gdjs.Nivel2Code.GDvidasObjects2= [];
gdjs.Nivel2Code.GDvidasObjects3= [];
gdjs.Nivel2Code.GDcontadorvidasObjects1= [];
gdjs.Nivel2Code.GDcontadorvidasObjects2= [];
gdjs.Nivel2Code.GDcontadorvidasObjects3= [];
gdjs.Nivel2Code.GDPunhtosObjects1= [];
gdjs.Nivel2Code.GDPunhtosObjects2= [];
gdjs.Nivel2Code.GDPunhtosObjects3= [];
gdjs.Nivel2Code.GDContadordePuntosObjects1= [];
gdjs.Nivel2Code.GDContadordePuntosObjects2= [];
gdjs.Nivel2Code.GDContadordePuntosObjects3= [];
gdjs.Nivel2Code.GDflyObjects1= [];
gdjs.Nivel2Code.GDflyObjects2= [];
gdjs.Nivel2Code.GDflyObjects3= [];
gdjs.Nivel2Code.GDMonedaObjects1= [];
gdjs.Nivel2Code.GDMonedaObjects2= [];
gdjs.Nivel2Code.GDMonedaObjects3= [];
gdjs.Nivel2Code.GDBrown_9595TroutObjects1= [];
gdjs.Nivel2Code.GDBrown_9595TroutObjects2= [];
gdjs.Nivel2Code.GDBrown_9595TroutObjects3= [];
gdjs.Nivel2Code.GDLaserObjects1= [];
gdjs.Nivel2Code.GDLaserObjects2= [];
gdjs.Nivel2Code.GDLaserObjects3= [];
gdjs.Nivel2Code.GDRed_9595laser_959501Objects1= [];
gdjs.Nivel2Code.GDRed_9595laser_959501Objects2= [];
gdjs.Nivel2Code.GDRed_9595laser_959501Objects3= [];
gdjs.Nivel2Code.GDfireballObjects1= [];
gdjs.Nivel2Code.GDfireballObjects2= [];
gdjs.Nivel2Code.GDfireballObjects3= [];
gdjs.Nivel2Code.GDFireballObjects1= [];
gdjs.Nivel2Code.GDFireballObjects2= [];
gdjs.Nivel2Code.GDFireballObjects3= [];
gdjs.Nivel2Code.GDDesert_9595BackgroundObjects1= [];
gdjs.Nivel2Code.GDDesert_9595BackgroundObjects2= [];
gdjs.Nivel2Code.GDDesert_9595BackgroundObjects3= [];
gdjs.Nivel2Code.GDOrange_9595Grass_95959PatchObjects1= [];
gdjs.Nivel2Code.GDOrange_9595Grass_95959PatchObjects2= [];
gdjs.Nivel2Code.GDOrange_9595Grass_95959PatchObjects3= [];
gdjs.Nivel2Code.GDbeeObjects1= [];
gdjs.Nivel2Code.GDbeeObjects2= [];
gdjs.Nivel2Code.GDbeeObjects3= [];
gdjs.Nivel2Code.GDGreen_9595flagObjects1= [];
gdjs.Nivel2Code.GDGreen_9595flagObjects2= [];
gdjs.Nivel2Code.GDGreen_9595flagObjects3= [];
gdjs.Nivel2Code.GDPenguinObjects1= [];
gdjs.Nivel2Code.GDPenguinObjects2= [];
gdjs.Nivel2Code.GDPenguinObjects3= [];
gdjs.Nivel2Code.GDLaserObjects1= [];
gdjs.Nivel2Code.GDLaserObjects2= [];
gdjs.Nivel2Code.GDLaserObjects3= [];
gdjs.Nivel2Code.GDmonedasObjects1= [];
gdjs.Nivel2Code.GDmonedasObjects2= [];
gdjs.Nivel2Code.GDmonedasObjects3= [];
gdjs.Nivel2Code.GDfireballObjects1= [];
gdjs.Nivel2Code.GDfireballObjects2= [];
gdjs.Nivel2Code.GDfireballObjects3= [];
gdjs.Nivel2Code.GDFireballObjects1= [];
gdjs.Nivel2Code.GDFireballObjects2= [];
gdjs.Nivel2Code.GDFireballObjects3= [];
gdjs.Nivel2Code.GDGreen_9595flagObjects1= [];
gdjs.Nivel2Code.GDGreen_9595flagObjects2= [];
gdjs.Nivel2Code.GDGreen_9595flagObjects3= [];
gdjs.Nivel2Code.GDpezObjects1= [];
gdjs.Nivel2Code.GDpezObjects2= [];
gdjs.Nivel2Code.GDpezObjects3= [];
gdjs.Nivel2Code.GDCoin_9595GoldObjects1= [];
gdjs.Nivel2Code.GDCoin_9595GoldObjects2= [];
gdjs.Nivel2Code.GDCoin_9595GoldObjects3= [];
gdjs.Nivel2Code.GDvidaObjects1= [];
gdjs.Nivel2Code.GDvidaObjects2= [];
gdjs.Nivel2Code.GDvidaObjects3= [];
gdjs.Nivel2Code.GDpuntos2Objects1= [];
gdjs.Nivel2Code.GDpuntos2Objects2= [];
gdjs.Nivel2Code.GDpuntos2Objects3= [];


gdjs.Nivel2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects2);
{for(var i = 0, len = gdjs.Nivel2Code.GDPenguinObjects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDPenguinObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects2);
{for(var i = 0, len = gdjs.Nivel2Code.GDPenguinObjects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDPenguinObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel2Code.GDPenguinObjects2.length;i<l;++i) {
    if ( gdjs.Nivel2Code.GDPenguinObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel2Code.GDPenguinObjects2[k] = gdjs.Nivel2Code.GDPenguinObjects2[i];
        ++k;
    }
}
gdjs.Nivel2Code.GDPenguinObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel2Code.GDPenguinObjects2 */
{for(var i = 0, len = gdjs.Nivel2Code.GDPenguinObjects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDPenguinObjects2[i].getBehavior("Animation").setAnimationName("CAMINAR");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel2Code.GDPenguinObjects2.length;i<l;++i) {
    if ( gdjs.Nivel2Code.GDPenguinObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel2Code.GDPenguinObjects2[k] = gdjs.Nivel2Code.GDPenguinObjects2[i];
        ++k;
    }
}
gdjs.Nivel2Code.GDPenguinObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel2Code.GDPenguinObjects2 */
{for(var i = 0, len = gdjs.Nivel2Code.GDPenguinObjects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDPenguinObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel2Code.GDPenguinObjects1.length;i<l;++i) {
    if ( !(gdjs.Nivel2Code.GDPenguinObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel2Code.GDPenguinObjects1[k] = gdjs.Nivel2Code.GDPenguinObjects1[i];
        ++k;
    }
}
gdjs.Nivel2Code.GDPenguinObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel2Code.GDPenguinObjects1 */
{for(var i = 0, len = gdjs.Nivel2Code.GDPenguinObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDPenguinObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects2Objects = Hashtable.newFrom({"Penguin": gdjs.Nivel2Code.GDPenguinObjects2});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDfireballObjects2Objects = Hashtable.newFrom({"fireball": gdjs.Nivel2Code.GDfireballObjects2});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDFireballObjects2Objects = Hashtable.newFrom({"Fireball": gdjs.Nivel2Code.GDFireballObjects2});
gdjs.Nivel2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects2);
gdjs.copyArray(runtimeScene.getObjects("fireball"), gdjs.Nivel2Code.GDfireballObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects2Objects, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDfireballObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel2Code.GDfireballObjects2 */
{for(var i = 0, len = gdjs.Nivel2Code.GDfireballObjects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDfireballObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21487820);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects2);
gdjs.Nivel2Code.GDFireballObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDFireballObjects2Objects, (( gdjs.Nivel2Code.GDPenguinObjects2.length === 0 ) ? 0 :gdjs.Nivel2Code.GDPenguinObjects2[0].getPointX("center")) + 30, (( gdjs.Nivel2Code.GDPenguinObjects2.length === 0 ) ? 0 :gdjs.Nivel2Code.GDPenguinObjects2[0].getPointY("center")) + 30, "");
}
{for(var i = 0, len = gdjs.Nivel2Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDFireballObjects2[i].addForce(200, 0, 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel2Code.GDPenguinObjects2.length;i<l;++i) {
    if ( !(gdjs.Nivel2Code.GDPenguinObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel2Code.GDPenguinObjects2[k] = gdjs.Nivel2Code.GDPenguinObjects2[i];
        ++k;
    }
}
gdjs.Nivel2Code.GDPenguinObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fireball"), gdjs.Nivel2Code.GDFireballObjects2);
{for(var i = 0, len = gdjs.Nivel2Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDFireballObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel2Code.GDPenguinObjects2.length;i<l;++i) {
    if ( gdjs.Nivel2Code.GDPenguinObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel2Code.GDPenguinObjects2[k] = gdjs.Nivel2Code.GDPenguinObjects2[i];
        ++k;
    }
}
gdjs.Nivel2Code.GDPenguinObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fireball"), gdjs.Nivel2Code.GDFireballObjects2);
{for(var i = 0, len = gdjs.Nivel2Code.GDFireballObjects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDFireballObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel2Code.GDPenguinObjects1.length;i<l;++i) {
    if ( gdjs.Nivel2Code.GDPenguinObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel2Code.GDPenguinObjects1[k] = gdjs.Nivel2Code.GDPenguinObjects1[i];
        ++k;
    }
}
gdjs.Nivel2Code.GDPenguinObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fireball"), gdjs.Nivel2Code.GDFireballObjects1);
{for(var i = 0, len = gdjs.Nivel2Code.GDFireballObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDFireballObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDRed_95959595laser_9595959501Objects2Objects = Hashtable.newFrom({"Red_laser_01": gdjs.Nivel2Code.GDRed_9595laser_959501Objects2});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects = Hashtable.newFrom({"Penguin": gdjs.Nivel2Code.GDPenguinObjects1});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDLaserObjects1Objects = Hashtable.newFrom({"Laser": gdjs.Nivel2Code.GDLaserObjects1});
gdjs.Nivel2Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21491492);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects2);
gdjs.Nivel2Code.GDRed_9595laser_959501Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDRed_95959595laser_9595959501Objects2Objects, (( gdjs.Nivel2Code.GDPenguinObjects2.length === 0 ) ? 0 :gdjs.Nivel2Code.GDPenguinObjects2[0].getPointX("center")) + 30, (( gdjs.Nivel2Code.GDPenguinObjects2.length === 0 ) ? 0 :gdjs.Nivel2Code.GDPenguinObjects2[0].getPointY("center")) + 0, "");
}
{for(var i = 0, len = gdjs.Nivel2Code.GDRed_9595laser_959501Objects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDRed_9595laser_959501Objects2[i].addForce(200, 0, 1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laser"), gdjs.Nivel2Code.GDLaserObjects1);
gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDLaserObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel2Code.GDLaserObjects1 */
{for(var i = 0, len = gdjs.Nivel2Code.GDLaserObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDLaserObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}
}

}


};gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects = Hashtable.newFrom({"Penguin": gdjs.Nivel2Code.GDPenguinObjects1});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDMonedaObjects1Objects = Hashtable.newFrom({"Moneda": gdjs.Nivel2Code.GDMonedaObjects1});
gdjs.Nivel2Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Moneda"), gdjs.Nivel2Code.GDMonedaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDMonedaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContadordePuntos"), gdjs.Nivel2Code.GDContadordePuntosObjects1);
/* Reuse gdjs.Nivel2Code.GDMonedaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("contador"), gdjs.Nivel2Code.GDcontadorObjects1);
{for(var i = 0, len = gdjs.Nivel2Code.GDMonedaObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDMonedaObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Nivel2Code.GDcontadorObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDcontadorObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(4).add(100);
}
{for(var i = 0, len = gdjs.Nivel2Code.GDContadordePuntosObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDContadordePuntosObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}
}

}


};gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects = Hashtable.newFrom({"Penguin": gdjs.Nivel2Code.GDPenguinObjects1});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDBrown_95959595TroutObjects1Objects = Hashtable.newFrom({"Brown_Trout": gdjs.Nivel2Code.GDBrown_9595TroutObjects1});
gdjs.Nivel2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Brown_Trout"), gdjs.Nivel2Code.GDBrown_9595TroutObjects1);
gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDBrown_95959595TroutObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel2Code.GDBrown_9595TroutObjects1 */
/* Reuse gdjs.Nivel2Code.GDPenguinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("contadorvidas"), gdjs.Nivel2Code.GDcontadorvidasObjects1);
{for(var i = 0, len = gdjs.Nivel2Code.GDBrown_9595TroutObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDBrown_9595TroutObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.Nivel2Code.GDPenguinObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDPenguinObjects1[i].getBehavior("Resizable").setSize(90, 90);
}
}
{for(var i = 0, len = gdjs.Nivel2Code.GDcontadorvidasObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDcontadorvidasObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
}

}


};gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDflyObjects2Objects = Hashtable.newFrom({"fly": gdjs.Nivel2Code.GDflyObjects2});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDRed_95959595laser_9595959501Objects2Objects = Hashtable.newFrom({"Red_laser_01": gdjs.Nivel2Code.GDRed_9595laser_959501Objects2});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDflyObjects1Objects = Hashtable.newFrom({"fly": gdjs.Nivel2Code.GDflyObjects1});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDFireballObjects1Objects = Hashtable.newFrom({"Fireball": gdjs.Nivel2Code.GDFireballObjects1});
gdjs.Nivel2Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Red_laser_01"), gdjs.Nivel2Code.GDRed_9595laser_959501Objects2);
gdjs.copyArray(runtimeScene.getObjects("fly"), gdjs.Nivel2Code.GDflyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDflyObjects2Objects, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDRed_95959595laser_9595959501Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel2Code.GDflyObjects2 */
{for(var i = 0, len = gdjs.Nivel2Code.GDflyObjects2.length ;i < len;++i) {
    gdjs.Nivel2Code.GDflyObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fireball"), gdjs.Nivel2Code.GDFireballObjects1);
gdjs.copyArray(runtimeScene.getObjects("fly"), gdjs.Nivel2Code.GDflyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDflyObjects1Objects, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDFireballObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel2Code.GDflyObjects1 */
{for(var i = 0, len = gdjs.Nivel2Code.GDflyObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDflyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects = Hashtable.newFrom({"Penguin": gdjs.Nivel2Code.GDPenguinObjects1});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDGreen_95959595flagObjects1Objects = Hashtable.newFrom({"Green_flag": gdjs.Nivel2Code.GDGreen_9595flagObjects1});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects = Hashtable.newFrom({"Penguin": gdjs.Nivel2Code.GDPenguinObjects1});
gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDflyObjects1Objects = Hashtable.newFrom({"fly": gdjs.Nivel2Code.GDflyObjects1});
gdjs.Nivel2Code.asyncCallback21500372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel2", false);
}
gdjs.Nivel2Code.localVariables.length = 0;
}
gdjs.Nivel2Code.idToCallbackMap.set(21500372, gdjs.Nivel2Code.asyncCallback21500372);
gdjs.Nivel2Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Nivel2Code.asyncCallback21500372(runtimeScene, asyncObjectsList)), 21500372, asyncObjectsList);
}
}

}


};gdjs.Nivel2Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Nivel2Code.GDPenguinObjects1.length !== 0 ? gdjs.Nivel2Code.GDPenguinObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Nivel2Code.GDPenguinObjects1.length !== 0 ? gdjs.Nivel2Code.GDPenguinObjects1[0] : null), true, "tileset", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, -(145), 1115, 230, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, -(145), 1115, 230, "tileset", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Nivel2Code.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.Nivel2Code.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDNewTiledSpriteObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}
}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}
}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}
}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Nivel2Code.eventsList0(runtimeScene);
}


{


gdjs.Nivel2Code.eventsList1(runtimeScene);
}


{


gdjs.Nivel2Code.eventsList2(runtimeScene);
}


{


gdjs.Nivel2Code.eventsList3(runtimeScene);
}


{


gdjs.Nivel2Code.eventsList4(runtimeScene);
}


{


gdjs.Nivel2Code.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() < 1);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Green_flag"), gdjs.Nivel2Code.GDGreen_9595flagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDGreen_95959595flagObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Penguin"), gdjs.Nivel2Code.GDPenguinObjects1);
gdjs.copyArray(runtimeScene.getObjects("fly"), gdjs.Nivel2Code.GDflyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDPenguinObjects1Objects, gdjs.Nivel2Code.mapOfGDgdjs_9546Nivel2Code_9546GDflyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel2Code.GDPenguinObjects1 */
{for(var i = 0, len = gdjs.Nivel2Code.GDPenguinObjects1.length ;i < len;++i) {
    gdjs.Nivel2Code.GDPenguinObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Nivel2Code.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.Nivel2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nivel2Code.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.Nivel2Code.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.Nivel2Code.GDSummer_9595BackgroundObjects3.length = 0;
gdjs.Nivel2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Nivel2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Nivel2Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Nivel2Code.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.Nivel2Code.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.Nivel2Code.GDGreen_9595Grass_95959PatchObjects3.length = 0;
gdjs.Nivel2Code.GDPenguinObjects1.length = 0;
gdjs.Nivel2Code.GDPenguinObjects2.length = 0;
gdjs.Nivel2Code.GDPenguinObjects3.length = 0;
gdjs.Nivel2Code.GDShadedLightJoystickObjects1.length = 0;
gdjs.Nivel2Code.GDShadedLightJoystickObjects2.length = 0;
gdjs.Nivel2Code.GDShadedLightJoystickObjects3.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects2.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects3.length = 0;
gdjs.Nivel2Code.GDcontadorObjects1.length = 0;
gdjs.Nivel2Code.GDcontadorObjects2.length = 0;
gdjs.Nivel2Code.GDcontadorObjects3.length = 0;
gdjs.Nivel2Code.GDvidasObjects1.length = 0;
gdjs.Nivel2Code.GDvidasObjects2.length = 0;
gdjs.Nivel2Code.GDvidasObjects3.length = 0;
gdjs.Nivel2Code.GDcontadorvidasObjects1.length = 0;
gdjs.Nivel2Code.GDcontadorvidasObjects2.length = 0;
gdjs.Nivel2Code.GDcontadorvidasObjects3.length = 0;
gdjs.Nivel2Code.GDPunhtosObjects1.length = 0;
gdjs.Nivel2Code.GDPunhtosObjects2.length = 0;
gdjs.Nivel2Code.GDPunhtosObjects3.length = 0;
gdjs.Nivel2Code.GDContadordePuntosObjects1.length = 0;
gdjs.Nivel2Code.GDContadordePuntosObjects2.length = 0;
gdjs.Nivel2Code.GDContadordePuntosObjects3.length = 0;
gdjs.Nivel2Code.GDflyObjects1.length = 0;
gdjs.Nivel2Code.GDflyObjects2.length = 0;
gdjs.Nivel2Code.GDflyObjects3.length = 0;
gdjs.Nivel2Code.GDMonedaObjects1.length = 0;
gdjs.Nivel2Code.GDMonedaObjects2.length = 0;
gdjs.Nivel2Code.GDMonedaObjects3.length = 0;
gdjs.Nivel2Code.GDBrown_9595TroutObjects1.length = 0;
gdjs.Nivel2Code.GDBrown_9595TroutObjects2.length = 0;
gdjs.Nivel2Code.GDBrown_9595TroutObjects3.length = 0;
gdjs.Nivel2Code.GDLaserObjects1.length = 0;
gdjs.Nivel2Code.GDLaserObjects2.length = 0;
gdjs.Nivel2Code.GDLaserObjects3.length = 0;
gdjs.Nivel2Code.GDRed_9595laser_959501Objects1.length = 0;
gdjs.Nivel2Code.GDRed_9595laser_959501Objects2.length = 0;
gdjs.Nivel2Code.GDRed_9595laser_959501Objects3.length = 0;
gdjs.Nivel2Code.GDfireballObjects1.length = 0;
gdjs.Nivel2Code.GDfireballObjects2.length = 0;
gdjs.Nivel2Code.GDfireballObjects3.length = 0;
gdjs.Nivel2Code.GDFireballObjects1.length = 0;
gdjs.Nivel2Code.GDFireballObjects2.length = 0;
gdjs.Nivel2Code.GDFireballObjects3.length = 0;
gdjs.Nivel2Code.GDDesert_9595BackgroundObjects1.length = 0;
gdjs.Nivel2Code.GDDesert_9595BackgroundObjects2.length = 0;
gdjs.Nivel2Code.GDDesert_9595BackgroundObjects3.length = 0;
gdjs.Nivel2Code.GDOrange_9595Grass_95959PatchObjects1.length = 0;
gdjs.Nivel2Code.GDOrange_9595Grass_95959PatchObjects2.length = 0;
gdjs.Nivel2Code.GDOrange_9595Grass_95959PatchObjects3.length = 0;
gdjs.Nivel2Code.GDbeeObjects1.length = 0;
gdjs.Nivel2Code.GDbeeObjects2.length = 0;
gdjs.Nivel2Code.GDbeeObjects3.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects1.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects2.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects3.length = 0;
gdjs.Nivel2Code.GDPenguinObjects1.length = 0;
gdjs.Nivel2Code.GDPenguinObjects2.length = 0;
gdjs.Nivel2Code.GDPenguinObjects3.length = 0;
gdjs.Nivel2Code.GDLaserObjects1.length = 0;
gdjs.Nivel2Code.GDLaserObjects2.length = 0;
gdjs.Nivel2Code.GDLaserObjects3.length = 0;
gdjs.Nivel2Code.GDmonedasObjects1.length = 0;
gdjs.Nivel2Code.GDmonedasObjects2.length = 0;
gdjs.Nivel2Code.GDmonedasObjects3.length = 0;
gdjs.Nivel2Code.GDfireballObjects1.length = 0;
gdjs.Nivel2Code.GDfireballObjects2.length = 0;
gdjs.Nivel2Code.GDfireballObjects3.length = 0;
gdjs.Nivel2Code.GDFireballObjects1.length = 0;
gdjs.Nivel2Code.GDFireballObjects2.length = 0;
gdjs.Nivel2Code.GDFireballObjects3.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects1.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects2.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects3.length = 0;
gdjs.Nivel2Code.GDpezObjects1.length = 0;
gdjs.Nivel2Code.GDpezObjects2.length = 0;
gdjs.Nivel2Code.GDpezObjects3.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects2.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects3.length = 0;
gdjs.Nivel2Code.GDvidaObjects1.length = 0;
gdjs.Nivel2Code.GDvidaObjects2.length = 0;
gdjs.Nivel2Code.GDvidaObjects3.length = 0;
gdjs.Nivel2Code.GDpuntos2Objects1.length = 0;
gdjs.Nivel2Code.GDpuntos2Objects2.length = 0;
gdjs.Nivel2Code.GDpuntos2Objects3.length = 0;

gdjs.Nivel2Code.eventsList7(runtimeScene);
gdjs.Nivel2Code.GDSummer_9595BackgroundObjects1.length = 0;
gdjs.Nivel2Code.GDSummer_9595BackgroundObjects2.length = 0;
gdjs.Nivel2Code.GDSummer_9595BackgroundObjects3.length = 0;
gdjs.Nivel2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Nivel2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Nivel2Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Nivel2Code.GDGreen_9595Grass_95959PatchObjects1.length = 0;
gdjs.Nivel2Code.GDGreen_9595Grass_95959PatchObjects2.length = 0;
gdjs.Nivel2Code.GDGreen_9595Grass_95959PatchObjects3.length = 0;
gdjs.Nivel2Code.GDPenguinObjects1.length = 0;
gdjs.Nivel2Code.GDPenguinObjects2.length = 0;
gdjs.Nivel2Code.GDPenguinObjects3.length = 0;
gdjs.Nivel2Code.GDShadedLightJoystickObjects1.length = 0;
gdjs.Nivel2Code.GDShadedLightJoystickObjects2.length = 0;
gdjs.Nivel2Code.GDShadedLightJoystickObjects3.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects2.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects3.length = 0;
gdjs.Nivel2Code.GDcontadorObjects1.length = 0;
gdjs.Nivel2Code.GDcontadorObjects2.length = 0;
gdjs.Nivel2Code.GDcontadorObjects3.length = 0;
gdjs.Nivel2Code.GDvidasObjects1.length = 0;
gdjs.Nivel2Code.GDvidasObjects2.length = 0;
gdjs.Nivel2Code.GDvidasObjects3.length = 0;
gdjs.Nivel2Code.GDcontadorvidasObjects1.length = 0;
gdjs.Nivel2Code.GDcontadorvidasObjects2.length = 0;
gdjs.Nivel2Code.GDcontadorvidasObjects3.length = 0;
gdjs.Nivel2Code.GDPunhtosObjects1.length = 0;
gdjs.Nivel2Code.GDPunhtosObjects2.length = 0;
gdjs.Nivel2Code.GDPunhtosObjects3.length = 0;
gdjs.Nivel2Code.GDContadordePuntosObjects1.length = 0;
gdjs.Nivel2Code.GDContadordePuntosObjects2.length = 0;
gdjs.Nivel2Code.GDContadordePuntosObjects3.length = 0;
gdjs.Nivel2Code.GDflyObjects1.length = 0;
gdjs.Nivel2Code.GDflyObjects2.length = 0;
gdjs.Nivel2Code.GDflyObjects3.length = 0;
gdjs.Nivel2Code.GDMonedaObjects1.length = 0;
gdjs.Nivel2Code.GDMonedaObjects2.length = 0;
gdjs.Nivel2Code.GDMonedaObjects3.length = 0;
gdjs.Nivel2Code.GDBrown_9595TroutObjects1.length = 0;
gdjs.Nivel2Code.GDBrown_9595TroutObjects2.length = 0;
gdjs.Nivel2Code.GDBrown_9595TroutObjects3.length = 0;
gdjs.Nivel2Code.GDLaserObjects1.length = 0;
gdjs.Nivel2Code.GDLaserObjects2.length = 0;
gdjs.Nivel2Code.GDLaserObjects3.length = 0;
gdjs.Nivel2Code.GDRed_9595laser_959501Objects1.length = 0;
gdjs.Nivel2Code.GDRed_9595laser_959501Objects2.length = 0;
gdjs.Nivel2Code.GDRed_9595laser_959501Objects3.length = 0;
gdjs.Nivel2Code.GDfireballObjects1.length = 0;
gdjs.Nivel2Code.GDfireballObjects2.length = 0;
gdjs.Nivel2Code.GDfireballObjects3.length = 0;
gdjs.Nivel2Code.GDFireballObjects1.length = 0;
gdjs.Nivel2Code.GDFireballObjects2.length = 0;
gdjs.Nivel2Code.GDFireballObjects3.length = 0;
gdjs.Nivel2Code.GDDesert_9595BackgroundObjects1.length = 0;
gdjs.Nivel2Code.GDDesert_9595BackgroundObjects2.length = 0;
gdjs.Nivel2Code.GDDesert_9595BackgroundObjects3.length = 0;
gdjs.Nivel2Code.GDOrange_9595Grass_95959PatchObjects1.length = 0;
gdjs.Nivel2Code.GDOrange_9595Grass_95959PatchObjects2.length = 0;
gdjs.Nivel2Code.GDOrange_9595Grass_95959PatchObjects3.length = 0;
gdjs.Nivel2Code.GDbeeObjects1.length = 0;
gdjs.Nivel2Code.GDbeeObjects2.length = 0;
gdjs.Nivel2Code.GDbeeObjects3.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects1.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects2.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects3.length = 0;
gdjs.Nivel2Code.GDPenguinObjects1.length = 0;
gdjs.Nivel2Code.GDPenguinObjects2.length = 0;
gdjs.Nivel2Code.GDPenguinObjects3.length = 0;
gdjs.Nivel2Code.GDLaserObjects1.length = 0;
gdjs.Nivel2Code.GDLaserObjects2.length = 0;
gdjs.Nivel2Code.GDLaserObjects3.length = 0;
gdjs.Nivel2Code.GDmonedasObjects1.length = 0;
gdjs.Nivel2Code.GDmonedasObjects2.length = 0;
gdjs.Nivel2Code.GDmonedasObjects3.length = 0;
gdjs.Nivel2Code.GDfireballObjects1.length = 0;
gdjs.Nivel2Code.GDfireballObjects2.length = 0;
gdjs.Nivel2Code.GDfireballObjects3.length = 0;
gdjs.Nivel2Code.GDFireballObjects1.length = 0;
gdjs.Nivel2Code.GDFireballObjects2.length = 0;
gdjs.Nivel2Code.GDFireballObjects3.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects1.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects2.length = 0;
gdjs.Nivel2Code.GDGreen_9595flagObjects3.length = 0;
gdjs.Nivel2Code.GDpezObjects1.length = 0;
gdjs.Nivel2Code.GDpezObjects2.length = 0;
gdjs.Nivel2Code.GDpezObjects3.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects1.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects2.length = 0;
gdjs.Nivel2Code.GDCoin_9595GoldObjects3.length = 0;
gdjs.Nivel2Code.GDvidaObjects1.length = 0;
gdjs.Nivel2Code.GDvidaObjects2.length = 0;
gdjs.Nivel2Code.GDvidaObjects3.length = 0;
gdjs.Nivel2Code.GDpuntos2Objects1.length = 0;
gdjs.Nivel2Code.GDpuntos2Objects2.length = 0;
gdjs.Nivel2Code.GDpuntos2Objects3.length = 0;


return;

}

gdjs['Nivel2Code'] = gdjs.Nivel2Code;
