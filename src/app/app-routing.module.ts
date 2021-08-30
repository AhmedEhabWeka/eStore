import { NotfoundComponent } from './components/notfound/notfound.component';
import { KidsComponent } from './components/kids/kids.component';
import { WomenComponent } from './components/women/women.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './components/men/men.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:'', component:MenComponent},
  {path:'men', component:MenComponent},
  {path:'women', component:WomenComponent},
  {path:'kids', component:KidsComponent},
  {path:'details/:gender/:id', component:DetailsComponent},
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
