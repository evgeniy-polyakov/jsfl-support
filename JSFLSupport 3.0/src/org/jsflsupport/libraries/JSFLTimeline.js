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
 * @type {Number}
 */
Timeline.prototype.currentFrame = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Timeline.prototype.currentLayer = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 * @const
 */
Timeline.prototype.frameCount = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
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
 * @type {String}
 */
Timeline.prototype.name = null;
/**
 * @since Flash MX 2004
 * @return {Number}
 */
Timeline.prototype.addMotionGuide = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} [name]
 * @param {String} [layerType]
 * @param {Boolean} [bAddAbove]
 * @return {Number}
 */
Timeline.prototype.addNewLayer = function (name, layerType, bAddAbove) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 */
Timeline.prototype.clearFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 */
Timeline.prototype.clearKeyframes = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 */
Timeline.prototype.convertToBlankKeyframes = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 */
Timeline.prototype.convertToKeyframes = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 */
Timeline.prototype.copyFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS5.5
 * @param {Number} [startLayerIndex]
 * @param {Number} [endLayerIndex]
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
 * @param {Number} [startFrame]
 * @param {Number} [endFrame]
 */
Timeline.prototype.createMotionObject = function (startFrame, endFrame) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 */
Timeline.prototype.createMotionTween = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 */
Timeline.prototype.cutFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS5.5
 * @param {Number} [startLayerIndex]
 * @param {Number} [endLayerIndex]
 */
Timeline.prototype.cutLayers = function (startLayerIndex, endLayerIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [index]
 */
Timeline.prototype.deleteLayer = function (index) {
};
/**
 * @since Flash CS5.5
 * @param {Number} [startLayerIndex]
 * @param {Number} [endLayerIndex]
 */
Timeline.prototype.duplicateLayers = function (startLayerIndex, endLayerIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} bExpand
 * @param {Boolean} [bRecurseNestedParents]
 * @param {Number} [index]
 */
Timeline.prototype.expandFolder = function (bExpand, bRecurseNestedParents, index) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 * @return {Array.<Number>}
 */
Timeline.prototype.findLayerIndex = function (name) {
};
/**
 * @since Flash CC
 * @param {Number} [frame]
 * @param {Boolean} [includeHiddenLayers]
 * @return {{left:Number,top:Number,right:Number,bottom:Number}}
 */
Timeline.prototype.getBounds = function (frame, includeHiddenLayers) {
};
/**
 * @since Flash MX 2004
 * @param {String} property
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 * @return {Object}
 */
Timeline.prototype.getFrameProperty = function (property, startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS4
 * @return {String}
 */
Timeline.prototype.getGuidelines = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} property
 * @return {Object}
 */
Timeline.prototype.getLayerProperty = function (property) {
};
/**
 * @since Flash MX 2004
 * @return {Array.<Number>}
 */
Timeline.prototype.getSelectedFrames = function () {
};
/**
 * @since Flash MX 2004
 * @return {Array.<Number>}
 */
Timeline.prototype.getSelectedLayers = function () {
};
/**
 * @since Flash MX 2004
 * @param {Number} [frameNumIndex]
 */
Timeline.prototype.insertBlankKeyframe = function (frameNumIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [numFrames]
 * @param {Boolean} [bAllLayers]
 * @param {Number} [frameNumIndex]
 */
Timeline.prototype.insertFrames = function (numFrames, bAllLayers, frameNumIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [frameNumIndex]
 */
Timeline.prototype.insertKeyframe = function (frameNumIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 */
Timeline.prototype.pasteFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS5.5
 * @param {Number} [layerIndex]
 * @return {Number}
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
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
 */
Timeline.prototype.removeFrames = function (startFrameIndex, endFrameIndex) {
};
/**
 * @since Flash CS5
 * @param {Number} [startFrame]
 * @param {Number} [endFrame]
 */
Timeline.prototype.removeMotionObject = function (startFrame, endFrame) {
};
/**
 * @since Flash MX 2004
 * @param {Number} layerToMove
 * @param {Number} layerToPutItBy
 * @param {Boolean} [bAddBefore]
 */
Timeline.prototype.reorderLayer = function (layerToMove, layerToPutItBy, bAddBefore) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
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
 * @param {String} property
 * @param {Object} value
 * @param {Number} [startFrameIndex]
 * @param {Number} [endFrameIndex]
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
 * @param {String} property
 * @param {Object} value
 * @param {String} [layersToChange]
 */
Timeline.prototype.setLayerProperty = function (property, value, layersToChange) {
};
/**
 * @since Flash MX 2004
 * @param {Number|Array.<Number>} startFrameIndex
 * @param {Number|Boolean=} endFrameIndex
 * @param {Boolean} [bReplaceCurrentSelection]
 */
Timeline.prototype.setSelectedFrames = function (startFrameIndex, endFrameIndex, bReplaceCurrentSelection) {
};
/**
 * @since Flash MX 2004
 * @param {Number} index
 * @param {Boolean} [bReplaceCurrentSelection]
 */
Timeline.prototype.setSelectedLayers = function (index, bReplaceCurrentSelection) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [layer]
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
 * @type {String}
 * @const
 */
Layer.prototype.animationType = null;
/**
 * @since Flash MX 2004
 * @type {String|Number}
 */
Layer.prototype.color = null;
/**
 * @since Flash MX 2004
 * @type {Number}
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
 * @type {Number}
 */
Layer.prototype.height = 0;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Layer.prototype.layerType = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Layer.prototype.locked = false;
/**
 * @since Flash MX 2004
 * @type {String}
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
 * @type {String}
 */
Frame.prototype.actionScript = null;
/**
 * @since Flash MX 2004
 * @type {Number}
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
 * @type {String}
 */
Frame.prototype.labelType = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Frame.prototype.motionTweenOrientToPath = false;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Frame.prototype.motionTweenRotate = null;
/**
 * @since Flash MX 2004
 * @type {Number}
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
 * @type {String}
 */
Frame.prototype.name = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Frame.prototype.shapeTweenBlend = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Frame.prototype.soundEffect = null;
/**
 * @since Flash MX 2004
 * @type {SoundItem}
 */
Frame.prototype.soundLibraryItem = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Frame.prototype.soundLoop = 0;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Frame.prototype.soundLoopMode = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Frame.prototype.soundName = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Frame.prototype.soundSync = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 * @const
 */
Frame.prototype.startFrame = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Frame.prototype.tweenEasing = 0;
/**
 * @since Flash CS5
 * @type {String}
 */
Frame.prototype.tweenInstanceName = null;
/**
 * @since Flash MX 2004
 * @type {String}
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
 * @param {String} [property]
 * @return {Array.<{x:Number,y:Number}>}
 */
Frame.prototype.getCustomEase = function (property) {
};
/**
 * @since Flash CS5
 * @return {String}
 */
Frame.prototype.getMotionObjectXML = function () {
};
/**
 * @since Flash CC
 * @return {Array.<{mark:Number,leftChannel:Number,rightChannel:Number}>}
 */
Frame.prototype.getSoundEnvelope = function () {
};
/**
 * @since Flash CC
 * @return {{start:Number,end:Number}}
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
 * @param {String} property
 * @param {Array.<{x:Number,y:Number}>} easeCurve
 */
Frame.prototype.setCustomEase = function (property, easeCurve) {
};
/**
 * @since Flash CS5
 * @param {Number} duration
 * @param {Boolean} [stretchExistingKeyframes]
 */
Frame.prototype.setMotionObjectDuration = function (duration, stretchExistingKeyframes) {
};
/**
 * @since Flash CS5
 * @param {String} xmlstr
 * @param {Boolean} [endAtCurrentLocation]
 */
Frame.prototype.setMotionObjectXML = function (xmlstr, endAtCurrentLocation) {
};
/**
 * @since Flash CC
 * @param {Array.<{mark:Number,leftChannel:Number,rightChannel:Number}>} soundEnv
 */
Frame.prototype.setSoundEnvelope = function (soundEnv) {
};
/**
 * @since Flash CC
 * @param {{start:Number,end:Number}} limits
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
 * @type {Number}
 * @const
 */
Tween.prototype.duration = 0;
/**
 * @since Flash CC
 * @type {Number}
 * @const
 */
Tween.prototype.startFrame = 0;
/**
 * @since Flash CC
 * @type {String}
 * @const
 */
Tween.prototype.tweenType = null;
/**
 * @since Flash CC
 * @param {Number} frameIndex
 * @return {{colorAlphaAmount:Number,colorAlphaPercent:Number,colorRedAmount:Number,colorRedPercent:Number,colorGreenAmount:Number,colorGreenPercent:Number,colorBlueAmount:Number,colorBluePercent:Number}}
 */
Tween.prototype.getColorTransform = function (frameIndex) {
};
/**
 * @since Flash CC
 * @param {Number} frameIndex
 * @return {Array.<Filter>}
 */
Tween.prototype.getFilters = function (frameIndex) {
};
/**
 * @since Flash CC
 * @param {Number} frameIndex
 * @return {Matrix}
 */
Tween.prototype.getGeometricTransform = function (frameIndex) {
};
/**
 * @since Flash CC
 * @param {Number} frameIndex
 * @return {Shape}
 */
Tween.prototype.getShape = function (frameIndex) {
};