/*
 * @Author: zyx zyx
 * @Date: 2022-06-04 09:37:49
 * @LastEditors: zyx zyx
 * @LastEditTime: 2022-06-10 14:22:16
 * @FilePath: /zyxMission-feature-zyx-xinshourenwu/src/app/page/bin/bin.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import axios from 'axios';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.css'],
})
export class BinComponent implements OnInit {
  // 定义类型 URL、Canvas、Image
  value = '';

  isVisible = false;

  validateForm!: FormGroup;
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder, private message: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      pay_ver: ['100', [Validators.required]],
      pay_type: ['020', [Validators.required]],
      service_id: ['011', [Validators.required]],
      merchant_no: ['839305812000286', [Validators.required]],
      terminal_id: ['18265340', [Validators.required]],
      terminal_trace: ['202206100055070000', [Validators.required]],
      terminal_time: ['20220610005507', [Validators.required]],
      total_fee: ['1', [Validators.required]],
      order_body: ['', [Validators.required]],
      notify_url: [
        'http://test2.lcsw.cn:8117/demo/test/100/notify',
        [Validators.required],
      ],
      attach: ['', [Validators.required]],
      goods_detail: ['', [Validators.required]],
      key_sign: ['', [Validators.required]],
    });
  }

  getAxiosData() {
    var api = 'http://pay.lcsw.cn/lcsw/pay/100/prepay';
    this.validateForm.value.key_sign = Md5.hashStr(
      'pay_ver=' +
        this.validateForm.value.pay_ver +
        '&' +
        'pay_type=' +
        this.validateForm.value.pay_type +
        '&' +
        'service_id=' +
        this.validateForm.value.service_id +
        '&' +
        'merchant_no=' +
        this.validateForm.value.merchant_no +
        '&' +
        'terminal_id=' +
        this.validateForm.value.terminal_id +
        '&' +
        'terminal_trace=' +
        this.validateForm.value.terminal_trace +
        '&' +
        'terminal_time=' +
        this.validateForm.value.terminal_time +
        '&' +
        'total_fee=' +
        this.validateForm.value.total_fee +
        '&' +
        'access_token=0b8f95dfb3184029a30f61b05626dba5'
    );

    axios.post(api, this.validateForm.value).then((response: any) => {
      this.value = response.data.qr_code;
      this.message.info(response.data.return_msg);
    });
    this.isVisible = true;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
