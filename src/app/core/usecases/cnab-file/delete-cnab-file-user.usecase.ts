import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { SystemUserRepository } from '../../repositories/system-user.repository';
import { CnabFileRepository } from '../../repositories/cnab-file.repository';

@Injectable({
  providedIn: 'root',
})
export class DeleteCnabFileUsecase implements UseCase<string, void> {
  constructor(private cnabFileRepository: CnabFileRepository) {}

  execute(id: string): Observable<void> {
    return this.cnabFileRepository.deleteCnabFile(id);
  }
}
