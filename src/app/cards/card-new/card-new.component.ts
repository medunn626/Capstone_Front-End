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
    private cardsService : CardsService
  ) { }

  ngOnInit() {

  }

  saveCard(newCard) {
    const newDescription = document.getElementById('new-description')
    const newName = document.getElementById('new-name')
    const newPhoto = document.getElementById('new-photo')
    const newEmail = document.getElementById('new-email')
    const newPhone = document.getElementById('new-phone')
    const newElevator = document.getElementById('new-elevator')
    console.log("saving card");
    console.log(newCard);
    this.cardsService.saveCard(newCard)
    .subscribe(
      response => {
        console.log(response.json());
        let data = response.json();
        console.log('Data is', data)
        console.log('Data ID is', data.card.id)
        this.router.navigate(["/cards/" + data.card.id]);
      },
      err => {
        console.log('Error is', err)
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
