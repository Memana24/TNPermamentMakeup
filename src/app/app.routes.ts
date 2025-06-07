import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule,} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})

export class AppRoutingModule { }