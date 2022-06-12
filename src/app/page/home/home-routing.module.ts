/*
 * @Author: zyx zyx
 * @Date: 2022-06-01 07:26:24
 * @LastEditors: zyx zyx
 * @LastEditTime: 2022-06-01 23:05:59
 * @FilePath: /zyxMission-feature-zyx-xinshourenwu/src/app/page/home/home-routing.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinComponent } from '../bin/bin.component';

const routes: Routes = [
  {
    path: 'bin',
    component: BinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
