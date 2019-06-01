import { Component, OnInit } from '@angular/core';
import { VoteSubject } from '@model/vote-subject';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vote-dashboard',
  templateUrl: './vote-dashboard.component.html',
  styleUrls: ['./vote-dashboard.component.scss']
})
export class VoteDashboardComponent implements OnInit {

  public subjects: VoteSubject[];
  public loading: boolean;

  constructor(private http: HttpClient) {
    this.subjects = [];
    this.loading = false;
  }

  ngOnInit() {
    this.reloadSubjects();
  }

  reloadSubjects() {
    this.loading = true;
    this.http.get<VoteSubject[]>('/api/subject').subscribe(subjects => {
      this.loading = false;
      this.subjects = subjects;
    });
  }
}
