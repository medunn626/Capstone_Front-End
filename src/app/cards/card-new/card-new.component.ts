import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {

  newCard = <any>{};

  constructor(
    private router : Router,
    public cardsService : CardsService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/'])
    }
  }

  removeMessage() {
    this.cardsService.removeMessage()
  }

  saveCard(newCard) {
    const newDescription = <HTMLInputElement>document.getElementById('new-description')
    const newName = <HTMLInputElement>document.getElementById('new-name')
    const newPhoto = <HTMLInputElement>document.getElementById('new-photo')
    const newEmail = <HTMLInputElement>document.getElementById('new-email')
    const newPhone = <HTMLInputElement>document.getElementById('new-phone')
    const newElevator = <HTMLInputElement>document.getElementById('new-elevator')
    this.cardsService.saveCard(newCard)
    .subscribe(
      response => {
        let data = response.json();
        this.router.navigate(["/cards/" + data.card.id]);
      },
      err => {
        this.cardsService.createCardFailure = true
        newDescription.value = ''
        newName.value = ''
        newPhoto.value = ''
        newEmail.value = ''
        newPhone.value = ''
        newElevator.value = ''
      }
    )
  }

}
