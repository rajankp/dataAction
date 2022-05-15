import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-identity-details-submission',
  templateUrl: './identity-details-submission.component.html',
  styleUrls: ['./identity-details-submission.component.scss']
})
export class IdentityDetailsSubmissionComponent implements OnInit {
  identityForm: FormGroup;
  stateList = [];
  constructor(private formBuilder: FormBuilder, private userInfoService: UserInfoService) {
    this.userInfoService.$showOnboardingHeader$.next(false);
  }

  ngOnInit(): void {
    this.identityForm = this.formBuilder.group({
      drivingLicense: new FormControl(''),
      state: new FormControl(''),
      australianPassport: new FormControl(''),
    })
  }

}
