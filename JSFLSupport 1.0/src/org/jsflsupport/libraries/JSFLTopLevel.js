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
 * Top level objects
 **************************************************************************/
/**
 * @since Flash MX 2004
 * @param {String} alertText
 */
alert = function (alertText) {
};
/**
 * @since Flash 8
 * @param {String} strAlert
 * @return Boolean
 */
confirm = function (strAlert) {
};
/**
 * @since Flash MX 2004
 * @param {String} promptMsg
 * @param {String} [text]
 * @return String
 */
prompt = function (promptMsg, text) {
};

/**
 * @since Flash MX 2004
 * @type fl
 */
fl = null;
/**
 * @since Flash CS3
 * @type actionsPanel
 * @const
 */
fl.actionsPanel = null;
/**
 * @since Flash CS3
 * @type String
 */
fl.as3PackagePaths = null;
/**
 * @since Flash CS3
 * @type compilerErrors
 * @const
 */
fl.compilerErrors = null;
/**
 * @since Flash MX 2004
 * @type componentsPanel
 * @const
 */
fl.componentsPanel = null;
/**
 * @since Flash MX 2004
 * @type String
 * @const
 */
fl.configDirectory = null;
/**
 * @since Flash MX 2004
 * @type String
 * @const
 */
fl.configURI = null;
/**
 * @since Flash 8
 * @type Boolean
 */
fl.contactSensitiveSelection = false;
/**
 * @since Flash MX 2004
 * @type Array
 * @const
 */
fl.createNewDocList = null;
/**
 * @since Flash MX 2004
 * @type Array
 * @const
 */
fl.createNewDocListType = null;
/**
 * @since Flash MX 2004
 * @type Array
 * @const
 */
fl.createNewTemplateList = null;
/**
 * @since Flash MX 2004
 * @type Array
 * @const
 */
fl.documents = null;
/**
 * @since Flash MX 2004
 * @type drawingLayer
 * @const
 */
fl.drawingLayer = null;
/**
 * @since Flash CS4
 * @type String
 */
fl.externalLibraryPath = null;
/**
 * @since Flash CS4
 * @type String
 */
fl.flexSDKPath = null;
/**
 * @since Flash CS5.5
 * @type String
 * @const
 */
fl.installedPlayers = null;
/**
 * @since Flash CS5
 * @type String
 */
fl.languageCode = null;
/**
 * @since Flash CS4
 * @type String
 */
fl.libraryPath = null;
/**
 * @since Flash MX 2004
 * @type Math
 * @const
 */
fl.Math = null;
/**
 * @since Flash MX 2004
 * @type Array
 * @const
 */
fl.mruRecentFileList = null;
/**
 * @since Flash MX 2004
 * @type Array
 * @const
 */
fl.mruRecentFileListType = null;
/**
 * @since Flash CS3
 * @type String
 */
fl.packagePaths = null;
/**
 * @since Flash CS5.5
 * @type Number
 */
fl.publishCacheDiskSizeMax = null;
/**
 * @since Flash CS5.5
 * @type Boolean
 */
fl.publishCacheEnabled = null;
/**
 * @since Flash CS5.5
 * @type Number
 */
fl.publishCacheMemoryEntrySizeLimit = null;
/**
 * @since Flash CS5.5
 * @type Number
 */
fl.publishCacheMemorySizeMax = null;
/**
 * @since Flash 8
 * @type Boolean
 */
fl.objectDrawingMode = 0;
/**
 * @since Flash MX 2004
 * @type outputPanel
 * @const
 */
fl.outputPanel = null;
/**
 * @since Flash CS4
 * @type presetPanel
 * @const
 */
fl.presetPanel = null;
/**
 * @since Flash CS3
 * @type String
 * @const
 */
fl.scriptURI = null;
/**
 * @since Flash CS4
 * @type String
 */
fl.sourcePath = null;
/**
 * @since Flash CS6
 * @type SpriteSheetExporter
 */
fl.spriteSheetExporter = null;
/**
 * @since Flash CS4
 * @type Array
 * @const
 */
fl.swfPanels = null;
/**
 * @since Flash MX 2004
 * @type Tools
 * @const
 */
fl.tools = null;
/**
 * @since Flash MX 2004
 * @type String
 * @const
 */
fl.version = null;
/**
 * @since Flash MX 2004
 * @type XMLUI
 * @const
 */
fl.xmlui = null;
/**
 * @since Flash CS3
 * @param {String} eventType
 * @param {Function} callbackFunction
 * @return Number
 */
fl.addEventListener = function (eventType, callbackFunction) {
};
/**
 * @since Flash MX 2004
 * @param {String} browseType
 * @param {String} [title]
 * @param [previewArea]
 * @return String
 */
fl.browseForFileURL = function (browseType, title, previewArea) {
};
/**
 * @since Flash 8
 * @param {String} [description]
 * @return String
 */
fl.browseForFolderURL = function (description) {
};
/**
 * @since Flash CS5.5
 * @return String
 */
fl.clearPublishCache = function () {
};
/**
 * @since Flash CS3
 * @param {String} string
 */
fl.clipCopyString = function (string) {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} [bPromptToSave]
 */
fl.closeAll = function (bPromptToSave) {
};
/**
 * @since Flash CS3
 * @return Boolean
 */
fl.closeAllPlayerDocuments = function () {
};
/**
 * @since Flash MX 2004
 * @param {Document} documentObject
 * @param {Boolean} [bPromptToSaveChanges]
 */
fl.closeDocument = function (documentObject, bPromptToSaveChanges) {
};
/**
 * @since Flash MX 2004
 * @param {String} [docType]
 * @return Document
 */
fl.createDocument = function (docType) {
};
/**
 * @since Flash CS5
 * @param {String} ucfURI
 * @param {String} [profileName]
 * @return String
 */
fl.exportPublishProfileString = function (ucfURI, profileName) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @return Boolean
 */
fl.fileExists = function (fileURI) {
};
/**
 * @since Flash CS3
 * @param {Number} id
 * @return Document
 */
fl.findDocumentDOM = function (id) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 * @return Array
 */
fl.findDocumentIndex = function (name) {
};
/**
 * @since Flash CS3
 * @param {String} instanceName
 * @param {Document} document
 * @return Array
 */
fl.findObjectInDocByName = function (instanceName, document) {
};
/**
 * @since Flash CS3
 * @param {String} elementType
 * @param {Document} document
 * @return Array
 */
fl.findObjectInDocByType = function (elementType, document) {
};
/**
 * @since Flash 8
 * @param {Number} memType
 * @return Number
 */
fl.getAppMemoryInfo = function (memType) {
};
/**
 * @since Flash MX 2004
 * @return Document
 */
fl.getDocumentDOM = function () {
};
/**
 * @since Flash CS5.5
 * @param {String} panelName
 * @param {Boolean} [useLocalizedPanelName]
 * @return SWFPanel
 */
fl.getSwfPanel = function (panelName, useLocalizedPanelName) {
};
/**
 * @since Flash CS4
 * @param {String} fontName
 * @return Boolean
 */
fl.isFontInstalled = function (fontName) {
};
/**
 * @since Flash MX 2004
 * @param {String} URI
 * @param {Boolean} [returnMBCS]
 * @return String
 */
fl.mapPlayerURL = function (URI, returnMBCS) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @return Document
 */
fl.openDocument = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @param {String} [createExtension]
 * @param {String} [className]
 */
fl.openScript = function (fileURI, createExtension, className) {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} [bPromptIfNeeded]
 */
fl.quit = function (bPromptIfNeeded) {
};
/**
 * @since Flash MX 2004
 */
fl.reloadTools = function () {
};
/**
 * @since Flash CS3
 * @param {String} eventType
 * @param {Number} id
 * @return Boolean
 */
fl.removeEventListener = function (eventType, id) {
};
/**
 * @since Flash CS3
 */
fl.resetAS3PackagePaths = function () {
};
/**
 * @since Flash CS3
 */
fl.resetPackagePaths = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @param {String} [funcName]
 * @return String
 */
fl.runScript = function (fileURI, funcName/*, ...args*/) {
};
/**
 * @since Flash MX 2004
 */
fl.saveAll = function () {
};
/**
 * @since Flash MX 2004
 * @param {Document} document
 * @param {String} [fileURI]
 * @return Boolean
 */
fl.saveDocument = function (document, fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {Document} document
 * @return Boolean
 */
fl.saveDocumentAs = function (document) {
};
/**
 * @since Flash CS3
 * @param {Element} elementObject
 * @param {Boolean} editMode
 * @return Boolean
 */
fl.selectElement = function (elementObject, editMode) {
};
/**
 * @since Flash CS3
 * @param {String} toolName
 */
fl.selectTool = function (toolName) {
};
/**
 * @since Flash MX 2004
 * @param {Document} document
 * @param [bActivateFrame]
 */
fl.setActiveWindow = function (document, bActivateFrame) {
};
/**
 * @since Flash 8
 * @param {Boolean} show
 */
fl.showIdleMessage = function (show) {
};
/**
 * @since Flash CS5
 * @param {String} fileURI
 * @param {Number} line
 * @param {Boolean} enable
 */
fl.toggleBreakPoint = function (fileURI, line, enable) {
};
/**
 * @since Flash MX 2004
 * @param {String} message
 */
fl.trace = function (message) {
};

/**
 * @since Flash CS3
 */
function actionsPanel () {
    /**
     * @since Flash CS3
     * @param {String} ASVariableName
     * @return String
     */
    this.getClassForObject = function (ASVariableName) {
    };
    /**
     * @since Flash CS3
     * @return Boolean
     */
    this.getScriptAssistMode = function () {
    };
    /**
     * @since Flash CS3
     * @return String
     */
    this.getSelectedText = function () {
    };
    /**
     * @since Flash CS3
     * @return String
     */
    this.getText = function () {
    };
    /**
     * @since Flash CS3
     * @return Boolean
     */
    this.hasSelection = function () {
    };
    /**
     * @since Flash CS3
     * @param {String} replacementText
     * @return Boolean
     */
    this.replaceSelectedText = function (replacementText) {
    };
    /**
     * @since Flash CS3
     * @param {Boolean} bScriptAssist
     * @return Boolean
     */
    this.setScriptAssistMode = function (bScriptAssist) {
    };
    /**
     * @since Flash CS3
     * @param {Number} startIndex
     * @param {Number} numberOfChars
     * @return Boolean
     */
    this.setSelection = function (startIndex, numberOfChars) {
    };
    /**
     * @since Flash CS3
     * @param {String} replacementText
     * @return Boolean
     */
    this.setText = function (replacementText) {
    };
}

/**
 * @since Flash CS3
 */
function compilerErrors () {
    /**
     * @since Flash CS3
     */
    this.clear = function () {
    };
    /**
     * @since Flash CS3
     * @param {String} fileURI
     * @param {Boolean} [bAppendToFile]
     * @param {Boolean} [bUseSystemEncoding]
     */
    this.save = function (fileURI, bAppendToFile, bUseSystemEncoding) {
    };
}

/**
 * @since Flash MX 2004
 */
function componentsPanel () {
    /**
     * @since Flash MX 2004
     * @param {Object} position
     * @param {String} categoryName
     * @param {String} componentName
     */
    this.addItemToDocument = function (position, categoryName, componentName) {
    };
    /**
     * @since Flash 8
     * @return Boolean
     */
    this.reload = function () {
    };
}

/**
 * @since Flash MX 2004
 */
function drawingLayer () {
    /**
     * @since Flash MX 2004
     * @param {Boolean} [persistentDraw]
     */
    this.beginDraw = function (persistentDraw) {
    };
    /**
     * @since Flash MX 2004
     */
    this.beginFrame = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} x1Ctrl
     * @param {Number} y1Ctrl
     * @param {Number} x2Ctl
     * @param {Number} y2Ctl
     * @param {Number} xEnd
     * @param {Number} yEnd
     */
    this.cubicCurveTo = function (x1Ctrl, y1Ctrl, x2Ctl, y2Ctl, xEnd, yEnd) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} xCtl
     * @param {Number} yCtl
     * @param {Number} xEnd
     * @param {Number} yEnd
     */
    this.curveTo = function (xCtl, yCtl, xEnd, yEnd) {
    };
    /**
     * @since Flash MX 2004
     * @param {Path} path
     */
    this.drawPath = function (path) {
    };
    /**
     * @since Flash MX 2004
     */
    this.endDraw = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.endFrame = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} x
     * @param {Number} y
     */
    this.lineTo = function (x, y) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} x
     * @param {Number} y
     */
    this.moveTo = function (x, y) {
    };
    /**
     * @since Flash MX 2004
     * @return Path
     */
    this.newPath = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} color
     */
    this.setColor = function (color) {
    };
}

/**
 * @since Flash MX 2004
 */
function Math () {
    /**
     * @since Flash MX 2004
     * @param {Matrix} mat1
     * @param {Matrix} mat2
     * @return Matrix
     */
    this.concatMatrix = function (mat1, mat2) {
    };
    /**
     * @since Flash MX 2004
     * @param {Matrix} mat
     * @return Matrix
     */
    this.invertMatrix = function (mat) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} pt1
     * @param {Object} pt2
     * @return Number
     */
    this.pointDistance = function (pt1, pt2) {
    };
    /**
     * @since Flash CS6
     * @param {Matrix} matrix
     * @param {Object} point
     * @return Object
     */
    this.transformPoint = function (matrix, point) {
    };
}

/**
 * @since Flash MX 2004
 */
function outputPanel () {
    /**
     * @since Flash MX 2004
     */
    this.clear = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} fileURI
     * @param {Boolean} [bAppendToFile]
     * @param {Boolean} [bUseSystemEncoding]
     */
    this.save = function (fileURI, bAppendToFile, bUseSystemEncoding) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} message
     */
    this.trace = function (message) {
    };
}

/**
 * @since Flash CS4
 */
function presetPanel () {
    /**
     * @since Flash CS4
     * @type Array
     */
    this.items = null;
    /**
     * @since Flash CS4
     * @param {String} [namePath]
     * @return Boolean
     */
    this.addNewItem = function (namePath) {
    };
    /**
     * @since Flash CS4
     * @param {String} [presetPath]
     * @return Boolean
     */
    this.applyPreset = function (presetPath) {
    };
    /**
     * @since Flash CS4
     * @param {String} [folderPath]
     * @return Boolean
     */
    this.deleteFolder = function (folderPath) {
    };
    /**
     * @since Flash CS4
     * @param {String} [namePath]
     * @return Boolean
     */
    this.deleteItem = function (namePath) {
    };
    /**
     * @since Flash CS4
     * @param {Boolean} [bExpand]
     * @param {Boolean} [bRecurse]
     * @param {String} [folderPath]
     * @return Boolean
     */
    this.expandFolder = function (bExpand, bRecurse, folderPath) {
    };
    /**
     * @since Flash CS4
     * @param {String} fileURI
     * @param {String} [namePath]
     * @return Boolean
     */
    this.exportItem = function (fileURI, namePath) {
    };
    /**
     * @since Flash CS4
     * @param {String} [presetName]
     * @return Number
     */
    this.findItemIndex = function (presetName) {
    };
    /**
     * @since Flash CS4
     * @return Array
     */
    this.getSelectedItems = function () {
    };
    /**
     * @since Flash CS4
     * @param {String} fileURI
     * @param {String} [namePath]
     * @return Boolean
     */
    this.importItem = function (fileURI, namePath) {
    };
    /**
     * @since Flash CS4
     * @param {String} folderPath
     * @param {String} [namePath]
     * @return Boolean
     */
    this.moveToFolder = function (folderPath, namePath) {
    };
    /**
     * @since Flash CS4
     * @param {String} [folderPath]
     * @return Boolean
     */
    this.newFolder = function (folderPath) {
    };
    /**
     * @since Flash CS4
     * @param {String} newName
     * @return Boolean
     */
    this.renameItem = function (newName) {
    };
    /**
     * @since Flash CS4
     * @param {String} namePath
     * @param {Boolean} [bReplaceCurrentSelection]
     * @param {Boolean} [bSelect]
     * @return Boolean
     */
    this.selectItem = function (namePath, bReplaceCurrentSelection, bSelect) {
    };
}

/**
 * @since Flash MX 2004
 */
function Tools () {
    /**
     * @since Flash MX 2004
     * @type ToolObj
     */
    this.activeTool = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.altIsDown = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.ctlIsDown = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.mouseIsDown = null;
    /**
     * @since Flash MX 2004
     * @type Object
     */
    this.penDownLoc = null;
    /**
     * @since Flash MX 2004
     * @type Object
     */
    this.penLoc = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.shiftIsDown = false;
    /**
     * @since Flash MX 2004
     * @type Array
     */
    this.toolObjs = null;
    /**
     * @since Flash MX 2004
     * @param {Object} pt1
     * @param {Object} pt2
     * @return Object
     */
    this.constrainPoint = function (pt1, pt2) {
    };
    /**
     * @since Flash MX 2004
     * @return Number
     */
    this.getKeyDown = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} cursor
     */
    this.setCursor = function (cursor) {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} pt
     * @return Object
     */
    this.snapPoint = function (pt) {
    };
}

/**
 * @since Flash MX 2004
 */
function XMLUI () {
    /**
     * @since Flash MX 2004
     */
    this.accept = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.cancel = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} controlPropertyName
     * @return String
     */
    this.get = function (controlPropertyName) {
    };
    /**
     * @since Flash 8
     * @param {String} controlPropertyName
     * @return Object
     */
    this.getControlItemElement = function (controlPropertyName) {
    };
    /**
     * @since Flash 8
     * @param {String} controlID
     * @return Boolean
     */
    this.getEnabled = function (controlID) {
    };
    /**
     * @since Flash 8
     * @param {String} controlID
     * @return Boolean
     */
    this.getVisible = function (controlID) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} controlPropertyName
     * @param {String} value
     */
    this.set = function (controlPropertyName, value) {
    };
    /**
     * @since Flash 8
     * @param {String} controlPropertyName
     * @param {Object} elementItem
     */
    this.setControlItemElement = function (controlPropertyName, elementItem) {
    };
    /**
     * @since Flash 8
     * @param {String} controlID
     * @param {Array} elementItemArray
     */
    this.setControlItemElements = function (controlID, elementItemArray) {
    };
    /**
     * @since Flash 8
     * @param {String} controlID
     * @param {Boolean} enable
     */
    this.setEnabled = function (controlID, enable) {
    };
    /**
     * @since Flash 8
     * @param {String} controlID
     * @param {Boolean} visible
     */
    this.setVisible = function (controlID, visible) {
    };
}

/**
 * @since Flash CS4
 */
function presetItem () {
    /**
     * @since Flash CS4
     * @type Boolean
     * @const
     */
    this.isDefault = null;
    /**
     * @since Flash CS4
     * @type Boolean
     * @const
     */
    this.isFolder = null;
    /**
     * @since Flash CS4
     * @type Number
     * @const
     */
    this.level = null;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.name = null;
    /**
     * @since Flash CS4
     * @type Boolean
     * @const
     */
    this.open = null;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.path = null;
}

/**
 * @since Flash CS4
 */
function swfPanel () {
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.name = null;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.path = null;
    /**
     * @since Flash CS4
     * @param {String} request
     * @return String
     */
    this.call = function (request) {
    };
    /**
     * @since Flash CS5.5
     */
    this.setFocus = function () {
    };
}

/**
 * @since Flash MX 2004
 */
function ToolObj () {
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.depth = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.iconID = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.position = 0;
    /**
     * @since Flash MX 2004
     * @param {String} control
     * @param {Boolean} bEnable
     */
    this.enablePIControl = function (control, bEnable) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} file
     */
    this.setIcon = function (file) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} menuStr
     */
    this.setMenuString = function (menuStr) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} xmlFile
     */
    this.setOptionsFile = function (xmlFile) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} pi
     */
    this.setPI = function (pi) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     */
    this.setToolName = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} toolTip
     */
    this.setToolTip = function (toolTip) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} control
     * @param {Boolean} bShow
     */
    this.showPIControl = function (control, bShow) {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} bShow
     */
    this.showTransformHandles = function (bShow) {
    };
}

/**
 * @since Flash MX 2004
 * @type FLfile
 */
FLfile = null;
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @param {String} copyURI
 * @return Boolean
 */
FLfile.copy = function (fileURI, copyURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} folderURI
 * @return Boolean
 */
FLfile.createFolder = function (folderURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @return Boolean
 */
FLfile.exists = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileOrFolderURI
 * @return String
 */
FLfile.getAttributes = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileOrFolderURI
 * @return String
 */
FLfile.getCreationDate = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileOrFolderURI
 * @return Date
 */
FLfile.getCreationDateObj = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileOrFolderURI
 * @return String
 */
FLfile.getModificationDate = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileOrFolderURI
 * @return Date
 */
FLfile.getModificationDateObj = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @return Number
 */
FLfile.getSize = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} folderURI
 * @param {String} [filesOrDirectories]
 * @return Array
 */
FLfile.listFolder = function (folderURI, filesOrDirectories) {
};
/**
 * @since Flash CS4
 * @param {String} fileName
 * @return String
 */
FLfile.platformPathToURI = function (fileName) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @return String
 */
FLfile.read = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileOrFolderURI
 * @return Boolean
 */
FLfile.remove = function (fileOrFolderURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @param {String} strAttrs
 * @return Boolean
 */
FLfile.setAttributes = function (fileURI, strAttrs) {
};
/**
 * @since Flash CS4
 * @param {String} fileURI
 * @return String
 */
FLfile.uriToPlatformPath = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @param {String} textToWrite
 * @param {String} [strAppendMode]
 * @return Boolean
 */
FLfile.write = function (fileURI, textToWrite, strAppendMode) {
};