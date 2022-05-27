import { Mapper } from '../../../core/utils/bases/mapper';
import { UploaFileWebEntity } from './upload-file-web-entity';
import { UploadFileModel } from 'src/app/core/models/upload-file.model';

export class UploadFileWebRepositoryMapper extends Mapper<UploaFileWebEntity, UploadFileModel> {
  mapFrom(param: UploaFileWebEntity): UploadFileModel {
    return {
      info: param.info,
    };
  }

  mapTo(param: UploadFileModel): UploaFileWebEntity {
    return {
      info: param.info,
    };
  }
}
