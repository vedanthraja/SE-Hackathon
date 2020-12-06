import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule , MatCheckboxModule , MatDatepickerModule , MatFormFieldModule ,
  MatInputModule , MatRadioModule , MatSelectModule , MatSliderModule ,
  MatSlideToggleModule , MatToolbarModule , MatListModule , MatGridListModule ,
  MatCardModule , MatIconModule , MatProgressSpinnerModule , MatDialogModule,
    MatDividerModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ProjectsService} from './services/projects.service';


import { RegisterComponent } from './register/register.component';
import { RegisterValidationComponent } from './register-validation/register-validation.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RegisterValidationComponent,
    RegisterComponent

  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule , MatCheckboxModule , MatDatepickerModule , MatFormFieldModule ,
    MatInputModule , MatRadioModule , MatSelectModule , MatSliderModule ,
    MatSlideToggleModule , MatToolbarModule , MatListModule , MatGridListModule ,
    MatCardModule , MatIconModule , MatProgressSpinnerModule , MatDialogModule,
    MatDividerModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [ProjectsService],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
