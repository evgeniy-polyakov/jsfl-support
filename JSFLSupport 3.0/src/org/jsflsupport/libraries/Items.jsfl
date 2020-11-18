/***************************************************************************
 * JSFL API
 * Items hierarchy
 **************************************************************************/
/**
 * @since Flash MX 2004
 * @class {Item}
 */
Item = function () {
};
/**
 * @since Flash MX 2004
 * @type {"undefined"|"component"|"movie clip"|"graphic"|"button"|"folder"|"font"|"sound"|"bitmap"|"compiled clip"|"screen"|"video"}
 * @const
 */
Item.prototype.itemType = undefined;
/**
 * @since Flash CS3
 * @type {string}
 */
Item.prototype.linkageBaseClass = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Item.prototype.linkageClassName = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Item.prototype.linkageExportForAS = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Item.prototype.linkageExportForRS = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Item.prototype.linkageExportInFirstFrame = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Item.prototype.linkageIdentifier = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Item.prototype.linkageImportForRS = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Item.prototype.linkageURL = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Item.prototype.name = undefined;
/**
 * @since Flash MX 2004
 * @param {string} name
 * @param {"integer"|"integerArray"|"double"|"doubleArray"|"string"|"byteArray"} type
 * @param {*} data
 */
Item.prototype.addData = function (name, type, data) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {*}
 */
Item.prototype.getData = function (name) {
};
/**
 * @since Flash CC
 * @param {string} name
 * @param {string} format
 * @return {boolean}
 */
Item.prototype.getPublishData = function (name, format) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {boolean}
 */
Item.prototype.hasData = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 */
Item.prototype.removeData = function (name) {
};
/**
 * @since Flash CC
 * @param {string} name
 * @param {string} format
 * @param {boolean} publish
 */
Item.prototype.setPublishData = function (name, format, publish) {
};
/**
 * @since Flash MX 2004
 * @class {BitmapItem}
 * @extends {Item}
 */
BitmapItem = function () {
};
BitmapItem.prototype = new Item();
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
BitmapItem.prototype.allowSmoothing = false;
/**
 * @since Flash MX 2004
 * @type {"photo"|"lossless"}
 */
BitmapItem.prototype.compressionType = undefined;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
BitmapItem.prototype.fileLastModifiedDate = undefined;
/**
 * @since Flash CS6
 * @type {boolean}
 * @const
 */
BitmapItem.prototype.hasValidAlphaLayer = false;
/**
 * @since Flash CS6
 * @type {number}
 * @const
 */
BitmapItem.prototype.hPixels = 0;
/**
 * @since Flash CS6
 * @type {number}
 * @const
 */
BitmapItem.prototype.lastModifiedDate = 0;
/**
 * @since Flash CS4
 * @type {"photo"|"lossless"}
 * @const
 */
BitmapItem.prototype.originalCompressionType = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
BitmapItem.prototype.quality = 0;
/**
 * @since Flash CS4
 * @type {boolean}
 * @const
 */
BitmapItem.prototype.sourceFileExists = false;
/**
 * @since Flash CS4
 * @type {boolean}
 * @const
 */
BitmapItem.prototype.sourceFileIsCurrent = false;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
BitmapItem.prototype.sourceFilePath = undefined;
/**
 * @since Flash CS4
 * @type {boolean}
 */
BitmapItem.prototype.useDeblocking = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
BitmapItem.prototype.useImportedJPEGQuality = false;
/**
 * @since Flash CS6
 * @type {number}
 * @const
 */
BitmapItem.prototype.vPixels = 0;
/**
 * @since Flash CS4
 * @param {string} fileURI
 * @param {number} quality
 * @return {boolean}
 */
BitmapItem.prototype.exportToFile = function (fileURI, quality) {
};
/**
 * @since Flash MX 2004
 * @class {FolderItem}
 * @extends {Item}
 */
FolderItem = function () {
};
FolderItem.prototype = new Item();
/**
 * @since Flash MX 2004
 * @class {FontItem}
 * @extends {Item}
 */
FontItem = function () {
};
FontItem.prototype = new Item();
/**
 * @since Flash CS4
 * @type {boolean}
 */
FontItem.prototype.bitmap = false;
/**
 * @since Flash CS4
 * @type {boolean}
 */
FontItem.prototype.bold = false;
/**
 * @since Flash CS5
 * @type {string}
 */
FontItem.prototype.embeddedCharacters = undefined;
/**
 * @since Flash CS5
 * @type {string}
 */
FontItem.prototype.embedRanges = undefined;
/**
 * @since Flash CS4
 * @type {boolean}
 */
FontItem.prototype.embedVariantGlyphs = false;
/**
 * @since Flash CS4
 * @type {string}
 */
FontItem.prototype.font = undefined;
/**
 * @since Flash CS4
 * @type {boolean}
 */
FontItem.prototype.isDefineFont4Symbol = false;
/**
 * @since Flash CS4
 * @type {boolean}
 */
FontItem.prototype.italic = false;
/**
 * @since Flash CS4
 * @type {number}
 */
FontItem.prototype.size = 0;
/**
 * @since Flash MX 2004
 * @class {SoundItem}
 * @extends {Item}
 */
SoundItem = function () {
};
SoundItem.prototype = new Item();
/**
 * @since Flash MX 2004
 * @type {"8 kbps"|"16 kbps"|"20 kbps"|"24 kbps"|"32 kbps"|"48 kbps"|"56 kbps"|"64 kbps"|"80 kbps"|"112 kbps"|"128 kbps"|"160 kbps"}
 */
SoundItem.prototype.bitRate = undefined;
/**
 * @since Flash MX 2004
 * @type {"2 bit"|"3 bit"|"4 bit"|"5 bit"}
 */
SoundItem.prototype.bits = undefined;
/**
 * @since Flash MX 2004
 * @type {"Default"|"ADPCM"|"MP3"|"Raw"|"Speech"}
 */
SoundItem.prototype.compressionType = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
SoundItem.prototype.convertStereoToMono = false;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
SoundItem.prototype.fileLastModifiedDate = undefined;
/**
 * @since Flash CS6
 * @type {number}
 * @const
 */
SoundItem.prototype.lastModifiedDate = 0;
/**
 * @since Flash CS4
 * @type {"RAW"|"MP3"}
 * @const
 */
SoundItem.prototype.originalCompressionType = undefined;
/**
 * @since Flash MX 2004
 * @type {"Fast"|"Medium"|"Best"}
 */
SoundItem.prototype.quality = undefined;
/**
 * @since Flash MX 2004
 * @type {"5 kHz"|"11 kHz"|"22 kHz"|"44 kHz"}
 */
SoundItem.prototype.sampleRate = undefined;
/**
 * @since Flash CS4
 * @type {boolean}
 * @const
 */
SoundItem.prototype.sourceFileExists = false;
/**
 * @since Flash CS4
 * @type {boolean}
 * @const
 */
SoundItem.prototype.sourceFileIsCurrent = false;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
SoundItem.prototype.sourceFilePath = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
SoundItem.prototype.useImportedMP3Quality = false;
/**
 * @since Flash CS4
 * @param {string} fileURI
 * @return {boolean}
 */
SoundItem.prototype.exportToFile = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @class {SymbolItem}
 * @extends {Item}
 */
SymbolItem = function () {
};
SymbolItem.prototype = new Item();
/**
 * @since Flash CS6
 * @type {number}
 * @const
 */
SymbolItem.prototype.lastModifiedDate = 0;
/**
 * @since Flash 8
 * @type {boolean}
 */
SymbolItem.prototype.scalingGrid = false;
/**
 * @since Flash 8
 * @type {{left:number,top:number,right:number,bottom:number}}
 */
SymbolItem.prototype.scalingGridRect = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
SymbolItem.prototype.sourceAutoUpdate = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolItem.prototype.sourceFilePath = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolItem.prototype.sourceLibraryName = undefined;
/**
 * @since Flash MX 2004
 * @type {"button"|"movie clip"|"graphic"}
 */
SymbolItem.prototype.symbolType = undefined;
/**
 * @since Flash MX 2004
 * @type {Timeline}
 * @const
 */
SymbolItem.prototype.timeline = undefined;
/**
 * @since Flash MX 2004
 */
SymbolItem.prototype.convertToCompiledClip = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} outputURI
 */
SymbolItem.prototype.exportSWC = function (outputURI) {
};
/**
 * @since Flash MX 2004
 * @param {string} outputURI
 */
SymbolItem.prototype.exportSWF = function (outputURI) {
};
/**
 * @since Flash CS6
 * @param {number} frameNumber
 * @param {string} bitmapName
 */
SymbolItem.prototype.exportToLibrary = function (frameNumber, bitmapName) {
};
/**
 * @since Flash CS6
 * @param {string} outputURI
 * @param {number} [startFrameNum]
 * @param {number} [endFrameNum]
 * @param {Matrix} [matrix]
 */
SymbolItem.prototype.exportToPNGSequence = function (outputURI, startFrameNum, endFrameNum, matrix) {
};
/**
 * @since Flash MX 2004
 * @class {VideoItem}
 * @extends {Item}
 */
VideoItem = function () {
};
VideoItem.prototype = new Item();
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
VideoItem.prototype.fileLastModifiedDate = undefined;
/**
 * @since Flash CS6
 * @type {number}
 * @const
 */
VideoItem.prototype.lastModifiedDate = 0;
/**
 * @since Flash CS4
 * @type {boolean}
 * @const
 */
VideoItem.prototype.sourceFileExists = false;
/**
 * @since Flash CS4
 * @type {boolean}
 * @const
 */
VideoItem.prototype.sourceFileIsCurrent = false;
/**
 * @since Flash 8
 * @type {string}
 * @const
 */
VideoItem.prototype.sourceFilePath = undefined;
/**
 * @since Flash MX 2004
 * @type {"embedded video"|"video"}
 * @const
 */
VideoItem.prototype.videoType = undefined;
/**
 * @since Flash CS4
 * @param {string} fileURI
 * @return {boolean}
 */
VideoItem.prototype.exportToFLV = function (fileURI) {
};
/**
 * @since Flash CS6
 * @class {SpriteSheetExporter}
 * @extends {Item}
 */
SpriteSheetExporter = function () {
};
SpriteSheetExporter.prototype = new Item();
/**
 * @since Flash CS6
 * @type {"basic"|"maxRects"}
 */
SpriteSheetExporter.prototype.algorithm = undefined;
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
SpriteSheetExporter.prototype.app = undefined;
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
SpriteSheetExporter.prototype.format = undefined;
/**
 * @since Flash CS6
 * @type {string}
 * @const
 */
SpriteSheetExporter.prototype.image = undefined;
/**
 * @since Flash CS6
 * @type {string}
 */
SpriteSheetExporter.prototype.layoutFormat = undefined;
/**
 * @since Flash CC
 * @type {number}
 */
SpriteSheetExporter.prototype.maxSheetHeight = 0;
/**
 * @since Flash CC
 * @type {number}
 */
SpriteSheetExporter.prototype.maxSheetWidth = 0;
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
SpriteSheetExporter.prototype.version = undefined;
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
 * @since Animate 2020
 * @class {TextureAtlasExporter}
 * @extends {Item}
 */
TextureAtlasExporter = function () {
};
TextureAtlasExporter.prototype = new Item();
/**
 * @since Animate 2020
 * @type {"basic"|"maxRects"}
 */
TextureAtlasExporter.prototype.algorithm = undefined;
/**
 * @since Animate 2020
 * @type {boolean}
 */
TextureAtlasExporter.prototype.allowRotate = false;
/**
 * @since Animate 2020
 * @type {string}
 * @const
 */
TextureAtlasExporter.prototype.app = undefined;
/**
 * @since Animate 2020
 * @type {boolean}
 */
TextureAtlasExporter.prototype.autoSize = false;
/**
 * @since Animate 2020
 * @type {number}
 */
TextureAtlasExporter.prototype.borderPadding = 0;
/**
 * @since Animate 2020
 * @type {boolean}
 * @const
 */
TextureAtlasExporter.prototype.canRotate = false;
/**
 * @since Animate 2020
 * @type {string}
 */
TextureAtlasExporter.prototype.filePath = undefined;
/**
 * @since Animate 2020
 * @type {boolean}
 */
TextureAtlasExporter.prototype.flattenSkewObject = false;
/**
 * @since Animate 2020
 * @type {"RGB8888"|"RGB8"}
 */
TextureAtlasExporter.prototype.imageFormat = undefined;
/**
 * @since Animate 2020
 * @type {boolean}
 */
TextureAtlasExporter.prototype.optimizeBitmap = false;
/**
 * @since Animate 2020
 * @type {boolean}
 */
TextureAtlasExporter.prototype.optimizeJson = false;
/**
 * @since Animate 2020
 * @type {boolean}
 * @const
 */
TextureAtlasExporter.prototype.overflowed = false;
/**
 * @since Animate 2020
 * @type {number}
 */
TextureAtlasExporter.prototype.resolution = 1;
/**
 * @since Animate 2020
 * @type {number}
 */
TextureAtlasExporter.prototype.shapePadding = 0;
/**
 * @since Animate 2020
 * @type {number}
 */
TextureAtlasExporter.prototype.sheetHeight = 0;
/**
 * @since Animate 2020
 * @type {number}
 */
TextureAtlasExporter.prototype.sheetWidth = 0;
/**
 * @since Animate 2020
 * @type {string}
 */
TextureAtlasExporter.prototype.version = undefined;
/**
 * @since Animate 2020
 * @param {SymbolItem|SymbolInstance} symbol
 * @param {string} path
 * @return {boolean}
 */
TextureAtlasExporter.prototype.exportTextureAtlas = function (symbol, path) {
};