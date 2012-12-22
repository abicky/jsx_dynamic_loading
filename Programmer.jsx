import "Human.jsx";

class Programmer extends Human {
    var _language : string;

    function constructor(params : Map.<variant>) {
        this.name = params["name"] as string;
        this._language = params["language"] as string;
    }

    override function introduce() : void {
        this._say("My name is " + this.name + "\n"
            + "My favorite programming language is " + this.getLanguage());
    }

    function getLanguage() : string {
        return this._language;
    }
}
