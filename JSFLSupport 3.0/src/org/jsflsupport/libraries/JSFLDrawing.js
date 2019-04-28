/***************************************************************************
 * JSFL API
 * Drawing objects
 **************************************************************************/
/**
 * @since Flash MX 2004
 * @class {Path}
 */
Path = function () {
};
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Path.prototype.nPts = 0;
/**
 * @since Flash MX 2004
 * @param {number} xAnchor
 * @param {number} yAnchor
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 * @param {number} x4
 * @param {number} y4
 */
Path.prototype.addCubicCurve = function (xAnchor, yAnchor, x2, y2, x3, y3, x4, y4) {
};
/**
 * @since Flash MX 2004
 * @param {number} xAnchor
 * @param {number} yAnchor
 * @param {number} x2
 * @param {number} y2
 * @param {number} x3
 * @param {number} y3
 */
Path.prototype.addCurve = function (xAnchor, yAnchor, x2, y2, x3, y3) {
};
/**
 * @since Flash MX 2004
 * @param {number} x
 * @param {number} y
 */
Path.prototype.addPoint = function (x, y) {
};
/**
 * @since Flash MX 2004
 */
Path.prototype.clear = function () {
};
/**
 * @since Flash MX 2004
 */
Path.prototype.close = function () {
};
/**
 * @since Flash MX 2004
 * @param {boolean} [bSupressFill]
 * @param {boolean} [bSupressStroke]
 */
Path.prototype.makeShape = function (bSupressFill, bSupressStroke) {
};
/**
 * @since Flash MX 2004
 */
Path.prototype.newContour = function () {
};
/**
 * @since Flash MX 2004
 * @class {Fill}
 */
Fill = function () {
};
/**
 * @since Flash CS4
 * @type {boolean}
 */
Fill.prototype.bitmapIsClipped = false;
/**
 * @since Flash CS4
 * @type {string}
 */
Fill.prototype.bitmapPath = null;
/**
 * @since Flash MX 2004
 * @type {string|number}
 */
Fill.prototype.color = null;
/**
 * @since Flash MX 2004
 * @type {Array.<string|number>}
 */
Fill.prototype.colorArray = null;
/**
 * @since Flash 8
 * @type {number}
 */
Fill.prototype.focalPoint = 0;
/**
 * @since Flash 8
 * @type {boolean}
 */
Fill.prototype.linearRGB = false;
/**
 * @since Flash MX 2004
 * @type {Matrix}
 */
Fill.prototype.matrix = null;
/**
 * @since Flash 8
 * @type {string}
 */
Fill.prototype.overflow = null;
/**
 * @since Flash MX 2004
 * @type {Array.<number>}
 */
Fill.prototype.posArray = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Fill.prototype.style = null;
/**
 * @since Flash MX 2004
 * @class {Stroke}
 */
Stroke = function () {
};
/**
 * @since Flash MX 2004
 * @deprecated
 * @see Stroke#joinType
 * @type {boolean}
 */
Stroke.prototype.breakAtCorners = false;
/**
 * @since Flash 8
 * @type {string}
 */
Stroke.prototype.capType = null;
/**
 * @since Flash MX 2004
 * @deprecated
 * @see Stroke#shapeFill
 * @type {string|number}
 */
Stroke.prototype.color = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.curve = null;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Stroke.prototype.dash1 = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Stroke.prototype.dash2 = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.density = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.dotSize = null;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Stroke.prototype.dotSpace = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.hatchThickness = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.jiggle = null;
/**
 * @since Flash 8
 * @type {string}
 */
Stroke.prototype.joinType = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.length = null;
/**
 * @since Flash 8
 * @type {number}
 */
Stroke.prototype.miterLimit = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.pattern = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.rotate = null;
/**
 * @since Flash 8
 * @type {string}
 */
Stroke.prototype.scaleType = null;
/**
 * @since Flash 8
 * @type {Fill}
 */
Stroke.prototype.shapeFill = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.space = null;
/**
 * @since Flash 8
 * @type {boolean}
 */
Stroke.prototype.strokeHinting = false;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.style = null;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Stroke.prototype.thickness = 0;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.variation = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.waveHeight = null;
/**
 * @since Flash MX 2004
 * @type {string}
 */
Stroke.prototype.waveLength = null;
/**
 * @since Flash MX 2004
 * @class {Contour}
 */
Contour = function () {
};
/**
 * @since Flash CS4
 * @type {Fill}
 */
Contour.prototype.fill = null;
/**
 * @since Flash MX 2004
 * @type {boolean}
 * @const
 */
Contour.prototype.interior = false;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Contour.prototype.orientation = 0;
/**
 * @since Flash MX 2004
 * @return {HalfEdge}
 */
Contour.prototype.getHalfEdge = function () {
};
/**
 * @since Flash MX 2004
 * @class {Edge}
 */
Edge = function () {
};
/**
 * @since Flash CS4
 * @type {number}
 * @const
 */
Edge.prototype.cubicSegmentIndex = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Edge.prototype.id = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Edge.prototype.isLine = 0;
/**
 * @since Flash CS4
 * @type {Stroke}
 */
Edge.prototype.stroke = null;
/**
 * @since Flash MX 2004
 * @param {number} i
 * @return {{x:number,y:number}}
 */
Edge.prototype.getControl = function (i) {
};
/**
 * @since Flash MX 2004
 * @param {number} index
 * @return {HalfEdge}
 */
Edge.prototype.getHalfEdge = function (index) {
};
/**
 * @since Flash MX 2004
 * @param {number} index
 * @param {number} x
 * @param {number} y
 */
Edge.prototype.setControl = function (index, x, y) {
};
/**
 * @since Flash MX 2004
 * @param {number} t
 */
Edge.prototype.splitEdge = function (t) {
};
/**
 * @since Flash MX 2004
 * @class {HalfEdge}
 */
HalfEdge = function () {
};
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
HalfEdge.prototype.id = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
HalfEdge.prototype.index = 0;
/**
 * @since Flash MX 2004
 * @return {Edge}
 */
HalfEdge.prototype.getEdge = function () {
};
/**
 * @since Flash MX 2004
 * @return {HalfEdge}
 */
HalfEdge.prototype.getNext = function () {
};
/**
 * @since Flash MX 2004
 * @return {HalfEdge}
 */
HalfEdge.prototype.getOppositeHalfEdge = function () {
};
/**
 * @since Flash MX 2004
 * @return {HalfEdge}
 */
HalfEdge.prototype.getPrev = function () {
};
/**
 * @since Flash MX 2004
 * @return {Vertex}
 */
HalfEdge.prototype.getVertex = function () {
};
/**
 * @since Flash MX 2004
 * @class {Vertex}
 */
Vertex = function () {
};
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Vertex.prototype.x = 0;
/**
 * @since Flash MX 2004
 * @type {number}
 * @const
 */
Vertex.prototype.y = 0;
/**
 * @since Flash MX 2004
 * @return {HalfEdge}
 */
Vertex.prototype.getHalfEdge = function () {
};
/**
 * @since Flash MX 2004
 * @param {number} x
 * @param {number} y
 */
Vertex.prototype.setLocation = function (x, y) {
};