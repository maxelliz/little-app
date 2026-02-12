import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BadEndingComponent} from './bad-ending/bad-ending.component';
import {HomeComponent} from './home/home.component';
import {HappyEndingComponent} from './happy-ending/happy-ending.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bad-ending', component: BadEndingComponent},
  {path: 'happy-ending', component: HappyEndingComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {
}
