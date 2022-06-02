import { Mapper } from '../../../core/utils/bases/mapper';
import { CnabFileWebEntity } from './cnab-file-web-entity';
import { CnabFileModel } from 'src/app/core/models/cnab-file.model';
import { CnabFileManyWebEntity } from './cnab-file-many-web-entity';
import { CnabFileManyModel } from 'src/app/core/models/cnab-file-many.model';

export class CnabFileManyWebRepositoryMapper extends Mapper<
  CnabFileManyWebEntity,
  CnabFileManyModel
> {
  mapFrom(param: CnabFileManyWebEntity): CnabFileManyModel {
    return {
      infoMany: param.infoMany,
    };
  }

  mapTo(param: CnabFileManyModel): CnabFileManyWebEntity {
    return {
      infoMany: param.infoMany,
    };
  }
}
