import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})
export class WelcomeMessageComponent implements OnInit{

  dataUser: any;

  constructor(private afAuth: AngularFireAuth){}

  ngOnInit(): void {

    this.afAuth.currentUser
      .then(user=> {
        if(user && user.emailVerified){
          this.dataUser = user;
        }
      })
  }

}
