import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { CnabFileModel } from '../../models/cnab-file.model';
import { CnabFileRepository } from '../../repositories/cnab-file.repository';

@Injectable({
  providedIn: 'root',
})
export class PutCnabFileUsecase implements UseCase<CnabFileModel, void> {
  constructor(private cnabFileRepository: CnabFileRepository) {}

  execute(params: CnabFileModel): Observable<void> {
    return this.cnabFileRepository.putCnabFile(params);
  }
}
