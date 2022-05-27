import { Component, OnInit } from '@angular/core';
import { CnabFileModel } from 'src/app/core/models/cnab-file.model';
import { GetAllCnabFileUsecase } from 'src/app/core/usecases/cnab-file/get-all-cnab-file.usecase';
import { PostCnabFileUsecase } from 'src/app/core/usecases/cnab-file/post-cnab-file.usecase';

@Component({
  selector: 'app-cnab-file',
  templateUrl: 'cnab-file.component.html',
  styleUrls: ['cnab-file.component.scss'],
  providers: [],
})
export class CnabFileComponent implements OnInit {
  dataSource!: CnabFileModel[];
  data?: CnabFileModel;
  loading: boolean = false;
  file?: File;
  cnabStrings?: any;

  constructor(
    private getAllCnabFile: GetAllCnabFileUsecase,
    private postCnabFileUseCase: PostCnabFileUsecase
  ) {}

  lines?: string[];

  ngOnInit(): void {}

  onFileChange($event: { target: any }): any {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var cnbaArray: string[];

    var p1 = new Promise(function (resolve, reject) {
      myReader.onloadend = function (e) {
        const file = myReader.result;
        cnbaArray = (<string>file).split(/\r\n|\n/);
        resolve(cnbaArray);
      };
    });
    p1.then((val) => {
      this.cnabStrings = val;
      console.log(this.cnabStrings);
      this.PostFile();
    });
    this.cnabStrings = [];

    myReader.readAsText(file);
  }

  PostFile() {
    this.data = {
      info: this.cnabStrings,
    };
    this.postCnabFileUseCase.execute(this.data).subscribe();
  }
}
