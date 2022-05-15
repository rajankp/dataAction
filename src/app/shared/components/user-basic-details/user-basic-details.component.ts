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
  userBasicShowItems = ['title', 'firstName', 'lastname', 'gender', 'dob'];

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
        lastName: new FormControl(userData.name.last, [Validators.required]),
        gender: new FormControl(userData.gender, [Validators.required]),
        dob: new FormControl(userData.dob.date, [Validators.required])
      })
    } else {
      this.userForm = this.formBuilder.group({
        title: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        dob: new FormControl('', [Validators.required])
      })
    }
  }

  continueUserForm() {
    this.router.navigate(['/ro-onboarding/ro-user-address'])
  }

  date(event: any) {
    let convertDate = new Date(event.target.value).toISOString().substring(0, 10);
    this.userForm.get('dob')!.setValue(convertDate, {
      onlyself: true
    });

  }
}
