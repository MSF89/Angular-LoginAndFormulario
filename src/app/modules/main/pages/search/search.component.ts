import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { UserService } from '../../services/user.service';
import { UserResponse } from '../../models/response/user.response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ UserService]
})
export class SearchComponent implements OnInit{

  query: string;
  users: Array<UserResponse>

  constructor(
    private searchService: SearchService,
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.searchService.search.subscribe((data)=>{
      this.query = data;
      this.userService.searchUser(data).subscribe({
        next: (data: UserResponse[]) => {
          console.log(data);
          this.users = data;
        },
        error: (err) =>{
          console.log(err);
        },
        complete: () => {
          console.log('completado');

        }
      })
    })
  }
}
