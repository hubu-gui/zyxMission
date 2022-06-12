import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BinComponent } from './page/bin/bin.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'bin', component:BinComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
