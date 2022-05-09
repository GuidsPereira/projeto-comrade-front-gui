import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { UpLoadFileComponent } from './upload-file.component';
import { UploadFileRoutingModule } from './upload-file.routing';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, UploadFileRoutingModule],
  exports: [],
  declarations: [UpLoadFileComponent],
  providers: [],
})
export class UploadFileModule {
  constructor(@Optional() @SkipSelf() parentModule: UpLoadFileComponent) {
    throwIfAlreadyLoaded(parentModule, 'UploadFileModule');
  }
}
