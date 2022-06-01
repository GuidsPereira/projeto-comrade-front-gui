import { Component, OnInit } from '@angular/core';
import { CnabFileModel } from 'src/app/core/models/cnab-file.model';
import { GetAllCnabFileUsecase } from 'src/app/core/usecases/cnab-file/get-all-cnab-file.usecase';
import { PostCnabFileUsecase } from 'src/app/core/usecases/cnab-file/post-cnab-file.usecase';
import { FormControl, FormsModule, FormGroup } from '@angular/forms';

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

  ngOnInit(): void {}

  onFileChange($event: { target: any }): any {
    this.readThis($event.target);
  }

  CnabForm = new FormGroup({
    Tipo: new FormControl(''),
    Data: new FormControl(''),
    Valor: new FormControl(''),
    CPF: new FormControl(''),
    Cartao: new FormControl(''),
    Hora: new FormControl(''),
    DonoLoja: new FormControl(''),
    NomeLoja: new FormControl(''),
  });

  onSubmit() {
    console.log(this.CnabForm.get('Tipo')?.value);

    this.cnabStrings = [];
    var cnabFormString = this.CnabForm.get('Tipo')?.value.concat(this.CnabForm.get('Data')?.value);
    cnabFormString = cnabFormString.concat(this.CnabForm.get('Valor')?.value);
    cnabFormString = cnabFormString.concat(this.CnabForm.get('CPF')?.value);
    cnabFormString = cnabFormString.concat(this.CnabForm.get('Cartao')?.value);
    cnabFormString = cnabFormString.concat(this.CnabForm.get('Hora')?.value);
    cnabFormString = cnabFormString.concat(this.CnabForm.get('DonoLoja')?.value);
    cnabFormString = cnabFormString.concat(this.CnabForm.get('NomeLoja')?.value);
    this.cnabStrings = cnabFormString;

    this.PostFile();
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
