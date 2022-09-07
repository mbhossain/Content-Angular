import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeMenuComponent } from './components/tree-menu/tree-menu.component';

const routes: Routes = [
  {
    path: 'tree',
    component: TreeMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeMenuRoutingModule { }
