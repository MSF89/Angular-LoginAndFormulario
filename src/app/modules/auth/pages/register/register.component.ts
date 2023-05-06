import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthFirebaseCodeErrorService } from '../../services/auth-firebase-code-error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../auth.component.scss']
})
export class RegisterComponent implements OnInit{
  registerUsuario: FormGroup;
  loading: boolean = false;

  constructor(private firebaseErrorService: AuthFirebaseCodeErrorService ,private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router){ }

  ngOnInit(): void {
    this.formRegister();
  }

  formRegister(){
    this.registerUsuario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)]),
      repeatpassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)]),
    })
  }

  registrar(){
    const email = this.registerUsuario.value.email;
    const password = this.registerUsuario.value.password;
    const repeatpassword = this.registerUsuario.value.repeatpassword;

    if(password !==repeatpassword){
      this.toastr.error('Las Contraseñas Deben Ser Iguales', 'Error');
      return
    }

    this.loading = true

    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(()=>{
        /* */
        this.verificarCorreo()
      }).catch((error)=>{
        this.loading = false
        console.log(error);
        this.toastr.error(this.firebaseErrorService.firebaseError(error.code), 'Error')
      })

  }

  verificarCorreo(){
    this.afAuth.currentUser
      .then((user)=> user.sendEmailVerification())
      .then(()=>{
        this.loading = false
        this.toastr.info('Se ha enviado un email para verificar su cuenta', 'Revisar Email')
        this.router.navigate(['/auth/login'])
      })
  }


}
