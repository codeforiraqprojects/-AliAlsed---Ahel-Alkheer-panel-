import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  firefeed = firebase.database().ref('/feedback');
  feedbackList: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  constructor( public af: AngularFireDatabase) {
    this.itemsRef = af.list('/feedback');
    this.feedbackList = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        firstname: c.payload.val().firstname,
        detail: c.payload.val().details,
         })) ;
        });
  }

  ngOnInit() {
  }
  del(key) {
    console.log(key);
      this.firefeed.child(key).remove();
  }

}
