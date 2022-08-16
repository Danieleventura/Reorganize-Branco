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
  },
  {
    path: 'card5',
    loadChildren: () => import('./cards/card5/card5.module').then( m => m.Card5PageModule)
  },
  {
    path: 'card6',
    loadChildren: () => import('./cards/card6/card6.module').then( m => m.Card6PageModule)
  },
  {
    path: 'card7',
    loadChildren: () => import('./cards/card7/card7.module').then( m => m.Card7PageModule)
  },
  {
    path: 'card8',
    loadChildren: () => import('./cards/card8/card8.module').then( m => m.Card8PageModule)
  },
  {
    path: 'card9',
    loadChildren: () => import('./cards/card9/card9.module').then( m => m.Card9PageModule)
  },
  {
    path: 'card10',
    loadChildren: () => import('./cards/card10/card10.module').then( m => m.Card10PageModule)
  },
  {
    path: 'card11',
    loadChildren: () => import('./cards/card11/card11.module').then( m => m.Card11PageModule)
  },
  {
    path: 'card12',
    loadChildren: () => import('./cards/card12/card12.module').then( m => m.Card12PageModule)
  },
  {
    path: 'card13',
    loadChildren: () => import('./cards/card13/card13.module').then( m => m.Card13PageModule)
  },
  {
    path: 'card14',
    loadChildren: () => import('./cards/card14/card14.module').then( m => m.Card14PageModule)
  },
  {
    path: 'card15',
    loadChildren: () => import('./cards/card15/card15.module').then( m => m.Card15PageModule)
  },
  {
    path: 'tela1',
    loadChildren: () => import('./start/tela1/tela1.module').then( m => m.Tela1PageModule)
  },
  {
    path: 'tela2',
    loadChildren: () => import('./start/tela2/tela2.module').then( m => m.Tela2PageModule)
  },
  {
    path: 'tela3',
    loadChildren: () => import('./start/tela3/tela3.module').then( m => m.Tela3PageModule)
  },
  {
    path: 'tela4',
    loadChildren: () => import('./start/tela4/tela4.module').then( m => m.Tela4PageModule)
  },
  {
    path: 'card16',
    loadChildren: () => import('./cards/card16/card16.module').then( m => m.Card16PageModule)
  },
  {
    path: 'card17',
    loadChildren: () => import('./cards/card17/card17.module').then( m => m.Card17PageModule)
  },
  {
    path: 'card18',
    loadChildren: () => import('./cards/card18/card18.module').then( m => m.Card18PageModule)
  },
  {
    path: 'card19',
    loadChildren: () => import('./cards/card19/card19.module').then( m => m.Card19PageModule)
  },
  {
    path: 'card20',
    loadChildren: () => import('./cards/card20/card20.module').then( m => m.Card20PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
