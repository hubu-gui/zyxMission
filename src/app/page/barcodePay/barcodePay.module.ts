import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BarcodePayComponent } from "./barcodePay.component";

@NgModule({
    declarations: [BarcodePayComponent],
    imports : [CommonModule,RouterModule]
})

export class BarcodePayModule {}