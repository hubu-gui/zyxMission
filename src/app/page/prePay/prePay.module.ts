import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PrePayComponent } from "./prePay.component";

@NgModule({
    declarations: [PrePayComponent],
    imports : [CommonModule,RouterModule]
})

export class PrePayModule {}