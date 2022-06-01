import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '../../../services/guards/module-import.guard';
import { CnabFileComponent } from './cnab-file.component';
import { CnabFileRoutingModule } from './cnab-file.routing';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [DxDataGridModule, DxFormModule, CnabFileRoutingModule, ReactiveFormsModule],
  exports: [],
  declarations: [CnabFileComponent],
  providers: [],
})
export class CnabFileModule {
  constructor(@Optional() @SkipSelf() parentModule: CnabFileComponent) {
    throwIfAlreadyLoaded(parentModule, 'CnabFileModule');
  }
}
