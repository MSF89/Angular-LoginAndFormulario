import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { trigger,transition, style, animate } from '@angular/animations'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':leave',
          [
            style({ transform: 'translate3d(0,0,0)'}),
            animate('0.3s ease-out', style({transform: 'translate3d(0, -100%, 0'}))
          ]
        ),
        transition(
          ':enter',
          [
            style({ transform: 'translate3d(0,-100%,0)'}),
            animate('0.3s ease-in', style({transform: 'translate3d(0, 0, 0'}))
          ]
        )
      ]
    )
  ]
})
export class MainComponent implements OnInit {
 showSearch: boolean = false;
 dataUser: any;

 constructor(private searchService: SearchService, private afAuth: AngularFireAuth, private router: Router){}

 ngOnInit(): void {

  this.afAuth.currentUser
    .then(user=> {
      if(user && user.emailVerified){
        this.dataUser = user;
      }else{
        this.router.navigate(['/auth/login'])
      }
    })

  this.searchService.showSearch.subscribe((data)=>{
    this.showSearch = data;
  })


 }
}
