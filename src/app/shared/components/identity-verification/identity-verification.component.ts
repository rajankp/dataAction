import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-identity-verification',
  templateUrl: './identity-verification.component.html',
  styleUrls: ['./identity-verification.component.scss']
})
export class IdentityVerificationComponent implements OnInit {
  public selectedItems: any = [];
  constructor(private userInfoService: UserInfoService) {
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
      return;
    }

    if(this.selectedItems.length >= 2) {
      this.removeSelection(this.selectedItems[0], event)
      this.selectedItems.shift();
    }

    this.selectedItems.push(itemName);
    console.log(this.selectedItems);
  }

  removeSelection(selectedItem: string, e: any) {
    document.getElementsByClassName(selectedItem)[0].classList.remove('selected');
  }

}
