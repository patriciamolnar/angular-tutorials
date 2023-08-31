import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _http: HttpClient,
    private _recaptchaV3Srv: ReCaptchaV3Service
  ) {}

  send(form: NgForm) {
    if(form.invalid) return; 
    this._recaptchaV3Srv.execute('register_interest_form_submit').subscribe((token: string) => {
      const body = JSON.stringify({
        token: token, 
        action: 'register_interest_form_submit'
      });

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

      // Send token to backend
      this._http.post('http://localhost:3000/verify', body, httpOptions).subscribe((res: any) => {
        console.log(res);
      });
    });
  }
}
