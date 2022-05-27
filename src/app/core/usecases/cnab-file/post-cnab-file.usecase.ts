import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { CnabFileModel } from '../../models/cnab-file.model';
import { CnabFileRepository } from '../../repositories/cnab-file.repository';

@Injectable({
  providedIn: 'root',
})
export class PostCnabFileUsecase implements UseCase<CnabFileModel, CnabFileModel> {
  constructor(private cnabFileRepository: CnabFileRepository) {}

  execute(params: CnabFileModel): Observable<CnabFileModel> {
    return this.cnabFileRepository.postCnabFile(params);
  }
}
