import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnabFileViewComponent } from './cnab-file-view.component';

const routes: Routes = [
  {
    path: '',
    component: CnabFileViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CnabFileViewRoutingModule {}
