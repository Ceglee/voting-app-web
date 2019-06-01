import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VoteSubject } from '@model/vote-subject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-vote-subject',
  templateUrl: './create-vote-subject.component.html',
  styleUrls: ['./create-vote-subject.component.scss']
})
export class CreateVoteSubjectComponent implements OnInit {

  @Output() reload = new EventEmitter<boolean>();

  public voteSubject: VoteSubject;
  public show: boolean;
  public loading: boolean;

  constructor(private http: HttpClient) {
    this.voteSubject = new VoteSubject();
    this.show = false;
    this.loading = false;
  }

  ngOnInit() {
  }

  createSubject() {
    this.loading = true;
    this.http.post('/api/subject', this.voteSubject).subscribe(() => {
      this.voteSubject = new VoteSubject();
      this.show = false;
      this.loading = false;
      this.reload.emit(true);
    }, () => {
      this.loading = false;
    });
  }
}
