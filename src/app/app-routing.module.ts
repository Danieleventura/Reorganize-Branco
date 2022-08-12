import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'card1',
    loadChildren: () => import('./cards/card1/card1.module').then( m => m.Card1PageModule)
  },
  {
    path: 'card2',
    loadChildren: () => import('./cards/card2/card2.module').then( m => m.Card2PageModule)
  },
  {
    path: 'card3',
    loadChildren: () => import('./cards/card3/card3.module').then( m => m.Card3PageModule)
  },
  {
    path: 'card4',
    loadChildren: () => import('./cards/card4/card4.module').then( m => m.Card4PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
