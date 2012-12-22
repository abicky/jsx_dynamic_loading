import "js.jsx";
import "js/web.jsx";
import "Human.jsx";

class _Main {
    static function main(args : string[]) : void {
        _Main.saveJSX("main");
        dom.id("programmer").addEventListener("click", function(e : Event) : void {
            _Main.loadClass("Programmer", function(factory : function(:Map.<variant>) : Human) : void {
                var abicky = factory({
                    name: "a_bicky",
                    language: "R"
                } : Map.<variant>);
                abicky.introduce();
            });
        });

        dom.id("designer").addEventListener("click", function(e : Event) : void {
            _Main.loadClass("Designer", function(factory : function(:Map.<variant>) : Human) : void {
                var abicky = factory({
                    name: "a_bicky",
                    tool: "Inkscape"
                } : Map.<variant>);
                abicky.introduce();
            });
        });
    }

    static function loadClass(className : string, callback : function(:function(:Map.<variant>) : Human) : void) : void {
        var script = dom.createElement("script") as HTMLScriptElement;
        script.addEventListener("load", function(e : Event) : void {
            _Main.saveJSX(className);
            var eval = js.global["eval"] as function(:string) : Human;
            var factory = function(params : Map.<variant>) : Human {
                var code = "(function() {"
                         + "  var Human = JSX.require('" + className + ".jsx')." + className + "$HX;"
                         + "  return new Human(" + JSON.stringify(params) + ");"
                         + "})()";
                return eval(code);
            };
            callback(factory);
        });
        script.type = "text/javascript";
        script.src = className + ".js";
        dom.document.body.appendChild(script);
    }

    static function saveJSX(className : string) : void {
        if (!js.global.hasOwnProperty("JSXs")) {
            (dom.window as __noconvert__ Map.<Map.<variant>>)["JSXs"] = {} : Map.<variant>;
        }
        var JSXs = js.global["JSXs"] as Map.<variant>;
        JSXs[className] = js.global["JSX"];
    }
}
