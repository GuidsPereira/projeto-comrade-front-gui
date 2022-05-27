import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserModel } from '../../models/system-user.model';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { UploadFileModel } from '../../models/upload-file.model';
import { UploadFileRepository } from '../../repositories/upload-file.repository';

@Injectable({
  providedIn: 'root',
})
export class PostUploadFileUsecase implements UseCase<UploadFileModel, UploadFileModel> {
  constructor(private uploadFileRepository: UploadFileRepository) {}

  execute(params: UploadFileModel): Observable<UploadFileModel> {
    return this.uploadFileRepository.postUploadFile(params);
  }
}
