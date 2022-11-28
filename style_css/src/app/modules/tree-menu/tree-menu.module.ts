import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeMenuRoutingModule } from './tree-menu-routing.module';
import { TreeMenuComponent } from './components/tree-menu/tree-menu.component';


@NgModule({
  declarations: [
    TreeMenuComponent
  ],
  imports: [
    CommonModule,
    TreeMenuRoutingModule
  ]
})
export class TreeMenuModule { }
