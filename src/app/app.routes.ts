import { Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {AboutComponent} from "./modules/about/about.component";
import {CommentsComponent} from "./modules/comments/comments.component";
import {ContactComponent} from "./modules/contact/contact.component";
import {ProductsComponent} from "./modules/products/products.component";

export const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'about', component: AboutComponent},
   {path: 'comments', component: CommentsComponent},
   {path: 'contact', component: ContactComponent},
   {path: 'products', component: ProductsComponent},

    {path: '**', redirectTo: 'not-found'}
];
