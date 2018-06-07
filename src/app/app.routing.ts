import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // rajout du path detail avec l'id en param
  // {
  //   path: 'detail/:id',
  //   loadChildren: './features/post-detail/post-detail.module#PostDetailModule'
  // },
  { path: '',
    loadChildren: './features/index-page/index-page.module#IndexPageModule'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
