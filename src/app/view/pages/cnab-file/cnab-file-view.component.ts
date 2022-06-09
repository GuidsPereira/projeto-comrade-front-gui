import { Component, OnInit } from '@angular/core';
import { CnabFileModel } from 'src/app/core/models/cnab-file.model';
import { DeleteCnabFileUsecase } from 'src/app/core/usecases/cnab-file/delete-cnab-file-user.usecase';
import { GetAllCnabFileUsecase } from 'src/app/core/usecases/cnab-file/get-all-cnab-file.usecase';
import { PostCnabFileUsecase } from 'src/app/core/usecases/cnab-file/post-cnab-file.usecase';
import { PutCnabFileUsecase } from 'src/app/core/usecases/cnab-file/put-cnab-file.usecase';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';

@Component({
  selector: 'app-cnab-file-view',
  templateUrl: 'cnab-file-view.component.html',
  styleUrls: ['cnab-file-view.component.scss'],
  providers: [],
})
export class CnabFileViewComponent implements OnInit {
  dataSource!: CnabFileModel[];

  constructor(
    private getAllCnabFileUSer: GetAllCnabFileUsecase,
    private deleteCnabFileUsecase: DeleteCnabFileUsecase,
    private putCnabFileUseCase: PutCnabFileUsecase,
    private postCnabFileUseCase: PostCnabFileUsecase
  ) {}

  deleteCnab(e: any): void {
    var rowIndex = e.component.getRowIndexByKey(e.key);

    this.deleteCnabFileUsecase.execute(e.data.id).subscribe();
  }
  updateCnab(e: any): void {
    this.putCnabFileUseCase.execute(e.data).subscribe();
  }
  addingCnab(e: any): void {
    this.postCnabFileUseCase.execute(e.data).subscribe();
  }

  ngOnInit(): void {
    this.getAllCnabFileUSer
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<CnabFileModel>) => {
        console.log(grid);
        this.dataSource = grid.data!;
        console.log(this.dataSource);
      });
  }
}
