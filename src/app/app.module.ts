import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from './environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { HeaderComponent } from './modules/main/components/header/header.component';
import { SearchComponent } from './modules/main/pages/search/search.component';
import { AuthComponent } from './modules/auth/auth.component';
import { AuthValidatorsComponent } from './components/validators/auth-validators/auth-validators.component';
import { WelcomeMessageComponent } from './modules/main/components/welcome-message/welcome-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    HeaderComponent,
    SearchComponent,
    WelcomeMessageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
