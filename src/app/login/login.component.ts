import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, public router: Router) { }

  ngOnInit() {
  }
  signIn(f) {
    this.Auth.register(f.value.email, f.value.password ).then(() => {
      alert('register successfully');
    });

  }
  login(f) {
    this.Auth.login(f.value.email, f.value.password).then(() => {
      this.router.navigate(['needing']);
    });
  }



}
/*

  signIn(f ) {
    console.log('' + f.value.email);
    this._NewsService.login(f.value.email, f.value.password).then( () => {
      this.router.navigate(['add-news']);
    }, (err) => {
      alert( err );
    });
  }




*/
