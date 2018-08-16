import { Component, OnInit } from "@angular/core";

@Component({
    selector: "BITPLEI",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {
    enviado = false;
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.

    }

    public onBEnviar(args) {
        console.log('Q Xopaaaaaaaaa onBEnviar', args);
        if(args=="bueno"){
            console.log("Es bueno :: ",args);
            this.enviado = !this.enviado;
        }else{
            console.log("Es cualquier otra cosa: ",args);
        }
    }

    public onBCheck(args){
        console.log("Q Xopaaaaaaaaa onBCheck :",args);
        if(args=="2828"){
            console.log("Es bueno :: ",args);
            this.enviado = !this.enviado;
        }else{
            console.log("Es cualquier otra cosa: ",args);
        }
    }
}

