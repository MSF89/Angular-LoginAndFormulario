import { VerifyEmailComponent } from './../verify-email/verify-email.component';
import { Component, OnInit } from '@angular/core';
import { AuthFirebaseCodeErrorService } from '../../services/auth-firebase-code-error.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss', '../../auth.component.scss']
})
export class RecoverPasswordComponent implements OnInit{

  recoverUsuario: FormGroup;
  loading: boolean = false

  constructor(private firebaseErrorService: AuthFirebaseCodeErrorService ,private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router){ }

  ngOnInit(): void {
    this.formRecover()
  }

  recover(){
    const email = this.recoverUsuario.value.email

    this.loading = true;

    this.afAuth.sendPasswordResetEmail(email)
      .then(()=>{
        this.toastr.info('Verifique Su Correo','Recuperar Password')
        this.router.navigate(['/auth/login'])

      }).catch((error)=>{
        this.loading = false;
        this.toastr.error(this.firebaseErrorService.firebaseError(error.code), 'Error')
      })
  }

  formRecover(){
    this.recoverUsuario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
}
