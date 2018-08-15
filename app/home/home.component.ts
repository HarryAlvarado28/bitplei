import { Component, OnInit } from "@angular/core";
import { TextField } from "ui/text-field";


@Component({
    selector: "BITPLEI",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {
    // Texto se imprime en el label del archivo html.
    public message: string = "Bienvenido!";

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.

    }

    public onButtonTap(args) {
        console.log('Q Xopaaaaaaaaa Button tapped', args);
        alert("valor introducido:: "+args)
    }

}

