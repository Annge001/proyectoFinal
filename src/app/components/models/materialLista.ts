import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule

  ],
  exports:[
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule

  ]
})
export class MaterialModule { }
