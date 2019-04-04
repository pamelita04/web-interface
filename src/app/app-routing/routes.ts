import {Routes} from '@angular/router';

import {CatalogComponent} from '../catalog/catalog.component';
import {HomeComponent} from '../home/home.component';
// import {ContactComponent} from '../contact/contact.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
// import { AboutComponent } from '../about/about.component';
import { ItemCreateComponent } from '../item-create/item-create.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: 'about', component: AboutComponent},
  {path: 'catalog', component: CatalogComponent},
  // {path: 'contactus', component: ContactComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: 'create', component: ItemCreateComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
