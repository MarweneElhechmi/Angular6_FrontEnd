import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ProduitRoutes } from './produit.routing';
import { ProduitComponent } from './produit.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProduitRoutes),
  ],
  declarations: [
    ProduitComponent
    ]
})
export class ProduitModule { }
