/*
 * @Author: zyx zyx
 * @Date: 2022-06-01 23:02:28
 * @LastEditors: zyx zyx
 * @LastEditTime: 2022-06-01 23:13:30
 * @FilePath: /zyxMission-feature-zyx-xinshourenwu/src/app/page/barcodePay/barcodePay.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, OnInit } from '@angular/core';
import { TransferItem } from  'ng-zorro-antd/transfer'

@Component({
  selector: 'app-barcodePay',
  templateUrl: './barcodePay.component.html',
  styleUrls: [],
})
export class BarcodePayComponent implements OnInit {
  list: TransferItem[] = [];
  disabled = false;
  constructor() {}
  
  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
        this.list.push({
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          direction: Math.random() * 2 > 1 ? 'right' : undefined
        });
      }
  }
  
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   filterOption(inputValue: string, item: any): boolean {
    return item.description.indexOf(inputValue) > -1;
  }

  search(ret: {}): void {
    console.log('nzSearchChange', ret);
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }


}