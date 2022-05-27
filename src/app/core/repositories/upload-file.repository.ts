import { Observable } from 'rxjs';
import { SystemUserModel } from '../models/system-user.model';
import { UploadFileModel } from '../models/upload-file.model';
import { PageFilterModel } from '../utils/filters/page-filter.model';
import { PageResultModel } from '../utils/responses/page-result.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class UploadFileRepository {
  abstract getUploadFileById(id: number): Observable<SingleResultModel<UploadFileModel>>;
  abstract getAllUploadFile(filter: PageFilterModel): Observable<PageResultModel<UploadFileModel>>;
  abstract postUploadFile(param: UploadFileModel): Observable<UploadFileModel>;
}
