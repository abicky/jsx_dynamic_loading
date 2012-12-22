import "js/web.jsx";

class Human {
    var name : string;

    // called from constructor of sub class
    // unless sub class calls the constructor of super class explicitly
    function constructor() {}

    function constructor(params : Map.<variant>) {
        this.name = params["name"] as string;
    }

    function introduce() : void {
        this._say("My name is " + this.name);
    }

    function _say(msg : string) : void {
        dom.window.alert(msg);
    }
}
