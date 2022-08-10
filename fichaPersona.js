/*var n:string = "Juan";
var a:string = "Lopez";

var ndom:any = document.getElementById("fname");
var adom:any = document.getElementById("lname");

ndom.value = n;
adom.value = a;*/
export class fichaPersona {
    //contructor
    constructor(n, a) {
        this._a = a;
        this._n = n;
    }
    //getters y setters
    get n() {
        return this._n;
    }
    get a() {
        return this._a;
    }
    set n(n) {
        this._n = n;
    }
    set a(a) {
        this._a = a;
    }
    //metodos
    completaFicha() {
        var ndom = document.getElementById("fname");
        var adom = document.getElementById("lname");
        ndom.value = this._n;
        adom.value = this._a;
    }
}
var Persona = new fichaPersona("Britney", "Spears");
Persona.completaFicha();
