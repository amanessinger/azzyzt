import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructEditorComponent } from './struct-editor';

const routes: Routes = [
  {
    path: 'struct-editor',
    component: StructEditorComponent
  },
  {
    path: '',
    redirectTo: '/struct-editor',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AzzyztedDataRoutingModule { }
