import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { GalleryGridComponent } from './components/gallery-grid/gallery-grid.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryGridComponent },
  { path: 'anita-only', component: LoginFormComponent },
];
