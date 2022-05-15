import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity-verification',
  templateUrl: './identity-verification.component.html',
  styleUrls: ['./identity-verification.component.scss']
})
export class IdentityVerificationComponent implements OnInit {
  selectedItems: any = [];
  nextDisabled: boolean = true;
  constructor(private router: Router, private userInfoService: UserInfoService) {
    this.userInfoService.$showOnboardingHeader$.next(false);
  }

  ngOnInit(): void {
  }

  identityClick(e: any): void {
    if(!!e.srcElement.classList  && e.srcElement.classList.contains('selected')) {
      e.srcElement.classList.remove('selected');
      this.removeItemsFromArray(e.srcElement.classList[0], e, true);
    } else {
      e.srcElement.classList.add('selected');
      this.removeItemsFromArray(e.srcElement.classList[0], e, false);
    }
  }

  removeItemsFromArray(itemName: string, event: any, removeItem?: boolean) {
    if(!!removeItem && removeItem === true) {
      if(this.selectedItems.indexOf(itemName) !== -1) {
        this.selectedItems.splice(this.selectedItems.indexOf(itemName), 1);
        console.log(this.selectedItems);
      }
      this.nextDisabled = this.selectedItems.length > 1;
      return;
    }

    if(this.selectedItems.length >= 2) {
      this.removeSelection(this.selectedItems[0], event)
      this.selectedItems.shift();
    }

    this.selectedItems.push(itemName);
    this.nextDisabled = this.selectedItems.length > 1;
  }

  removeSelection(selectedItem: string, e: any) {
    document.getElementsByClassName(selectedItem)[0].classList.remove('selected');
  }

  continueIdentity() {
    this.router.navigate(['/ro-onboarding/ro-identity-details-submission'])

  }

}
