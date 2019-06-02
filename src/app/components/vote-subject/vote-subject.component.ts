import { Component, Input, OnInit } from '@angular/core';
import { VoteSubject } from '@model/vote-subject';
import { Voting } from '@model/voting';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vote-subject',
  templateUrl: './vote-subject.component.html',
  styleUrls: ['./vote-subject.component.scss']
})
export class VoteSubjectComponent implements OnInit {

  @Input() subject: VoteSubject;
  public expanded: boolean;
  public voting: Voting;
  public loading: boolean;

  constructor(private http: HttpClient) {
    this.expanded = false;
    this.loading = false;
  }

  ngOnInit() {
  }

  expand() {
    if (this.expanded) {
      this.expanded = false;
      return;
    }

    if (this.voting) {
      this.expanded = true;
      return;
    }

    this.reloadVoting();
  }

  reloadVoting() {
    this.loading = true;
    this.http.get<Voting>(`/api/subject/${this.subject.id}/voting`).subscribe(voting => {
      this.voting = voting;
      this.loading = false;
      this.expanded = true;
    });
  }

  getWidth(votingCount) {
    if (this.voting) {
      const sum = this.voting.inFavor + this.voting.against;
      return votingCount *  10000 / sum;
    }

    return 0;
  }

  vote(vote) {
    this.loading = true;
    let observable;
    if (this.voting.voted) {
      observable = this.http.put(`/api/subject/${this.subject.id}/vote`, {inFavor: vote});
    } else {
      observable = this.http.post(`/api/subject/${this.subject.id}/vote`, {inFavor: vote});
    }
    observable.subscribe(() => {
      this.reloadVoting();
    });
  }

  get isActive() {
    return this.notStarted && this.notFinished;
  }

  get notStarted() {
    const now = new Date().getTime();
    return now -  Date.parse(this.subject.votingStart) > 0;
  }
  get notFinished() {
    const now = new Date().getTime();
    return Date.parse(this.subject.votingEnd) - now > 0;
  }

  get header() {
    return this.isActive ? 'Voting ongoing' : this.notFinished ? 'Voting not started yet' : 'Voting finished';
  }
}
