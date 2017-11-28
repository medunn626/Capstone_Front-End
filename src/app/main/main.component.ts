import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService, AuthService]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
