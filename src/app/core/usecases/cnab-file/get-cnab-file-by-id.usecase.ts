import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';
import { CnabFileModel } from '../../models/cnab-file.model';
import { CnabFileRepository } from '../../repositories/cnab-file.repository';

@Injectable({
  providedIn: 'root',
})
export class GetCnabFileByIdUsecase implements UseCase<number, SingleResultModel<CnabFileModel>> {
  constructor(private cnabFileRepository: CnabFileRepository) {}

  execute(id: number): Observable<SingleResultModel<CnabFileModel>> {
    return this.cnabFileRepository.getCnabFileById(id);
  }
}
