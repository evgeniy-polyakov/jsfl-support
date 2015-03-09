/*
 * Copyright 2011 Evgeniy Polyakov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/***************************************************************************
 * JSFL API
 * Timeline objects
 **************************************************************************/
/**
 * @since Flash MX 2004
 */
function Timeline () {
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.currentFrame = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.currentLayer = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.frameCount = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.layerCount = 0;
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.layers = null;
    /**
     * @since Flash CS5
     * @type SymbolItem
     * @const
     */
    this.libraryItem = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.name = null;
    /**
     * @since Flash MX 2004
     * @return Number
     */
    this.addMotionGuide = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [name]
     * @param {String} [layerType]
     * @param {Boolean} [bAddAbove]
     * @return Number
     */
    this.addNewLayer = function (name, layerType, bAddAbove) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.clearFrames = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.clearKeyframes = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.convertToBlankKeyframes = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.convertToKeyframes = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.copyFrames = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash CS5.5
     * @param {Number} [startLayerIndex]
     * @param {Number} [endLayerIndex]
     */
    this.copyLayers = function (startLayerIndex, endLayerIndex) {
    };
    /**
     * @since Flash CS3
     */
    this.copyMotion = function () {
    };
    /**
     * @since Flash CS3
     */
    this.copyMotionAsAS3 = function () {
    };
    /**
     * @since Flash CS5
     * @param {Number} [startFrame]
     * @param {Number} [endFrame]
     */
    this.createMotionObject = function (startFrame, endFrame) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.createMotionTween = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.cutFrames = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash CS5.5
     * @param {Number} [startLayerIndex]
     * @param {Number} [endLayerIndex]
     */
    this.cutLayers = function (startLayerIndex, endLayerIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [index]
     */
    this.deleteLayer = function (index) {
    };
    /**
     * @since Flash CS5.5
     * @param {Number} [startLayerIndex]
     * @param {Number} [endLayerIndex]
     */
    this.duplicateLayers = function (startLayerIndex, endLayerIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} bExpand
     * @param {Boolean} [bRecurseNestedParents]
     * @param {Number} [index]
     */
    this.expandFolder = function (bExpand, bRecurseNestedParents, index) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @return Array
     */
    this.findLayerIndex = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} property
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     * @return Object
     */
    this.getFrameProperty = function (property, startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash CS4
     * @return String
     */
    this.getGuidelines = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} property
     * @return Object
     */
    this.getLayerProperty = function (property) {
    };
    /**
     * @since Flash MX 2004
     * @return Array
     */
    this.getSelectedFrames = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Array
     */
    this.getSelectedLayers = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [frameNumIndex]
     */
    this.insertBlankKeyframe = function (frameNumIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [numFrames]
     * @param {Boolean} [bAllLayers]
     * @param {Number} [frameNumIndex]
     */
    this.insertFrames = function (numFrames, bAllLayers, frameNumIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [frameNumIndex]
     */
    this.insertKeyframe = function (frameNumIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.pasteFrames = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash CS5.5
     * @param {Number} [layerIndex]
     * @return Number
     */
    this.pasteLayers = function (layerIndex) {
    };
    /**
     * @since Flash CS3
     */
    this.pasteMotion = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.removeFrames = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash CS5
     * @param {Number} [startFrame]
     * @param {Number} [endFrame]
     */
    this.removeMotionObject = function (startFrame, endFrame) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} layerToMove
     * @param {Number} layerToPutItBy
     * @param {Boolean} [bAddBefore]
     */
    this.reorderLayer = function (layerToMove, layerToPutItBy, bAddBefore) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.reverseFrames = function (startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash MX 2004
     */
    this.selectAllFrames = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} property
     * @param {Object} value
     * @param {Number} [startFrameIndex]
     * @param {Number} [endFrameIndex]
     */
    this.setFrameProperty = function (property, value, startFrameIndex, endFrameIndex) {
    };
    /**
     * @since Flash CS4
     * @param xmlString
     * @return Boolean
     */
    this.setGuidelines = function (xmlString) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} property
     * @param {Object} value
     * @param {String} [layersToChange]
     */
    this.setLayerProperty = function (property, value, layersToChange) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} startFrameIndex
     * @param {Number} endFrameIndex
     * @param {Boolean} [bReplaceCurrentSelection]
     */
    this.setSelectedFrames = function (startFrameIndex, endFrameIndex, bReplaceCurrentSelection) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} index
     * @param {Boolean} [bReplaceCurrentSelection]
     */
    this.setSelectedLayers = function (index, bReplaceCurrentSelection) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [layer]
     */
    this.showLayerMasking = function (layer) {
    };
    /**
     * @since Flash CS5
     */
    this.startPlayback = function () {
    };
    /**
     * @since Flash CS5
     */
    this.stopPlayback = function () {
    };
}

/**
 * @since Flash MX 2004
 */
function Layer () {
    /**
     * @since Flash CS6
     * @type String
     * @const
     */
    this.animationType = null;
    /**
     * @since Flash MX 2004
     * @type Object
     */
    this.color = null;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.frameCount = 0;
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.frames = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.height = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.layerType = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.locked = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.name = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.outline = false;
    /**
     * @since Flash MX 2004
     * @type Layer
     */
    this.parentLayer = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.visible = false;
}

/**
 * @since Flash MX 2004
 */
function Frame () {
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.actionScript = null;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.duration = 0;
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.elements = null;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.hasCustomEase = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.labelType = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.motionTweenOrientToPath = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.motionTweenRotate = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.motionTweenRotateTimes = 0;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.motionTweenScale = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.motionTweenSnap = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.motionTweenSync = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.name = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.shapeTweenBlend = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.soundEffect = null;
    /**
     * @since Flash MX 2004
     * @type SoundItem
     */
    this.soundLibraryItem = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.soundLoop = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.soundLoopMode = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.soundName = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.soundSync = null;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.startFrame = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.tweenEasing = 0;
    /**
     * @since Flash CS5
     * @type String
     */
    this.tweenInstanceName = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.tweenType = null;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.useSingleEaseCurve = false;
    /**
     * @since Flash CS5
     */
    this.convertMotionObjectTo2D = function () {
    };
    /**
     * @since Flash CS5
     */
    this.convertMotionObjectTo3D = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [property]
     * @return Array
     */
    this.getCustomEase = function (property) {
    };
    /**
     * @since Flash CS5
     * @return String
     */
    this.getMotionObjectXML = function () {
    };
    /**
     * @since Flash CS5
     * @return Boolean
     */
    this.hasMotionPath = function () {
    };
    /**
     * @since Flash CS5
     * @return Boolean
     */
    this.is3DMotionObject = function () {
    };
    /**
     * @since Flash CS5
     * @return Boolean
     */
    this.isMotionObject = function () {
    };
    /**
     * @since Flash CS5
     * @param {Boolean} select
     */
    this.selectMotionPath = function (select) {
    };
    /**
     * @since Flash 8
     * @param {String} property
     * @param {Array} easeCurve
     */
    this.setCustomEase = function (property, easeCurve) {
    };
    /**
     * @since Flash CS5
     * @param {Number} duration
     * @param {Boolean} [stretchExistingKeyframes]
     */
    this.setMotionObjectDuration = function (duration, stretchExistingKeyframes) {
    };
    /**
     * @since Flash CS5
     * @param {String} xmlstr
     * @param {Boolean} [endAtCurrentLocation]
     */
    this.setMotionObjectXML = function (xmlstr, endAtCurrentLocation) {
    };
}

