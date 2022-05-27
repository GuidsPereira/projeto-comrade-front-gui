import { Mapper } from '../../../core/utils/bases/mapper';
import { CnabFileWebEntity } from './cnab-file-web-entity';
import { CnabFileModel } from 'src/app/core/models/cnab-file.model';

export class CnabFileWebRepositoryMapper extends Mapper<CnabFileWebEntity, CnabFileModel> {
  mapFrom(param: CnabFileWebEntity): CnabFileModel {
    return {
      info: param.info,
    };
  }

  mapTo(param: CnabFileModel): CnabFileWebEntity {
    return {
      info: param.info,
    };
  }
}
