/*
 * @Author: zyx zyx
 * @Date: 2022-06-01 07:26:24
 * @LastEditors: zyx zyx
 * @LastEditTime: 2022-06-10 14:20:05
 * @FilePath: /zyxMission-feature-zyx-xinshourenwu/src/app/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './page/home/home.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpserviceService } from './services/httpservice.service';


registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },HttpserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
