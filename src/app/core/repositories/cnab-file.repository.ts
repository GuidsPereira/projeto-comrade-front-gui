import { Observable } from 'rxjs';
import { CnabFileModel } from '../models/cnab-file.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class CnabFileRepository {
  abstract getCnabFileById(id: number): Observable<SingleResultModel<CnabFileModel>>;
  abstract getAllCnabFile(filter: PageFilterModel): Observable<PageResultModel<CnabFileModel>>;
  abstract postCnabFile(param: CnabFileModel): Observable<CnabFileModel>;
}
