/***************************************************************************
 * JSFL API
 * Top level objects
 **************************************************************************/
/**
 * @since Flash MX 2004
 * @param {string} alertText
 */
alert = function (alertText) {
};
/**
 * @since Flash 8
 * @param {string} strAlert
 * @return {boolean}
 */
confirm = function (strAlert) {
};
/**
 * @since Flash MX 2004
 * @param {string} promptMsg
 * @param {string} [text]
 * @return {string}
 */
prompt = function (promptMsg, text) {
};
/**
 * @since Flash MX 2004
 * @class {Flash}
 */
Flash = function () {
};
/**
 * @since Flash MX 2004
 * @type {Flash}
 */
fl = new Flash();
/**
 * @since Flash CS3
 * @type {ActionsPanel}
 * @const
 */
Flash.prototype.actionsPanel = null;
/**
 * @since Flash CS3
 * @type {string}
 */
Flash.prototype.as3PackagePaths = null;
/**
 * @since Flash CS3
 * @type {CompilerErrors}
 * @const
 */
Flash.prototype.compilerErrors = null;
/**
 * @since Flash MX 2004
 * @type {ComponentPanel}
 * @const
 */
Flash.prototype.componentsPanel = null;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Flash.prototype.configDirectory = null;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Flash.prototype.configURI = null;
/**
 * @since Flash 8
 * @type {boolean}
 */
Flash.prototype.contactSensitiveSelection = false;
/**
 * @since Flash MX 2004
 * @type {Array.<string>}
 * @const
 */
Flash.prototype.createNewDocList = null;
/**
 * @since Flash MX 2004
 * @type {Array.<string>}
 * @const
 */
Flash.prototype.createNewDocListType = null;
/**
 * @since Flash MX 2004
 * @type {Array.<string>}
 * @const
 */
Flash.prototype.createNewTemplateList = null;
/**
 * @since Flash MX 2004
 * @type {Array.<Document>}
 * @const
 */
Flash.prototype.documents = null;
/**
 * @since Flash MX 2004
 * @type {drawingLayer}
 * @const
 */
Flash.prototype.drawingLayer = null;
/**
 * @since Flash CS4
 * @type {string}
 */
Flash.prototype.externalLibraryPath = null;
/**
 * @since Flash CS4
 * @type {string}
 */
Flash.prototype.flexSDKPath = null;
/**
 * @since Flash CS5.5
 * @type {string}
 * @const
 */
Flash.prototype.installedPlayers = null;
/**
 * @since Flash CS5
 * @type {string}
 */
Flash.prototype.languageCode = null;
/**
 * @since Flash CS4
 * @type {string}
 */
Flash.prototype.libraryPath = null;
/**
 * @since Flash MX 2004
 * @type {FlashMath}
 * @const
 */
Flash.prototype.Math = null;
/**
 * @since Flash MX 2004
 * @type {Array.<string>}
 * @const
 */
Flash.prototype.mruRecentFileList = null;
/**
 * @since Flash MX 2004
 * @type {Array.<string>}
 * @const
 */
Flash.prototype.mruRecentFileListType = null;
/**
 * @since Flash CS3
 * @deprecated
 * @type {string}
 */
Flash.prototype.packagePaths = null;
/**
 * @since Flash CS5.5
 * @type {number}
 */
Flash.prototype.publishCacheDiskSizeMax = null;
/**
 * @since Flash CS5.5
 * @type {boolean}
 */
Flash.prototype.publishCacheEnabled = null;
/**
 * @since Flash CS5.5
 * @type {number}
 */
Flash.prototype.publishCacheMemoryEntrySizeLimit = null;
/**
 * @since Flash CS5.5
 * @type {number}
 */
Flash.prototype.publishCacheMemorySizeMax = null;
/**
 * @since Flash 8
 * @type {boolean}
 */
Flash.prototype.objectDrawingMode = 0;
/**
 * @since Flash MX 2004
 * @type {OutputPanel}
 * @const
 */
Flash.prototype.outputPanel = null;
/**
 * @since Flash CS4
 * @type {PresetPanel}
 * @const
 */
Flash.prototype.presetPanel = null;
/**
 * @since Flash CS3
 * @type {string}
 * @const
 */
Flash.prototype.scriptURI = null;
/**
 * @since Flash CS4
 * @type {string}
 */
Flash.prototype.sourcePath = null;
/**
 * @since Flash CS6
 * @type {SpriteSheetExporter}
 */
Flash.prototype.spriteSheetExporter = null;
/**
 * @since Flash CS4
 * @type {Array.<SwfPanel>}
 * @const
 */
Flash.prototype.swfPanels = null;
/**
 * @since Flash MX 2004
 * @type {Tools}
 * @const
 */
Flash.prototype.tools = null;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Flash.prototype.version = null;
/**
 * @since Flash MX 2004
 * @type {XMLUI}
 * @const
 */
Flash.prototype.xmlui = null;
/**
 * @since Flash CS3
 * @param {"documentNew"|"documentOpened"|"documentClosed"|"mouseMove"|"documentChanged"|"layerChanged"|"timelineChanged"|"frameChanged"|"prePublish"|"postPublish"|"selectionChanged"|"dpiChanged"} eventType
 * @param {Function} callbackFunction
 * @return {number}
 */
Flash.prototype.addEventListener = function (eventType, callbackFunction) {
};
/**
 * @since Flash MX 2004
 * @param {"open"|"select"|"save"} browseType
 * @param {string} [title]
 * @param {string} [fileDescription]
 * @param {string} [fileFilter]
 * @return {string}
 */
Flash.prototype.browseForFileURL = function (browseType, title, fileDescription, fileFilter) {
};
/**
 * @since Flash 8
 * @param {string} [description]
 * @return {string}
 */
Flash.prototype.browseForFolderURL = function (description) {
};
/**
 * @since Flash CS5.5
 */
Flash.prototype.clearPublishCache = function () {
};
/**
 * @since Flash CS3
 * @param {string} string
 */
Flash.prototype.clipCopyString = function (string) {
};
/**
 * @since Flash MX 2004
 * @param {boolean} [bPromptToSave]
 */
Flash.prototype.closeAll = function (bPromptToSave) {
};
/**
 * @since Flash CS3
 * @return {boolean}
 */
Flash.prototype.closeAllPlayerDocuments = function () {
};
/**
 * @since Flash MX 2004
 * @param {Document} documentObject
 * @param {boolean} [bPromptToSaveChanges]
 */
Flash.prototype.closeDocument = function (documentObject, bPromptToSaveChanges) {
};
/**
 * @since Flash MX 2004
 * @param {"timeline"} [docType]
 * @return {Document}
 */
Flash.prototype.createDocument = function (docType) {
};
/**
 * @since Flash CS5
 * @param {string} ucfURI
 * @param {string} [profileName]
 * @return {string}
 */
Flash.prototype.exportPublishProfileString = function (ucfURI, profileName) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @return {boolean}
 */
Flash.prototype.fileExists = function (fileURI) {
};
/**
 * @since Flash CS3
 * @param {number} id
 * @return {Document}
 */
Flash.prototype.findDocumentDOM = function (id) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {Array.<number>}
 */
Flash.prototype.findDocumentIndex = function (name) {
};
/**
 * @since Flash CS3
 * @param {string} instanceName
 * @param {Document} document
 * @return {Array.<ElementFindAndSelect>}
 */
Flash.prototype.findObjectInDocByName = function (instanceName, document) {
};
/**
 * @since Flash CS3
 * @param {"shape"|"text"|"tlfText"|"instance"|"shapeObj"} elementType
 * @param {Document} document
 * @return {Array.<ElementFindAndSelect>}
 */
Flash.prototype.findObjectInDocByType = function (elementType, document) {
};
/**
 * @since Flash 8
 * @param {number} memType
 * @return {number}
 */
Flash.prototype.getAppMemoryInfo = function (memType) {
};
/**
 * @since Flash MX 2004
 * @return {Document}
 */
Flash.prototype.getDocumentDOM = function () {
};
/**
 * @since Flash CC
 * @param {string} themeParamName
 * @return {string}
 */
Flash.prototype.getThemeColor = function (themeParamName) {
};
/**
 * @since Flash CC
 * @return {Array.<string>}
 */
Flash.prototype.getThemeColorParameters = function () {
};
/**
 * @since Flash CC
 * @param {"fontStyle"|"fontSize"} infoType
 * @param {"large"|"small"} size
 * @return {string}
 */
Flash.prototype.getThemeFontInfo = function (infoType, size) {
};
/**
 * @since Flash CS5.5
 * @param {string} panelName
 * @param {boolean} [useLocalizedPanelName]
 * @return {SwfPanel}
 */
Flash.prototype.getSwfPanel = function (panelName, useLocalizedPanelName) {
};
/**
 * @since Flash CS4
 * @param {string} fontName
 * @return {boolean}
 */
Flash.prototype.isFontInstalled = function (fontName) {
};
/**
 * @since Flash MX 2004
 * @param {string} URI
 * @param {boolean} [returnMBCS]
 * @return {string}
 */
Flash.prototype.mapPlayerURL = function (URI, returnMBCS) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @return {Document}
 */
Flash.prototype.openDocument = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @param {string} [createExtension]
 * @param {string} [className]
 */
Flash.prototype.openScript = function (fileURI, createExtension, className) {
};
/**
 * @since Flash MX 2004
 * @param {boolean} [bPromptIfNeeded]
 */
Flash.prototype.quit = function (bPromptIfNeeded) {
};
/**
 * @since Flash MX 2004
 * @deprecated
 */
Flash.prototype.reloadEffects = function () {
};
/**
 * @since Flash MX 2004
 */
Flash.prototype.reloadTools = function () {
};
/**
 * @since Flash CS3
 * @param {"documentNew"|"documentOpened"|"documentClosed"|"mouseMove"|"documentChanged"|"layerChanged"|"timelineChanged"|"frameChanged"|"prePublish"|"postPublish"|"selectionChanged"|"dpiChanged"} eventType
 * @param {number} id
 * @return {boolean}
 */
Flash.prototype.removeEventListener = function (eventType, id) {
};
/**
 * @since Flash CS3
 */
Flash.prototype.resetAS3PackagePaths = function () {
};
/**
 * @since Flash CS3
 * @deprecated
 */
Flash.prototype.resetPackagePaths = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @param {string} [funcName]
 * @param {...*} args
 * @return {string}
 */
Flash.prototype.runScript = function (fileURI, funcName, args) {
};
/**
 * @since Flash MX 2004
 */
Flash.prototype.saveAll = function () {
};
/**
 * @since Flash MX 2004
 * @param {Document} document
 * @param {string} [fileURI]
 * @return {boolean}
 */
Flash.prototype.saveDocument = function (document, fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {Document} document
 * @return {boolean}
 */
Flash.prototype.saveDocumentAs = function (document) {
};
/**
 * @since Flash CS3
 * @param {Element} elementObject
 * @param {boolean} editMode
 * @return {boolean}
 */
Flash.prototype.selectElement = function (elementObject, editMode) {
};
/**
 * @since Flash CS3
 * @param {"arrow"|"bezierSelect"|"freeXform"|"fillXform"|"lasso"|"pen"|"penplus"|"penminus"|"penmodify"|"text"|"line"|"rect"|"oval"|"rectPrimitive"|"ovalPrimitive"|"polystar"|"pencil"|"brush"|"inkBottle"|"bucket"|"eyeDropper"|"eraser"|"hand"|"magnifier"} toolName
 */
Flash.prototype.selectTool = function (toolName) {
};
/**
 * @since Flash MX 2004
 * @param {Document} document
 * @param [bActivateFrame]
 */
Flash.prototype.setActiveWindow = function (document, bActivateFrame) {
};
/**
 * @since Flash CC
 * @param {string} keySection
 * @param {string} keyName
 * @param {boolean} keyValue
 */
Flash.prototype.setPrefBoolean = function (keySection, keyName, keyValue) {
};
/**
 * @since Flash 8
 * @param {boolean} show
 */
Flash.prototype.showIdleMessage = function (show) {
};
/**
 * @since Flash CS5
 * @param {string} fileURI
 * @param {number} line
 * @param {boolean} enable
 */
Flash.prototype.toggleBreakpoint = function (fileURI, line, enable) {
};
/**
 * @since Flash MX 2004
 * @param {*} message
 */
Flash.prototype.trace = function (message) {
};
/**
 * @since Flash CC
 * @param {string} xmlURI
 * @return {XMLUI}
 */
Flash.prototype.xmlPanel = function (xmlURI) {
};
/**
 * @since Flash CC
 * @param {string} xmlString
 * @return {XMLUI}
 */
Flash.prototype.xmlPanelFromString = function (xmlString) {
};
/**
 * @since Flash CS3
 * @class {ActionsPanel}
 */
ActionsPanel = function () {
};
/**
 * @since Flash CS3
 * @deprecated
 * @param {string} ASVariableName
 * @return {string}
 */
ActionsPanel.prototype.getClassForObject = function (ASVariableName) {
};
/**
 * @since Flash CS3
 * @deprecated
 * @return {boolean}
 */
ActionsPanel.prototype.getScriptAssistMode = function () {
};
/**
 * @since Flash CS3
 * @return {string}
 */
ActionsPanel.prototype.getSelectedText = function () {
};
/**
 * @since Flash CS3
 * @return {string}
 */
ActionsPanel.prototype.getText = function () {
};
/**
 * @since Flash CS3
 * @return {boolean}
 */
ActionsPanel.prototype.hasSelection = function () {
};
/**
 * @since Flash CS3
 * @param {string} replacementText
 * @return {boolean}
 */
ActionsPanel.prototype.replaceSelectedText = function (replacementText) {
};
/**
 * @since Flash CS3
 * @deprecated
 * @param {boolean} bScriptAssist
 * @return {boolean}
 */
ActionsPanel.prototype.setScriptAssistMode = function (bScriptAssist) {
};
/**
 * @since Flash CS3
 * @param {number} startIndex
 * @param {number} numberOfChars
 * @return {boolean}
 */
ActionsPanel.prototype.setSelection = function (startIndex, numberOfChars) {
};
/**
 * @since Flash CS3
 * @param {string} replacementText
 * @return {boolean}
 */
ActionsPanel.prototype.setText = function (replacementText) {
};
/**
 * @since Flash CS3
 * @class {CompilerErrors}
 */
CompilerErrors = function () {
};
/**
 * @since Flash CS3
 */
CompilerErrors.prototype.clear = function () {
};
/**
 * @since Flash CS3
 * @param {string} fileURI
 * @param {boolean} [bAppendToFile]
 * @param {boolean} [bUseSystemEncoding]
 */
CompilerErrors.prototype.save = function (fileURI, bAppendToFile, bUseSystemEncoding) {
};
/**
 * @since Flash MX 2004
 * @class {ComponentPanel}
 */
ComponentPanel = function () {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} position
 * @param {string} categoryName
 * @param {string} componentName
 */
ComponentPanel.prototype.addItemToDocument = function (position, categoryName, componentName) {
};
/**
 * @since Flash 8
 * @return {boolean}
 */
ComponentPanel.prototype.reload = function () {
};
/**
 * @since Flash MX 2004
 * @class {drawingLayer}
 */
drawingLayer = function () {
};
/**
 * @since Flash MX 2004
 * @param {boolean} [persistentDraw]
 */
drawingLayer.prototype.beginDraw = function (persistentDraw) {
};
/**
 * @since Flash MX 2004
 */
drawingLayer.prototype.beginFrame = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} x1Ctrl
 * @param {number} y1Ctrl
 * @param {number} x2Ctl
 * @param {number} y2Ctl
 * @param {number} xEnd
 * @param {number} yEnd
 */
drawingLayer.prototype.cubicCurveTo = function (x1Ctrl, y1Ctrl, x2Ctl, y2Ctl, xEnd, yEnd) {
};
/**
 * @since Flash MX 2004
 * @param {number} xCtl
 * @param {number} yCtl
 * @param {number} xEnd
 * @param {number} yEnd
 */
drawingLayer.prototype.curveTo = function (xCtl, yCtl, xEnd, yEnd) {
};
/**
 * @since Flash MX 2004
 * @param {Path} path
 */
drawingLayer.prototype.drawPath = function (path) {
};
/**
 * @since Flash MX 2004
 */
drawingLayer.prototype.endDraw = function () {
};
/**
 * @since Flash MX 2004
 */
drawingLayer.prototype.endFrame = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} x
 * @param {number} y
 */
drawingLayer.prototype.lineTo = function (x, y) {
};
/**
 * @since Flash MX 2004
 * @param {number} x
 * @param {number} y
 */
drawingLayer.prototype.moveTo = function (x, y) {
};
/**
 * @since Flash MX 2004
 * @return {Path}
 */
drawingLayer.prototype.newPath = function () {
};
/**
 * @since Flash MX 2004
 * @param {string|number} color
 */
drawingLayer.prototype.setColor = function (color) {
};
/**
 * @since Flash MX 2004
 * @class {FlashMath}
 */
FlashMath = function () {
};
/**
 * @since Flash MX 2004
 * @param {Matrix} mat1
 * @param {Matrix} mat2
 * @return {Matrix}
 */
FlashMath.prototype.concatMatrix = function (mat1, mat2) {
};
/**
 * @since Flash MX 2004
 * @param {Matrix} mat
 * @return {Matrix}
 */
FlashMath.prototype.invertMatrix = function (mat) {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} pt1
 * @param {{x:number,y:number}} pt2
 * @return {number}
 */
FlashMath.prototype.pointDistance = function (pt1, pt2) {
};
/**
 * @since Flash CS6
 * @param {Matrix} matrix
 * @param {{x:number,y:number}} point
 * @return {{x:number,y:number}}
 */
FlashMath.prototype.transformPoint = function (matrix, point) {
};
/**
 * @since Flash MX 2004
 * @class {OutputPanel}
 */
OutputPanel = function () {
};
/**
 * @since Flash MX 2004
 */
OutputPanel.prototype.clear = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @param {boolean} [bAppendToFile]
 * @param {boolean} [bUseSystemEncoding]
 */
OutputPanel.prototype.save = function (fileURI, bAppendToFile, bUseSystemEncoding) {
};
/**
 * @since Flash MX 2004
 * @param {*} message
 */
OutputPanel.prototype.trace = function (message) {
};
/**
 * @since Flash CS4
 * @class {PresetPanel}
 */
PresetPanel = function () {
};
/**
 * @since Flash CS4
 * @type {Array.<PresetItem>}
 */
PresetPanel.prototype.items = null;
/**
 * @since Flash CS4
 * @param {string} [namePath]
 * @return {boolean}
 */
PresetPanel.prototype.addNewItem = function (namePath) {
};
/**
 * @since Flash CS4
 * @param {string} [presetPath]
 * @return {boolean}
 */
PresetPanel.prototype.applyPreset = function (presetPath) {
};
/**
 * @since Flash CS4
 * @param {string} [folderPath]
 * @return {boolean}
 */
PresetPanel.prototype.deleteFolder = function (folderPath) {
};
/**
 * @since Flash CS4
 * @param {string} [namePath]
 * @return {boolean}
 */
PresetPanel.prototype.deleteItem = function (namePath) {
};
/**
 * @since Flash CS4
 * @param {boolean} [bExpand]
 * @param {boolean} [bRecurse]
 * @param {string} [folderPath]
 * @return {boolean}
 */
PresetPanel.prototype.expandFolder = function (bExpand, bRecurse, folderPath) {
};
/**
 * @since Flash CS4
 * @param {string} fileURI
 * @param {string} [namePath]
 * @return {boolean}
 */
PresetPanel.prototype.exportItem = function (fileURI, namePath) {
};
/**
 * @since Flash CS4
 * @param {string} [presetName]
 * @return {number}
 */
PresetPanel.prototype.findItemIndex = function (presetName) {
};
/**
 * @since Flash CS4
 * @return {Array.<PresetItem>}
 */
PresetPanel.prototype.getSelectedItems = function () {
};
/**
 * @since Flash CS4
 * @param {string} fileURI
 * @param {string} [namePath]
 * @return {boolean}
 */
PresetPanel.prototype.importItem = function (fileURI, namePath) {
};
/**
 * @since Flash CS4
 * @param {string} folderPath
 * @param {string} [namePath]
 * @return {boolean}
 */
PresetPanel.prototype.moveToFolder = function (folderPath, namePath) {
};
/**
 * @since Flash CS4
 * @param {string} [folderPath]
 * @return {boolean}
 */
PresetPanel.prototype.newFolder = function (folderPath) {
};
/**
 * @since Flash CS4
 * @param {string} newName
 * @return {boolean}
 */
PresetPanel.prototype.renameItem = function (newName) {
};
/**
 * @since Flash CS4
 * @param {string} namePath
 * @param {boolean} [bReplaceCurrentSelection]
 * @param {boolean} [bSelect]
 * @return {boolean}
 */
PresetPanel.prototype.selectItem = function (namePath, bReplaceCurrentSelection, bSelect) {
};
/**
 * @since Flash MX 2004
 * @class {Tools}
 */
Tools = function () {
};
/**
 * @since Flash MX 2004
 * @type {ToolObj}
 */
Tools.prototype.activeTool = null;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Tools.prototype.altIsDown = null;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Tools.prototype.ctlIsDown = null;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Tools.prototype.mouseIsDown = null;
/**
 * @since Flash MX 2004
 * @type {{x:number,y:number}}
 */
Tools.prototype.penDownLoc = null;
/**
 * @since Flash MX 2004
 * @type {{x:number,y:number}}
 */
Tools.prototype.penLoc = null;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Tools.prototype.shiftIsDown = false;
/**
 * @since Flash MX 2004
 * @type {Array.<ToolObj>}
 */
Tools.prototype.toolObjs = null;
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} pt1
 * @param {{x:number,y:number}} pt2
 * @return {{x:number,y:number}}
 */
Tools.prototype.constrainPoint = function (pt1, pt2) {
};
/**
 * @since Flash MX 2004
 * @return {number}
 */
Tools.prototype.getKeyDown = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} cursor
 */
Tools.prototype.setCursor = function (cursor) {
};
/**
 * @since Flash MX 2004
 * @param {{x:number,y:number}} pt
 * @return {{x:number,y:number}}
 */
Tools.prototype.snapPoint = function (pt) {
};
/**
 * @since Flash MX 2004
 * @class {XMLUI}
 */
XMLUI = function () {
};
/**
 * @since Flash MX 2004
 */
XMLUI.prototype.accept = function () {
};
/**
 * @since Flash MX 2004
 */
XMLUI.prototype.cancel = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} controlPropertyName
 * @return {string}
 */
XMLUI.prototype.get = function (controlPropertyName) {
};
/**
 * @since Flash 8
 * @param {string} controlPropertyName
 * @return {{label:string,value:string}}
 */
XMLUI.prototype.getControlItemElement = function (controlPropertyName) {
};
/**
 * @since Flash 8
 * @param {string} controlID
 * @return {boolean}
 */
XMLUI.prototype.getEnabled = function (controlID) {
};
/**
 * @since Flash 8
 * @param {string} controlID
 * @return {boolean}
 */
XMLUI.prototype.getVisible = function (controlID) {
};
/**
 * @since Flash MX 2004
 * @param {string} controlPropertyName
 * @param {string} value
 */
XMLUI.prototype.set = function (controlPropertyName, value) {
};
/**
 * @since Flash 8
 * @param {string} controlPropertyName
 * @param {{label:string,value?:string}} elementItem
 */
XMLUI.prototype.setControlItemElement = function (controlPropertyName, elementItem) {
};
/**
 * @since Flash 8
 * @param {string} controlID
 * @param {Array.<{label:string,value?:string}>} elementItemArray
 */
XMLUI.prototype.setControlItemElements = function (controlID, elementItemArray) {
};
/**
 * @since Flash 8
 * @param {string} controlID
 * @param {boolean} enable
 */
XMLUI.prototype.setEnabled = function (controlID, enable) {
};
/**
 * @since Flash 8
 * @param {string} controlID
 * @param {boolean} visible
 */
XMLUI.prototype.setVisible = function (controlID, visible) {
};
/**
 * @since Flash CS4
 * @class {PresetItem}
 */
PresetItem = function () {
};
/**
 * @since Flash CS4
 * @type {boolean}
 * @const
 */
PresetItem.prototype.isDefault = null;
/**
 * @since Flash CS4
 * @type {boolean}
 * @const
 */
PresetItem.prototype.isFolder = null;
/**
 * @since Flash CS4
 * @type {number}
 * @const
 */
PresetItem.prototype.level = null;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
PresetItem.prototype.name = null;
/**
 * @since Flash CS4
 * @type {boolean}
 * @const
 */
PresetItem.prototype.open = null;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
PresetItem.prototype.path = null;
/**
 * @since Flash CS4
 * @class {SwfPanel}
 */
SwfPanel = function () {
};
/**
 * @since Flash СС
 * @type {string}
 * @const
 */
SwfPanel.prototype.dpiScaleFactorX = null;
/**
 * @since Flash СС
 * @type {string}
 * @const
 */
SwfPanel.prototype.dpiScaleFactorY = null;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
SwfPanel.prototype.name = null;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
SwfPanel.prototype.path = null;
/**
 * @since Flash CS4
 * @param {string} request
 * @return {string}
 */
SwfPanel.prototype.call = function (request) {
};
/**
 * @since Flash CC
 */
SwfPanel.prototype.reload = function () {
};
/**
 * @since Flash CS5.5
 */
SwfPanel.prototype.setFocus = function () {
};
/**
 * @since Flash MX 2004
 * @class {ToolObj}
 */
ToolObj = function () {
};
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
ToolObj.prototype.depth = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
ToolObj.prototype.iconID = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
ToolObj.prototype.position = 0;
/**
 * @since Flash MX 2004
 * @param {string} control
 * @param {boolean} bEnable
 */
ToolObj.prototype.enablePIControl = function (control, bEnable) {
};
/**
 * @since Flash MX 2004
 * @param {string} file
 */
ToolObj.prototype.setIcon = function (file) {
};
/**
 * @since Flash MX 2004
 * @param {string} menuStr
 */
ToolObj.prototype.setMenuString = function (menuStr) {
};
/**
 * @since Flash MX 2004
 * @param {string} xmlFile
 */
ToolObj.prototype.setOptionsFile = function (xmlFile) {
};
/**
 * @since Flash MX 2004
 * @param {"shape"|"text"|"movie"} pi
 */
ToolObj.prototype.setPI = function (pi) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 */
ToolObj.prototype.setToolName = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {string} toolTip
 */
ToolObj.prototype.setToolTip = function (toolTip) {
};
/**
 * @since Flash MX 2004
 * @param {string} control
 * @param {boolean} bShow
 */
ToolObj.prototype.showPIControl = function (control, bShow) {
};
/**
 * @since Flash MX 2004
 * @param {boolean} bShow
 */
ToolObj.prototype.showTransformHandles = function (bShow) {
};
/**
 * @since Flash CS3
 * @class {ElementFindAndSelect}
 */
ElementFindAndSelect = function () {
};
/**
 * @since Flash CS3
 * @type {Element}
 */
ElementFindAndSelect.prototype.obj = null;
/**
 * @since Flash CS3
 * @type {Frame}
 */
ElementFindAndSelect.prototype.keyframe = null;
/**
 * @since Flash CS3
 * @type {Layer}
 */
ElementFindAndSelect.prototype.layer = null;
/**
 * @since Flash CS3
 * @type {Timeline}
 */
ElementFindAndSelect.prototype.timeline = null;
/**
 * @since Flash CS3
 * @type {SymbolInstance}
 */
ElementFindAndSelect.prototype.parent = null;
/**
 * @since Flash CS6
 * @class {SpriteSheetExporter}
 */
SpriteSheetExporter = function () {
};
/**
 * @since Flash CS6
 * @type {"basic"|"maxRects"}
 */
SpriteSheetExporter.prototype.algorithm = null;
/**
 * @since Flash CS6
 * @type {boolean}
 */
SpriteSheetExporter.prototype.allowRotate = false;
/**
 * @since Flash CS6
 * @type {boolean}
 */
SpriteSheetExporter.prototype.allowTrimming = false;
/**
 * @since Flash CS6
 * @type {string}
 * @const
 */
SpriteSheetExporter.prototype.app = null;
/**
 * @since Flash CS6
 * @type {boolean}
 */
SpriteSheetExporter.prototype.autoSize = false;
/**
 * @since Flash CS6
 * @type {number}
 */
SpriteSheetExporter.prototype.borderPadding = 0;
/**
 * @since Flash CS6
 * @type {boolean}
 * @const
 */
SpriteSheetExporter.prototype.canBorderPad = false;
/**
 * @since Flash CS6
 * @type {boolean}
 * @const
 */
SpriteSheetExporter.prototype.canRotate = false;
/**
 * @since Flash CS6
 * @type {boolean}
 * @const
 */
SpriteSheetExporter.prototype.canShapePad = false;
/**
 * @since Flash CS6
 * @type {boolean}
 * @const
 */
SpriteSheetExporter.prototype.canStackDuplicateFrames = false;
/**
 * @since Flash CS6
 * @type {boolean}
 * @const
 */
SpriteSheetExporter.prototype.canTrim = false;
/**
 * @since Flash CS6
 * @type {"RGBA8888"|"RGB888x"|"RGB8"}
 * @const
 */
SpriteSheetExporter.prototype.format = null;
/**
 * @since Flash CS6
 * @type {string}
 * @const
 */
SpriteSheetExporter.prototype.image = null;
/**
 * @since Flash CS6
 * @type {string}
 */
SpriteSheetExporter.prototype.layoutFormat = null;
/**
 * @since Flash CS6
 * @type {boolean}
 * @const
 */
SpriteSheetExporter.prototype.overflowed = false;
/**
 * @since Flash CS6
 * @type {number}
 */
SpriteSheetExporter.prototype.shapePadding = 0;
/**
 * @since Flash CS6
 * @type {number}
 */
SpriteSheetExporter.prototype.sheetHeight = 0;
/**
 * @since Flash CS6
 * @type {number}
 */
SpriteSheetExporter.prototype.sheetWidth = 0;
/**
 * @since Flash CS6
 * @type {boolean}
 */
SpriteSheetExporter.prototype.stackDuplicateFrames = false;
/**
 * @since Flash CS6
 * @type {string}
 * @const
 */
SpriteSheetExporter.prototype.version = null;
/**
 * @since Flash CS6
 * @param {BitmapItem|BitmapInstance} bitmap
 */
SpriteSheetExporter.prototype.addBitmap = function (bitmap) {
};
/**
 * @since Flash CS6
 * @param {SymbolItem|SymbolInstance} symbol
 * @param {string} [name]
 * @param {number} [beginFrame]
 * @param {number} [endFrame]
 * @return {boolean}
 */
SpriteSheetExporter.prototype.addSymbol = function (symbol, name, beginFrame, endFrame) {
};
/**
 * @since Flash CS6
 */
SpriteSheetExporter.prototype.beginExport = function () {
};
/**
 * @since Flash CS6
 * @param {SymbolItem|SymbolInstance} symbol
 * @param {number} [beginFrame]
 * @param {number} [endFrame]
 * @return {boolean}
 */
SpriteSheetExporter.prototype.changeSymbol = function (symbol, beginFrame, endFrame) {
};
/**
 * @since Flash CS6
 * @param {string} path
 * @param {"png"|"jpg"|{format:"png"|"jpg",backgroundColor?:(string|number),quality?:number,bitDepth?:number}} imageFormat
 * @param {boolean} [writeMetaData]
 * @return {string}
 */
SpriteSheetExporter.prototype.exportSpriteSheet = function (path, imageFormat, writeMetaData) {
};
/**
 * @since Flash CS6
 * @param {BitmapItem|BitmapInstance} bitmap
 */
SpriteSheetExporter.prototype.removeBitmap = function (bitmap) {
};
/**
 * @since Flash CS6
 * @param {SymbolItem|SymbolInstance} symbol
 * @return {boolean}
 */
SpriteSheetExporter.prototype.removeSymbol = function (symbol) {
};
/**
 * @since Flash MX 2004
 * @class {FlashFile}
 */
FlashFile = function () {
};
/**
 * @since Flash MX 2004
 * @type {FlashFile}
 */
FLfile = new FlashFile();
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @param {string} copyURI
 * @return {boolean}
 */
FlashFile.prototype.copy = function (fileURI, copyURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} folderURI
 * @return {boolean}
 */
FlashFile.prototype.createFolder = function (folderURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @return {boolean}
 */
FlashFile.prototype.exists = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileOrFolderURI
 * @return {string}
 */
FlashFile.prototype.getAttributes = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileOrFolderURI
 * @return {string}
 */
FlashFile.prototype.getCreationDate = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileOrFolderURI
 * @return {Date}
 */
FlashFile.prototype.getCreationDateObj = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileOrFolderURI
 * @return {string}
 */
FlashFile.prototype.getModificationDate = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileOrFolderURI
 * @return {Date}
 */
FlashFile.prototype.getModificationDateObj = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @return {number}
 */
FlashFile.prototype.getSize = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} folderURI
 * @param {"files"|"directories"} [filesOrDirectories]
 * @return {Array.<string>}
 */
FlashFile.prototype.listFolder = function (folderURI, filesOrDirectories) {
};
/**
 * @since Flash CS4
 * @param {string} fileName
 * @return {string}
 */
FlashFile.prototype.platformPathToURI = function (fileName) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @return {string}
 */
FlashFile.prototype.read = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileOrFolderURI
 * @return {boolean}
 */
FlashFile.prototype.remove = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @param {string} strAttrs
 * @return {boolean}
 */
FlashFile.prototype.setAttributes = function (fileURI, strAttrs) {
};
/**
 * @since Flash CS4
 * @param {string} fileURI
 * @return {string}
 */
FlashFile.prototype.uriToPlatformPath = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} fileURI
 * @param {string} textToWrite
 * @param {"append"} [strAppendMode]
 * @return {boolean}
 */
FlashFile.prototype.write = function (fileURI, textToWrite, strAppendMode) {
};