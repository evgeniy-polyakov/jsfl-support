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
 * @type {string}
 * @const
 */
Item.prototype.itemType = null;
/**
 * @since Flash CS3
 * @type {string}
 */
Item.prototype.linkageBaseClass = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Item.prototype.linkageClassName = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Item.prototype.linkageExportForAS = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Item.prototype.linkageExportForRS = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Item.prototype.linkageExportInFirstFrame = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Item.prototype.linkageIdentifier = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Item.prototype.linkageImportForRS = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Item.prototype.linkageURL = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Item.prototype.name = null;
/**
 * @since Flash MX 2004
 * @param {string} name
 * @param {string} type
 * @param {Object} data
 */
Item.prototype.addData = function (name, type, data) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {Object}
 */
Item.prototype.getData = function (name) {
};
/**
 * @since Flash CC
 * @param {string} name
 * @param {string} format
 * @return {Boolean}
 */
Item.prototype.getPublishData = function (name, format) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {Boolean}
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
 * @param {Boolean} publish
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
 * @type {Boolean}
 */
BitmapItem.prototype.allowSmoothing = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
BitmapItem.prototype.compressionType = null;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
BitmapItem.prototype.fileLastModifiedDate = null;
/**
 * @since Flash CS6
 * @type {Boolean}
 * @const
 */
BitmapItem.prototype.hasValidAlphaLayer = false;
/**
 * @since Flash CS6
 * @type {number}
 * @const
 */
BitmapItem.prototype.lastModifiedDate = 0;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
BitmapItem.prototype.originalCompressionType = null;
/**
 * @since Flash CS4
 * @type {Boolean}
 * @const
 */
BitmapItem.prototype.sourceFileExists = false;
/**
 * @since Flash CS4
 * @type {Boolean}
 * @const
 */
BitmapItem.prototype.sourceFileIsCurrent = false;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
BitmapItem.prototype.sourceFilePath = null;
/**
 * @since Flash CS4
 * @type {Boolean}
 */
BitmapItem.prototype.useDeblocking = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
BitmapItem.prototype.useImportedJPEGQuality = false;
/**
 * @since Flash CS4
 * @param {string} fileURI
 * @param {number} quality
 * @return {Boolean}
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
 * @type {Boolean}
 */
FontItem.prototype.bitmap = false;
/**
 * @since Flash CS4
 * @type {Boolean}
 */
FontItem.prototype.bold = false;
/**
 * @since Flash CS5
 * @type {string}
 */
FontItem.prototype.embeddedCharacters = null;
/**
 * @since Flash CS5
 * @type {string}
 */
FontItem.prototype.embedRanges = null;
/**
 * @since Flash CS4
 * @type {Boolean}
 */
FontItem.prototype.embedVariantGlyphs = false;
/**
 * @since Flash CS4
 * @type {string}
 */
FontItem.prototype.font = null;
/**
 * @since Flash CS4
 * @type {Boolean}
 */
FontItem.prototype.isDefineFont4Symbol = false;
/**
 * @since Flash CS4
 * @type {Boolean}
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
 * @type {string}
 */
SoundItem.prototype.bitRate = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SoundItem.prototype.bits = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SoundItem.prototype.compressionType = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
SoundItem.prototype.convertStereoToMono = false;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
SoundItem.prototype.fileLastModifiedDate = null;
/**
 * @since Flash CS6
 * @type {number}
 * @const
 */
SoundItem.prototype.lastModifiedDate = 0;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
SoundItem.prototype.originalCompressionType = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SoundItem.prototype.quality = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SoundItem.prototype.sampleRate = null;
/**
 * @since Flash CS4
 * @type {Boolean}
 * @const
 */
SoundItem.prototype.sourceFileExists = false;
/**
 * @since Flash CS4
 * @type {Boolean}
 * @const
 */
SoundItem.prototype.sourceFileIsCurrent = false;
/**
 * @since Flash CS4
 * @type {string}
 * @const
 */
SoundItem.prototype.sourceFilePath = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
SoundItem.prototype.useImportedMP3Quality = false;
/**
 * @since Flash CS4
 * @param {string} fileURI
 * @return {Boolean}
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
 * @type {Boolean}
 */
SymbolItem.prototype.scalingGrid = false;
/**
 * @since Flash 8
 * @type {{left:number,top:number,right:number,bottom:number}}
 */
SymbolItem.prototype.scalingGridRect = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
SymbolItem.prototype.sourceAutoUpdate = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolItem.prototype.sourceFilePath = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolItem.prototype.sourceLibraryName = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolItem.prototype.symbolType = null;
/**
 * @since Flash MX 2004
 * @type {Timeline}
 * @const
 */
SymbolItem.prototype.timeline = null;
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
VideoItem.prototype.fileLastModifiedDate = null;
/**
 * @since Flash CS6
 * @type {number}
 * @const
 */
VideoItem.prototype.lastModifiedDate = 0;
/**
 * @since Flash CS4
 * @type {Boolean}
 * @const
 */
VideoItem.prototype.sourceFileExists = false;
/**
 * @since Flash CS4
 * @type {Boolean}
 * @const
 */
VideoItem.prototype.sourceFileIsCurrent = false;
/**
 * @since Flash 8
 * @type {string}
 * @const
 */
VideoItem.prototype.sourceFilePath = null;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
VideoItem.prototype.videoType = null;
/**
 * @since Flash CS4
 * @param {string} fileURI
 * @return {Boolean}
 */
VideoItem.prototype.exportToFLV = function (fileURI) {
};