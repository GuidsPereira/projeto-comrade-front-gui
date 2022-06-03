import { Component, OnInit } from '@angular/core';
import { CnabFileModel } from 'src/app/core/models/cnab-file.model';
import { GetAllCnabFileUsecase } from 'src/app/core/usecases/cnab-file/get-all-cnab-file.usecase';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { CnabFileModule } from '../cnab-file/cnab-file.module';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSource!: CnabFileModel[];
  constructor(private getAllCnabFileUSer: GetAllCnabFileUsecase) {}
  ngOnInit(): void {
    this.getAllCnabFileUSer
      .execute({ pageSize: 20, pageNumber: 1 })
      .subscribe((grid: PageResultModel<CnabFileModel>) => {
        this.dataSource = grid.data!;
        console.log(this.dataSource);
      });
  }
}
