import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityTableComponent } from './city-table/city-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CopyrightsComponent } from './copyrights/copyrights.component';

import { MatCardModule } from '@angular/material/card';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { InputMunicipalityComponent } from './input-municipality/input-municipality.component';

import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    CityTableComponent,
    MenuComponent,
    CopyrightsComponent,
    ImgSliderComponent,
    InputMunicipalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // table, paginator, sort
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    // filter
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,

    // button
    MatButtonModule,

    // menu
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,

    // panel
    MatCardModule,

    // img slider
    NgImageSliderModule,

    // stepper
    MatStepperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
