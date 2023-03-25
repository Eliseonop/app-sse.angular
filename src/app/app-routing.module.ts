import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SseComponent } from './sse/sse/sse.component';

const routes: Routes = [
  { path: 'sse', component: SseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
