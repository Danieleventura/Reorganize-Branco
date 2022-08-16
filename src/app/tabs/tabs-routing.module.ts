import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'estrela-parabens',
        loadChildren: () => import('../estrelas/estrela-parabens/estrela-parabens.module').then( m => m.EstrelaParabensPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      },
      {
        path: 'links',
        loadChildren: () => import('../links/links.module').then( m => m.LinksPageModule)
      },
      {
        path: 'pdf',
        loadChildren: () => import('../pdf/pdf.module').then( m => m.PdfPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
