import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title:string = 'TRANG ĐĂNG NHẬP';
  say(){
    alert('Đăng nhập thành công');
  }
}
