/***************************************************************************
 * JSFL API
 * Timeline objects
 **************************************************************************/
/**
 * @since Flash MX 2004
 * @class {Timeline}
 */
Timeline = function () {
};
/**
 * @since Animate 2020
 * @type {boolean}
 */
Timeline.prototype.advancedLayersEnabled = false;
/**
 * @since Animate 2019
 * @type {Camera}
 */
Timeline.prototype.camera = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Timeline.prototype.currentFrame = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Timeline.prototype.currentLayer = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Timeline.prototype.frameCount = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Timeline.prototype.layerCount = 0;
/**
 * @since Flash MX 2004
 * @type {Array.<Layer>}
 * @const
 */
Timeline.prototype.layers = undefined;
/**
 * @since Flash CS5
 * @type {SymbolItem}
 * @const
 */
Timeline.prototype.libraryItem = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Timeline.prototype.name = undefined;
/**
 * @since Flash MX 2004
 * @return {number}
 */
Timeline.prototype.addMotionGuide = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} [name]
 * @param {"normal"|"guide"|"guided"|"mask"|"masked"|"folder"} [layerType]
 * @param {boolean} [bAddAbove]
 * @return {number}
 */
Timeline.prototype.addNewLayer = function (name, layerType, bAddAbove) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.clearFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.clearKeyframes = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.convertToBlankKeyframes = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.convertToKeyframes = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.copyFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS5.5
 * @param {number} [startLayerIndex]
 * @param {number} [endLayerIndex]
 */
Timeline.prototype.copyLayers = function (startLayerIndex, endLayerIndex) {
};
/**
 * @since Flash CS3
 */
Timeline.prototype.copyMotion = function () {
};
/**
 * @since Flash CS3
 */
Timeline.prototype.copyMotionAsAS3 = function () {
};
/**
 * @since Flash CS5
 * @param {number} [startFrame]
 * @param {number} [endFrame]
 */
Timeline.prototype.createMotionObject = function (startFrame, endFrame) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.createMotionTween = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.cutFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS5.5
 * @param {number} [startLayerIndex]
 * @param {number} [endLayerIndex]
 */
Timeline.prototype.cutLayers = function (startLayerIndex, endLayerIndex) {
};
/**
 * @since Flash MX 2004
 * @param {number} [index]
 */
Timeline.prototype.deleteLayer = function (index) {
};
/**
 * @since Flash CS5.5
 * @param {number} [startLayerIndex]
 * @param {number} [endLayerIndex]
 */
Timeline.prototype.duplicateLayers = function (startLayerIndex, endLayerIndex) {
};
/**
 * @since Flash MX 2004
 * @param {boolean} bExpand
 * @param {boolean} [bRecurseNestedParents]
 * @param {number} [index]
 */
Timeline.prototype.expandFolder = function (bExpand, bRecurseNestedParents, index) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {Array.<number>}
 */
Timeline.prototype.findLayerIndex = function (name) {
};
/**
 * @since Flash CC
 * @param {number} [frame]
 * @param {boolean} [includeHiddenLayers]
 * @return {{left:number,top:number,right:number,bottom:number}}
 */
Timeline.prototype.getBounds = function (frame, includeHiddenLayers) {
};
/**
 * @since Flash MX 2004
 * @param {string} property
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 * @return {*}
 */
Timeline.prototype.getFrameProperty = function (property, startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS4
 * @return {string}
 */
Timeline.prototype.getGuidelines = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} property
 * @return {*}
 */
Timeline.prototype.getLayerProperty = function (property) {
};
/**
 * @since Flash MX 2004
 * @return {Array.<number>}
 */
Timeline.prototype.getSelectedFrames = function () {
};
/**
 * @since Flash MX 2004
 * @return {Array.<number>}
 */
Timeline.prototype.getSelectedLayers = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} [frameNumIndex]
 */
Timeline.prototype.insertBlankKeyframe = function (frameNumIndex) {
};
/**
 * @since Flash MX 2004
 * @param {number} [numFrames]
 * @param {boolean} [bAllLayers]
 * @param {number} [frameNumIndex]
 */
Timeline.prototype.insertFrames = function (numFrames, bAllLayers, frameNumIndex) {
};
/**
 * @since Flash MX 2004
 * @param {number} [frameNumIndex]
 */
Timeline.prototype.insertKeyframe = function (frameNumIndex) {
};
/**
 * @since Animate 2020
 * @param {number} startLayerNum
 * @param {number} endLayerNum
 * @return {Layer}
 */
Timeline.prototype.mergeLayers = function (startLayerNum, endLayerNum) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.pasteFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS5.5
 * @param {number} [layerIndex]
 * @return {number}
 */
Timeline.prototype.pasteLayers = function (layerIndex) {
};
/**
 * @since Flash CS3
 */
Timeline.prototype.pasteMotion = function () {
};
/**
 * @since Flash CS3
 */
Timeline.prototype.pasteMotionSpecial = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.removeFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS5
 * @param {number} [startFrame]
 * @param {number} [endFrame]
 */
Timeline.prototype.removeMotionObject = function (startFrame, endFrame) {
};
/**
 * @since Flash MX 2004
 * @param {number} layerToMove
 * @param {number} layerToPutItBy
 * @param {boolean} [bAddBefore]
 */
Timeline.prototype.reorderLayer = function (layerToMove, layerToPutItBy, bAddBefore) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.reverseFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 */
Timeline.prototype.selectAllFrames = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} property
 * @param {*} value
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.setFrameProperty = function (property, value, startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS4
 * @param xmlString
 * @return {boolean}
 */
Timeline.prototype.setGuidelines = function (xmlString) {
};
/**
 * @since Flash MX 2004
 * @param {string} property
 * @param {*} value
 * @param {"selected"|"all"|"others"} [layersToChange]
 */
Timeline.prototype.setLayerProperty = function (property, value, layersToChange) {
};
/**
 * @since Flash MX 2004
 * @param {number|Array.<number>} startFrameIndex
 * @param {number|boolean=} endFrameIndex
 * @param {boolean} [bReplaceCurrentSelection]
 */
Timeline.prototype.setSelectedFrames = function (startFrameIndex, endFrameIndex, bReplaceCurrentSelection) {
};
/**
 * @since Flash MX 2004
 * @param {number} index
 * @param {boolean} [bReplaceCurrentSelection]
 */
Timeline.prototype.setSelectedLayers = function (index, bReplaceCurrentSelection) {
};
/**
 * @since Flash MX 2004
 * @param {number} [layer]
 */
Timeline.prototype.showLayerMasking = function (layer) {
};
/**
 * @since Flash CS5
 */
Timeline.prototype.startPlayback = function () {
};
/**
 * @since Flash CS5
 */
Timeline.prototype.stopPlayback = function () {
};
/**
 * @since Flash MX 2004
 * @class {Layer}
 */
Layer = function () {
};
/**
 * @since Flash CS6
 * @type {"none"|"motion object"|"IK pose"}
 * @const
 */
Layer.prototype.animationType = undefined;
/**
 * @since Flash MX 2004
 * @type {string|number}
 */
Layer.prototype.color = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Layer.prototype.frameCount = 0;
/**
 * @since Flash MX 2004
 * @type {Array.<Frame>}
 * @const
 */
Layer.prototype.frames = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Layer.prototype.height = 0;
/**
 * @since Flash MX 2004
 * @type {"normal"|"guide"|"guided"|"mask"|"masked"|"folder"}
 */
Layer.prototype.layerType = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Layer.prototype.locked = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Layer.prototype.name = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Layer.prototype.outline = false;
/**
 * @since Flash MX 2004
 * @type {Layer}
 */
Layer.prototype.parentLayer = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Layer.prototype.visible = false;
/**
 * @since Animate 2020
 * @param {number} frameIndex
 * @return {string}
 */
Layer.prototype.getBlendModeAtFrame = function (frameIndex) {
};
/**
 * @since Animate 2020
 * @param {number} frameIndex
 * @return {{mode:string,tintPercent:number,tintRed:number,tintBlue:number,tintGreen:number,brightnessPercent:number,alphaPercent:number,colorAlphaAmount:number,colorAlphaPercent:number,colorRedAmount:number,colorRedPercent:number,colorGreenAmount:number,colorGreenPercent:number,colorBlueAmount:number,colorBluePercent:number}}
 */
Layer.prototype.getColorTransformAtFrame = function (frameIndex) {
};
/**
 * @since Animate 2020
 * @param {number} frameIndex
 * @return {Array.<Filter>}
 */
Layer.prototype.getFiltersAtFrame = function (frameIndex) {
};
/**
 * @since Animate 2020
 * @param {number} frameIndex
 * @return {Matrix}
 */
Layer.prototype.getRigMatrixAtFrame = function (frameIndex) {
};
/**
 * @since Animate 2020
 * @param {number} frameIndex
 * @return {Layer}
 */
Layer.prototype.getRigParentAtFrame = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @return {number}
 */
Layer.prototype.getZDepthAtFrame = function (frameIndex) {
};
/**
 * @since Animate 2020
 * @param {number} frameIndex
 * @param {string} blendModeString
 */
Layer.prototype.setBlendModeAtFrame = function (frameIndex, blendModeString) {
};
/**
 * @since Animate 2020
 * @param {number} frameIndex
 * @param {{mode:string,tintPercent:number,tintRed:number,tintBlue:number,tintGreen:number,brightnessPercent:number,alphaPercent:number,colorAlphaAmount:number,colorAlphaPercent:number,colorRedAmount:number,colorRedPercent:number,colorGreenAmount:number,colorGreenPercent:number,colorBlueAmount:number,colorBluePercent:number}} cxFormObject
 */
Layer.prototype.setColorTransformAtFrame = function (frameIndex, cxFormObject) {
};
/**
 * @since Animate 2020
 * @param {number} frameIndex
 * @param {Array.<Filter>} filterArray
 */
Layer.prototype.setFiltersAtFrame = function (frameIndex, filterArray) {
};
/**
 * @since Animate 2020
 * @param {number} frameIndex
 * @param {Layer} layer
 */
Layer.prototype.setRigParentAtFrame = function (frameIndex, layer) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @param {number} zVal
 */
Layer.prototype.setZDepthAtFrame = function (frameIndex, zVal) {
};
/**
 * @since Flash MX 2004
 * @class {Frame}
 */
Frame = function () {
};
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.actionScript = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Frame.prototype.duration = 0;
/**
 * @since Flash MX 2004
 * @type {Array.<Element>}
 * @const
 */
Frame.prototype.elements = undefined;
/**
 * @since Flash 8
 * @type {boolean}
 */
Frame.prototype.hasCustomEase = false;
/**
 * @since Flash MX 2004
 * @type {"none"|"name"|"comment"|"anchor"}
 */
Frame.prototype.labelType = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Frame.prototype.motionTweenOrientToPath = false;
/**
 * @since Flash MX 2004
 * @type {"none"|"auto"|"clockwise"|"counter-clockwise"}
 */
Frame.prototype.motionTweenRotate = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Frame.prototype.motionTweenRotateTimes = 0;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Frame.prototype.motionTweenScale = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Frame.prototype.motionTweenSnap = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Frame.prototype.motionTweenSync = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.name = undefined;
/**
 * @since Flash MX 2004
 * @type {"distributive"|"angular"}
 */
Frame.prototype.shapeTweenBlend = undefined;
/**
 * @since Flash MX 2004
 * @type {"none"|"left channel"|"right channel"|"fade left to right"|"fade right to left"|"fade in"|"fade out"|"custom"}
 */
Frame.prototype.soundEffect = undefined;
/**
 * @since Flash MX 2004
 * @type {SoundItem}
 */
Frame.prototype.soundLibraryItem = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Frame.prototype.soundLoop = 0;
/**
 * @since Flash MX 2004
 * @type {"repeat"|"loop"}
 */
Frame.prototype.soundLoopMode = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.soundName = undefined;
/**
 * @since Flash MX 2004
 * @type {"event"|"stop"|"start"|"stream"}
 */
Frame.prototype.soundSync = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Frame.prototype.startFrame = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Frame.prototype.tweenEasing = 0;
/**
 * @since Flash CS5
 * @type {string}
 */
Frame.prototype.tweenInstanceName = undefined;
/**
 * @since Flash MX 2004
 * @type {"motion"|"shape"|"none"}
 */
Frame.prototype.tweenType = undefined;
/**
 * @since Flash 8
 * @type {boolean}
 */
Frame.prototype.useSingleEaseCurve = false;
/**
 * @since Flash CS5
 */
Frame.prototype.convertMotionObjectTo2D = function () {
};
/**
 * @since Flash CS5
 */
Frame.prototype.convertMotionObjectTo3D = function () {
};
/**
 * @since Flash CC
 * @return {boolean}
 */
Frame.prototype.convertToFrameByFrameAnimation = function () {
};
/**
 * @since Flash MX 2004
 * @param {"all"|"position"|"rotation"|"scale"|"color"|"filters"} [property]
 * @return {Array.<{x:number,y:number}>}
 */
Frame.prototype.getCustomEase = function (property) {
};
/**
 * @since Flash CS5
 * @return {string}
 */
Frame.prototype.getMotionObjectXML = function () {
};
/**
 * @since Flash CC
 * @return {Array.<{mark:number,leftChannel:number,rightChannel:number}>}
 */
Frame.prototype.getSoundEnvelope = function () {
};
/**
 * @since Flash CC
 * @return {{start:number,end:number}}
 */
Frame.prototype.getSoundEnvelopeLimits = function () {
};
/**
 * @since Flash CS5
 * @return {boolean}
 */
Frame.prototype.hasMotionPath = function () {
};
/**
 * @since Flash CS5
 * @return {boolean}
 */
Frame.prototype.is3DMotionObject = function () {
};
/**
 * @since Flash CC
 * @return {boolean}
 */
Frame.prototype.isEmpty = function () {
};
/**
 * @since Flash CS5
 * @return {boolean}
 */
Frame.prototype.isMotionObject = function () {
};
/**
 * @since Flash CS5
 * @param {boolean} select
 */
Frame.prototype.selectMotionPath = function (select) {
};
/**
 * @since Flash 8
 * @param {"all"|"position"|"rotation"|"scale"|"color"|"filters"} property
 * @param {Array.<{x:number,y:number}>} easeCurve
 */
Frame.prototype.setCustomEase = function (property, easeCurve) {
};
/**
 * @since Flash CS5
 * @param {number} duration
 * @param {boolean} [stretchExistingKeyframes]
 */
Frame.prototype.setMotionObjectDuration = function (duration, stretchExistingKeyframes) {
};
/**
 * @since Flash CS5
 * @param {string} xmlstr
 * @param {boolean} [endAtCurrentLocation]
 */
Frame.prototype.setMotionObjectXML = function (xmlstr, endAtCurrentLocation) {
};
/**
 * @since Flash CC
 * @param {Array.<{mark:number,leftChannel:number,rightChannel:number}>} soundEnv
 */
Frame.prototype.setSoundEnvelope = function (soundEnv) {
};
/**
 * @since Flash CC
 * @param {{start:number,end:number}} limits
 */
Frame.prototype.setSoundEnvelopeLimits = function (limits) {
};
/**
 * @since Flash CC
 * @class {Tween}
 */
Tween = function () {
};
/**
 * @since Flash CC
 * @type {number}
 * @const
 */
Tween.prototype.duration = 0;
/**
 * @since Flash CC
 * @type {number}
 * @const
 */
Tween.prototype.startFrame = 0;
/**
 * @since Flash CC
 * @type {"motion"|"shape"|"none"}
 * @const
 */
Tween.prototype.tweenType = undefined;
/**
 * @since Flash CC
 * @param {number} frameIndex
 * @return {{colorAlphaAmount:number,colorAlphaPercent:number,colorRedAmount:number,colorRedPercent:number,colorGreenAmount:number,colorGreenPercent:number,colorBlueAmount:number,colorBluePercent:number}}
 */
Tween.prototype.getColorTransform = function (frameIndex) {
};
/**
 * @since Flash CC
 * @param {number} frameIndex
 * @return {Array.<Filter>}
 */
Tween.prototype.getFilters = function (frameIndex) {
};
/**
 * @since Flash CC
 * @param {number} frameIndex
 * @return {Matrix}
 */
Tween.prototype.getGeometricTransform = function (frameIndex) {
};
/**
 * @since Flash CC
 * @param {number} frameIndex
 * @return {Shape}
 */
Tween.prototype.getShape = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @class {Camera}
 */
Camera = function () {
};
/**
 * @since Animate 2019
 * @type {boolean}
 */
Camera.prototype.cameraEnabled = false;
/**
 * @since Animate 2019
 * @type {boolean}
 */
Camera.prototype.colorFilterEnabled = false;
/**
 * @since Animate 2019
 * @type {boolean}
 */
Camera.prototype.tintEnabled = false;
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @return {number}
 */
Camera.prototype.getZDepth = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @return {number}
 */
Camera.prototype.getZoom = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @return {number}
 */
Camera.prototype.getRotation = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @return {{x:number,y:number}}
 */
Camera.prototype.getPosition = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @return {{percent:number,red:number,green:number,blue:number}}
 */
Camera.prototype.getTint = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @return {{brightness:number,contrast:number,saturation:number,hue:number}}
 */
Camera.prototype.getColorFilter = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @param {number} tz
 */
Camera.prototype.setZDepth = function (frameIndex, tz) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @param {number} zoomVal
 */
Camera.prototype.setZoom = function (frameIndex, zoomVal) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @param {number} angleDegree
 */
Camera.prototype.setRotation = function (frameIndex, angleDegree) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @param {number} tx
 * @param {number} ty
 */
Camera.prototype.setPosition = function (frameIndex, tx, ty) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @param {number} percent
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 */
Camera.prototype.setTint = function (frameIndex, percent, red, green, blue) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 * @param {number} brightness
 * @param {number} contrast
 * @param {number} saturation
 * @param {number} hue
 */
Camera.prototype.setColorFilter = function (frameIndex, brightness, contrast, saturation, hue) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 */
Camera.prototype.resetZoom = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 */
Camera.prototype.resetRotation = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 */
Camera.prototype.resetPosition = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 */
Camera.prototype.resetTint = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 */
Camera.prototype.resetColorFilter = function (frameIndex) {
};
/**
 * @since Animate 2019
 * @param {number} frameIndex
 */
Camera.prototype.reset = function (frameIndex) {
};