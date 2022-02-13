import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherComponent } from './components/another/another.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  component: HomeComponent,
  path: 'home'
},
{
  component: AnotherComponent,
  path: 'another'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
