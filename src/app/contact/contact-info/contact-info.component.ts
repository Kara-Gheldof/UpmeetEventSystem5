import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IContact } from 'src/app/interfaces/contacts';
import { RepositoryService } from '../../upcoming-events/event-repository.service';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {

  constructor(private repositoryService: RepositoryService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  sendContact(form:NgForm){
    let newContact: IContact = {
    name: form.form.value.name,
    email: form.form.value.email,
    subject: form.form.value.subject,
    comment: form.form.value.comment
    };

    this.repositoryService.addContact(newContact).subscribe(
      () => {
        form.resetForm();
      }
    );
  };
}

