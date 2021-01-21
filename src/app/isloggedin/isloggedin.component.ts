import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-isloggedin',
  templateUrl: './isloggedin.component.html',
  styleUrls: ['./isloggedin.component.scss']
})
export class IsloggedinComponent implements OnInit {

  constructor(private aAuth: AngularFireAuth) {
    console.log('islogged' + aAuth.auth.currentUser.uid);
   }

  ngOnInit() {
  }

}
