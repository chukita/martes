import { fichaPersona } from "./fichaPersona.js";
export class fichaPersonaMenor extends fichaPersona {
    constructor(n, a, nr, ar) {
        super(n, a);
        this._ar = ar;
        this._nr = nr;
    }
    completaFicha() {
        var ndom = document.getElementById("fname");
        var adom = document.getElementById("lname");
        var nrdom = document.getElementById("fnamer");
        var ardom = document.getElementById("lnamer");
        var menor = document.getElementById("menor");
        ndom.value = this._n;
        adom.value = this._a;
        nrdom.value = this._nr;
        ardom.value = this._ar;
        menor.style.display = "block";
    }
}
var Persona = new fichaPersonaMenor("Britney", "Spears", "Juan", "Smith");
Persona.completaFicha();
