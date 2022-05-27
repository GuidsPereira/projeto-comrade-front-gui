import { Component, OnInit } from '@angular/core';
import { UploadFileModel } from 'src/app/core/models/upload-file.model';
import { GetAllUploadFileUsecase } from 'src/app/core/usecases/upload-file/get-all-uploadfile.usecase';
import { PostUploadFileUsecase } from 'src/app/core/usecases/upload-file/post-uploadfile.usecase';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';

@Component({
  selector: 'app-upload-file',
  templateUrl: 'upload-file.component.html',
  styleUrls: ['upload-file.component.scss'],
  providers: [],
})
export class UpLoadFileComponent implements OnInit {
  dataSource!: UploadFileModel[];
  data?: UploadFileModel;
  loading: boolean = false;
  file?: File;
  infoStrings?: any; //Coloca um nome melhor aqui

  constructor(
    private getAllUploadFile: GetAllUploadFileUsecase,
    private postUploadFileUseCase: PostUploadFileUsecase
  ) {}

  lines?: string[];

  ngOnInit(): void {}

  onFileChange($event: { target: any }): any {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var oto: string[];

    var p1 = new Promise(function (resolve, reject) {
      myReader.onloadend = function (e) {
        const file = myReader.result;
        oto = (<string>file).split(/\r\n|\n/);
        resolve(oto);
      };
    });
    p1.then((val) => {
      this.infoStrings = val;
      console.log(this.infoStrings);
      this.PostFile();
    });
    this.infoStrings = [];

    myReader.readAsText(file);
  }

  PostFile() {
    this.data = {
      info: this.infoStrings,
    };
    this.postUploadFileUseCase.execute(this.data).subscribe();
  }
}
