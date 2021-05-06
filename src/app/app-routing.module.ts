import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { RedactComponent } from './pages/write/redact/redact.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'write', component: RedactComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    
  }
}
