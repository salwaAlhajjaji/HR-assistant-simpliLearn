import { ResultComponent } from './components/result/result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AssessmentHomeComponent } from './components/assessment-home/assessment-home.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aboutUs", component: AboutUsComponent },
  {path: "assesHome", component: AssessmentHomeComponent,},
  {path: "result", component: ResultComponent,},
  {path: "assessment", component: AssessmentComponent,},
  { path: '**', component: PageNotFoundComponent },
  // {path: "assessment", component: AssessmentComponent},
  // {path: "result", component: AssessmentHomeComponent,},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
