import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataEditorComponent } from './data-editor';

const routes: Routes = [
  {
    path: 'data-editor',
    component: DataEditorComponent
  },
  {
    path: '',
    redirectTo: '/data-editor',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AzzyztedDataRoutingModule { }
