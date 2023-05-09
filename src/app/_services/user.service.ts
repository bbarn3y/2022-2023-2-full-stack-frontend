import { Injectable } from '@angular/core';
import {StorageKeys} from "src/app/_constants/storage-keys";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;

  constructor() {
    this.isLoggedIn = this.get() !== null;
  }

  get(): string | null {
    return localStorage.getItem(StorageKeys.session);
  }
  remove(): void {
    localStorage.removeItem(StorageKeys.session);
    this.isLoggedIn = false;
  }
  store(token: string): void {
    localStorage.setItem(StorageKeys.session, token);
    this.isLoggedIn = true;
  }
}
