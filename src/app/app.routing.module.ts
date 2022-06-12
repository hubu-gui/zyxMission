import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule,Routes } from "@angular/router";
import { BinComponent } from "./page/bin/bin.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'bin', component: BinComponent},
]

@NgModule({
    declarations:[],
    imports: [RouterModule,forRoot(routes),CommonModule],
})
export class AppRoutingModule {}

function forRoot(routes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error("Function not implemented.");
}
