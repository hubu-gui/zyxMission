/*
 * @Author: zyx zyx
 * @Date: 2022-06-01 23:04:48
 * @LastEditors: zyx zyx
 * @LastEditTime: 2022-06-01 23:19:39
 * @FilePath: /zyxMission-feature-zyx-xinshourenwu/src/app/page/prePay/prePay.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-prePay',
    templateUrl: './prePay.component.html',
    styleUrls: [],
  })
  export class PrePayComponent implements OnInit {
    constructor() {}
    
    ngOnInit(): void {}

    change(value: boolean): void {
        console.log(value);
      }

      radioValue = 'A';
  }