import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Ingreso'},
  { path: 'register', component: RegisterComponent, title: 'Registro'},
  { path: 'recover-password', component: RecoverPasswordComponent, title: 'Recuperar Contraseña'},
  { path: 'verify-email', component: VerifyEmailComponent, title: 'Verificar Email'},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
