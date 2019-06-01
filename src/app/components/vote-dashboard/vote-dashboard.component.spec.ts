import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteDashboardComponent } from './vote-dashboard.component';

describe('VoteDashboardComponent', () => {
  let component: VoteDashboardComponent;
  let fixture: ComponentFixture<VoteDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
