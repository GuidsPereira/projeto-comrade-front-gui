import { Observable } from 'rxjs';
import { CnabFileManyModel } from '../models/cnab-file-many.model';
import { CnabFileModel } from '../models/cnab-file.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class CnabFileRepository {
  abstract getCnabFileById(id: string): Observable<SingleResultModel<CnabFileModel>>;
  abstract getAllCnabFile(filter: PageFilterModel): Observable<PageResultModel<CnabFileModel>>;
  abstract postCnabFile(param: CnabFileModel): Observable<CnabFileModel>;
  abstract postCnabFileMany(param: CnabFileManyModel): Observable<CnabFileManyModel>;
  abstract putCnabFile(param: CnabFileModel): Observable<void>;
  abstract deleteCnabFile(id: string): Observable<void>;
}
