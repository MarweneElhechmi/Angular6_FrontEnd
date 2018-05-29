import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaysComponent } from './pays.component';
import {RouterModule} from '@angular/router';
import {PaysRoutes} from './pays.routing';
import {PaysNewComponent} from './addPays/pays-new.component';
import { LstProduitMcComponent } from './lstPays/lst-produit-mc.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PaysRoutes),
  ],
  declarations: [
    PaysComponent
  ]
})
export class PaysModule { }
