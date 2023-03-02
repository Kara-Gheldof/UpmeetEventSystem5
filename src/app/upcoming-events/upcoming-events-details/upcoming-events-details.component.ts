import { Component, Input } from '@angular/core';
import { RepositoryService } from '../event-repository.service';
import { IEvent } from 'src/app/interfaces/events';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upcoming-events-details',
  templateUrl: './upcoming-events-details.component.html',
  styleUrls: ['./upcoming-events-details.component.css']
})
export class UpcomingEventsDetailsComponent {

  @Input() detailId: string = '-1';

  event: IEvent | undefined;
  showDetails: boolean = false;

  constructor(private repositoryService: RepositoryService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.repositoryService.getEventById(Number(this.detailId)).subscribe(
      (response) => { this.event = response; });
  }

  open(content:any) {
    this.modalService.open(content);
	}

  
  close(content:any) {
    this.modalService.dismissAll(content);
	}
}

