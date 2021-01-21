import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   fireadmin = firebase.database().ref('/admin');
  constructor( public afauth: AngularFireDatabase) { }

  register(email, Password) {
    return firebase.auth().createUserWithEmailAndPassword(email, Password ).then(() => {
      this.fireadmin.child(firebase.auth().currentUser.uid).set({
        'isadmin': 1
      });
    });
  }
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  getAdmin() {
    return this.afauth.list(`/admin/${firebase.auth().currentUser.uid}`);
  }
}
