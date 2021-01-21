import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-editneeding',
  templateUrl: './editneeding.component.html',
  styleUrls: ['./editneeding.component.scss']
})
export class EditneedingComponent implements OnInit {
  firedata = firebase.database().ref('/waiting');
  needing = {
  id: '',
  firstname: '',
  lastname: '',
  address: '',
  infor: '',
  phone: '',
  hide: '',
  addBy: ''
  };
  constructor(private route: Router , public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(item => {
      // tslint:disable-next-line:no-unused-expression
      console.log('item :' + item);
      this.needing.id = item.key;
      this.needing.firstname = item.firstname;
      this.needing.lastname = item.lastname;
      this.needing.address = item.address;
      this.needing.infor = item.infor;
      this.needing.phone = item.phone;
      this.needing.hide = item.hide;
      this.needing.addBy = item.addBy;
      console.log(this.needing);
    });

  }
  save() {
    this.firedata.child(this.needing.id).set({
      firstname: this.needing.firstname,
      lastname: this.needing.lastname,
      address: this.needing.address,
      infor: this.needing.infor,
      phone: this.needing.phone,
      hide: this.needing.hide,
      addBy: this.needing.addBy,
    } ).then( () => {
      this.route.navigate(['needing']);
    });
  }
}
