import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFirebaseCodeErrorService } from '../../services/auth-firebase-code-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../auth.component.scss']
})
export class LoginComponent implements OnInit{

  loginUsuario: FormGroup
  loading: boolean = false

  constructor(private firebaseErrorService: AuthFirebaseCodeErrorService ,private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router){ }

  ngOnInit(): void {
    this.formLogin();
  }

  login(){
    const email = this.loginUsuario.value.email
    const password = this.loginUsuario.value.password
    this.loading = true;

    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user)=>{
        console.log(user);
        if(user.user?.emailVerified){
          this.router.navigate(['main'])
        } else {
          this.router.navigate(['/auth/verify-email'])
        }
      }).catch((error)=>{
        this.loading = false;
        this.toastr.error(this.firebaseErrorService.firebaseError(error.code), 'Error')

      })

  }

  formLogin(){
    this.loginUsuario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)]),
    })
  }
}
