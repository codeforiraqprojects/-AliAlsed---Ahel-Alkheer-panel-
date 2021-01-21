import { environment } from './../environments/environment';
import { FeedbackComponent } from './feedback/feedback.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:import-spacing
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './app.firebase';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NeedingComponent } from './needing/needing.component';
import { HumancaseComponent } from './humancase/humancase.component';
import { EdithumancaseComponent } from './edithumancase/edithumancase.component';
import { EditneedingComponent } from './editneeding/editneeding.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { IsloggedinComponent } from './isloggedin/isloggedin.component';
import { AuthGuard } from './auth.guard';
import * as firebase from 'firebase';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'needing',
    component: NeedingComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'humancase',
    component: HumancaseComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'edithumancase',
    component: EdithumancaseComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'editneeding',
    component: EditneedingComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent,
    NeedingComponent,
    FeedbackComponent,
    HumancaseComponent,
    EdithumancaseComponent,
    EditneedingComponent,
    LoginComponent,
    IsloggedinComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  providers: [ AuthService , AuthGuard],
  // tslint:disable-next-line:no-trailing-whitespace
  bootstrap: [AppComponent]

})
export class AppModule { }
