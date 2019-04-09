import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
  { path: 'app', component: LayoutComponent, children: [
    { path: 'dashboard', loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule' },
    { path: 'manage', loadChildren: 'app/features/manage/manage.module#ManageModule' },
  ] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
