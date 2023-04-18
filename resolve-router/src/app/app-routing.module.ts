import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { ResolveService } from './resolve-service/resolve.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student-list', component: StudentListComponent, resolve: { data: ResolveService } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolveService]
})
export class AppRoutingModule { }
