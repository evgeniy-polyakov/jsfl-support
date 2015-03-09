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
 * @type {String}
 * @const
 */
Item.prototype.itemType = null;
/**
 * @since Flash CS3
 * @type {String}
 */
Item.prototype.linkageBaseClass = null;
/**
 * @since Flash MX 2004
 * @type {String}
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
 * @type {String}
 */
Item.prototype.linkageIdentifier = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Item.prototype.linkageImportForRS = false;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Item.prototype.linkageURL = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Item.prototype.name = null;
/**
 * @since Flash MX 2004
 * @param {String} name
 * @param {String} type
 * @param {Object} data
 */
Item.prototype.addData = function (name, type, data) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 * @return {Object}
 */
Item.prototype.getData = function (name) {
};
/**
 * @since Flash CC
 * @param {String} name
 * @param {String} format
 * @return {Boolean}
 */
Item.prototype.getPublishData = function (name, format) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 * @return {Boolean}
 */
Item.prototype.hasData = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 */
Item.prototype.removeData = function (name) {
};
/**
 * @since Flash CC
 * @param {String} name
 * @param {String} format
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
 * @type {String}
 */
BitmapItem.prototype.compressionType = null;
/**
 * @since Flash CS4
 * @type {String}
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
 * @type {Number}
 * @const
 */
BitmapItem.prototype.lastModifiedDate = 0;
/**
 * @since Flash CS4
 * @type {String}
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
 * @type {String}
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
 * @param {String} fileURI
 * @param {Number} quality
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
 * @type {String}
 */
FontItem.prototype.embeddedCharacters = null;
/**
 * @since Flash CS5
 * @type {String}
 */
FontItem.prototype.embedRanges = null;
/**
 * @since Flash CS4
 * @type {Boolean}
 */
FontItem.prototype.embedVariantGlyphs = false;
/**
 * @since Flash CS4
 * @type {String}
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
 * @type {Number}
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
 * @type {String}
 */
SoundItem.prototype.bitRate = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
SoundItem.prototype.bits = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
SoundItem.prototype.compressionType = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
SoundItem.prototype.convertStereoToMono = false;
/**
 * @since Flash CS4
 * @type {String}
 * @const
 */
SoundItem.prototype.fileLastModifiedDate = null;
/**
 * @since Flash CS6
 * @type {Number}
 * @const
 */
SoundItem.prototype.lastModifiedDate = 0;
/**
 * @since Flash CS4
 * @type {String}
 * @const
 */
SoundItem.prototype.originalCompressionType = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
SoundItem.prototype.quality = null;
/**
 * @since Flash MX 2004
 * @type {String}
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
 * @type {String}
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
 * @param {String} fileURI
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
 * @type {Number}
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
 * @type {{left:Number,top:Number,right:Number,bottom:Number}}
 */
SymbolItem.prototype.scalingGridRect = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
SymbolItem.prototype.sourceAutoUpdate = false;
/**
 * @since Flash MX 2004
 * @type {String}
 */
SymbolItem.prototype.sourceFilePath = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
SymbolItem.prototype.sourceLibraryName = null;
/**
 * @since Flash MX 2004
 * @type {String}
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
 * @param {String} outputURI
 */
SymbolItem.prototype.exportSWC = function (outputURI) {
};
/**
 * @since Flash MX 2004
 * @param {String} outputURI
 */
SymbolItem.prototype.exportSWF = function (outputURI) {
};
/**
 * @since Flash CS6
 * @param {Number} frameNumber
 * @param {String} bitmapName
 */
SymbolItem.prototype.exportToLibrary = function (frameNumber, bitmapName) {
};
/**
 * @since Flash CS6
 * @param {String} outputURI
 * @param {Number} [startFrameNum]
 * @param {Number} [endFrameNum]
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
 * @type {String}
 * @const
 */
VideoItem.prototype.fileLastModifiedDate = null;
/**
 * @since Flash CS6
 * @type {Number}
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
 * @type {String}
 * @const
 */
VideoItem.prototype.sourceFilePath = null;
/**
 * @since Flash MX 2004
 * @type {String}
 * @const
 */
VideoItem.prototype.videoType = null;
/**
 * @since Flash CS4
 * @param {String} fileURI
 * @return {Boolean}
 */
VideoItem.prototype.exportToFLV = function (fileURI) {
};