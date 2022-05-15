import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfoService } from '../../services/user-info.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-basic-details',
  templateUrl: './user-basic-details.component.html',
  styleUrls: ['./user-basic-details.component.scss']
})
export class UserBasicDetailsComponent implements OnInit {

  userForm: FormGroup;
  titleList: any = ["Mr", "Mrs", "Ms", "Miss"];
  userBasicShowItems = ['title', 'firstName', 'middleName', 'lastName', 'gender', 'dob', 'email', 'mobile'];

  constructor(private userInfoService: UserInfoService, public formBuilder: FormBuilder, private router: Router) {

  }

  ngOnChanges(): void {

  }

  ngOnInit(): void {
    this.initForm(undefined);
    this.userInfoService.$userData$.subscribe((userInfo) => {
      if(!!userInfo && !!userInfo.results && userInfo.results.length !== 0) {
        this.initForm(userInfo.results[0]);
      }
    })
  }

  initForm(userData: any): void {
    if(!!userData) {
      this.userForm = this.formBuilder.group({
        title: new FormControl(userData.name.title, [Validators.required]),
        firstName: new FormControl(userData.name.first, [Validators.required]),
        middleName: new FormControl(userData.name.middle),
        lastName: new FormControl(userData.name.last, [Validators.required]),
        /* gender: new FormControl(userData.gender, [Validators.required]), */
        dob: new FormControl(userData.dob.date, [Validators.required]),
        email: new FormControl(userData.email, [Validators.required]),
        mobile: new FormControl(userData.cell, [Validators.required])
      })
    } else {
      this.userForm = this.formBuilder.group({
        title: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [Validators.required]),
        middleName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        /* gender: new FormControl('', [Validators.required]), */
        dob: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        mobile: new FormControl('', [Validators.required])
      })
    }
  }

  saveuserForm() {
    this.router.navigate(['/ro-onboarding/ro-identity-verification']);
    this.userInfoService.$showOnboardingHeader$.next(false);
  }

  date(event: any) {
    let convertDate = new Date(event.target.value).toISOString().substring(0, 10);
    this.userForm.get('dob')!.setValue(convertDate, {
      onlyself: true
    });

  }
}
