import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CnabFileWebRepositoryMapper } from './cnab-file-web-repository-mapper';

import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';
import { CnabFileRepository } from 'src/app/core/repositories/cnab-file.repository';
import { CnabFileModel } from 'src/app/core/models/cnab-file.model';
import { CnabFileWebEntity } from 'src/app/data/repository/cnab-file-web-repository/cnab-file-web-entity';

@Injectable({
  providedIn: 'root',
})
export class CnabFileWebRepository extends CnabFileRepository {
  constructor(public http: BaseHttpService) {
    super();
  }

  getCnabFileById(id: number): Observable<SingleResultModel<CnabFileModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<CnabFileWebEntity>>(`${environment.CNABFILE}cnab-file/get-by-id`, id)
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }
  getAllCnabFile(filter: PageFilterModel): Observable<PageResultModel<CnabFileModel>> {
    var request = this.http
      .getAll<PageResultModel<CnabFileWebEntity>>(
        `${environment.CNABFILE}cnab-file/teste-gui${makeParamFilterGrid(filter)}`
      )
      .pipe(
        map((x) => {
          return this.mapper.responseGridWebMapFrom(x.data);
        })
      );
    return request;
  }
  postCnabFile(param: CnabFileModel) {
    var request = this.http

      .post<CnabFileWebEntity>(`${environment.CNABFILE}cnab-file/create`, this.mapper.mapTo(param))
      .pipe(map((x) => this.mapper.mapFrom(x.data)));
    request.subscribe();
    return request;
  }
  mapper = new CnabFileWebRepositoryMapper();
}
