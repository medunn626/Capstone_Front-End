import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  updatedCard = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    public cardsService : CardsService
  ) { }

  ngOnInit() {
    const descriptionField = <HTMLInputElement>document.getElementById('update-description')
    const nameField = <HTMLInputElement>document.getElementById('update-name')
    const photoField = <HTMLInputElement>document.getElementById('update-photo')
    const emailField = <HTMLInputElement>document.getElementById('update-email')
    const phoneField = <HTMLInputElement>document.getElementById('update-phone')
    const elevatorField = <HTMLInputElement>document.getElementById('update-elevator')
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/'])
    } else {
      this.route.params.forEach( param => {
        this.cardsService.getOneCard(param.id)
        .subscribe(response => {
          this.updatedCard = response.json();
          descriptionField.value = this.updatedCard.card.type_of_card
          nameField.value = this.updatedCard.card.name
          photoField.value = this.updatedCard.card.photo_url
          emailField.value = this.updatedCard.card.email
          phoneField.value = this.updatedCard.card.phone_number
          elevatorField.value = this.updatedCard.card.elevator_pitch
        });
      });
    }
  }

  updateCard(updatedCard) {
    this.cardsService.updateCard(updatedCard)
    .subscribe(
      response => {
        let data = response.json();
        this.router.navigate(["/cards/" + data.card.id]);
    },
    err => {
      this.cardsService.updateCardFailure = true
    }
  )
}

}
