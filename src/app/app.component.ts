import { BsModalRef, BsModalService } from '@matiullah.karimi/ngx-bootstrap-modal';
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
  }
}