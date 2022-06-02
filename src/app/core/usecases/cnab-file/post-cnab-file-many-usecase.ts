import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { CnabFileModel } from '../../models/cnab-file.model';
import { CnabFileRepository } from '../../repositories/cnab-file.repository';
import { CnabFileManyModel } from '../../models/cnab-file-many.model';

@Injectable({
  providedIn: 'root',
})
export class PostCnabFileManyUsecase implements UseCase<CnabFileManyModel, CnabFileManyModel> {
  constructor(private cnabFileRepository: CnabFileRepository) {}

  execute(params: CnabFileManyModel): Observable<CnabFileManyModel> {
    return this.cnabFileRepository.postCnabFileMany(params);
  }
}
