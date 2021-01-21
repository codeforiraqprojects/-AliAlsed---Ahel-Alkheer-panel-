import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList  } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Component({
  selector: 'app-humancase',
  templateUrl: './humancase.component.html',
  styleUrls: ['./humancase.component.scss']
})
export class HumancaseComponent implements AfterViewInit {
  firecase = firebase.database().ref('/waitingcase');
  firedaddcase = firebase.database().ref('/case');
  Data: any;
  newsList: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor( public af: AngularFireDatabase, public router: Router, private fire: AngularFireAuth) {
    this.itemsRef = af.list('/waitingcase');
    this.newsList = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        firstname: c.payload.val().firstname,
        address: c.payload.val().address,
        details: c.payload.val().details,
        phone: c.payload.val().phone,
         })
      );
    });
    console.log(this.newsList);
}
  ngAfterViewInit(): void {
    this.newsList.subscribe( data => {
      console.log(data);
      this.Data = data;
    });
  }
  del(item) {
    this.firecase.child(item).remove();
  }
  up(item) {
    console.log(item);
      this.firedaddcase.child(item.key).set({
      firstname: item.firstname,
      address: item.address,
      details: item.details,
      phone: item.phone,
    } ).then( () => {
      this.firecase.child(item.key).remove();
    });
  }
  edit(item) {
    this.router.navigate(['edithumancase', item]);
  }
}
