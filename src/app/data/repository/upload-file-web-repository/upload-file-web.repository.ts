import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileWebRepositoryMapper } from './upload-file-web-repository-mapper';

import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';
import { UploadFileRepository } from 'src/app/core/repositories/upload-file.repository';
import { UploadFileModel } from 'src/app/core/models/upload-file.model';
import { UploaFileWebEntity } from 'src/app/data/repository/upload-file-web-repository/upload-file-web-entity';

@Injectable({
  providedIn: 'root',
})
export class UploadFileWebRepository extends UploadFileRepository {
  constructor(public http: BaseHttpService) {
    super();
  }

  getUploadFileById(id: number): Observable<SingleResultModel<UploadFileModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<UploaFileWebEntity>>(
        `${environment.UPLOADFILE}upload-file/get-by-id`,
        id
      )
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }
  getAllUploadFile(filter: PageFilterModel): Observable<PageResultModel<UploadFileModel>> {
    var request = this.http
      .getAll<PageResultModel<UploaFileWebEntity>>(
        `${environment.UPLOADFILE}upload-file/teste-gui${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }
  postUploadFile(param: UploadFileModel) {
    var request = this.http

      .post<UploaFileWebEntity>(
        `${environment.UPLOADFILE}upload-file/create`,
        this.mapper.mapTo(param)
      )
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
    request.subscribe();
    return request;
  }
  mapper = new UploadFileWebRepositoryMapper();
}
