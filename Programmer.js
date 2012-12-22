var JSX = {};
(function () {

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions called by JSX
 * (enamed so that they do not conflict with local variable names)
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
/**
 * class Human extends Object
 * @constructor
 */
function Human() {
}

Human.prototype = new Object;
/**
 * @constructor
 */
function Human$() {
	this.name = "";
};

Human$.prototype = new Human;

/**
 * @constructor
 * @param {Object.<string, undefined|*>} params
 */
function Human$HX(params) {
	this.name = params.name + "";
};

Human$HX.prototype = new Human;

/**
 */
Human.prototype.introduce$ = function () {
	this._say$S("My name is " + this.name);
};

/**
 * @param {!string} msg
 */
Human.prototype._say$S = function (msg) {
	dom.window.alert(msg);
};

/**
 * class Programmer extends Human
 * @constructor
 */
function Programmer() {
}

Programmer.prototype = new Human;
/**
 * @constructor
 * @param {Object.<string, undefined|*>} params
 */
function Programmer$HX(params) {
	Human$.call(this);
	this.name = params.name + "";
	this._language = params.language + "";
};

Programmer$HX.prototype = new Programmer;

/**
 */
Programmer.prototype.introduce$ = function () {
	this._say$S("My name is " + this.name + "\n" + "My favorite programming language is " + this.getLanguage$());
};

/**
 * @return {!string}
 */
Programmer.prototype.getLanguage$ = function () {
	return this._language;
};

/**
 * class dom extends Object
 * @constructor
 */
function dom() {
}

dom.prototype = new Object;
/**
 * @constructor
 */
function dom$() {
};

dom$.prototype = new dom;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.id$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(id));
};

var dom$id$S = dom.id$S;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.getElementById$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(id));
};

var dom$getElementById$S = dom.getElementById$S;

/**
 * @param {!string} tag
 * @return {HTMLElement}
 */
dom.createElement$S = function (tag) {
	return (function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/arabiki/repos/JSX/lib/js/js/web.jsx:45] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.createElement(tag)));
};

var dom$createElement$S = dom.createElement$S;

/**
 * class js extends Object
 * @constructor
 */
function js() {
}

js.prototype = new Object;
/**
 * @constructor
 */
function js$() {
};

js$.prototype = new js;

$__jsx_lazy_init(dom, "window", function () {
	return js.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return (function (v) {
		if (! (v == null || v instanceof HTMLDocument)) {
			debugger;
			throw new Error("[/Users/arabiki/repos/JSX/lib/js/js/web.jsx:23] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(js.global.document));
});
js.global = (function () { return this; })();

var $__jsx_classMap = {
	"Human.jsx": {
		Human: Human,
		Human$: Human$,
		Human$HX: Human$HX
	},
	"Programmer.jsx": {
		Programmer: Programmer,
		Programmer$HX: Programmer$HX
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom$
	},
	"system:lib/js/js.jsx": {
		js: js,
		js$: js$
	}
};


})();
