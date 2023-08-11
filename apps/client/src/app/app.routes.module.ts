import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigMaskComponent } from './components/config-mask/config-mask.component';
import { SavedConfigsComponent } from './components/saved-configs/saved-configs.component';

const routes: Routes = [

  {
    path: '',
    component: ConfigMaskComponent,
  },
  {
    path: 'saves',
    component: SavedConfigsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
