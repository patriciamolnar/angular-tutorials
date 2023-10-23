import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result: any; 
  
  constructor(
    private _http: HttpClient,
    private _recaptchaV3Srv: ReCaptchaV3Service
  ) {}

  send() {
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
        this.result = res;
        console.log(res);
      });
    });
  }
}
