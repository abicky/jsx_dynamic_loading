import "Human.jsx";

class Designer extends Human {
    var _tool : string;

    function constructor(params : Map.<variant>) {
        this.name = params["name"] as string;
        this._tool = params["tool"] as string;
    }

    override function introduce() : void {
        this._say("My name is " + this.name + "\n"
            + "My favorite drawing tool is " + this.getTool());
    }

    function getTool() : string {
        return this._tool;
    }
}
