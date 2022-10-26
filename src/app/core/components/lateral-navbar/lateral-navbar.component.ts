import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lateral-navbar',
  templateUrl: './lateral-navbar.component.html',
  styleUrls: ['./lateral-navbar.component.css']
})
export class LateralNavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(url: string) {
    this.router.navigate([url]);
  }

}
