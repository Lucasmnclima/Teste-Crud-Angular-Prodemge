import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { SecundarioComponent } from './secundario/secundario.component';
import { TerceiroComponent } from './terceiro/terceiro.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'inicial', pathMatch: 'full'
  },
  {
    path: 'inicial', component: InicialComponent
  },
  {
    path: 'terceiro', component: TerceiroComponent
  },
  {
    path: 'secundario', component: SecundarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
