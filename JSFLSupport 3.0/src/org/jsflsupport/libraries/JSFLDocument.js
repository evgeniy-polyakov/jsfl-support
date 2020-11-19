/***************************************************************************
 * JSFL API
 * Flash documents
 **************************************************************************/
/**
 * @since Flash MX 2004
 * @class {Document}
 */
Document = function () {
};
/**
 * @since Flash MX 2004
 * @type {string}
 */
Document.prototype.accName = undefined;
/**
 * @since Flash CS3
 * @type {boolean}
 */
Document.prototype.as3AutoDeclare = false;
/**
 * @since Flash CS3
 * @type {"AS3"|"ES"}
 */
Document.prototype.as3Dialect = undefined;
/**
 * @since Flash CS3
 * @type {number}
 */
Document.prototype.as3ExportFrame = 0;
/**
 * @since Flash CS3
 * @type {boolean}
 */
Document.prototype.as3StrictMode = false;
/**
 * @since Flash CS3
 * @type {boolean}
 */
Document.prototype.as3WarningsMode = false;
/**
 * @since Flash CS3
 * @type {number}
 */
Document.prototype.asVersion = 0;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Document.prototype.autoLabel = false;
/**
 * @since Flash MX 2004
 * @type {string|number}
 */
Document.prototype.backgroundColor = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Document.prototype.currentPublishProfile = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Document.prototype.currentTimeline = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Document.prototype.description = undefined;
/**
 * @since Flash CS3
 * @type {string}
 */
Document.prototype.docClass = undefined;
/**
 * @since Flash CS4
 * @type {string}
 */
Document.prototype.externalLibraryPath = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Document.prototype.forceSimple = false;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Document.prototype.frameRate = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Document.prototype.height = 0;
/**
 * @since Flash CS3
 * @type {number}
 * @const
 */
Document.prototype.id = 0;
/**
 * @since Flash MX 2004
 * @type {Library}
 * @const
 */
Document.prototype.library = undefined;
/**
 * @since Flash CS4
 * @type {string}
 */
Document.prototype.libraryPath = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Document.prototype.livePreview = false;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Document.prototype.name = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Document.prototype.path = undefined;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
Document.prototype.pathURI = undefined;
/**
 * @since Flash MX 2004
 * @type {Array.<string>}
 * @const
 */
Document.prototype.publishProfiles = undefined;
/**
 * @since Flash MX 2004
 * @deprecated
 * @type {*}
 * @const
 */
Document.prototype.screenOutline = undefined;
/**
 * @since Flash MX 2004
 * @type {Array.<Element>}
 */
Document.prototype.selection = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Document.prototype.silent = false;
/**
 * @since Flash CS4
 * @type {string}
 */
Document.prototype.sourcePath = undefined;
/**
 * @since Flash CS6
 * @type {number}
 */
Document.prototype.swfJPEGQuality = undefined;
/**
 * @since Flash MX 2004
 * @type {Array.<Timeline>}
 * @const
 */
Document.prototype.timelines = undefined;
/**
 * @since Flash MX 2004
 * @type {Matrix}
 * @const
 */
Document.prototype.viewMatrix = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Document.prototype.width = 0;
/**
 * @since Flash 8
 * @type {number}
 */
Document.prototype.zoomFactor = 0;
/**
 * @since Flash MX 2004
 * @param {string} name
 * @param {"integer"|"integerArray"|"double"|"doubleArray"|"string"|"byteArray"} type
 * @param {*} data
 */
Document.prototype.addDataToDocument = function (name, type, data) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @param {"integer"|"integerArray"|"double"|"doubleArray"|"string"|"byteArray"} type
 * @param {*} data
 */
Document.prototype.addDataToSelection = function (name, type, data) {
};
/**
 * @since Flash 8
 * @param {"adjustColorFilter"|"bevelFilter"|"blurFilter"|"dropShadowFilter"|"glowFilter"|"gradientBevelFilter"|"gradientGlowFilter"} filterName
 */
Document.prototype.addFilter = function (filterName) {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} position
 * @param {Item} item
 * @return {boolean}
 */
Document.prototype.addItem = function (position, item) {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} startPoint
 * @param {{x:number,y:number}} endpoint
 */
Document.prototype.addNewLine = function (startPoint, endpoint) {
};
/**
 * @since Flash MX 2004
 * @param {{left:number,top:number,right:number,bottom:number}} boundingRectangle
 * @param {boolean} [bSuppressFill]
 * @param {boolean} [bSuppressStroke]
 */
Document.prototype.addNewOval = function (boundingRectangle, bSuppressFill, bSuppressStroke) {
};
/**
 * @since Flash CS4
 * @param {{left:number,top:number,right:number,bottom:number}} boundingRectangle
 * @param {boolean} [bSuppressFill]
 * @param {boolean} [bSuppressStroke]
 */
Document.prototype.addNewPrimitiveOval = function (boundingRectangle, bSuppressFill, bSuppressStroke) {
};
/**
 * @since Flash CS4
 * @param {{left:number,top:number,right:number,bottom:number}} boundingRectangle
 * @param {number} roundness
 * @param {boolean} [bSuppressFill]
 * @param {boolean} [bSuppressStroke]
 */
Document.prototype.addNewPrimitiveRectangle = function (boundingRectangle, roundness, bSuppressFill, bSuppressStroke) {
};
/**
 * @since Flash MX 2004
 * @param {string} profileName
 * @return {number}
 */
Document.prototype.addNewPublishProfile = function (profileName) {
};
/**
 * @since Flash MX 2004
 * @param {{left:number,top:number,right:number,bottom:number}} boundingRectangle
 * @param {number} roundness
 * @param {boolean} [bSuppressFill]
 * @param {boolean} [bSuppressStroke]
 */
Document.prototype.addNewRectangle = function (boundingRectangle, roundness, bSuppressFill, bSuppressStroke) {
};
/**
 * @since Flash MX 2004
 * @param {string} [name]
 * @return {boolean}
 */
Document.prototype.addNewScene = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {{left:number,top:number,right:number,bottom:number}} boundingRectangle
 * @param {string} [text]
 */
Document.prototype.addNewText = function (boundingRectangle, text) {
};
/**
 * @since Flash MX 2004
 * @param {"left"|"right"|"top"|"bottom"|"vertical center"|"horizontal center"} alignMode
 * @param {boolean} [bUseDocumentBounds]
 */
Document.prototype.align = function (alignMode, bUseDocumentBounds) {
};
/**
 * @since Flash MX 2004
 * @deprecated
 * @return {boolean}
 */
Document.prototype.allowScreens = function () {
};
/**
 * @since Flash MX 2004
 * @param {"back"|"backward"|"forward"|"front"} arrangeMode
 */
Document.prototype.arrange = function (arrangeMode) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.breakApart = function () {
};
/**
 * @since Flash MX 2004
 * @return {boolean}
 */
Document.prototype.canEditSymbol = function () {
};
/**
 * @since Flash CC
 * @return {boolean}
 */
Document.prototype.canDistributeToKeyframes = function () {
};
/**
 * @since Flash MX 2004
 * @return {boolean}
 */
Document.prototype.canRevert = function () {
};
/**
 * @since Flash MX 2004
 * @return {boolean}
 */
Document.prototype.canTestMovie = function () {
};
/**
 * @since Flash MX 2004
 * @return {boolean}
 */
Document.prototype.canTestScene = function () {
};
/**
 * @since Flash 8
 * @param {number} oldIndex
 * @param {number} newIndex
 */
Document.prototype.changeFilterOrder = function (oldIndex, newIndex) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.clipCopy = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.clipCut = function () {
};
/**
 * @since Flash MX 2004
 * @param {boolean} [bInPlace]
 */
Document.prototype.clipPaste = function (bInPlace) {
};
/**
 * @since Flash MX 2004
 * @param {boolean} [bPromptToSaveChanges]
 */
Document.prototype.close = function (bPromptToSaveChanges) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.convertLinesToFills = function () {
};
/**
 * @since Flash CC
 * @return {boolean}
 */
Document.prototype.convertSelectionToBitmap = function () {
};
/**
 * @since Flash MX 2004
 * @param {"movie clip"|"button"|"graphic"} type
 * @param {string} name
 * @param {"top left"|"top center"|"top right"|"center left"|"center"|"center right"|"bottom left"|"bottom center"|"bottom right"} registrationPoint
 * @return {SymbolItem}
 */
Document.prototype.convertToSymbol = function (type, name, registrationPoint) {
};
/**
 * @since Flash 8
 * @return {boolean}
 */
Document.prototype.crop = function () {
};
/**
 * @since Flash CS5
 * @param {boolean} [abortIfErrorsExist]
 */
Document.prototype.debugMovie = function (abortIfErrorsExist) {
};
/**
 * @since Flash 8
 * @return {boolean}
 */
Document.prototype.deleteEnvelope = function () {
};
/**
 * @since Flash MX 2004
 * @return {number}
 */
Document.prototype.deletePublishProfile = function () {
};
/**
 * @since Flash MX 2004
 * @return {boolean}
 */
Document.prototype.deleteScene = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.deleteSelection = function () {
};
/**
 * @since Flash 8
 */
Document.prototype.disableAllFilters = function () {
};
/**
 * @since Flash 8
 * @param {number} filterIndex
 */
Document.prototype.disableFilter = function (filterIndex) {
};
/**
 * @since Flash 8
 * @param {number} enabledFilterIndex
 */
Document.prototype.disableOtherFilters = function (enabledFilterIndex) {
};
/**
 * @since Flash MX 2004
 * @param {"left edge"|"horizontal center"|"right edge"|"top edge"|"vertical center"|"bottom edge"} distributeMode
 * @param {boolean} [bUseDocumentBounds]
 */
Document.prototype.distribute = function (distributeMode, bUseDocumentBounds) {
};
/**
 * @since Flash CC
 */
Document.prototype.distributeToKeyframes = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.distributeToLayers = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {boolean}
 */
Document.prototype.documentHasData = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {string} [profileName]
 * @return {number}
 */
Document.prototype.duplicatePublishProfile = function (profileName) {
};
/**
 * @since Flash MX 2004
 * @return {boolean}
 */
Document.prototype.duplicateScene = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.duplicateSelection = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} index
 */
Document.prototype.editScene = function (index) {
};
/**
 * @since Flash 8
 */
Document.prototype.enableAllFilters = function () {
};
/**
 * @since Flash 8
 * @param {number} filterIndex
 */
Document.prototype.enableFilter = function (filterIndex) {
};
/**
 * @since Flash MX 2004
 * @param {"inPlace"|"newWindow"} [editMode]
 */
Document.prototype.enterEditMode = function (editMode) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.exitEditMode = function () {
};
/**
 * @since Flash CS6
 * @param {number} frameNumber
 * @param {string} bitmapName
 */
Document.prototype.exportInstanceToLibrary = function (frameNumber, bitmapName) {
};
/**
 * @since Flash CS6
 * @param {string} outputURI
 * @param {number} [startFrameNum]
 * @param {number} [endFrameNum]
 * @param {Matrix} [matrix]
 */
Document.prototype.exportInstanceToPNGSequence = function (outputURI, startFrameNum, endFrameNum, matrix) {
};
/**
 * @since Flash 8
 * @param {string} fileURI
 * @param {boolean} [bCurrentPNGSettings]
 * @param {boolean} [bCurrentFrame]
 * @return {boolean}
 */
Document.prototype.exportPNG = function (fileURI, bCurrentPNGSettings, bCurrentFrame) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 */
Document.prototype.exportPublishProfile = function (fileURI) {
};
/**
 * @since Flash CS4
 * @param {string} [profileName]
 * @return {string}
 */
Document.prototype.exportPublishProfileString = function (profileName) {
};
/**
 * @since Flash MX 2004
 * @param {string} [fileURI]
 * @param {boolean} [bCurrentSettings]
 */
Document.prototype.exportSWF = function (fileURI, bCurrentSettings) {
};
/**
 * @since Flash CC
 * @param {string} fileURI
 * @param {boolean} [convertInAdobeMediaEncoder]
 * @param {boolean} [transparent]
 * @param {boolean} [stopAtFrame]
 * @param {number} [stopAtFrameOrTime]
 */
Document.prototype.exportVideo = function (fileURI, convertInAdobeMediaEncoder, transparent, stopAtFrame,
                                           stopAtFrameOrTime) {
};
/**
 * @since Flash MX 2004
 * @return {boolean}
 */
Document.prototype.getAlignToDocument = function () {
};
/**
 * @since Flash 8
 * @return {"normal"|"layer"|"multiply"|"screen"|"overlay"|"hardlight"|"lighten"|"darken"|"difference"|"add"|"subtract"|"invert"|"alpha"|"erase"}
 */
Document.prototype.getBlendMode = function () {
};
/**
 * @since Flash MX 2004
 * @param {"toolbar"|"selection"} [objectToFill]
 * @return {Fill}
 */
Document.prototype.getCustomFill = function (objectToFill) {
};
/**
 * @since Flash MX 2004
 * @param {"toolbar"|"selection"} [locationOfStroke]
 * @return {Stroke}
 */
Document.prototype.getCustomStroke = function (locationOfStroke) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {*}
 */
Document.prototype.getDataFromDocument = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {string} propertyName
 * @return {*}
 */
Document.prototype.getElementProperty = function (propertyName) {
};
/**
 * @since Flash MX 2004
 * @param {string} attrName
 * @param {number} [startIndex]
 * @param {number} [endIndex]
 * @return {*}
 */
Document.prototype.getElementTextAttr = function (attrName, startIndex, endIndex) {
};
/**
 * @since Flash 8
 * @return {Array.<Filter>}
 */
Document.prototype.getFilters = function () {
};
/**
 * @since Flash 8
 * @return {string}
 */
Document.prototype.getMetadata = function () {
};
/**
 * @since Flash CS3
 * @return {string}
 */
Document.prototype.getMobileSettings = function () {
};
/**
 * @since Flash CS3
 * @return {string}
 */
Document.prototype.getPlayerVersion = function () {
};
/**
 * @since Flash CC
 * @param {string} format
 * @return {boolean}
 */
Document.prototype.getPublishDocumentData = function (format) {
};
/**
 * @since Flash MX 2004
 * @return {{left:number,top:number,right:number,bottom:number}}
 */
Document.prototype.getSelectionRect = function () {
};
/**
 * @since Flash CS6
 * @return {string}
 */
Document.prototype.getSWFPathFromProfile = function () {
};
/**
 * @since Flash CC
 * @return {boolean}
 */
Document.prototype.getTelemetryForSwf = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} [startIndex]
 * @param {number} [endIndex]
 * @return {string}
 */
Document.prototype.getTextString = function (startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @return {Timeline}
 */
Document.prototype.getTimeline = function () {
};
/**
 * @since Flash MX 2004
 * @return {{x:number,y:number}}
 */
Document.prototype.getTransformationPoint = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.group = function () {
};
/**
 * @since Flash 8
 * @param {string} fileURI
 * @param {boolean} [importToLibrary]
 * @param {boolean} [showDialog]
 * @param {boolean} [showImporterUI]
 * @return {boolean}
 */
Document.prototype.importFile = function (fileURI, importToLibrary, showDialog, showImporterUI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @return {number}
 */
Document.prototype.importPublishProfile = function (fileURI) {
};
/**
 * @since Flash CS4
 * @param {string} xmlString
 * @return {boolean}
 */
Document.prototype.importPublishProfileString = function (xmlString) {
};
/**
 * @since Flash MX 2004
 * @deprecated
 * @param {string} fileURI
 */
Document.prototype.importSWF = function (fileURI) {
};
/**
 * @since Flash 8
 * @return {boolean}
 */
Document.prototype.intersect = function () {
};
/**
 * @since Flash CS5
 * @deprecated
 * @param {string} URI
 */
Document.prototype.loadCuepointXML = function (URI) {
};
/**
 * @since Flash MX 2004
 * @param {boolean} bWidth
 * @param {boolean} bHeight
 * @param {boolean} [bUseDocumentBounds]
 */
Document.prototype.match = function (bWidth, bHeight, bUseDocumentBounds) {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} position
 * @param {boolean} bToggleSel
 * @param {boolean} bShiftSel
 */
Document.prototype.mouseClick = function (position, bToggleSel, bShiftSel) {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} position
 * @param {boolean} bAltDown
 * @param {boolean} bShiftDown
 * @param {boolean} bShiftSelect
 */
Document.prototype.mouseDblClk = function (position, bAltDown, bShiftDown, bShiftSelect) {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} delta
 */
Document.prototype.moveSelectedBezierPointsBy = function (delta) {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} distanceToMove
 */
Document.prototype.moveSelectionBy = function (distanceToMove) {
};
/**
 * @since Flash MX 2004
 * @param {number} smoothing
 * @param {boolean} bUseMultiplePasses
 */
Document.prototype.optimizeCurves = function (smoothing, bUseMultiplePasses) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.publish = function () {
};
/**
 * @since Flash 8
 * @return {boolean}
 */
Document.prototype.punch = function () {
};
/**
 * @since Flash 8
 */
Document.prototype.removeAllFilters = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 */
Document.prototype.removeDataFromDocument = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 */
Document.prototype.removeDataFromSelection = function (name) {
};
/**
 * @since Flash 8
 * @param {number} filterIndex
 */
Document.prototype.removeFilter = function (filterIndex) {
};
/**
 * @since Flash MX 2004
 * @param {string} [profileNewName]
 * @return {boolean}
 */
Document.prototype.renamePublishProfile = function (profileNewName) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {boolean}
 */
Document.prototype.renameScene = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {number} sceneToMove
 * @param {number} sceneToPutItBefore
 */
Document.prototype.reorderScene = function (sceneToMove, sceneToPutItBefore) {
};
/**
 * @since Flash CS3
 */
Document.prototype.resetOvalObject = function () {
};
/**
 * @since Flash CS3
 */
Document.prototype.resetRectangleObject = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.resetTransformation = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.revert = function () {
};
/**
 * @since Flash CS4
 * @param {{x:number,y:number,z:number}} xyzCoordinate
 * @param {boolean} bGlobalTransform
 */
Document.prototype.rotate3DSelection = function (xyzCoordinate, bGlobalTransform) {
};
/**
 * @since Flash MX 2004
 * @param {number} angle
 * @param {"top right"|"top left"|"bottom right"|"bottom left"|"top center"|"right center"|"bottom center"|"left center"} [rotationPoint]
 */
Document.prototype.rotateSelection = function (angle, rotationPoint) {
};
/**
 * @since Flash MX 2004
 * @param {boolean} [bOkToSaveAs]
 * @return {boolean}
 */
Document.prototype.save = function (bOkToSaveAs) {
};
/**
 * @since Flash CS6
 * @param {string} URI
 * @param {boolean} [selectionOnly]
 * @return {boolean}
 */
Document.prototype.saveAsCopy = function (URI, selectionOnly) {
};
/**
 * @since Flash MX 2004
 * @deprecated
 * @param {boolean} [bOkToSaveAs]
 * @return {boolean}
 */
Document.prototype.saveAndCompact = function (bOkToSaveAs) {
};
/**
 * @since Flash MX 2004
 * @param {number} xScale
 * @param {number} yScale
 * @param {"top right"|"top left"|"bottom right"|"bottom left"|"top center"|"right center"|"bottom center"|"left center"} whichCorner
 */
Document.prototype.scaleSelection = function (xScale, yScale, whichCorner) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.selectAll = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.selectNone = function () {
};
/**
 * @since Flash MX 2004
 * @param {boolean} bToStage
 */
Document.prototype.setAlignToDocument = function (bToStage) {
};
/**
 * @since Flash 8
 * @param {"normal"|"layer"|"multiply"|"screen"|"overlay"|"hardlight"|"lighten"|"darken"|"difference"|"add"|"subtract"|"invert"|"alpha"|"erase"} mode
 */
Document.prototype.setBlendMode = function (mode) {
};
/**
 * @since Flash MX 2004
 * @param {Fill} fill
 */
Document.prototype.setCustomFill = function (fill) {
};
/**
 * @since Flash MX 2004
 * @param {Stroke} stroke
 */
Document.prototype.setCustomStroke = function (stroke) {
};
/**
 * @since Flash MX 2004
 * @param {string} property
 * @param {*} value
 */
Document.prototype.setElementProperty = function (property, value) {
};
/**
 * @since Flash MX 2004
 * @param {string} attrName
 * @param {*} attrValue
 * @param {number} [startIndex]
 * @param {number} [endIndex]
 * @return {boolean}
 */
Document.prototype.setElementTextAttr = function (attrName, attrValue, startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {string|number} color
 */
Document.prototype.setFillColor = function (color) {
};
/**
 * @since Flash 8
 * @param {"blurX"|"blurY"|"quality"|"angle"|"distance"|"strength"|"knockout"|"inner"|"bevelType"|"color"|"shadowColor"|"highlightColor"} property
 * @param {number} filterIndex
 * @param {*} value
 */
Document.prototype.setFilterProperty = function (property, filterIndex, value) {
};
/**
 * @since Flash 8
 * @param {Array.<Filter>} filterArray
 */
Document.prototype.setFilters = function (filterArray) {
};
/**
 * @since Flash MX 2004
 * @param {number} opacity
 */
Document.prototype.setInstanceAlpha = function (opacity) {
};
/**
 * @since Flash MX 2004
 * @param {number} brightness
 */
Document.prototype.setInstanceBrightness = function (brightness) {
};
/**
 * @since Flash MX 2004
 * @param {string|number} color
 * @param {number} strength
 */
Document.prototype.setInstanceTint = function (color, strength) {
};
/**
 * @since Flash 8
 * @param {string} strMetadata
 * @return {boolean}
 */
Document.prototype.setMetadata = function (strMetadata) {
};
/**
 * @since Flash CS3
 * @param {string} xmlString
 * @return {boolean}
 */
Document.prototype.setMobileSettings = function (xmlString) {
};
/**
 * @since Flash CS3
 * @param {string} propertyName
 * @param {*} value
 */
Document.prototype.setOvalObjectProperty = function (propertyName, value) {
};
/**
 * @since Flash CS3
 * @param {string} version
 * @return {boolean}
 */
Document.prototype.setPlayerVersion = function (version) {
};
/**
 * @since Flash CC
 * @param {string} format
 * @param {boolean} publish
 */
Document.prototype.setPublishDocumentData = function (format, publish) {
};
/**
 * @since Flash CS3
 * @param {string} propertyName
 * @param {*} value
 */
Document.prototype.setRectangleObjectProperty = function (propertyName, value) {
};
/**
 * @since Flash MX 2004
 * @param {{left:number,top:number,right:number,bottom:number}} boundingRectangle
 * @param {boolean} [bContactSensitiveSelection]
 */
Document.prototype.setSelectionBounds = function (boundingRectangle, bContactSensitiveSelection) {
};
/**
 * @since Flash MX 2004
 * @param {{left:number,top:number,right:number,bottom:number}} rect
 * @param {boolean} [bReplaceCurrentSelection]
 * @param {boolean} [bContactSensitiveSelection]
 */
Document.prototype.setSelectionRect = function (rect, bReplaceCurrentSelection, bContactSensitiveSelection) {
};
/**
 * @since Flash CS4
 * @param {{x:number,y:number}} point
 */
Document.prototype.setStageVanishingPoint = function (point) {
};
/**
 * @since Flash CS4
 * @param {number} angle
 */
Document.prototype.setStageViewAngle = function (angle) {
};
/**
 * @since Flash MX 2004
 * @param {string|number} color
 * @param {number} size
 * @param {"hairline"|"solid"|"dashed"|"dotted"|"ragged"|"stipple"|"hatched"} strokeType
 */
Document.prototype.setStroke = function (color, size, strokeType) {
};
/**
 * @since Flash MX 2004
 * @param {string|number} color
 */
Document.prototype.setStrokeColor = function (color) {
};
/**
 * @since Flash MX 2004
 * @param {number} size
 */
Document.prototype.setStrokeSize = function (size) {
};
/**
 * @since Flash MX 2004
 * @param {"hairline"|"solid"|"dashed"|"dotted"|"ragged"|"stipple"|"hatched"} strokeType
 */
Document.prototype.setStrokeStyle = function (strokeType) {
};
/**
 * @since Flash MX 2004
 * @param {{left:number,top:number,right:number,bottom:number}} boundingRectangle
 * @return {boolean}
 */
Document.prototype.setTextRectangle = function (boundingRectangle) {
};
/**
 * @since Flash MX 2004
 * @param {number} startIndex
 * @param {number} endIndex
 * @return {boolean}
 */
Document.prototype.setTextSelection = function (startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {string} text
 * @param {number} [startIndex]
 * @param {number} [endIndex]
 * @return {boolean}
 */
Document.prototype.setTextString = function (text, startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} transformationPoint
 */
Document.prototype.setTransformationPoint = function (transformationPoint) {
};
/**
 * @since Flash MX 2004
 * @param {number} xSkew
 * @param {number} ySkew
 * @param {"top center"|"right center"|"bottom center"|"left center"} whichEdge
 */
Document.prototype.skewSelection = function (xSkew, ySkew, whichEdge) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.smoothSelection = function () {
};
/**
 * @since Flash MX 2004
 * @param {"horizontal"|"vertical"} direction
 * @param {boolean} [bUseDocumentBounds]
 */
Document.prototype.space = function (direction, bUseDocumentBounds) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.straightenSelection = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 */
Document.prototype.swapElement = function (name) {
};
/**
 * @since Flash 8
 */
Document.prototype.swapStrokeAndFill = function () {
};
/**
 * @since Flash MX 2004
 * @param {boolean} [abortIfErrorsExist]
 */
Document.prototype.testMovie = function (abortIfErrorsExist) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.testScene = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} threshold
 * @param {number} minimumArea
 * @param {"pixels"|"very tight"|"tight"|"normal"|"smooth"|"very smooth"} curveFit
 * @param {"many corners"|"normal"|"few corners"} cornerThreshold
 */
Document.prototype.traceBitmap = function (threshold, minimumArea, curveFit, cornerThreshold) {
};
/**
 * @since Flash MX 2004
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 */
Document.prototype.transformSelection = function (a, b, c, d) {
};
/**
 * @since Flash CS4
 * @param {{x:number,y:number,z:number}} xyzCoordinate
 */
Document.prototype.translate3DCenter = function (xyzCoordinate) {
};
/**
 * @since Flash CS4
 * @param {{x:number,y:number,z:number}} xyzCoordinate
 * @param {boolean} bGlobalTransform
 */
Document.prototype.translate3DSelection = function (xyzCoordinate, bGlobalTransform) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.unGroup = function () {
};
/**
 * @since Flash 8
 * @return {boolean}
 */
Document.prototype.union = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.unlockAllElements = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @return {{dismiss:"accept"|"cancel"}}
 */
Document.prototype.xmlPanel = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @class {Library}
 */
Library = function () {
};
/**
 * @since Flash MX 2004
 * @type {Array.<Item>}
 */
Library.prototype.items = undefined;
/**
 * @since Flash CC
 * @type {Array.<Item>}
 */
Library.prototype.unusedItems = undefined;
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} position
 * @param {string} [namePath]
 * @return {boolean}
 */
Library.prototype.addItemToDocument = function (position, namePath) {
};
/**
 * @since Flash MX 2004
 * @param {"video"|"movie clip"|"button"|"graphic"|"bitmap"|"screen"|"folder"} type
 * @param {string} [namePath]
 * @return {boolean}
 */
Library.prototype.addNewItem = function (type, namePath) {
};
/**
 * @since Flash MX 2004
 * @param {string} [namePath]
 * @return {boolean}
 */
Library.prototype.deleteItem = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {string} [namePath]
 * @return {boolean}
 */
Library.prototype.duplicateItem = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {string} [namePath]
 * @return {boolean}
 */
Library.prototype.editItem = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {boolean} bExpand
 * @param {boolean} [bRecurseNestedParents]
 * @param {string} [namePath]
 * @return {boolean}
 */
Library.prototype.expandFolder = function (bExpand, bRecurseNestedParents, namePath) {
};
/**
 * @since Flash MX 2004
 * @param {string} namePath
 * @return {number}
 */
Library.prototype.findItemIndex = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {string} property
 * @return {*}
 */
Library.prototype.getItemProperty = function (property) {
};
/**
 * @since Flash MX 2004
 * @param {string} [namePath]
 * @return {"undefined"|"component"|"movie clip"|"graphic"|"button"|"folder"|"font"|"sound"|"bitmap"|"compiled clip"|"screen"|"video"}
 */
Library.prototype.getItemType = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @return {Array.<Item>}
 */
Library.prototype.getSelectedItems = function () {
};
/**
 * @since Flash MX 2004
 * @deprecated
 * @param {string} linkageName
 * @param {Array} swfData
 * @param {string} [libName]
 */
Library.prototype.importEmbeddedSWF = function (linkageName, swfData, libName) {
};
/**
 * @since Flash MX 2004
 * @param {string} namePath
 * @return {boolean}
 */
Library.prototype.itemExists = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {string} folderPath
 * @param {string} [itemToMove]
 * @param {boolean} [bReplace]
 * @return {boolean}
 */
Library.prototype.moveToFolder = function (folderPath, itemToMove, bReplace) {
};
/**
 * @since Flash MX 2004
 * @param {string} [folderPath]
 * @return {boolean}
 */
Library.prototype.newFolder = function (folderPath) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {boolean}
 */
Library.prototype.renameItem = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {boolean} [bSelectAll]
 */
Library.prototype.selectAll = function (bSelectAll) {
};
/**
 * @since Flash MX 2004
 * @param {string} namePath
 * @param {boolean} [bReplaceCurrentSelection]
 * @param {boolean} [bSelect]
 * @return {boolean}
 */
Library.prototype.selectItem = function (namePath, bReplaceCurrentSelection, bSelect) {
};
/**
 * @since Flash MX 2004
 */
Library.prototype.selectNone = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} property
 * @param {*} value
 */
Library.prototype.setItemProperty = function (property, value) {
};
/**
 * @since Flash MX 2004
 * @param {string} [namePath]
 * @return {boolean}
 */
Library.prototype.updateItem = function (namePath) {
};