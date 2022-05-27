import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { CnabFileModel } from '../../models/cnab-file.model';
import { CnabFileRepository } from '../../repositories/cnab-file.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllCnabFileUsecase
  implements UseCase<PageFilterModel, PageResultModel<CnabFileModel>>
{
  constructor(private cnabFileRepository: CnabFileRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<CnabFileModel>> {
    return this.cnabFileRepository.getAllCnabFile(filter);
  }
}
