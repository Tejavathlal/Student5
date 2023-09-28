import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';

import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { CreatestudentComponent } from './Component/createstudent/createstudent.component';
import { MenubarcomponentComponent } from './Menubar/menubarcomponent/menubarcomponent.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { StudentformComponent } from './Component/studentform/studentform.component';
import { StudentdetailsComponent } from './Component/studentdetails/studentdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreatestudentComponent,
    MenubarcomponentComponent,
    StudentformComponent,
    StudentdetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

   MatFormFieldModule,
   MatNativeDateModule,
   MatIconModule,
   MatInputModule,
   MatToolbarModule,
   MatDialogModule,
   MatCardModule,
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
   MatMenuModule,
   MatSelectModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatRadioModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
