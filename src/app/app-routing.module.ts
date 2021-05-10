import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // set entry point
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./pages/search-result/search-result.module').then( m => m.SearchResultPageModule)
  },
  {
    path: 'advance-search',
    loadChildren: () => import('./pages/advance-search/advance-search.module').then( m => m.AdvanceSearchPageModule)
  },
  {
    path: 'rbr-search',
    loadChildren: () => import('./pages/rbr-search/rbr-search.module').then( m => m.RbrSearchPageModule)
  },
  {
    path: 'myloanhistory',
    loadChildren: () => import('./pages/myloanhistory/myloanhistory.module').then( m => m.MyloanhistoryPageModule)
  },
  {
    path: 'myreservation',
    loadChildren: () => import('./pages/myreservation/myreservation.module').then( m => m.MyreservationPageModule)
  },
  {
    path: 'myoverdues',
    loadChildren: () => import('./pages/myoverdues/myoverdues.module').then( m => m.MyoverduesPageModule)
  },
  {
    path: 'mysearchhistory',
    loadChildren: () => import('./pages/mysearchhistory/mysearchhistory.module').then( m => m.MysearchhistoryPageModule)
  },
  {
    path: 'login-auth',
    loadChildren: () => import('./pages/login-auth/login-auth.module').then( m => m.LoginAuthPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./pages/myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'bookdetails',
    loadChildren: () => import('./pages/bookdetails/bookdetails.module').then( m => m.BookdetailsPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./pages/reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'myloanrenew',
    loadChildren: () => import('./pages/myloanrenew/myloanrenew.module').then( m => m.MyloanrenewPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'myfines',
    loadChildren: () => import('./pages/myfines/myfines.module').then( m => m.MyfinesPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./pages/maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
