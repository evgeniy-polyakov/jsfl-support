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
 * @type {number}
 * @const
 */
Element.prototype.depth = 0;
/**
 * @since Flash MX 2004
 * @type {"shape"|"text"|"tlfText"|"instance"|"shapeObj"}
 * @const
 */
Element.prototype.elementType = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Element.prototype.height = 0;
/**
 * @since Flash 8
 * @type {Layer}
 * @const
 */
Element.prototype.layer = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Element.prototype.left = 0;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Element.prototype.locked = false;
/**
 * @since Flash MX 2004
 * @type {Matrix}
 */
Element.prototype.matrix = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Element.prototype.name = undefined;
/**
 * @since Flash CS3
 * @type {number}
 */
Element.prototype.rotation = 0;
/**
 * @since Flash CS3
 * @type {number}
 */
Element.prototype.scaleX = 0;
/**
 * @since Flash CS3
 * @type {number}
 */
Element.prototype.scaleY = 0;
/**
 * @since Flash 8
 * @type {boolean}
 */
Element.prototype.selected = false;
/**
 * @since Flash CS3
 * @type {number}
 */
Element.prototype.skewX = 0;
/**
 * @since Flash CS3
 * @type {number}
 */
Element.prototype.skewY = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Element.prototype.top = 0;
/**
 * @since Flash CS3
 * @type {number}
 */
Element.prototype.transformX = 0;
/**
 * @since Flash CS3
 * @type {number}
 */
Element.prototype.transformY = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Element.prototype.width = 0;
/**
 * @since Flash CS3
 * @type {number}
 */
Element.prototype.x = 0;
/**
 * @since Flash CS3
 * @type {number}
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
 * @return {boolean}
 */
Element.prototype.getPublishPersistentData = function (name, format) {
};
/**
 * @since Flash CS3
 * @return {{x:number,y:number}}
 */
Element.prototype.getTransformationPoint = function () {
};
/**
 * @since Flash MX 2004
 * @param {string} name
 * @return {boolean}
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
 * @param {"integer"|"integerArray"|"double"|"doubleArray"|"string"|"byteArray"} type
 * @param {Object} value
 */
Element.prototype.setPersistentData = function (name, type, value) {
};
/**
 * @since Flash CC
 * @param {string} name
 * @param {string} format
 * @param {boolean} publish
 */
Element.prototype.setPublishPersistentData = function (name, format, publish) {
};
/**
 * @since Flash CS3
 * @param {{x:number,y:number}} transformationPoint
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
 * @type {"symbol"|"bitmap"|"embedded video"|"linked video"|"video"|"compiled clip"}
 * @const
 */
Instance.prototype.instanceType = undefined;
/**
 * @since Flash MX 2004
 * @type {Item}
 */
Instance.prototype.libraryItem = undefined;
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
 * @type {number}
 * @const
 */
BitmapInstance.prototype.hPixels = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
BitmapInstance.prototype.vPixels = 0;
/**
 * @since Flash MX 2004
 * @return {{width:number,height:number,depth:number,bits:Object,cTab:Object}}
 */
BitmapInstance.prototype.getBits = function () {
};
/**
 * @since Flash MX 2004
 * @param {{width:number,height:number,depth:number,bits:Object,cTab?:Object}} bitmap
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
CompiledClipInstance.prototype.accName = undefined;
/**
 * @since Flash MX 2004
 * @deprecated
 * @type {string}
 */
CompiledClipInstance.prototype.actionScript = undefined;
/**
 * @since Flash CC
 * @type {string|number}
 */
CompiledClipInstance.prototype.backgroundColor = undefined;
/**
 * @since Flash CC
 * @type {"normal"|"layer"|"multiply"|"screen"|"overlay"|"hardlight"|"lighten"|"darken"|"difference"|"add"|"subtract"|"invert"|"alpha"|"erase"}
 */
CompiledClipInstance.prototype.blendMode = undefined;
/**
 * @since Flash CC
 * @type {number}
 * @const
 */
CompiledClipInstance.prototype.brightness = 0;
/**
 * @since Flash CC
 * @type {boolean}
 */
CompiledClipInstance.prototype.cacheAsBitmap = false;
/**
 * @since Flash CC
 * @type {number}
 */
CompiledClipInstance.prototype.colorAlphaAmount = 0;
/**
 * @since Flash CC
 * @type {number}
 */
CompiledClipInstance.prototype.colorAlphaPercent = 0;
/**
 * @since Flash CC
 * @type {number}
 */
CompiledClipInstance.prototype.colorBlueAmount = 0;
/**
 * @since Flash CC
 * @type {number}
 */
CompiledClipInstance.prototype.colorBluePercent = 0;
/**
 * @since Flash CC
 * @type {number}
 */
CompiledClipInstance.prototype.colorGreenAmount = 0;
/**
 * @since Flash CC
 * @type {number}
 */
CompiledClipInstance.prototype.colorGreenPercent = 0;
/**
 * @since Flash CC
 * @type {"none"|"brightness"|"tint"|"alpha"|"advanced"}
 */
CompiledClipInstance.prototype.colorMode = undefined;
/**
 * @since Flash CC
 * @type {number}
 */
CompiledClipInstance.prototype.colorRedAmount = 0;
/**
 * @since Flash CC
 * @type {number}
 */
CompiledClipInstance.prototype.colorRedPercent = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
CompiledClipInstance.prototype.description = undefined;
/**
 * @since Flash CC
 * @type {Array.<Filter>}
 */
CompiledClipInstance.prototype.filters = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
CompiledClipInstance.prototype.forceSimple = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
CompiledClipInstance.prototype.shortcut = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
CompiledClipInstance.prototype.silent = false;
/**
 * @since Flash MX 2004
 * @type {number}
 */
CompiledClipInstance.prototype.tabIndex = 0;
/**
 * @since Flash CC
 * @type {string}
 * @const
 */
CompiledClipInstance.prototype.tintColor = undefined;
/**
 * @since Flash CC
 * @type {number}
 * @const
 */
CompiledClipInstance.prototype.tintPercent = 0;
/**
 * @since Flash CC
 * @type {boolean}
 */
CompiledClipInstance.prototype.useBackgroundColor = false;
/**
 * @since Flash CC
 * @type {boolean}
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
SymbolInstance.prototype.accName = undefined;
/**
 * @since Flash MX 2004
 * @deprecated
 * @type {string}
 */
SymbolInstance.prototype.actionScript = undefined;
/**
 * @since Flash CS5.5
 * @type {string|number}
 */
SymbolInstance.prototype.backgroundColor = undefined;
/**
 * @since Flash CS5.5
 * @type {"none"|"cache"|"export"}
 */
SymbolInstance.prototype.bitmapRenderMode = undefined;
/**
 * @since Flash 8
 * @type {"normal"|"layer"|"multiply"|"screen"|"overlay"|"hardlight"|"lighten"|"darken"|"difference"|"add"|"subtract"|"invert"|"alpha"|"erase"}
 */
SymbolInstance.prototype.blendMode = undefined;
/**
 * @since Flash CC
 * @type {number}
 * @const
 */
SymbolInstance.prototype.brightness = 0;
/**
 * @since Flash MX 2004
 * @type {"button"|"menu"}
 */
SymbolInstance.prototype.buttonTracking = undefined;
/**
 * @since Flash 8
 * @type {boolean}
 */
SymbolInstance.prototype.cacheAsBitmap = false;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.colorAlphaAmount = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.colorAlphaPercent = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.colorBlueAmount = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.colorBluePercent = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.colorGreenAmount = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.colorGreenPercent = 0;
/**
 * @since Flash MX 2004
 * @type {"none"|"brightness"|"tint"|"alpha"|"advanced"}
 */
SymbolInstance.prototype.colorMode = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.colorRedAmount = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.colorRedPercent = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolInstance.prototype.description = undefined;
/**
 * @since Flash 8
 * @type {Array.<Filter>}
 */
SymbolInstance.prototype.filters = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.firstFrame = 0;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
SymbolInstance.prototype.forceSimple = false;
/**
 * @since Flash CS6
 * @type {boolean}
 * @const
 */
SymbolInstance.prototype.is3D = false;
/**
 * @since Flash MX 2004
 * @type {"loop"|"play once"|"single frame"}
 */
SymbolInstance.prototype.loop = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
SymbolInstance.prototype.shortcut = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
SymbolInstance.prototype.silent = false;
/**
 * @since Flash MX 2004
 * @type {"button"|"movie clip"|"graphic"}
 */
SymbolInstance.prototype.symbolType = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
SymbolInstance.prototype.tabIndex = 0;
/**
 * @since Flash CC
 * @type {string}
 * @const
 */
SymbolInstance.prototype.tintColor = undefined;
/**
 * @since Flash CC
 * @type {number}
 * @const
 */
SymbolInstance.prototype.tintPercent = 0;
/**
 * @since Flash CS5.5
 * @type {boolean}
 */
SymbolInstance.prototype.useBackgroundColor = false;
/**
 * @since Flash CS5.5
 * @type {boolean}
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
ComponentInstance.prototype.parameters = undefined;
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
Parameter.prototype.category = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Parameter.prototype.listIndex = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 * @const
 */
Parameter.prototype.name = undefined;
/**
 * @since Flash MX 2004
 * @type {Object}
 */
Parameter.prototype.value = undefined;
/**
 * @since Flash MX 2004
 * @type {"Default"|"Array"|"Object"|"List"|"String"|"Number"|"Boolean"|"Font Name"|"Color"|"Collection"|"Web Service URL"|"Web Service Operation"}
 * @const
 */
Parameter.prototype.valueType = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Parameter.prototype.verbose = 0;
/**
 * @since Flash MX 2004
 * @param {number} index
 * @param {string} name
 * @param {string} value
 * @param {"Default"|"Array"|"Object"|"List"|"String"|"Number"|"Boolean"|"Font Name"|"Color"|"Collection"|"Web Service URL"|"Web Service Operation"} type
 */
Parameter.prototype.insertItem = function (index, name, value, type) {
};
/**
 * @since Flash MX 2004
 * @param {number} index
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
 * @type {number}
 */
Filter.prototype.angle = 0;
/**
 * @since Flash 8
 * @type {number}
 */
Filter.prototype.blurX = 0;
/**
 * @since Flash 8
 * @type {number}
 */
Filter.prototype.blurY = 0;
/**
 * @since Flash 8
 * @type {number}
 */
Filter.prototype.brightness = 0;
/**
 * @since Flash 8
 * @type {string|number}
 */
Filter.prototype.color = undefined;
/**
 * @since Flash 8
 * @type {number}
 */
Filter.prototype.contrast = 0;
/**
 * @since Flash 8
 * @type {number}
 */
Filter.prototype.distance = 0;
/**
 * @since Flash CS3
 * @type {boolean}
 */
Filter.prototype.enabled = false;
/**
 * @since Flash 8
 * @type {boolean}
 */
Filter.prototype.hideObject = false;
/**
 * @since Flash 8
 * @type {string|number}
 */
Filter.prototype.highlightColor = undefined;
/**
 * @since Flash 8
 * @type {number}
 */
Filter.prototype.hue = 0;
/**
 * @since Flash 8
 * @type {boolean}
 */
Filter.prototype.inner = false;
/**
 * @since Flash 8
 * @type {boolean}
 */
Filter.prototype.knockout = false;
/**
 * @since Flash 8
 * @type {"adjustColorFilter"|"bevelFilter"|"blurFilter"|"dropShadowFilter"|"glowFilter"|"gradientBevelFilter"|"gradientGlowFilter"}
 * @const
 */
Filter.prototype.name = undefined;
/**
 * @since Flash 8
 * @type {"low"|"medium"|"high"}
 */
Filter.prototype.quality = undefined;
/**
 * @since Flash 8
 * @type {number}
 */
Filter.prototype.saturation = 0;
/**
 * @since Flash 8
 * @type {string|number}
 */
Filter.prototype.shadowColor = undefined;
/**
 * @since Flash 8
 * @type {number}
 */
Filter.prototype.strength = 0;
/**
 * @since Flash 8
 * @type {"inner"|"outer"|"full"}
 */
Filter.prototype.type = undefined;
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
Shape.prototype.contours = undefined;
/**
 * @since Flash MX 2004
 * @type {Array.<Edge>}
 * @const
 */
Shape.prototype.edges = undefined;
/**
 * @since Flash 8
 * @type {boolean}
 * @const
 */
Shape.prototype.isDrawingObject = false;
/**
 * @since Flash CS6
 * @type {boolean}
 * @const
 */
Shape.prototype.isFloating = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 * @const
 */
Shape.prototype.isGroup = false;
/**
 * @since Flash CS3
 * @type {boolean}
 * @const
 */
Shape.prototype.isOvalObject = false;
/**
 * @since Flash CS3
 * @type {boolean}
 * @const
 */
Shape.prototype.isRectangleObject = false;
/**
 * @since Flash CS4
 * @type {Array.<Element>}
 * @const
 */
Shape.prototype.members = undefined;
/**
 * @since Flash CS4
 * @type {number}
 * @const
 */
Shape.prototype.numCubicSegments = 0;
/**
 * @since Flash MX 2004
 * @type {Array.<Vertex>}
 * @const
 */
Shape.prototype.vertices = undefined;
/**
 * @since Flash MX 2004
 */
Shape.prototype.beginEdit = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} index
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
 * @param {number} cubicSegmentIndex
 * @return {Array.<{x:number,y:number}>}
 */
Shape.prototype.getCubicSegmentPoints = function (cubicSegmentIndex) {
};
/**
 * @since Flash CS3
 * @class {OvalObject}
 * @extends {Shape}
 */
OvalObject = function () {
};
OvalObject.prototype = new Shape();
/**
 * @since Flash CS3
 * @type {boolean}
 * @const
 */
OvalObject.prototype.closePath = false;
/**
 * @since Flash CS3
 * @type {number}
 * @const
 */
OvalObject.prototype.endAngle = 0;
/**
 * @since Flash CS3
 * @type {number}
 * @const
 */
OvalObject.prototype.innerRadius = 0;
/**
 * @since Flash CS3
 * @type {number}
 * @const
 */
OvalObject.prototype.startAngle = 0;
/**
 * @since Flash CS3
 * @class {RectangleObject}
 * @extends {Shape}
 */
RectangleObject = function () {
};
RectangleObject.prototype = new Shape();
/**
 * @since Flash CS3
 * @type {number}
 * @const
 */
RectangleObject.prototype.bottomLeftRadius = 0;
/**
 * @since Flash CS3
 * @type {number}
 * @const
 */
RectangleObject.prototype.bottomRightRadius = 0;
/**
 * @since Flash CS3
 * @type {boolean}
 * @const
 */
RectangleObject.prototype.lockFlag = false;
/**
 * @since Flash CS3
 * @type {number}
 * @const
 */
RectangleObject.prototype.topLeftRadius = 0;
/**
 * @since Flash CS3
 * @type {number}
 * @const
 */
RectangleObject.prototype.topRightRadius = 0;
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
Text.prototype.accName = undefined;
/**
 * @since Flash 8
 * @type {number}
 */
Text.prototype.antiAliasSharpness = 0;
/**
 * @since Flash 8
 * @type {number}
 */
Text.prototype.antiAliasThickness = 0;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Text.prototype.autoExpand = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Text.prototype.border = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.description = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.embeddedCharacters = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.embedRanges = undefined;
/**
 * @since Flash CS4
 * @type {boolean}
 */
Text.prototype.embedVariantGlyphs = false;
/**
 * @since Flash CS6
 * @type {Array.<Filter>}
 */
Text.prototype.filters = undefined;
/**
 * @since Flash 8
 * @type {"device"|"bitmap"|"standard"|"advanced"|"customThicknessSharpness"}
 */
Text.prototype.fontRenderingMode = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Text.prototype.length = 0;
/**
 * @since Flash MX 2004
 * @type {"single line"|"multiline"|"multiline no wrap"|"password"}
 */
Text.prototype.lineType = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Text.prototype.maxCharacters = 0;
/**
 * @since Flash MX 2004
 * @type {"horizontal"|"vertical left to right"|"vertical right to left"}
 */
Text.prototype.orientation = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Text.prototype.renderAsHTML = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Text.prototype.scrollable = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Text.prototype.selectable = false;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Text.prototype.selectionEnd = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Text.prototype.selectionStart = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.shortcut = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Text.prototype.silent = false;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Text.prototype.tabIndex = 0;
/**
 * @since Flash MX 2004
 * @type {Array.<TextRun>}
 * @const
 */
Text.prototype.textRuns = undefined;
/**
 * @since Flash MX 2004
 * @type {"static"|"dynamic"|"input"}
 */
Text.prototype.textType = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
Text.prototype.useDeviceFonts = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Text.prototype.variableName = undefined;
/**
 * @since Flash MX 2004
 * @param {string} attrName
 * @param {number} [startIndex]
 * @param {number} [endIndex]
 * @return {Object}
 */
Text.prototype.getTextAttr = function (attrName, startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {number} [startIndex]
 * @param {number} [endIndex]
 * @return {string}
 */
Text.prototype.getTextString = function (startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {string} attrName
 * @param {Object} attrValue
 * @param {number} [startIndex]
 * @param {number} [endIndex]
 */
Text.prototype.setTextAttr = function (attrName, attrValue, startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {string} text
 * @param {number} [startIndex]
 * @param {number} [endIndex]
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
 * @type {boolean}
 */
TextAttrs.prototype.aliasText = false;
/**
 * @since Flash MX 2004
 * @type {"left"|"center"|"right"|"justify"}
 */
TextAttrs.prototype.alignment = undefined;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
TextAttrs.prototype.autoKern = false;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
TextAttrs.prototype.bold = false;
/**
 * @since Flash MX 2004
 * @type {"normal"|"subscript"|"superscript"}
 */
TextAttrs.prototype.characterPosition = undefined;
/**
 * @since Flash MX 2004
 * @deprecated
 * @see TextAttrs#letterSpacing
 * @type {number}
 */
TextAttrs.prototype.characterSpacing = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
TextAttrs.prototype.face = undefined;
/**
 * @since Flash MX 2004
 * @type {string|number}
 */
TextAttrs.prototype.fillColor = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
TextAttrs.prototype.indent = 0;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
TextAttrs.prototype.italic = false;
/**
 * @since Flash MX 2004
 * @type {number}
 */
TextAttrs.prototype.leftMargin = 0;
/**
 * @since Flash 8
 * @type {number}
 */
TextAttrs.prototype.letterSpacing = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
TextAttrs.prototype.lineSpacing = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
TextAttrs.prototype.rightMargin = 0;
/**
 * @since Flash MX 2004
 * @type {boolean}
 */
TextAttrs.prototype.rotation = false;
/**
 * @since Flash MX 2004
 * @type {number}
 */
TextAttrs.prototype.size = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
TextAttrs.prototype.target = undefined;
/**
 * @since Flash MX 2004
 * @type {string}
 */
TextAttrs.prototype.url = undefined;
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
TextRun.prototype.characters = undefined;
/**
 * @since Flash MX 2004
 * @type {TextAttrs}
 */
TextRun.prototype.textAttrs = undefined;

