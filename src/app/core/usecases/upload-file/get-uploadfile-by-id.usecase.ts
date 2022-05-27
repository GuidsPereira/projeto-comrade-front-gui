import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';
import { UploadFileModel } from '../../models/upload-file.model';
import { UploadFileRepository } from '../../repositories/upload-file.repository';

@Injectable({
  providedIn: 'root',
})
export class GetUploadFileByIdUsecase
  implements UseCase<number, SingleResultModel<UploadFileModel>>
{
  constructor(private uploadFileRepository: UploadFileRepository) {}

  execute(id: number): Observable<SingleResultModel<UploadFileModel>> {
    return this.uploadFileRepository.getUploadFileById(id);
  }
}
