import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class MainService {

  navigate() {
    this.router.navigate(['/auth/change-password'])
  }

  constructor(
    private router: Router
  ) { }

}
