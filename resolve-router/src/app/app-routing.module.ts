import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaimComponent } from './components/maim/maim.component';
import { SubComponent } from './components/sub/sub.component';
import { ResolveService } from './resolve-service/resolve.service';

const routes: Routes = [
  { path: '', component: MaimComponent },
  { path: 'sub', component: SubComponent, resolve: { data: ResolveService } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolveService]
})
export class AppRoutingModule { }
