import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  // Store the value
  async store(storageKey: string, value: any) {

  // btoa encrypted key
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
      });
    }

  // Get the value
  async get(storageKey: string){
    // tslint:disable-next-line: no-shadowed-variable
    const res = await Storage.get({ key: storageKey });
    console.log('I am in storage');
    console.log(res);
    if (res.value){
      return JSON.parse(unescape(atob(res.value)));
    }
    return false;
  }

  // Remove key
  async removeItem(storageKey: string) {
    await Storage.remove({key: storageKey});
    window.location.reload();
  }


  // Clear storage
  async clear() {
    await Storage.clear();
  }


}
