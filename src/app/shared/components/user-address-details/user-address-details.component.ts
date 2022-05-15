import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfoService } from '../../services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-address-details',
  templateUrl: './user-address-details.component.html',
  styleUrls: ['./user-address-details.component.scss']
})
export class UserAddressDetailsComponent implements OnInit {

  userForm: FormGroup;
  titleList: any = ["Mr", "Mrs", "Ms", "Miss"];
  userBasicShowItems = ['title', 'firstName', 'lastname', 'gender', 'dob'];
  constructor(private userInfoService: UserInfoService, public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm(undefined);
    this.userInfoService.$userData$.subscribe((userInfo: any) => {
      if(!!userInfo && !!userInfo.results && userInfo.results.length !== 0) {
        this.initForm(userInfo.results[0]);
      }
    })
  }

  initForm(userAddressData: any): void {
    if(!!userAddressData) {
      this.userForm = this.formBuilder.group({
        street: new FormControl(this.getStreetName(userAddressData.location.street), [Validators.required]),
        city: new FormControl(userAddressData.location.city, [Validators.required]),
        state: new FormControl(userAddressData.location.state, [Validators.required]),
        country: new FormControl(userAddressData.location.conutry, [Validators.required]),
        postCode: new FormControl(userAddressData.location.postcode, [Validators.required]),
        email: new FormControl(userAddressData.email, [Validators.required]),
        phone: new FormControl(userAddressData.phone, [Validators.required])
      })
    } else {
      this.userForm = this.formBuilder.group({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        postCode: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required])
      })
    }
  }

  getStreetName(streetDetails: any) {
    return streetDetails.number + ' ' + streetDetails.name;
  }

  continueUserForm() {
    this.router.navigate(['/ro-onboarding'])
  }

}
