import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructEditorComponent } from './struct-editor';

const routes: Routes = [
  {
    path: 'struct-edit',
    component: StructEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AzzyztedDataRoutingModule { }
