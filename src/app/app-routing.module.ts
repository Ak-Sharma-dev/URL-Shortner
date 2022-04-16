import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URLShortnerComponent } from './url-shortner/url-shortner.component';

const routes: Routes = [
  {path: '', component: URLShortnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
