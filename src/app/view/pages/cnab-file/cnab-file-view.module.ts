import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { CnabFileComponent } from './cnab-file.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { CnabFileViewComponent } from './cnab-file-view.component';
import { CnabFileViewRoutingModule } from './cnab-file-view.routing';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, CnabFileViewRoutingModule],
  exports: [],
  declarations: [CnabFileViewComponent],
  providers: [],
})
export class CnabFileViewModule {
  constructor(@Optional() @SkipSelf() parentModule: CnabFileComponent) {
    throwIfAlreadyLoaded(parentModule, 'CnabFileModule');
  }
}
