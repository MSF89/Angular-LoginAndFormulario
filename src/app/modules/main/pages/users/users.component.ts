import { UserResponse } from './../../models/response/user.response';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserRequest } from '../../models/request/user.request';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  showCreate: boolean = false;
  addForm: FormGroup;
  users1: UserResponse[] = [];
  user: UserResponse;
  loading: boolean = false;
  isEdit: boolean = false;

  hobbies: string[] = ['Cine', 'Games', 'Reposteria', 'Jardineria', 'Danza', 'Deportes', 'Musica']

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.createForm();
    this.getUsers();
  }

  save(){
    let user: UserRequest = {
      nombre: this.addForm.value.name,
      apellido: this.addForm.value.lastName,
      email: this.addForm.value.email,
      edad: this.addForm.value.yearsOld,
      profesion: this.addForm.value.job,
      hobbies: this.addForm.value.hobbies
    }

    if (this.isEdit) {
      this.userService.updateUser(user, this.user.id).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completado');
          this.hide();
          this.getUsers();

        }
      })
    } else {
      this.userService.createUser(user).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completado');
          this.hide();
          this.getUsers();

        }
      })
    }
  }


  getUsers(){
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (users: any) => {
        this.users1 = users;


        let numeros = of(1, 2, 3, 4, 5);
        console.log('Todos los numeros: ', numeros);


        const userPipe = pipe(
          filter((data: number) => data % 2 === 0),
          map(data => Math.pow(data,2)),
          filter(data => data == 16),
          map(data => Math.pow(data,2)),
        )
        const user = userPipe(numeros);
        user.subscribe({
          next: (data) => {
            console.log('Los numeros pares son: ', data);

          }
        })
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        this.user = null;
        this.isEdit = false;
        this.addForm.reset();
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      }
    })
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completado');
        this.getUsers();

      }
    })
  }

  getUser(id: string){
    this.userService.getUser(id).subscribe({
      next: (user:any)=> {
        this.user = user;
        ;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        this.isEdit = true;
        this.addForm.patchValue({
          name: this.user.nombre,
          lastName: this.user.apellido,
          yearsOld: this.user.edad,
          email: this.user.email,
          job: this.user.profesion
        })
        this.showCreate = true;
      }
    })
  }

  createForm() {
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      yearsOld: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(150)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.email]),
      job: new FormControl('', [Validators.required, Validators.minLength(3)]),
      hobbies: new FormControl(null),

    })
  }



  show(){
    this.showCreate = true;
  }

  hide(){
    this.showCreate = false;
  }
}




