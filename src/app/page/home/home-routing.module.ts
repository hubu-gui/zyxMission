import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: '首页' },
    children: [
      {
        path: 'barcodePay',
        component: HomeComponent,
        data: {
          title: '付款码支付',
          breadcrumb: ['首页', '英雄列表'],
          animation: 'HeroesPage',
        },
      },
      {
        path: 'prePay',
        component: HomeComponent,
        data: {
          title: '新增英雄',
          breadcrumb: ['首页', '英雄列表'],
          animation: 'HeroesPage',
        },
      },
      { path: '', redirectTo: 'heroes', pathMatch: 'full' },
      { path: '**', redirectTo: 'heroes' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
