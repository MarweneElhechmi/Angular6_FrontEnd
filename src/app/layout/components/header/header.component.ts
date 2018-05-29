import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../../../model/model.user';
import { AuthService } from '../../../../services/auth.service';
import { ProduitsService } from '../../../../services/produits.service';
import { Produit } from '../../../../model/model.produit';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    currentUser:User;
    pageProduits:any;
    produit:Produit=new Produit();

    constructor(public authService: AuthService,
        public produitsService:ProduitsService,
         private translate: TranslateService, public router: Router) {

        this.currentUser=JSON.parse(localStorage.getItem('currentUser'))

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {}


      onEditProduit_Ref(reference:number){
        this.router.navigate(['/blank-page',reference]);
      }


    onEditProduit(reference:number){
        this.router.navigate(['/produits-new',reference]);
      }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    // login out from the app
  logOut() {
    this.authService.logOut()

          this.router.navigate(['/login']);

  }
}
