import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {



  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  redirect(url: string) {
    this.router.navigate([url]);
  }
}
