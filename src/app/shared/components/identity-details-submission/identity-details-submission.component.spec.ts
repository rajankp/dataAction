import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityDetailsSubmissionComponent } from './identity-details-submission.component';

describe('IdentityDetailsSubmissionComponent', () => {
  let component: IdentityDetailsSubmissionComponent;
  let fixture: ComponentFixture<IdentityDetailsSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityDetailsSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityDetailsSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
