import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityTableComponent } from './city-table/city-table.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { InputMunicipalityComponent } from './input-municipality/input-municipality.component';

const routes: Routes = [
  { path: '', component: CityTableComponent },
  { path: 'copyrights', component: CopyrightsComponent },
  { path: 'input', component: InputMunicipalityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
