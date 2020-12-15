import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatBadgeModule } from '@angular/material/badge';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { EmployeeListDashComponent } from './Component/employee-list-dash/employee-list-dash.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeListDashComponent

  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    ImageCropperModule,
    MatBadgeModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }