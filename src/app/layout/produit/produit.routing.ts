import { Routes } from '@angular/router';
import { ProduitsMcComponent } from './lstProduit/produits-mc.component';
import { ProduitsNewComponent } from './addProduit/produits-new.component';

export const ProduitRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Produit',
            status: false
        },
        children: [
            {
                path: 'lstProduit',
                component: ProduitsMcComponent,
                data: {
                    breadcrumb: 'Liste Produit',
                    status: true
                }
            },{
                path: 'newProduit',
                component: ProduitsNewComponent,
                data: {
                    breadcrumb: 'Ajout Produit',
                    status: true
                }
            },
        ]
    }
];
