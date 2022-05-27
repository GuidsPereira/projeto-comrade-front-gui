import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnabFileComponent } from './cnab-file.component';

const routes: Routes = [
  {
    path: '',
    component: CnabFileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CnabFileRoutingModule {}
