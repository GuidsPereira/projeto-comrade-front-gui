import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PageFilterModel } from '../../utils/filters/page-filter.model';
import { PageResultModel } from '../../utils/responses/page-result.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { UploadFileModel } from '../../models/upload-file.model';
import { UploadFileRepository } from '../../repositories/upload-file.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllUploadFileUsecase
  implements UseCase<PageFilterModel, PageResultModel<UploadFileModel>>
{
  constructor(private uploadFileRepository: UploadFileRepository) {}

  execute(filter: PageFilterModel): Observable<PageResultModel<UploadFileModel>> {
    return this.uploadFileRepository.getAllUploadFile(filter);
  }
}
