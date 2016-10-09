import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage.component';
import { MemopageComponent } from './components/memopage.component';

const appRoutes: Routes = [
  // Définition d'une route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomepageComponent
  },

  {
    path: 'memo/:id',
    component: MemopageComponent
  }
];

// Export de la class du module de routing
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);