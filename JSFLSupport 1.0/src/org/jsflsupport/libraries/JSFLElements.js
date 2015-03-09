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
 * Elements hierarchy
 **************************************************************************/
/**
 * @since Flash MX 2004
 */
function Element () {
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.depth = 0;
    /**
     * @since Flash MX 2004
     * @type String
     * @const
     */
    this.elementType = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.height = 0;
    /**
     * @since Flash 8
     * @type Layer
     * @const
     */
    this.layer = null;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.left = 0;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.locked = false;
    /**
     * @since Flash MX 2004
     * @type Matrix
     */
    this.matrix = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.name = null;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.rotation = 0;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.scaleX = 0;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.scaleY = 0;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.selected = false;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.skewX = 0;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.skewY = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.top = 0;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.transformX = 0;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.transformY = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.width = 0;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.x = 0;
    /**
     * @since Flash CS3
     * @type Number
     */
    this.y = 0;
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @return Object
     */
    this.getPersistentData = function (name) {
    };
    /**
     * @since Flash CS3
     * @return Object
     */
    this.getTransformationPoint = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @return Boolean
     */
    this.hasPersistentData = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     */
    this.removePersistentData = function (name) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} name
     * @param {String} type
     * @param {Object} value
     */
    this.setPersistentData = function (name, type, value) {
    };
    /**
     * @since Flash CS3
     * @param {Object} transformationPoint
     */
    this.setTransformationPoint = function (transformationPoint) {
    };
}

/**
 * @since Flash MX 2004
 */
function Instance () {
    /**
     * @since Flash MX 2004
     * @type String
     * @const
     */
    this.instanceType = null;
    /**
     * @since Flash MX 2004
     * @type Item
     */
    this.libraryItem = null;
}
Instance.prototype = new Element();

/**
 * @since Flash MX 2004
 */
function BitmapInstance () {
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.hPixels = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.vPixels = 0;
    /**
     * @since Flash MX 2004
     * @return Object
     */
    this.getBits = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Object} bitmap
     */
    this.setBits = function (bitmap) {
    };
}
BitmapInstance.prototype = new Instance();

/**
 * @since Flash MX 2004
 */
function CompiledClipInstance () {
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.accName = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.actionScript = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.description = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.forceSimple = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.shortcut = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.silent = false;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.tabIndex = 0;
}
CompiledClipInstance.prototype = new Instance();

/**
 * @since Flash MX 2004
 */
function SymbolInstance () {
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.accName = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.actionScript = null;
    /**
     * @since Flash CS5.5
     * @type Object
     */
    this.backgroundColor = null;
    /**
     * @since Flash CS5.5
     * @type String
     */
    this.bitmapRenderMode = null;
    /**
     * @since Flash 8
     * @type String
     */
    this.blendMode = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.buttonTracking = null;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.cacheAsBitmap = false;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.colorAlphaAmount = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.colorAlphaPercent = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.colorBlueAmount = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.colorBluePercent = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.colorGreenAmount = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.colorGreenPercent = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.colorMode = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.colorRedAmount = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.colorRedPercent = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.description = null;
    /**
     * @since Flash 8
     * @type Array
     */
    this.filters = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.firstFrame = 0;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.forceSimple = false;
    /**
     * @since Flash CS6
     * @type Boolean
     * @const
     */
    this.is3D = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.loop = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.shortcut = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.silent = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.symbolType = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.tabIndex = 0;
    /**
     * @since Flash CS5.5
     * @type Boolean
     */
    this.usesBackgroundColor = false;
    /**
     * @since Flash CS5.5
     * @type Boolean
     */
    this.visible = false;
}
SymbolInstance.prototype = new Instance();

/**
 * @since Flash MX 2004
 */
function ComponentInstance () {
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.parameters = null;
}
ComponentInstance.prototype = new SymbolInstance();

/**
 * @since Flash MX 2004
 */
function Parameter () {
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.category = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.listIndex = 0;
    /**
     * @since Flash MX 2004
     * @type String
     * @const
     */
    this.name = null;
    /**
     * @since Flash MX 2004
     * @type Object
     */
    this.value = null;
    /**
     * @since Flash MX 2004
     * @type String
     * @const
     */
    this.valueType = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.verbose = 0;
    /**
     * @since Flash MX 2004
     * @param {Number} index
     * @param {String} name
     * @param {String} value
     * @param {String} type
     */
    this.insertItem = function (index, name, value, type) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} index
     */
    this.removeItem = function (index) {
    };
}

/**
 * @since Flash 8
 */
function Filter () {
    /**
     * @since Flash 8
     * @type Number
     */
    this.angle = 0;
    /**
     * @since Flash 8
     * @type Number
     */
    this.blurX = 0;
    /**
     * @since Flash 8
     * @type Number
     */
    this.blurY = 0;
    /**
     * @since Flash 8
     * @type Number
     */
    this.brightness = 0;
    /**
     * @since Flash 8
     * @type Object
     */
    this.color = null;
    /**
     * @since Flash 8
     * @type Number
     */
    this.contrast = 0;
    /**
     * @since Flash 8
     * @type Number
     */
    this.distance = 0;
    /**
     * @since Flash CS3
     * @type Boolean
     */
    this.enabled = false;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.hideObject = false;
    /**
     * @since Flash 8
     * @type Object
     */
    this.highlightColor = null;
    /**
     * @since Flash 8
     * @type Number
     */
    this.hue = 0;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.inner = false;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.knockout = false;
    /**
     * @since Flash 8
     * @type String
     * @const
     */
    this.name = null;
    /**
     * @since Flash 8
     * @type String
     */
    this.quality = null;
    /**
     * @since Flash 8
     * @type Number
     */
    this.saturation = 0;
    /**
     * @since Flash 8
     * @type Object
     */
    this.shadowColor = null;
    /**
     * @since Flash 8
     * @type Number
     */
    this.strength = 0;
    /**
     * @since Flash 8
     * @type String
     */
    this.type = null;
}

/**
 * @since Flash MX 2004
 */
function Shape () {
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.contours = null;
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.edges = null;
    /**
     * @since Flash 8
     * @type Boolean
     * @const
     */
    this.isDrawingObject = false;
    /**
     * @since Flash CS6
     * @type Boolean
     * @const
     */
    this.isFloating = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     * @const
     */
    this.isGroup = false;
    /**
     * @since Flash CS3
     * @type Boolean
     * @const
     */
    this.isOvalObject = false;
    /**
     * @since Flash CS3
     * @type Boolean
     * @const
     */
    this.isRectangleObject = false;
    /**
     * @since Flash CS4
     * @type Array
     * @const
     */
    this.members = null;
    /**
     * @since Flash CS4
     * @type Number
     * @const
     */
    this.numCubicSegments = 0;
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.vertices = null;
    /**
     * @since Flash MX 2004
     */
    this.beginEdit = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} index
     */
    this.deleteEdge = function (index) {
    };
    /**
     * @since Flash MX 2004
     */
    this.endEdit = function () {
    };
    /**
     * @since Flash CS4
     * @param {Number} cubicSegmentIndex
     * @return Array
     */
    this.getCubicSegmentPoints = function (cubicSegmentIndex) {
    };
}
Shape.prototype = new Element();

/**
 * @since Flash CS3
 */
function Oval () {
    /**
     * @since Flash CS3
     * @type Boolean
     * @const
     */
    this.closePath = false;
    /**
     * @since Flash CS3
     * @type Number
     * @const
     */
    this.endAngle = 0;
    /**
     * @since Flash CS3
     * @type Number
     * @const
     */
    this.innerRadius = 0;
    /**
     * @since Flash CS3
     * @type Number
     * @const
     */
    this.startAngle = 0;
}
Oval.prototype = new Shape();

/**
 * @since Flash CS3
 */
function Rectangle () {
    /**
     * @since Flash CS3
     * @type Number
     * @const
     */
    this.bottomLeftRadius = 0;
    /**
     * @since Flash CS3
     * @type Number
     * @const
     */
    this.bottomRightRadius = 0;
    /**
     * @since Flash CS3
     * @type Boolean
     * @const
     */
    this.lockFlag = false;
    /**
     * @since Flash CS3
     * @type Number
     * @const
     */
    this.topLeftRadius = 0;
    /**
     * @since Flash CS3
     * @type Number
     * @const
     */
    this.topRightRadius = 0;
}
Rectangle.prototype = new Shape();

/**
 * @since Flash MX 2004
 */
function Text () {
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.accName = null;
    /**
     * @since Flash 8
     * @type Number
     */
    this.antiAliasSharpness = 0;
    /**
     * @since Flash 8
     * @type Number
     */
    this.antiAliasThickness = 0;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.autoExpand = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.border = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.description = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.embeddedCharacters = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.embedRanges = null;
    /**
     * @since Flash CS4
     * @type Boolean
     */
    this.embedVariantGlyphs = false;
    /**
     * @since Flash CS6
     * @type Array
     */
    this.filters = null;
    /**
     * @since Flash 8
     * @type String
     */
    this.fontRenderingMode = null;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.length = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.lineType = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.maxCharacters = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.orientation = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.renderAsHTML = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.scrollable = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.selectable = false;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.selectionEnd = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.selectionStart = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.shortcut = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.silent = false;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.tabIndex = 0;
    /**
     * @since Flash MX 2004
     * @type Array
     * @const
     */
    this.textRuns = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.textType = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.useDeviceFonts = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.variableName = null;
    /**
     * @since Flash MX 2004
     * @param {String} attrName
     * @param {Number} [startIndex]
     * @param {Number} [endIndex]
     * @return Object
     */
    this.getTextAttr = function (attrName, startIndex, endIndex) {
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
     * @param {String} attrName
     * @param {Object} attrValue
     * @param {Number} [startIndex]
     * @param {Number} [endIndex]
     */
    this.setTextAttr = function (attrName, attrValue, startIndex, endIndex) {
    };
    /**
     * @since Flash MX 2004
     * @param {String} text
     * @param {Number} [startIndex]
     * @param {Number} [endIndex]
     */
    this.setTextString = function (text, startIndex, endIndex) {
    };
}
Text.prototype = new Element();

/**
 * @since Flash MX 2004
 */
function TextAttrs () {
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.aliasText = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.alignment = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.autoKern = false;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.bold = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.characterPosition = null;
    /**
     * @since Flash MX 2004
     * @deprecated
     * @see TextAttrs#letterSpacing
     * @type Number
     */
    this.characterSpacing = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.face = null;
    /**
     * @since Flash MX 2004
     * @type Object
     */
    this.fillColor = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.indent = 0;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.italic = false;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.leftMargin = 0;
    /**
     * @since Flash 8
     * @type Number
     */
    this.letterSpacing = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.lineSpacing = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.rightMargin = 0;
    /**
     * @since Flash MX 2004
     * @type Boolean
     */
    this.rotation = false;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.size = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.target = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.url = null;
}

/**
 * @since Flash MX 2004
 */
function TextRun () {
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.characters = null;
    /**
     * @since Flash MX 2004
     * @type TextAttrs
     */
    this.textAttrs = null;
}

