import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVoteSubjectComponent } from './create-vote-subject.component';

describe('CreateVoteSubjectComponent', () => {
  let component: CreateVoteSubjectComponent;
  let fixture: ComponentFixture<CreateVoteSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVoteSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVoteSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
