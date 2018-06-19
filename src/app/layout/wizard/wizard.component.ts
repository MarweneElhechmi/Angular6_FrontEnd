import { Component, OnInit  } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaysService } from '../../../services/pays.service';
import { Pays } from '../../../model/model.pays';


@Component({
    selector: 'app-wizard-page',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
    animations: [routerTransition()]
})
export class WizardComponent implements OnInit  {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  pays:Pays = new Pays();
  Paays:any;
  mode:number=1;
  constructor(private _formBuilder: FormBuilder,public http: HttpClientModule, public paysService:PaysService) { }

        ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  ajoutPays(){

    this.paysService.addPays(this.pays).subscribe(data=>{
      console.log(this.firstFormGroup.value);
      console.log("*************");
      console.log(data);
      console.log("*************");
      console.log(this.pays);
      this.pays=data;
    }
    ,err=>{
      console.log(err);
    })
  }

}
