import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BarcodePayComponent } from '../barcodePay/barcodePay.component';
import { PrePayComponent } from '../prePay/prePay.component';
import { BinComponent } from '../bin/bin.component'
// antd
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


@NgModule({
  declarations: [HomeComponent,BarcodePayComponent,PrePayComponent,BinComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCheckboxModule,
    NzMenuModule,
    NzRadioModule,
    NzDropDownModule,
    NzTransferModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    NzMessageModule,
    NzModalModule,
    NgxQRCodeModule
  ],
  exports: [HomeComponent,BinComponent],
})
export class HomeModule {}
