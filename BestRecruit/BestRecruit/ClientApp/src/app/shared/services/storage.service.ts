import { Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
export class localStorageService {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }


  setStorage(key: string, values:any[]) {
    this.storage.set(key, values);
  }

  setStorageSignle(key: string, value: any) {
    this.storage.set(key, value);
  }


  getStorage(key :string) {
    return this.storage.get(key) || [];
  }

}
