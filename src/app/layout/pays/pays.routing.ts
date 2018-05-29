import { Routes } from '@angular/router';
import {PaysNewComponent} from './addPays/pays-new.component';
import { LstProduitMcComponent } from './lstPays/lst-produit-mc.component';

export const PaysRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Pays',
            status: false
        },
        children: [
            {
                path: 'addPays',
                component: PaysNewComponent,
                data: {
                    breadcrumb: 'Ajout Pays',
                    status: true
                }
            }, {
                path: 'lstPays',
                component: LstProduitMcComponent,
                data: {
                    breadcrumb: 'Liste Pays',
                    status: true
                }
            },
        ]
    }
];
