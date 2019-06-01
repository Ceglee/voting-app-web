import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@components/app-root/app.component';
import { LoginComponentComponent } from '@components/login-component/login-component.component';
import { CreateAccountComponent } from '@components/create-account/create-account.component';
import { LoaderComponent } from '@components/loader/loader.component';
import { VoteSubjectComponent } from '@components/vote-subject/vote-subject.component';
import { VoteDashboardComponent } from '@components/vote-dashboard/vote-dashboard.component';
import { CreateVoteSubjectComponent } from '@components/create-vote-subject/create-vote-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    CreateAccountComponent,
    LoaderComponent,
    VoteSubjectComponent,
    VoteDashboardComponent,
    CreateVoteSubjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
