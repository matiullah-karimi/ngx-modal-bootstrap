import { BsModalRef } from './../modal/bs-modal-ref.service';
import { BsModalService } from './../modal/bs-modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-modal';
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {

  }

  showModal(template) {
    this.bsModalRef = this.modalService.show(template, {backdrop: true});
    console.log('here')
  }
}