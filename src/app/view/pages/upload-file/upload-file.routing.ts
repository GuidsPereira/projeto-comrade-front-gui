import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpLoadFileComponent } from './upload-file.component';

const routes: Routes = [
  {
    path: '',
    component: UpLoadFileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadFileRoutingModule {}
