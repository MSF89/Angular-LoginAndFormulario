import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  query: string;
  constructor(private searchService: SearchService, private afAuth: AngularFireAuth, private router: Router ){}

  search(){
    if(this.query.length >= 3){
      this.searchService.search.emit(this.query)
      this.searchService.showSearch.emit(true)
    } else{
      this.searchService.showSearch.emit(false)
    }
  }

  logOut(){
    this.afAuth.signOut()
      .then(()=> this.router.navigate(['/auth/login']))
  }
}
