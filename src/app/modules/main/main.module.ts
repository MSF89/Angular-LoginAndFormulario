import { ValidatorsComponent } from './../../components/validators/main-validators/validators.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { UsersComponent } from './pages/users/users.component';
import { UserService } from './services/user.service';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';




@NgModule({
  declarations: [
    UsersComponent,
    ValidatorsComponent,
    

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    UserService,
  ]
})
export class MainModule { }
