import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule, MatCardModule, MatHorizontalStepper, MatFormFieldModule, MatInputModule, MatStepperModule, MatButtonModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { WizardComponent } from './wizard.component';
import { WizardRoutingModule } from './wizard-routing.module';


@NgModule({
    imports: [CommonModule, WizardRoutingModule,MatTabsModule,MatCardModule,FormsModule,
        MatFormFieldModule,MatInputModule,MatStepperModule,ReactiveFormsModule,MatButtonModule ],
    declarations: [WizardComponent],
    exports : [ReactiveFormsModule]
})
export class WizardModule {}
