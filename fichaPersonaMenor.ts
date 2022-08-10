import { fichaPersona } from "./fichaPersona.js";

export class fichaPersonaMenor extends fichaPersona {

        private _nr:string;
        private _ar:string;

        constructor(n:string,a:string,nr:string,ar:string){
            super(n,a);
            this._ar = ar;
            this._nr = nr;

            
        }

        completaFicha(): void {
            var ndom:any = document.getElementById("fname");
            var adom:any = document.getElementById("lname");
            var nrdom:any = document.getElementById("fnamer");
            var ardom:any = document.getElementById("lnamer");
            var menor:any = document.getElementById("menor");

            ndom.value = this._n;
            adom.value = this._a;
            nrdom.value = this._nr;
            ardom.value = this._ar;

            menor.style.display = "block";


        }

}

var Persona = new fichaPersonaMenor("Britney","Spears","Juan","Smith");
Persona.completaFicha();