import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [
      {
        path: 'search',
        loadChildren: () =>
          import('../pages/search/search.module').then(
            m => m.SearchPageModule)
      },
      {
        path: 'search-result',
        loadChildren: () =>
          import('../pages/search-result/search-result.module').then(
            m => m.SearchResultPageModule)
      },
      {
        path: 'advance-search',
        loadChildren: () => import('../pages/advance-search/advance-search.module').then( m => m.AdvanceSearchPageModule)
      },
      {
        path: 'rbr-search',
        loadChildren: () => import('../pages/rbr-search/rbr-search.module').then( m => m.RbrSearchPageModule)
      },
      {
        path: 'mywishlist',
        loadChildren: () => import('../pages/mywishlist/mywishlist.module').then( m => m.MywishlistPageModule)
      },
      {
        path: 'myemails',
        loadChildren: () => import('../pages/myemail/myemail.module').then( m => m.MyemailPageModule)
      },
      {
        path: 'myprofile',
        loadChildren: () => import('../pages/myprofile/myprofile.module').then( m => m.MyprofilePageModule)
      },
      {
        path: 'bookdetails',
        loadChildren: () => import('../pages/bookdetails/bookdetails.module').then( m => m.BookdetailsPageModule)
      },
      {
        path: 'reservation',
        loadChildren: () => import('../pages/reservation/reservation.module').then( m => m.ReservationPageModule)
      },
      {
        path: 'myloanrenew',
        loadChildren: () => import('../pages/myloanrenew/myloanrenew.module').then( m => m.MyloanrenewPageModule)
      },
      {
        path: 'myreservation',
        loadChildren: () => import('../pages/myreservation/myreservation.module').then( m => m.MyreservationPageModule)
      },
      {
        path: 'myloanhistory',
        loadChildren: () => import('../pages/myloanhistory/myloanhistory.module').then( m => m.MyloanhistoryPageModule)
      },
      {
        path: 'myoverdues',
        loadChildren: () => import('../pages/myoverdues/myoverdues.module').then( m => m.MyoverduesPageModule)
      },
      {
        path: 'mysearchhistory',
        loadChildren: () => import('../pages/mysearchhistory/mysearchhistory.module').then( m => m.MysearchhistoryPageModule)
      },
      {
        path: 'myfines',
        loadChildren: () => import('../pages/myfines/myfines.module').then( m => m.MyfinesPageModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('../pages/maintenance/maintenance.module').then( m => m.MaintenancePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then( m => m.AboutPageModule)
      },
      {
       path: 'logout',
       loadChildren: () => import('../pages/logout/logout.module').then( m => m.LogoutPageModule)
     }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
