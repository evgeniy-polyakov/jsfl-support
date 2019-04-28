/***************************************************************************
 * JSFL API
 * Elements hierarchy
 **************************************************************************/
/**
 * @since Flash MX 2004
 * @class {Element}
 */
Element = function () {
};
/**
 * @since Flash MX 2004
 * @type {Number}
 * @const
 */
Element.prototype.depth = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Element.prototype.elementType = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Element.prototype.height = 0;
/**
 * @since Flash 8
 * @type {Layer}
 * @const
 */
Element.prototype.layer = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 * @const
 */
Element.prototype.left = 0;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Element.prototype.locked = false;
/**
 * @since Flash MX 2004
 * @type {Matrix}
 */
Element.prototype.matrix = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Element.prototype.name = null;
/**
 * @since Flash CS3
 * @type {Number}
 */
Element.prototype.rotation = 0;
/**
 * @since Flash CS3
 * @type {Number}
 */
Element.prototype.scaleX = 0;
/**
 * @since Flash CS3
 * @type {Number}
 */
Element.prototype.scaleY = 0;
/**
 * @since Flash 8
 * @type {Boolean}
 */
Element.prototype.selected = false;
/**
 * @since Flash CS3
 * @type {Number}
 */
Element.prototype.skewX = 0;
/**
 * @since Flash CS3
 * @type {Number}
 */
Element.prototype.skewY = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 * @const
 */
Element.prototype.top = 0;
/**
 * @since Flash CS3
 * @type {Number}
 */
Element.prototype.transformX = 0;
/**
 * @since Flash CS3
 * @type {Number}
 */
Element.prototype.transformY = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Element.prototype.width = 0;
/**
 * @since Flash CS3
 * @type {Number}
 */
Element.prototype.x = 0;
/**
 * @since Flash CS3
 * @type {Number}
 */
Element.prototype.y = 0;
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {Object}
 */
Element.prototype.getPersistentData = function (name) {
};
/**
 * @since Flash CC
 * @param {string} name
 * @param {string} format
 * @return {Boolean}
 */
Element.prototype.getPublishPersistentData = function (name, format) {
};
/**
 * @since Flash CS3
 * @return {{x:Number,y:Number}}
 */
Element.prototype.getTransformationPoint = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {Boolean}
 */
Element.prototype.hasPersistentData = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 */
Element.prototype.removePersistentData = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @param {string} type
 * @param {Object} value
 */
Element.prototype.setPersistentData = function (name, type, value) {
};
/**
 * @since Flash CC
 * @param {string} name
 * @param {string} format
 * @param {Boolean} publish
 */
Element.prototype.setPublishPersistentData = function (name, format, publish) {
};
/**
 * @since Flash CS3
 * @param {{x:Number,y:Number}} transformationPoint
 */
Element.prototype.setTransformationPoint = function (transformationPoint) {
};
/**
 * @since Flash MX 2004
 * @class {Instance}
 * @extends {Element}
 */
Instance = function () {
};
Instance.prototype = new Element();
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Instance.prototype.instanceType = null;
/**
 * @since Flash MX 2004
 * @type {Item}
 */
Instance.prototype.libraryItem = null;
/**
 * @since Flash MX 2004
 * @class {BitmapInstance}
 * @extends {Instance}
 */
BitmapInstance = function () {
};
BitmapInstance.prototype = new Instance();
/**
 * @since Flash MX 2004
 * @type {Number}
 * @const
 */
BitmapInstance.prototype.hPixels = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 * @const
 */
BitmapInstance.prototype.vPixels = 0;
/**
 * @since Flash MX 2004
 * @return {{width:Number,height:Number,depth:Number,bits:Object,cTab:Object}}
 */
BitmapInstance.prototype.getBits = function () {
};
/**
 * @since Flash MX 2004
 * @param {{width:Number,height:Number,depth:Number,bits:Object,cTab?:Object}} bitmap
 */
BitmapInstance.prototype.setBits = function (bitmap) {
};
/**
 * @since Flash MX 2004
 * @class {CompiledClipInstance}
 * @extends {Instance}
 */
CompiledClipInstance = function () {
};
CompiledClipInstance.prototype = new Instance();
/**
 * @since Flash MX 2004
 * @type {string}
 */
CompiledClipInstance.prototype.accName = null;
/**
 * @since Flash MX 2004
 * @deprecated
 * @type {string}
 */
CompiledClipInstance.prototype.actionScript = null;
/**
 * @since Flash CC
 * @type {string|Number}
 */
CompiledClipInstance.prototype.backgroundColor = null;
/**
 * @since Flash CC
 * @type {string}
 */
CompiledClipInstance.prototype.blendMode = null;
/**
 * @since Flash CC
 * @type {Number}
 * @const
 */
CompiledClipInstance.prototype.brightness = 0;
/**
 * @since Flash CC
 * @type {Boolean}
 */
CompiledClipInstance.prototype.cacheAsBitmap = false;
/**
 * @since Flash CC
 * @type {Number}
 */
CompiledClipInstance.prototype.colorAlphaAmount = 0;
/**
 * @since Flash CC
 * @type {Number}
 */
CompiledClipInstance.prototype.colorAlphaPercent = 0;
/**
 * @since Flash CC
 * @type {Number}
 */
CompiledClipInstance.prototype.colorBlueAmount = 0;
/**
 * @since Flash CC
 * @type {Number}
 */
CompiledClipInstance.prototype.colorBluePercent = 0;
/**
 * @since Flash CC
 * @type {Number}
 */
CompiledClipInstance.prototype.colorGreenAmount = 0;
/**
 * @since Flash CC
 * @type {Number}
 */
CompiledClipInstance.prototype.colorGreenPercent = 0;
/**
 * @since Flash CC
 * @type {string}
 */
CompiledClipInstance.prototype.colorMode = null;
/**
 * @since Flash CC
 * @type {Number}
 */
CompiledClipInstance.prototype.colorRedAmount = 0;
/**
 * @since Flash CC
 * @type {Number}
 */
CompiledClipInstance.prototype.colorRedPercent = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
CompiledClipInstance.prototype.description = null;
/**
 * @since Flash CC
 * @type {Array.<Filter>}
 */
CompiledClipInstance.prototype.filters = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
CompiledClipInstance.prototype.forceSimple = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
CompiledClipInstance.prototype.shortcut = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
CompiledClipInstance.prototype.silent = false;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
CompiledClipInstance.prototype.tabIndex = 0;
/**
 * @since Flash CC
 * @type {string}
 * @const
 */
CompiledClipInstance.prototype.tintColor = null;
/**
 * @since Flash CC
 * @type {Number}
 * @const
 */
CompiledClipInstance.prototype.tintPercent = 0;
/**
 * @since Flash CC
 * @type {Boolean}
 */
CompiledClipInstance.prototype.useBackgroundColor = false;
/**
 * @since Flash CC
 * @type {Boolean}
 */
CompiledClipInstance.prototype.visible = false;
/**
 * @since Flash MX 2004
 * @class {SymbolInstance}
 * @extends {Instance}
 */
SymbolInstance = function () {
};
SymbolInstance.prototype = new Instance();
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolInstance.prototype.accName = null;
/**
 * @since Flash MX 2004
 * @deprecated
 * @type {string}
 */
SymbolInstance.prototype.actionScript = null;
/**
 * @since Flash CS5.5
 * @type {string|Number}
 */
SymbolInstance.prototype.backgroundColor = null;
/**
 * @since Flash CS5.5
 * @type {string}
 */
SymbolInstance.prototype.bitmapRenderMode = null;
/**
 * @since Flash 8
 * @type {string}
 */
SymbolInstance.prototype.blendMode = null;
/**
 * @since Flash CC
 * @type {Number}
 * @const
 */
SymbolInstance.prototype.brightness = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolInstance.prototype.buttonTracking = null;
/**
 * @since Flash 8
 * @type {Boolean}
 */
SymbolInstance.prototype.cacheAsBitmap = false;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.colorAlphaAmount = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.colorAlphaPercent = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.colorBlueAmount = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.colorBluePercent = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.colorGreenAmount = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.colorGreenPercent = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolInstance.prototype.colorMode = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.colorRedAmount = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.colorRedPercent = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolInstance.prototype.description = null;
/**
 * @since Flash 8
 * @type {Array.<Filter>}
 */
SymbolInstance.prototype.filters = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.firstFrame = 0;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
SymbolInstance.prototype.forceSimple = false;
/**
 * @since Flash CS6
 * @type {Boolean}
 * @const
 */
SymbolInstance.prototype.is3D = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolInstance.prototype.loop = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolInstance.prototype.shortcut = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
SymbolInstance.prototype.silent = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolInstance.prototype.symbolType = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
SymbolInstance.prototype.tabIndex = 0;
/**
 * @since Flash CC
 * @type {string}
 * @const
 */
SymbolInstance.prototype.tintColor = null;
/**
 * @since Flash CC
 * @type {Number}
 * @const
 */
SymbolInstance.prototype.tintPercent = 0;
/**
 * @since Flash CS5.5
 * @type {Boolean}
 */
SymbolInstance.prototype.useBackgroundColor = false;
/**
 * @since Flash CS5.5
 * @type {Boolean}
 */
SymbolInstance.prototype.visible = false;
/**
 * @since Flash MX 2004
 * @class {ComponentInstance}
 * @extends {SymbolInstance}
 */
ComponentInstance = function () {
};
ComponentInstance.prototype = new SymbolInstance();
/**
 * @since Flash MX 2004
 * @type {Array.<Parameter>}
 * @const
 */
ComponentInstance.prototype.parameters = null;
/**
 * @since Flash MX 2004
 * @class {Parameter}
 */
Parameter = function () {
};
/**
 * @since Flash MX 2004
 * @type {string}
 */
Parameter.prototype.category = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Parameter.prototype.listIndex = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Parameter.prototype.name = null;
/**
 * @since Flash MX 2004
 * @type {Object}
 */
Parameter.prototype.value = null;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Parameter.prototype.valueType = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Parameter.prototype.verbose = 0;
/**
 * @since Flash MX 2004
 * @param {Number} index
 * @param {string} name
 * @param {string} value
 * @param {string} type
 */
Parameter.prototype.insertItem = function (index, name, value, type) {
};
/**
 * @since Flash MX 2004
 * @param {Number} index
 */
Parameter.prototype.removeItem = function (index) {
};
/**
 * @since Flash 8
 * @class {Filter}
 */
Filter = function () {
};
/**
 * @since Flash 8
 * @type {Number}
 */
Filter.prototype.angle = 0;
/**
 * @since Flash 8
 * @type {Number}
 */
Filter.prototype.blurX = 0;
/**
 * @since Flash 8
 * @type {Number}
 */
Filter.prototype.blurY = 0;
/**
 * @since Flash 8
 * @type {Number}
 */
Filter.prototype.brightness = 0;
/**
 * @since Flash 8
 * @type {string|Number}
 */
Filter.prototype.color = null;
/**
 * @since Flash 8
 * @type {Number}
 */
Filter.prototype.contrast = 0;
/**
 * @since Flash 8
 * @type {Number}
 */
Filter.prototype.distance = 0;
/**
 * @since Flash CS3
 * @type {Boolean}
 */
Filter.prototype.enabled = false;
/**
 * @since Flash 8
 * @type {Boolean}
 */
Filter.prototype.hideObject = false;
/**
 * @since Flash 8
 * @type {string|Number}
 */
Filter.prototype.highlightColor = null;
/**
 * @since Flash 8
 * @type {Number}
 */
Filter.prototype.hue = 0;
/**
 * @since Flash 8
 * @type {Boolean}
 */
Filter.prototype.inner = false;
/**
 * @since Flash 8
 * @type {Boolean}
 */
Filter.prototype.knockout = false;
/**
 * @since Flash 8
 * @type {string}
 * @const
 */
Filter.prototype.name = null;
/**
 * @since Flash 8
 * @type {string}
 */
Filter.prototype.quality = null;
/**
 * @since Flash 8
 * @type {Number}
 */
Filter.prototype.saturation = 0;
/**
 * @since Flash 8
 * @type {string|Number}
 */
Filter.prototype.shadowColor = null;
/**
 * @since Flash 8
 * @type {Number}
 */
Filter.prototype.strength = 0;
/**
 * @since Flash 8
 * @type {string}
 */
Filter.prototype.type = null;
/**
 * @since Flash MX 2004
 * @class {Shape}
 * @extends {Element}
 */
Shape = function () {
};
Shape.prototype = new Element();
/**
 * @since Flash MX 2004
 * @type {Array.<Contour>}
 * @const
 */
Shape.prototype.contours = null;
/**
 * @since Flash MX 2004
 * @type {Array.<Edge>}
 * @const
 */
Shape.prototype.edges = null;
/**
 * @since Flash 8
 * @type {Boolean}
 * @const
 */
Shape.prototype.isDrawingObject = false;
/**
 * @since Flash CS6
 * @type {Boolean}
 * @const
 */
Shape.prototype.isFloating = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 * @const
 */
Shape.prototype.isGroup = false;
/**
 * @since Flash CS3
 * @type {Boolean}
 * @const
 */
Shape.prototype.isOvalObject = false;
/**
 * @since Flash CS3
 * @type {Boolean}
 * @const
 */
Shape.prototype.isRectangleObject = false;
/**
 * @since Flash CS4
 * @type {Array.<Element>}
 * @const
 */
Shape.prototype.members = null;
/**
 * @since Flash CS4
 * @type {Number}
 * @const
 */
Shape.prototype.numCubicSegments = 0;
/**
 * @since Flash MX 2004
 * @type {Array.<Vertex>}
 * @const
 */
Shape.prototype.vertices = null;
/**
 * @since Flash MX 2004
 */
Shape.prototype.beginEdit = function () {
};
/**
 * @since Flash MX 2004
 * @param {Number} index
 */
Shape.prototype.deleteEdge = function (index) {
};
/**
 * @since Flash MX 2004
 */
Shape.prototype.endEdit = function () {
};
/**
 * @since Flash CS4
 * @param {Number} cubicSegmentIndex
 * @return {Array.<{x:Number,y:Number}>}
 */
Shape.prototype.getCubicSegmentPoints = function (cubicSegmentIndex) {
};
/**
 * @since Flash CS3
 * @class {Oval}
 * @extends {Shape}
 */
Oval = function () {
};
Oval.prototype = new Shape();
/**
 * @since Flash CS3
 * @type {Boolean}
 * @const
 */
Oval.prototype.closePath = false;
/**
 * @since Flash CS3
 * @type {Number}
 * @const
 */
Oval.prototype.endAngle = 0;
/**
 * @since Flash CS3
 * @type {Number}
 * @const
 */
Oval.prototype.innerRadius = 0;
/**
 * @since Flash CS3
 * @type {Number}
 * @const
 */
Oval.prototype.startAngle = 0;
/**
 * @since Flash CS3
 * @class {Rectangle}
 * @extends {Shape}
 */
Rectangle = function () {
};
Rectangle.prototype = new Shape();
/**
 * @since Flash CS3
 * @type {Number}
 * @const
 */
Rectangle.prototype.bottomLeftRadius = 0;
/**
 * @since Flash CS3
 * @type {Number}
 * @const
 */
Rectangle.prototype.bottomRightRadius = 0;
/**
 * @since Flash CS3
 * @type {Boolean}
 * @const
 */
Rectangle.prototype.lockFlag = false;
/**
 * @since Flash CS3
 * @type {Number}
 * @const
 */
Rectangle.prototype.topLeftRadius = 0;
/**
 * @since Flash CS3
 * @type {Number}
 * @const
 */
Rectangle.prototype.topRightRadius = 0;
/**
 * @since Flash MX 2004
 * @class {Text}
 * @extends {Element}
 */
Text = function () {
};
Text.prototype = new Element();
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.accName = null;
/**
 * @since Flash 8
 * @type {Number}
 */
Text.prototype.antiAliasSharpness = 0;
/**
 * @since Flash 8
 * @type {Number}
 */
Text.prototype.antiAliasThickness = 0;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Text.prototype.autoExpand = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Text.prototype.border = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.description = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.embeddedCharacters = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.embedRanges = null;
/**
 * @since Flash CS4
 * @type {Boolean}
 */
Text.prototype.embedVariantGlyphs = false;
/**
 * @since Flash CS6
 * @type {Array.<Filter>}
 */
Text.prototype.filters = null;
/**
 * @since Flash 8
 * @type {string}
 */
Text.prototype.fontRenderingMode = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 * @const
 */
Text.prototype.length = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.lineType = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Text.prototype.maxCharacters = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.orientation = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Text.prototype.renderAsHTML = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Text.prototype.scrollable = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Text.prototype.selectable = false;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Text.prototype.selectionEnd = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Text.prototype.selectionStart = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.shortcut = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Text.prototype.silent = false;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Text.prototype.tabIndex = 0;
/**
 * @since Flash MX 2004
 * @type {Array.<TextRun>}
 * @const
 */
Text.prototype.textRuns = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.textType = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Text.prototype.useDeviceFonts = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.variableName = null;
/**
 * @since Flash MX 2004
 * @param {string} attrName
 * @param {Number} [startIndex]
 * @param {Number} [endIndex]
 * @return {Object}
 */
Text.prototype.getTextAttr = function (attrName, startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startIndex]
 * @param {Number} [endIndex]
 * @return {string}
 */
Text.prototype.getTextString = function (startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {string} attrName
 * @param {Object} attrValue
 * @param {Number} [startIndex]
 * @param {Number} [endIndex]
 */
Text.prototype.setTextAttr = function (attrName, attrValue, startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {string} text
 * @param {Number} [startIndex]
 * @param {Number} [endIndex]
 */
Text.prototype.setTextString = function (text, startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @class {TextAttrs}
 */
TextAttrs = function () {
};
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
TextAttrs.prototype.aliasText = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
TextAttrs.prototype.alignment = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
TextAttrs.prototype.autoKern = false;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
TextAttrs.prototype.bold = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
TextAttrs.prototype.characterPosition = null;
/**
 * @since Flash MX 2004
 * @deprecated
 * @see TextAttrs#letterSpacing
 * @type {Number}
 */
TextAttrs.prototype.characterSpacing = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
TextAttrs.prototype.face = null;
/**
 * @since Flash MX 2004
 * @type {string|Number}
 */
TextAttrs.prototype.fillColor = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
TextAttrs.prototype.indent = 0;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
TextAttrs.prototype.italic = false;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
TextAttrs.prototype.leftMargin = 0;
/**
 * @since Flash 8
 * @type {Number}
 */
TextAttrs.prototype.letterSpacing = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
TextAttrs.prototype.lineSpacing = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
TextAttrs.prototype.rightMargin = 0;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
TextAttrs.prototype.rotation = false;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
TextAttrs.prototype.size = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
TextAttrs.prototype.target = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
TextAttrs.prototype.url = null;
/**
 * @since Flash MX 2004
 * @class {TextRun}
 */
TextRun = function () {
};
/**
 * @since Flash MX 2004
 * @type {string}
 */
TextRun.prototype.characters = null;
/**
 * @since Flash MX 2004
 * @type {TextAttrs}
 */
TextRun.prototype.textAttrs = null;

