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
Fill.prototype.bitmapPath = undefined;
/**
 * @since Flash MX 2004
 * @type {string|number}
 */
Fill.prototype.color = undefined;
/**
 * @since Flash MX 2004
 * @type {Array.<string|number>}
 */
Fill.prototype.colorArray = undefined;
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
Fill.prototype.matrix = undefined;
/**
 * @since Flash 8
 * @type {"extend"|"repeat"|"reflect"}
 */
Fill.prototype.overflow = undefined;
/**
 * @since Flash MX 2004
 * @type {Array.<number>}
 */
Fill.prototype.posArray = undefined;
/**
 * @since Flash MX 2004
 * @type {"bitmap"|"solid"|"linearGradient"|"radialGradient"|"noFill"}
 */
Fill.prototype.style = undefined;
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
 * @type {"none"|"round"|"square"}
 */
Stroke.prototype.capType = undefined;
/**
 * @since Flash MX 2004
 * @deprecated
 * @see Stroke#shapeFill
 * @type {string|number}
 */
Stroke.prototype.color = undefined;
/**
 * @since Flash MX 2004
 * @type {"straight"|"slight curve"|"medium curve"|"very curved"}
 */
Stroke.prototype.curve = undefined;
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
 * @type {"very dense"|"dense"|"sparse"|"very sparse"}
 */
Stroke.prototype.density = undefined;
/**
 * @since Flash MX 2004
 * @type {"tiny"|"small"|"medium"|"large"}
 */
Stroke.prototype.dotSize = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Stroke.prototype.dotSpace = 0;
/**
 * @since Flash MX 2004
 * @type {"hairline"|"thin"|"medium"|"thick"}
 */
Stroke.prototype.hatchThickness = undefined;
/**
 * @since Flash MX 2004
 * @type {"none"|"bounce"|"loose"|"wild"}
 */
Stroke.prototype.jiggle = undefined;
/**
 * @since Flash 8
 * @type {"miter"|"round"|"bevel"}
 */
Stroke.prototype.joinType = undefined;
/**
 * @since Flash MX 2004
 * @type {"equal"|"slight variation"|"medium variation"|"random"}
 */
Stroke.prototype.length = undefined;
/**
 * @since Flash 8
 * @type {number}
 */
Stroke.prototype.miterLimit = 0;
/**
 * @since Flash MX 2004
 * @type {"solid"|"simple"|"random"|"dotted"|"random dotted"|"triple dotted"|"random triple dotted"}
 */
Stroke.prototype.pattern = undefined;
/**
 * @since Flash MX 2004
 * @type {"none"|"slight"|"medium"|"free"}
 */
Stroke.prototype.rotate = undefined;
/**
 * @since Flash 8
 * @type {"normal"|"horizontal"|"vertical"|"none"}
 */
Stroke.prototype.scaleType = undefined;
/**
 * @since Flash 8
 * @type {Fill}
 */
Stroke.prototype.shapeFill = undefined;
/**
 * @since Flash MX 2004
 * @type {"very close"|"close"|"distant"|"very distant"}
 */
Stroke.prototype.space = undefined;
/**
 * @since Flash 8
 * @type {boolean}
 */
Stroke.prototype.strokeHinting = false;
/**
 * @since Flash MX 2004
 * @type {"noStroke"|"solid"|"dashed"|"dotted"|"ragged"|"stipple"|"hatched"}
 */
Stroke.prototype.style = undefined;
/**
 * @since Flash MX 2004
 * @type {number}
 */
Stroke.prototype.thickness = 0;
/**
 * @since Flash MX 2004
 * @type {"one size"|"small variation"|"varied sizes"|"random sizes"}
 */
Stroke.prototype.variation = undefined;
/**
 * @since Flash MX 2004
 * @type {"flat"|"wavy"|"very wavy"|"wild"}
 */
Stroke.prototype.waveHeight = undefined;
/**
 * @since Flash MX 2004
 * @type {"very short"|"short"|"medium"|"long"}
 */
Stroke.prototype.waveLength = undefined;
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
Contour.prototype.fill = undefined;
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
Edge.prototype.stroke = undefined;
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