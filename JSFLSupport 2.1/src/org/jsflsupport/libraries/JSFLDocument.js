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
 * Flash documents
 **************************************************************************/
/**
 * @since Flash MX 2004
 */
function Document () {
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.accName = null;
    /**
     * @since Flash CS3
     * @type Boolean
     */
    this.as3AutoDeclare = false;
    /**
     * @since Flash CS3
     * @type String
     */
    this.as3Dialect = null;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.as3ExportFrame = 0;
    /**
     * @since Flash CS3
     * @type Boolean
     */
    this.as3StrictMode = false;
    /**
     * @since Flash CS3
     * @type Boolean
     */
    this.as3WarningsMode = false;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.asVersion = 0;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.autoLabel = false;
    /**
     * @since Flash MX 2004
     * @type Object
     */
    this.backgroundColor = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.currentPublishProfile = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.currentTimeline = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.description = null;
    /**
     * @since Flash CS3
     * @type String
     */
    this.docClass = null;
    /**
     * @since Flash CS4
     * @type String
     */
    this.externalLibraryPath = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.forceSimple = false;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.frameRate = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.height = 0;
    /**
     * @since Flash CS3
     * @type Number
     * @const
     */
    this.id = 0;
    /**
     * @since Flash MX 2004
     * @type library
     * @const
     */
    this.library = null;
    /**
     * @since Flash CS4
     * @type String
     */
    this.libraryPath = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.livePreview = false;
    /**
     * @since Flash MX 2004
     * @type String
     * @const
     */
    this.name = null;
    /**
     * @since Flash MX 2004
     * @type String
     * @const
     */
    this.path = null;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.pathURI = null;
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.publishProfiles = null;
    /**
     * @since Flash MX 2004
     * @type ScreenOutline
     * @const
     */
    this.screenOutline = null;
    /**
     * @since Flash MX 2004
     * @type Array
     */
    this.selection = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.silent = false;
    /**
     * @since Flash CS4
     * @type String
     */
    this.sourcePath = null;
    /**
     * @since Flash CS6
     * @type Number
     */
    this.swfJPEGQuality = null;
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.timelines = null;
    /**
     * @since Flash MX 2004
     * @type Matrix
     * @const
     */
    this.viewMatrix = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.width = 0;
    /**
     * @since Flash 8
     * @type Number
     */
    this.zoomFactor = 0;
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @param {String} type
     * @param {Object} data
     */
    this.addDataToDocument = function (name, type, data) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @param {String} type
     * @param {Object} data
     */
    this.addDataToSelection = function (name, type, data) {
    };
    /**
     * @since Flash 8
     * @param {String} filterName
     */
    this.addFilter = function (filterName) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} position
     * @param {Item} item
     * @return Boolean
     */
    this.addItem = function (position, item) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} startPoint
     * @param {Object} endpoint
     */
    this.addNewLine = function (startPoint, endpoint) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} boundingRectangle
     * @param {Boolean} [bSuppressFill]
     * @param {Boolean} [bSuppressStroke]
     */
    this.addNewOval = function (boundingRectangle, bSuppressFill, bSuppressStroke) {
    };
    /**
     * @since Flash CS4
     * @param {Object} boundingRectangle
     * @param {Boolean} [bSuppressFill]
     * @param {Boolean} [bSuppressStroke]
     */
    this.addNewPrimitiveOval = function (boundingRectangle, bSuppressFill, bSuppressStroke) {
    };
    /**
     * @since Flash CS4
     * @param {Object} boundingRectangle
     * @param {Number} roundness
     * @param {Boolean} [bSuppressFill]
     * @param {Boolean} [bSuppressStroke]
     */
    this.addNewPrimitiveRectangle = function (boundingRectangle, roundness, bSuppressFill, bSuppressStroke) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} profileName
     * @return Number
     */
    this.addNewPublishProfile = function (profileName) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} boundingRectangle
     * @param {Number} roundness
     * @param {Boolean} [bSuppressFill]
     * @param {Boolean} [bSuppressStroke]
     */
    this.addNewRectangle = function (boundingRectangle, roundness, bSuppressFill, bSuppressStroke) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [name]
     * @return Boolean
     */
    this.addNewScene = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} boundingRectangle
     * @param {String} [text]
     */
    this.addNewText = function (boundingRectangle, text) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} alignMode
     * @param {Boolean} [bUseDocumentBounds]
     */
    this.align = function (alignMode, bUseDocumentBounds) {
    };
    /**
     * @since Flash MX 2004
     * @return Boolean
     */
    this.allowScreens = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} arrangeMode
     */
    this.arrange = function (arrangeMode) {
    };
    /**
     * @since Flash MX 2004
     */
    this.breakApart = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Boolean
     */
    this.canEditSymbol = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Boolean
     */
    this.canRevert = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Boolean
     */
    this.canTestMovie = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Boolean
     */
    this.canTestScene = function () {
    };
    /**
     * @since Flash 8
     * @param {Number} oldIndex
     * @param {Number} newIndex
     */
    this.changeFilterOrder = function (oldIndex, newIndex) {
    };
    /**
     * @since Flash MX 2004
     */
    this.clipCopy = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.clipCut = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} [bInPlace]
     */
    this.clipPaste = function (bInPlace) {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} [bPromptToSaveChanges]
     */
    this.close = function (bPromptToSaveChanges) {
    };
    /**
     * @since Flash MX 2004
     */
    this.convertLinesToFills = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} type
     * @param {String} name
     * @param {String} registrationPoint
     * @return SymbolItem
     */
    this.convertToSymbol = function (type, name, registrationPoint) {
    };
    /**
     * @since Flash 8
     * @return Boolean
     */
    this.crop = function () {
    };
    /**
     * @since Flash CS5
     * @param {Boolean} [abortIfErrorsExist]
     */
    this.debugMovie = function (abortIfErrorsExist) {
    };
    /**
     * @since Flash 8
     * @return Boolean
     */
    this.deleteEnvelope = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Number
     */
    this.deletePublishProfile = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Boolean
     */
    this.deleteScene = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.deleteSelection = function () {
    };
    /**
     * @since Flash 8
     */
    this.disableAllFilters = function () {
    };
    /**
     * @since Flash 8
     * @param {Number} filterIndex
     */
    this.disableFilter = function (filterIndex) {
    };
    /**
     * @since Flash 8
     * @param {Number} enabledFilterIndex
     */
    this.disableOtherFilters = function (enabledFilterIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} distributeMode
     * @param {Boolean} [bUseDocumentBounds]
     */
    this.distribute = function (distributeMode, bUseDocumentBounds) {
    };
    /**
     * @since Flash MX 2004
     */
    this.distributeToLayers = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @return Boolean
     */
    this.documentHasData = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [profileName]
     * @return Number
     */
    this.duplicatePublishProfile = function (profileName) {
    };
    /**
     * @since Flash MX 2004
     * @return Boolean
     */
    this.duplicateScene = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.duplicateSelection = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} index
     */
    this.editScene = function (index) {
    };
    /**
     * @since Flash 8
     */
    this.enableAllFilters = function () {
    };
    /**
     * @since Flash 8
     * @param {Number} filterIndex
     */
    this.enableFilter = function (filterIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [editMode]
     */
    this.enterEditMode = function (editMode) {
    };
    /**
     * @since Flash MX 2004
     */
    this.exitEditMode = function () {
    };
    /**
     * @since Flash CS6
     * @param {Number} frameNumber
     * @param {String} bitmapName
     */
    this.exportInstanceToLibrary = function (frameNumber, bitmapName) {
    };
    /**
     * @since Flash CS6
     * @param {String} outputURI
     * @param {Number} [startFrameNum]
     * @param {Number} [endFrameNum]
     * @param {Matrix} [matrix]
     */
    this.exportInstanceToPNGSequence = function (outputURI, startFrameNum, endFrameNum, matrix) {
    };
    /**
     * @since Flash 8
     * @param {String} fileURI
     * @param {Boolean} [bCurrentPNGSettings]
     * @param {Boolean} [bCurrentFrame]
     * @return Boolean
     */
    this.exportPNG = function (fileURI, bCurrentPNGSettings, bCurrentFrame) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} fileURI
     */
    this.exportPublishProfile = function (fileURI) {
    };
    /**
     * @since Flash CS4
     * @param {String} [profileName]
     * @return String
     */
    this.exportPublishProfileString = function (profileName) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [fileURI]
     * @param {Boolean} [bCurrentSettings]
     */
    this.exportSWF = function (fileURI, bCurrentSettings) {
    };
    /**
     * @since Flash MX 2004
     * @return Boolean
     */
    this.getAlignToDocument = function () {
    };
    /**
     * @since Flash 8
     * @return String
     */
    this.getBlendMode = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [objectToFill]
     * @return Fill
     */
    this.getCustomFill = function (objectToFill) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [locationOfStroke]
     * @return Stroke
     */
    this.getCustomStroke = function (locationOfStroke) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @return Object
     */
    this.getDataFromDocument = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} propertyName
     * @return Object
     */
    this.getElementProperty = function (propertyName) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} attrName
     * @param {Number} [startIndex]
     * @param {Number} [endIndex]
     * @return Object
     */
    this.getElementTextAttr = function (attrName, startIndex, endIndex) {
    };
    /**
     * @since Flash 8
     * @return Array
     */
    this.getFilters = function () {
    };
    /**
     * @since Flash 8
     * @return String
     */
    this.getMetadata = function () {
    };
    /**
     * @since Flash CS3
     * @return String
     */
    this.getMobileSettings = function () {
    };
    /**
     * @since Flash CS3
     * @return String
     */
    this.getPlayerVersion = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Object
     */
    this.getSelectionRect = function () {
    };
    /**
     * @since Flash CS6
     * @return String
     */
    this.getSWFPathFromProfile = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} [startIndex]
     * @param {Number} [endIndex]
     * @return String
     */
    this.getTextString = function (startIndex, endIndex) {
    };
    /**
     * @since Flash MX 2004
     * @return Timeline
     */
    this.getTimeline = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Object
     */
    this.getTransformationPoint = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.group = function () {
    };
    /**
     * @since Flash 8
     * @param {String} fileURI
     * @param {Boolean} [importToLibrary]
     * @return Boolean
     */
    this.importFile = function (fileURI, importToLibrary) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} fileURI
     * @return Number
     */
    this.importPublishProfile = function (fileURI) {
    };
    /**
     * @since Flash CS4
     * @param {String} xmlString
     * @return Boolean
     */
    this.importPublishProfileString = function (xmlString) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} fileURI
     */
    this.importSWF = function (fileURI) {
    };
    /**
     * @since Flash 8
     * @return Boolean
     */
    this.intersect = function () {
    };
    /**
     * @since Flash CS5
     * @param {String} URI
     */
    this.loadCuepointXML = function (URI) {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} bWidth
     * @param {Boolean} bHeight
     * @param {Boolean} [bUseDocumentBounds]
     */
    this.match = function (bWidth, bHeight, bUseDocumentBounds) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} position
     * @param {Boolean} bToggleSel
     * @param {Boolean} bShiftSel
     */
    this.mouseClick = function (position, bToggleSel, bShiftSel) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} position
     * @param {Boolean} bAltDown
     * @param {Boolean} bShiftDown
     * @param {Boolean} bShiftSelect
     */
    this.mouseDblClk = function (position, bAltDown, bShiftDown, bShiftSelect) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} delta
     */
    this.moveSelectedBezierPointsBy = function (delta) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} distanceToMove
     */
    this.moveSelectionBy = function (distanceToMove) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} smoothing
     * @param {Boolean} bUseMultiplePasses
     */
    this.optimizeCurves = function (smoothing, bUseMultiplePasses) {
    };
    /**
     * @since Flash MX 2004
     */
    this.publish = function () {
    };
    /**
     * @since Flash 8
     * @return Boolean
     */
    this.punch = function () {
    };
    /**
     * @since Flash 8
     */
    this.removeAllFilters = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     */
    this.removeDataFromDocument = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     */
    this.removeDataFromSelection = function (name) {
    };
    /**
     * @since Flash 8
     * @param {Number} filterIndex
     */
    this.removeFilter = function (filterIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [profileNewName]
     * @return Boolean
     */
    this.renamePublishProfile = function (profileNewName) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @return Boolean
     */
    this.renameScene = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} sceneToMove
     * @param {Number} sceneToPutItBefore
     */
    this.reorderScene = function (sceneToMove, sceneToPutItBefore) {
    };
    /**
     * @since Flash CS3
     */
    this.resetOvalObject = function () {
    };
    /**
     * @since Flash CS3
     */
    this.resetRectangleObject = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.resetTransformation = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.revert = function () {
    };
    /**
     * @since Flash CS4
     * @param {Object} xyzCoordinate
     * @param {Boolean} bGlobalTransform
     */
    this.rotate3DSelection = function (xyzCoordinate, bGlobalTransform) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} angle
     * @param {String} [rotationPoint]
     */
    this.rotateSelection = function (angle, rotationPoint) {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} [bOkToSaveAs]
     * @return Boolean
     */
    this.save = function (bOkToSaveAs) {
    };
    /**
     * @since Flash CS6
     * @param {String} URI
     * @param {Boolean} [selectionOnly]
     * @return Boolean
     */
    this.saveAsCopy = function (URI, selectionOnly) {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} [bOkToSaveAs]
     * @return Boolean
     */
    this.saveAndCompact = function (bOkToSaveAs) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} xScale
     * @param {Number} yScale
     * @param {String} whichCorner
     */
    this.scaleSelection = function (xScale, yScale, whichCorner) {
    };
    /**
     * @since Flash MX 2004
     */
    this.selectAll = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.selectNone = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} bToStage
     */
    this.setAlignToDocument = function (bToStage) {
    };
    /**
     * @since Flash 8
     * @param {String} mode
     */
    this.setBlendMode = function (mode) {
    };
    /**
     * @since Flash MX 2004
     * @param {Fill} fill
     */
    this.setCustomFill = function (fill) {
    };
    /**
     * @since Flash MX 2004
     * @param {Stroke} stroke
     */
    this.setCustomStroke = function (stroke) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} property
     * @param {Object} value
     */
    this.setElementProperty = function (property, value) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} attrName
     * @param {Object} attrValue
     * @param {Number} [startIndex]
     * @param {Number} [endIndex]
     * @return Boolean
     */
    this.setElementTextAttr = function (attrName, attrValue, startIndex, endIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} color
     */
    this.setFillColor = function (color) {
    };
    /**
     * @since Flash 8
     * @param {String} property
     * @param {Number} filterIndex
     * @param {Object} value
     */
    this.setFilterProperty = function (property, filterIndex, value) {
    };
    /**
     * @since Flash 8
     * @param {Array} filterArray
     */
    this.setFilters = function (filterArray) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} opacity
     */
    this.setInstanceAlpha = function (opacity) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} brightness
     */
    this.setInstanceBrightness = function (brightness) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} color
     * @param {Number} strength
     */
    this.setInstanceTint = function (color, strength) {
    };
    /**
     * @since Flash 8
     * @param {String} strMetadata
     * @return Boolean
     */
    this.setMetadata = function (strMetadata) {
    };
    /**
     * @since Flash CS3
     * @param {String} xmlString
     * @return Boolean
     */
    this.setMobileSettings = function (xmlString) {
    };
    /**
     * @since Flash CS3
     * @param {String} propertyName
     * @param {Object} value
     */
    this.setOvalObjectProperty = function (propertyName, value) {
    };
    /**
     * @since Flash CS3
     * @param {String} version
     * @return Boolean
     */
    this.setPlayerVersion = function (version) {
    };
    /**
     * @since Flash CS3
     * @param {String} propertyName
     * @param {Object} value
     */
    this.setRectangleObjectProperty = function (propertyName, value) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} boundingRectangle
     * @param {Boolean} [bContactSensitiveSelection]
     */
    this.setSelectionBounds = function (boundingRectangle, bContactSensitiveSelection) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} rect
     * @param {Boolean} [bReplaceCurrentSelection]
     * @param {Boolean} [bContactSensitiveSelection]
     */
    this.setSelectionRect = function (rect, bReplaceCurrentSelection, bContactSensitiveSelection) {
    };
    /**
     * @since Flash CS4
     * @param {Object} point
     */
    this.setStageVanishingPoint = function (point) {
    };
    /**
     * @since Flash CS4
     * @param {Number} angle
     */
    this.setStageViewAngle = function (angle) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} color
     * @param {Number} size
     * @param {String} strokeType
     */
    this.setStroke = function (color, size, strokeType) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} color
     */
    this.setStrokeColor = function (color) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} size
     */
    this.setStrokeSize = function (size) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} strokeType
     */
    this.setStrokeStyle = function (strokeType) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} boundingRectangle
     * @return Boolean
     */
    this.setTextRectangle = function (boundingRectangle) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} startIndex
     * @param {Number} endIndex
     * @return Boolean
     */
    this.setTextSelection = function (startIndex, endIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} text
     * @param {Number} [startIndex]
     * @param {Number} [endIndex]
     * @return Boolean
     */
    this.setTextString = function (text, startIndex, endIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} transformationPoint
     */
    this.setTransformationPoint = function (transformationPoint) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} xSkew
     * @param {Number} ySkew
     * @param {String} whichEdge
     */
    this.skewSelection = function (xSkew, ySkew, whichEdge) {
    };
    /**
     * @since Flash MX 2004
     */
    this.smoothSelection = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} direction
     * @param {Boolean} [bUseDocumentBounds]
     */
    this.space = function (direction, bUseDocumentBounds) {
    };
    /**
     * @since Flash MX 2004
     */
    this.straightenSelection = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     */
    this.swapElement = function (name) {
    };
    /**
     * @since Flash 8
     */
    this.swapStrokeAndFill = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} [abortIfErrorsExist]
     */
    this.testMovie = function (abortIfErrorsExist) {
    };
    /**
     * @since Flash MX 2004
     */
    this.testScene = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} threshold
     * @param {Number} minimumArea
     * @param {String} curveFit
     * @param {String} cornerThreshold
     */
    this.traceBitmap = function (threshold, minimumArea, curveFit, cornerThreshold) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} a
     * @param {Number} b
     * @param {Number} c
     * @param {Number} d
     */
    this.transformSelection = function (a, b, c, d) {
    };
    /**
     * @since Flash CS4
     * @param {Object} xyzCoordinate
     */
    this.translate3DCenter = function (xyzCoordinate) {
    };
    /**
     * @since Flash CS4
     * @param {Object} xyzCoordinate
     * @param {Boolean} bGlobalTransform
     */
    this.translate3DSelection = function (xyzCoordinate, bGlobalTransform) {
    };
    /**
     * @since Flash MX 2004
     */
    this.unGroup = function () {
    };
    /**
     * @since Flash 8
     * @return Boolean
     */
    this.union = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.unlockAllElements = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} fileURI
     * @return Object
     */
    this.xmlPanel = function (fileURI) {
    };
}

/**
 * @since Flash MX 2004
 */
function library () {
    /**
     * @since Flash MX 2004
     * @type Array
     */
    this.items = null;
    /**
     * @since Flash MX 2004
     * @param {Object} position
     * @param {String} [namePath]
     * @return Boolean
     */
    this.addItemToDocument = function (position, namePath) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} type
     * @param {String} [namePath]
     * @return Boolean
     */
    this.addNewItem = function (type, namePath) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [namePath]
     * @return Boolean
     */
    this.deleteItem = function (namePath) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [namePath]
     * @return Boolean
     */
    this.duplicateItem = function (namePath) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [namePath]
     * @return Boolean
     */
    this.editItem = function (namePath) {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} bExpand
     * @param {Boolean} [bRecurseNestedParents]
     * @param {String} [namePath]
     * @return Boolean
     */
    this.expandFolder = function (bExpand, bRecurseNestedParents, namePath) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} namePath
     * @return Number
     */
    this.findItemIndex = function (namePath) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} property
     * @return Object
     */
    this.getItemProperty = function (property) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [namePath]
     * @return String
     */
    this.getItemType = function (namePath) {
    };
    /**
     * @since Flash MX 2004
     * @return Array
     */
    this.getSelectedItems = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} linkageName
     * @param {Array} swfData
     * @param {String} [libName]
     */
    this.importEmbeddedSWF = function (linkageName, swfData, libName) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} namePath
     * @return Boolean
     */
    this.itemExists = function (namePath) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} folderPath
     * @param {String} [itemToMove]
     * @param {Boolean} [bReplace]
     * @return Boolean
     */
    this.moveToFolder = function (folderPath, itemToMove, bReplace) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [folderPath]
     * @return Boolean
     */
    this.newFolder = function (folderPath) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @return Boolean
     */
    this.renameItem = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} [bSelectAll]
     */
    this.selectAll = function (bSelectAll) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} namePath
     * @param {Boolean} [bReplaceCurrentSelection]
     * @param {Boolean} [bSelect]
     * @return Boolean
     */
    this.selectItem = function (namePath, bReplaceCurrentSelection, bSelect) {
    };
    /**
     * @since Flash MX 2004
     */
    this.selectNone = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} property
     * @param {Object} value
     */
    this.setItemProperty = function (property, value) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} [namePath]
     * @return Boolean
     */
    this.updateItem = function (namePath) {
    };
}