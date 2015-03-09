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
 * Items hierarchy
 **************************************************************************/
/**
 * @since Flash MX 2004
 */
function Item () {
    /**
     * @since Flash MX 2004
     * @type String
     * @const
     */
    this.itemType = null;
    /**
     * @since Flash CS3
     * @type String
     */
    this.linkageBaseClass = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.linkageClassName = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.linkageExportForAS = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.linkageExportForRS = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.linkageExportInFirstFrame = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.linkageIdentifier = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.linkageImportForRS = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.linkageURL = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.name = null;
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @param {String} type
     * @param {Object} data
     */
    this.addData = function (name, type, data) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @return Object
     */
    this.getData = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @return Boolean
     */
    this.hasData = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     */
    this.removeData = function (name) {
    };
}

/**
 * @since Flash MX 2004
 */
function BitmapItem () {
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.allowSmoothing = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.compressionType = null;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.fileLastModifiedDate = null;
    /**
     * @since Flash CS6
     * @type Boolean
     * @const
     */
    this.hasValidAlphaLayer = false;
    /**
     * @since Flash CS6
     * @type Number
     * @const
     */
    this.lastModifiedDate = 0;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.originalCompressionType = null;
    /**
     * @since Flash CS4
     * @type Boolean
     * @const
     */
    this.sourceFileExists = false;
    /**
     * @since Flash CS4
     * @type Boolean
     * @const
     */
    this.sourceFileIsCurrent = false;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.sourceFilePath = null;
    /**
     * @since Flash CS4
     * @type Boolean
     */
    this.useDeblocking = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.useImportedJPEGQuality = false;
    /**
     * @since Flash CS4
     * @param {String} fileURI
     * @param {Number} quality
     * @return Boolean
     */
    this.exportToFile = function (fileURI, quality) {
    };
}
BitmapItem.prototype = new Item();

/**
 * @since Flash MX 2004
 */
function folderItem () {
}
folderItem.prototype = new Item();

/**
 * @since Flash MX 2004
 */
function fontItem () {
    /**
     * @since Flash CS4
     * @type Boolean
     */
    this.bitmap = false;
    /**
     * @since Flash CS4
     * @type Boolean
     */
    this.bold = false;
    /**
     * @since Flash CS5
     * @type String
     */
    this.embeddedCharacters = null;
    /**
     * @since Flash CS5
     * @type String
     */
    this.embedRanges = null;
    /**
     * @since Flash CS4
     * @type Boolean
     */
    this.embedVariantGlyphs = false;
    /**
     * @since Flash CS4
     * @type String
     */
    this.font = null;
    /**
     * @since Flash CS4
     * @type Boolean
     */
    this.isDefineFont4Symbol = false;
    /**
     * @since Flash CS4
     * @type Boolean
     */
    this.italic = false;
    /**
     * @since Flash CS4
     * @type Number
     */
    this.size = 0;
}
fontItem.prototype = new Item();

/**
 * @since Flash MX 2004
 */
function SoundItem () {
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.bitRate = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.bits = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.compressionType = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.convertStereoToMono = false;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.fileLastModifiedDate = null;
    /**
     * @since Flash CS6
     * @type Number
     * @const
     */
    this.lastModifiedDate = 0;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.originalCompressionType = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.quality = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.sampleRate = null;
    /**
     * @since Flash CS4
     * @type Boolean
     * @const
     */
    this.sourceFileExists = false;
    /**
     * @since Flash CS4
     * @type Boolean
     * @const
     */
    this.sourceFileIsCurrent = false;
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.sourceFilePath = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.useImportedMP3Quality = false;
    /**
     * @since Flash CS4
     * @param {String} fileURI
     * @return Boolean
     */
    this.exportToFile = function (fileURI) {
    };
}
SoundItem.prototype = new Item();

/**
 * @since Flash MX 2004
 */
function SymbolItem () {
    /**
     * @since Flash CS6
     * @type Number
     * @const
     */
    this.lastModifiedDate = 0;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.scalingGrid = false;
    /**
     * @since Flash 8
     * @type Object
     */
    this.scalingGridRect = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.sourceAutoUpdate = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.sourceFilePath = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.sourceLibraryName = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.symbolType = null;
    /**
     * @since Flash MX 2004
     * @type Timeline
     * @const
     */
    this.timeline = null;
    /**
     * @since Flash MX 2004
     */
    this.convertToCompiledClip = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} outputURI
     */
    this.exportSWC = function (outputURI) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} outputURI
     */
    this.exportSWF = function (outputURI) {
    };
    /**
     * @since Flash CS6
     * @param {Number} frameNumber
     * @param {String} bitmapName
     */
    this.exportToLibrary = function (frameNumber, bitmapName) {
    };
    /**
     * @since Flash CS6
     * @param {String} outputURI
     * @param {Number} [startFrameNum]
     * @param {Number} [endFrameNum]
     * @param {Matrix} [matrix]
     */
    this.exportToPNGSequence = function (outputURI, startFrameNum, endFrameNum, matrix) {
    };
}
SymbolItem.prototype = new Item();

/**
 * @since Flash CS6
 */
function SpriteSheetExporter () {
    /**
     * @since Flash CS6
     * @type String
     */
    this.algorithm = null;
    /**
     * @since Flash CS6
     * @type Boolean
     */
    this.allowRotate = false;
    /**
     * @since Flash CS6
     * @type Boolean
     */
    this.allowTrimming = false;
    /**
     * @since Flash CS6
     * @type String
     * @const
     */
    this.app = null;
    /**
     * @since Flash CS6
     * @type Boolean
     */
    this.autoSize = false;
    /**
     * @since Flash CS6
     * @type Number
     */
    this.borderPadding = 0;
    /**
     * @since Flash CS6
     * @type Boolean
     * @const
     */
    this.canBorderPad = false;
    /**
     * @since Flash CS6
     * @type Boolean
     * @const
     */
    this.canRotate = false;
    /**
     * @since Flash CS6
     * @type Boolean
     * @const
     */
    this.canShapePad = false;
    /**
     * @since Flash CS6
     * @type Boolean
     * @const
     */
    this.canStackDuplicateFrames = false;
    /**
     * @since Flash CS6
     * @type Boolean
     * @const
     */
    this.canTrim = false;
    /**
     * @since Flash CS6
     * @type String
     * @const
     */
    this.format = null;
    /**
     * @since Flash CS6
     * @type String
     * @const
     */
    this.image = null;
    /**
     * @since Flash CS6
     * @type String
     */
    this.layoutFormat = null;
    /**
     * @since Flash CS6
     * @type Boolean
     * @const
     */
    this.overflowed = false;
    /**
     * @since Flash CS6
     * @type Number
     */
    this.shapePadding = 0;
    /**
     * @since Flash CS6
     * @type Number
     */
    this.sheetHeight = 0;
    /**
     * @since Flash CS6
     * @type Number
     */
    this.sheetWidth = 0;
    /**
     * @since Flash CS6
     * @type Boolean
     */
    this.stackDuplicateFrames = false;
    /**
     * @since Flash CS6
     * @type String
     * @const
     */
    this.version = null;
    /**
     * @since Flash CS6
     * @param {Object} bitmap
     */
    this.addBitmap = function (bitmap) {
    };
    /**
     * @since Flash CS6
     * @param {Object} symbol
     * @param {String} [name]
     * @param {Number} [beginFrame]
     * @param {Number} [endFrame]
     * @return Boolean
     */
    this.addSymbol = function (symbol, name, beginFrame, endFrame) {
    };
    /**
     * @since Flash CS6
     */
    this.beginExport = function () {
    };
    /**
     * @since Flash CS6
     * @param {Object} symbol
     * @param {Number} [beginFrame]
     * @param {Number} [endFrame]
     * @return Boolean
     */
    this.changeSymbol = function (symbol, beginFrame, endFrame) {
    };
    /**
     * @since Flash CS6
     * @param {String} path
     * @param {String} imageFormat
     * @param {Boolean} [writeMetaData]
     * @return String
     */
    this.exportSpriteSheet = function (path, imageFormat, writeMetaData) {
    };
    /**
     * @since Flash CS6
     * @param {Object} bitmap
     */
    this.removeBitmap = function (bitmap) {
    };
    /**
     * @since Flash CS6
     * @param {Object} symbol
     * @return Boolean
     */
    this.removeSymbol = function (symbol) {
    };
}
SpriteSheetExporter.prototype = new Item();

/**
 * @since Flash MX 2004
 */
function VideoItem () {
    /**
     * @since Flash CS4
     * @type String
     * @const
     */
    this.fileLastModifiedDate = null;
    /**
     * @since Flash CS6
     * @type Number
     * @const
     */
    this.lastModifiedDate = 0;
    /**
     * @since Flash CS4
     * @type Boolean
     * @const
     */
    this.sourceFileExists = false;
    /**
     * @since Flash CS4
     * @type Boolean
     * @const
     */
    this.sourceFileIsCurrent = false;
    /**
     * @since Flash 8
     * @type String
     * @const
     */
    this.sourceFilePath = null;
    /**
     * @since Flash MX 2004
     * @type String
     * @const
     */
    this.videoType = null;
    /**
     * @since Flash CS4
     * @param {String} fileURI
     * @return Boolean
     */
    this.exportToFLV = function (fileURI) {
    };
}
VideoItem.prototype = new Item();