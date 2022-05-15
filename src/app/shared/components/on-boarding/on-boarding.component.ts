import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { UserAddressDetailsComponent } from '../user-address-details/user-address-details.component';
import { UserBasicDetailsComponent } from '../user-basic-details/user-basic-details.component';
import { UserInfoService } from '../../services/user-info.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss']
})

export class OnBoardingComponent implements OnInit {

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.userInfoService.getUserDetails().subscribe((userInfo) => {
      this.userInfoService.$userData$ .next(userInfo);
    })
  }

}
