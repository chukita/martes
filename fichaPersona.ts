/*var n:string = "Juan";
var a:string = "Lopez";

var ndom:any = document.getElementById("fname");
var adom:any = document.getElementById("lname");

ndom.value = n;
adom.value = a;*/

export class fichaPersona{

    //propiedades
    protected _n:string;
    protected _a:string;

    //contructor
    constructor(n:string,a:string){
        this._a = a;
        this._n = n;
    }

    //getters y setters

    public get n():string{
        return this._n;
    }

    public get a():string{
        return this._a;
    }

    public set n(n:string){
        this._n = n;
    }

    public set a(a:string){
        this._a = a;
    }


    //metodos

    completaFicha():void{
        var ndom:any = document.getElementById("fname");
        var adom:any = document.getElementById("lname");

        ndom.value = this._n;
        adom.value = this._a;
    }

}

