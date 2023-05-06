import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { SpinnerComponent } from '../auth/pages/spinner/spinner.component';
import { AuthFirebaseCodeErrorService } from './services/auth-firebase-code-error.service';
import { AuthValidatorsComponent } from 'src/app/components/validators/auth-validators/auth-validators.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    VerifyEmailComponent,
    SpinnerComponent,
    AuthValidatorsComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthFirebaseCodeErrorService]
})
export class AuthModule { }
