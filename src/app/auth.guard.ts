import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAdmin = false;
  constructor(private router: Router) {}
  fireadmin = firebase.database().ref('/admin');
  canActivate(): boolean {
    this.fireadmin.child(firebase.auth().currentUser.uid).once('value', (snap) => {
      if (snap.val().isadmin === 1) {
        this.isAdmin = true;
      } else {
        this.router.navigate(['login']);
        this.isAdmin = false;
      }
    });
    return this.isAdmin;
  }
}

/*
    this.fireadmin.child(firebase.auth().currentUser.uid).once('value', (snap) => {
      console.log(snap.val().isadmin);
      if (snap.val().isadmin === 1) {
        console.log(true);
      } else {
        console.log(false);
      }
    });
isloggedin = false;
  constructor(
    public afAuth: AngularFireAuth,
    public userService: AuthService,
    private router: Router
  ) {}
  canActivate(): boolean {
    const authObserver = this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.router.navigate(['login']);
        this.isloggedin = false;
        authObserver.unsubscribe();
      } else {
        this.isloggedin = true;
        authObserver.unsubscribe();
      }
    });
    return this.isloggedin;
}
*/
