import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-edithumancase',
  templateUrl: './edithumancase.component.html',
  styleUrls: ['./edithumancase.component.scss']
})
export class EdithumancaseComponent implements OnInit {
  firedata = firebase.database().ref('/waitingcase');
  case = {
  id: '',
  firstname: '',
  address: '',
  details: '',
  phone: '',
  };
  constructor(private route: Router , public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(item => {
      // tslint:disable-next-line:no-unused-expression
      console.log('item :' + item);
      this.case.id = item.key;
      this.case.firstname = item.firstname;
      this.case.address = item.address;
      this.case.details = item.details;
      this.case.phone = item.phone;
      console.log(this.case);
    });

  }
  save() {
    this.firedata.child(this.case.id).set({
      firstname: this.case.firstname,
      address: this.case.address,
      details: this.case.details,
      phone: this.case.phone
    } ).then( () => {
      this.route.navigate(['humancase']);
    });
  }


}
