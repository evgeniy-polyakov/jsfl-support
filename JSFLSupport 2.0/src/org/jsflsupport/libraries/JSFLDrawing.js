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
 * Drawing objects
 **************************************************************************/
/**
 * @since Flash MX 2004
 */
function Path () {
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.nPts = 0;
    /**
     * @since Flash MX 2004
     * @param {Number} xAnchor
     * @param {Number} yAnchor
     * @param {Number} x2
     * @param {Number} y2
     * @param {Number} x3
     * @param {Number} y3
     * @param {Number} x4
     * @param {Number} y4
     */
    this.addCubicCurve = function (xAnchor, yAnchor, x2, y2, x3, y3, x4, y4) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} xAnchor
     * @param {Number} yAnchor
     * @param {Number} x2
     * @param {Number} y2
     * @param {Number} x3
     * @param {Number} y3
     */
    this.addCurve = function (xAnchor, yAnchor, x2, y2, x3, y3) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} x
     * @param {Number} y
     */
    this.addPoint = function (x, y) {
    };
    /**
     * @since Flash MX 2004
     */
    this.clear = function () {
    };
    /**
     * @since Flash MX 2004
     */
    this.close = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Boolean} [bSupressFill]
     * @param {Boolean} [bSupressStroke]
     */
    this.makeShape = function (bSupressFill, bSupressStroke) {
    };
    /**
     * @since Flash MX 2004
     */
    this.newContour = function () {
    };
}

/**
 * @since Flash MX 2004
 */
function Fill () {
    /**
     * @since Flash CS4
     * @type Boolean
     */
    this.bitmapIsClipped = false;
    /**
     * @since Flash CS4
     * @type String
     */
    this.bitmapPath = null;
    /**
     * @since Flash MX 2004
     * @type Object
     */
    this.color = null;
    /**
     * @since Flash MX 2004
     * @type Array
     */
    this.colorArray = null;
    /**
     * @since Flash 8
     * @type Number
     */
    this.focalPoint = 0;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.linearRGB = false;
    /**
     * @since Flash MX 2004
     * @type Matrix
     */
    this.matrix = null;
    /**
     * @since Flash 8
     * @type String
     */
    this.overflow = null;
    /**
     * @since Flash MX 2004
     * @type Array
     */
    this.posArray = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.style = null;
}

/**
 * @since Flash MX 2004
 */
function Stroke () {
    /**
     * @since Flash MX 2004
     * @deprecated
     * @see Stroke#joinType
     * @type Boolean
     */
    this.breakAtCorners = false;
    /**
     * @since Flash 8
     * @type String
     */
    this.capType = null;
    /**
     * @since Flash MX 2004
     * @deprecated
     * @see Stroke#shapeFill
     * @type Object
     */
    this.color = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.curve = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.dash1 = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.dash2 = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.density = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.dotSize = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.dotSpace = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.hatchThickness = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.jiggle = null;
    /**
     * @since Flash 8
     * @type String
     */
    this.joinType = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.length = null;
    /**
     * @since Flash 8
     * @type Number
     */
    this.miterLimit = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.pattern = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.rotate = null;
    /**
     * @since Flash 8
     * @type String
     */
    this.scaleType = null;
    /**
     * @since Flash 8
     * @type Fill
     */
    this.shapeFill = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.space = null;
    /**
     * @since Flash 8
     * @type Boolean
     */
    this.strokeHinting = false;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.style = null;
    /**
     * @since Flash MX 2004
     * @type Number
     */
    this.thickness = 0;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.variation = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.waveHeight = null;
    /**
     * @since Flash MX 2004
     * @type String
     */
    this.waveLength = null;
}

/**
 * @since Flash MX 2004
 */
function Contour () {
    /**
     * @since Flash CS4
     * @type Fill
     */
    this.fill = null;
    /**
     * @since Flash MX 2004
     * @type Boolean
     * @const
     */
    this.interior = false;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.orientation = 0;
    /**
     * @since Flash MX 2004
     * @return HalfEdge
     */
    this.getHalfEdge = function () {
    };
}

/**
 * @since Flash MX 2004
 */
function Edge () {
    /**
     * @since Flash CS4
     * @type Number
     * @const
     */
    this.cubicSegmentIndex = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.id = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.isLine = 0;
    /**
     * @since Flash CS4
     * @type Stroke
     */
    this.stroke = null;
    /**
     * @since Flash MX 2004
     * @param {Number} i
     * @return Object
     */
    this.getControl = function (i) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} index
     * @return HalfEdge
     */
    this.getHalfEdge = function (index) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} index
     * @param {Number} x
     * @param {Number} y
     */
    this.setControl = function (index, x, y) {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} t
     */
    this.splitEdge = function (t) {
    };
}

/**
 * @since Flash MX 2004
 */
function HalfEdge () {
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.id = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.index = 0;
    /**
     * @since Flash MX 2004
     * @return Edge
     */
    this.getEdge = function () {
    };
    /**
     * @since Flash MX 2004
     * @return HalfEdge
     */
    this.getNext = function () {
    };
    /**
     * @since Flash MX 2004
     * @return HalfEdge
     */
    this.getOppositeHalfEdge = function () {
    };
    /**
     * @since Flash MX 2004
     * @return HalfEdge
     */
    this.getPrev = function () {
    };
    /**
     * @since Flash MX 2004
     * @return Vertex
     */
    this.getVertex = function () {
    };
}

/**
 * @since Flash MX 2004
 */
function Vertex () {
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.x = 0;
    /**
     * @since Flash MX 2004
     * @type Number
     * @const
     */
    this.y = 0;
    /**
     * @since Flash MX 2004
     * @return HalfEdge
     */
    this.getHalfEdge = function () {
    };
    /**
     * @since Flash MX 2004
     * @param {Number} x
     * @param {Number} y
     */
    this.setLocation = function (x, y) {
    };
}