import { Mapper } from '../../../core/utils/bases/mapper';
import { CnabFileWebEntity } from './cnab-file-web-entity';
import { CnabFileModel } from 'src/app/core/models/cnab-file.model';

export class CnabFileWebRepositoryMapper extends Mapper<CnabFileWebEntity, CnabFileModel> {
  mapFrom(param: CnabFileWebEntity): CnabFileModel {
    return {
      id: param.id,
      tipo: param.tipo,
      data: param.data,
      valor: param.valor,
      cpf: param.cpf,
      cartao: param.cartao,
      hora: param.hora,
      donoLoja: param.donoLoja,
      nomeLoja: param.nomeLoja,
    };
  }

  mapTo(param: CnabFileModel): CnabFileWebEntity {
    return {
      id: param.id,
      tipo: param.tipo,
      data: param.data,
      valor: param.valor,
      cpf: param.cpf,
      cartao: param.cartao,
      hora: param.hora,
      donoLoja: param.donoLoja,
      nomeLoja: param.nomeLoja,
    };
  }
}
