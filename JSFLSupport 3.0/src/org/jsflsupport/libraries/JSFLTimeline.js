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
Timeline.prototype.layers = null;
/**
 * @since Flash CS5
 * @type {SymbolItem}
 * @const
 */
Timeline.prototype.libraryItem = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Timeline.prototype.name = null;
/**
 * @since Flash MX 2004
 * @return {number}
 */
Timeline.prototype.addMotionGuide = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} [name]
 * @param {string} [layerType]
 * @param {Boolean} [bAddAbove]
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
 * @param {Boolean} bExpand
 * @param {Boolean} [bRecurseNestedParents]
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
 * @param {Boolean} [includeHiddenLayers]
 * @return {{left:number,top:number,right:number,bottom:number}}
 */
Timeline.prototype.getBounds = function (frame, includeHiddenLayers) {
};
/**
 * @since Flash MX 2004
 * @param {string} property
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 * @return {Object}
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
 * @return {Object}
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
 * @param {Boolean} [bAllLayers]
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
 * @param {Boolean} [bAddBefore]
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
 * @param {Object} value
 * @param {number} [startFrameIndex]
 * @param {number} [endFrameIndex]
 */
Timeline.prototype.setFrameProperty = function (property, value, startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS4
 * @param xmlString
 * @return {Boolean}
 */
Timeline.prototype.setGuidelines = function (xmlString) {
};
/**
 * @since Flash MX 2004
 * @param {string} property
 * @param {Object} value
 * @param {string} [layersToChange]
 */
Timeline.prototype.setLayerProperty = function (property, value, layersToChange) {
};
/**
 * @since Flash MX 2004
 * @param {number|Array.<number>} startFrameIndex
 * @param {number|Boolean=} endFrameIndex
 * @param {Boolean} [bReplaceCurrentSelection]
 */
Timeline.prototype.setSelectedFrames = function (startFrameIndex, endFrameIndex, bReplaceCurrentSelection) {
};
/**
 * @since Flash MX 2004
 * @param {number} index
 * @param {Boolean} [bReplaceCurrentSelection]
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
 * @type {string}
 * @const
 */
Layer.prototype.animationType = null;
/**
 * @since Flash MX 2004
 * @type {string|number}
 */
Layer.prototype.color = null;
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
Layer.prototype.frames = null;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Layer.prototype.height = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Layer.prototype.layerType = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Layer.prototype.locked = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Layer.prototype.name = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Layer.prototype.outline = false;
/**
 * @since Flash MX 2004
 * @type {Layer}
 */
Layer.prototype.parentLayer = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Layer.prototype.visible = false;
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
Frame.prototype.actionScript = null;
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
Frame.prototype.elements = null;
/**
 * @since Flash 8
 * @type {Boolean}
 */
Frame.prototype.hasCustomEase = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.labelType = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Frame.prototype.motionTweenOrientToPath = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.motionTweenRotate = null;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Frame.prototype.motionTweenRotateTimes = 0;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Frame.prototype.motionTweenScale = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Frame.prototype.motionTweenSnap = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Frame.prototype.motionTweenSync = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.name = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.shapeTweenBlend = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.soundEffect = null;
/**
 * @since Flash MX 2004
 * @type {SoundItem}
 */
Frame.prototype.soundLibraryItem = null;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Frame.prototype.soundLoop = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.soundLoopMode = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.soundName = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.soundSync = null;
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
Frame.prototype.tweenInstanceName = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Frame.prototype.tweenType = null;
/**
 * @since Flash 8
 * @type {Boolean}
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
 * @return {Boolean}
 */
Frame.prototype.convertToFrameByFrameAnimation = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} [property]
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
 * @return {Boolean}
 */
Frame.prototype.hasMotionPath = function () {
};
/**
 * @since Flash CS5
 * @return {Boolean}
 */
Frame.prototype.is3DMotionObject = function () {
};
/**
 * @since Flash CC
 * @return {Boolean}
 */
Frame.prototype.isEmpty = function () {
};
/**
 * @since Flash CS5
 * @return {Boolean}
 */
Frame.prototype.isMotionObject = function () {
};
/**
 * @since Flash CS5
 * @param {Boolean} select
 */
Frame.prototype.selectMotionPath = function (select) {
};
/**
 * @since Flash 8
 * @param {string} property
 * @param {Array.<{x:number,y:number}>} easeCurve
 */
Frame.prototype.setCustomEase = function (property, easeCurve) {
};
/**
 * @since Flash CS5
 * @param {number} duration
 * @param {Boolean} [stretchExistingKeyframes]
 */
Frame.prototype.setMotionObjectDuration = function (duration, stretchExistingKeyframes) {
};
/**
 * @since Flash CS5
 * @param {string} xmlstr
 * @param {Boolean} [endAtCurrentLocation]
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
 * @type {string}
 * @const
 */
Tween.prototype.tweenType = null;
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