import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { CnabFileComponent } from './cnab-file.component';
import { CnabFileRoutingModule } from './cnab-file.routing';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

@NgModule({
  imports: [DxDataGridModule, DxFormModule, CnabFileRoutingModule],
  exports: [],
  declarations: [CnabFileComponent],
  providers: [],
})
export class CnabFileModule {
  constructor(@Optional() @SkipSelf() parentModule: CnabFileComponent) {
    throwIfAlreadyLoaded(parentModule, 'CnabFileModule');
  }
}
