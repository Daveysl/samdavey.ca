import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";  
import { RouterModule } from "@angular/router";  

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { SudokuComponent } from './sudoku/sudoku.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ResumeComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    WorkComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      //{path:"technology/:name", component: TechnologyComponent},
      
      {path:"sudoku", component: SudokuComponent},
      {path:"skills", component: SkillsComponent},
      {path:"resume", component: ResumeComponent},
      {path:"about", component: AboutComponent},
      {path:"contact", component: ContactComponent},
      {path:"work", component: WorkComponent},
      {path:"home", component: MainComponent},
      {path:"", redirectTo: "home", pathMatch: "full"},
      {path:"**", redirectTo: "home", pathMatch: "full"},

    ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
