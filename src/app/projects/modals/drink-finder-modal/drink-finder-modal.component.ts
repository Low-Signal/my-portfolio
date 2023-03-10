import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-drink-finder-modal',
  templateUrl: './drink-finder-modal.component.html',
  styleUrls: ['./drink-finder-modal.component.scss']
})
export class DrinkFinderModalComponent {
    constructor(private modalService: NgbModal) {}

    closeResult = '';

    open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}