import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LivraireComponent } from './livraire/livraire.component';
import { GaleryComponent } from './galery/galery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ { path: 'livraire', component: LivraireComponent },{ path: 'galery', component: GaleryComponent },{ path: 'contacts', component: ContactsComponent },{ path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
