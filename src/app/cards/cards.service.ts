import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CardsService {

  getAllCards() {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.get(environment.apiServer + '/cards', config);
  }

  getOneCard(cardId) {
    console.log('Card ID is', cardId);
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.get(environment.apiServer + '/cards/' + cardId, config);
  }

  deleteCard(card) {
    console.log('Card ID is', card.id);
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.delete(environment.apiServer + '/cards/' + card.Id, config);
  }

  saveCard(newCard) {
    console.log('New card is', newCard);
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    let cardCreateParams = {
      "card": {
        "name": newCard.name,
        "photo_url": newCard.photo_url,
        "email": newCard.email,
        "phone_number": newCard.phone_number,
        "type_of_card": newCard.type_of_card,
        "elevator_pitch": newCard.elevator_pitch,
        "user_id": localStorage.getItem('id')
      }
    }
    return this.http.post(environment.apiServer + '/cards', cardCreateParams, config);
  }

  updateCard(updatedCard) {
    console.log('updatedCard is', updatedCard);
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    let cardUpdateParams = {
      "card": {
        "name": updatedCard.name,
        "photo_url": updatedCard.photo_url,
        "email": updatedCard.email,
        "phone_number": updatedCard.phone_number,
        "type_of_card": updatedCard.type_of_card,
        "elevator_pitch": updatedCard.elevator_pitch,
        "user_id": localStorage.getItem('id')
      }
    }
    return this.http.put(environment.apiServer + '/cards/' + updatedCard.card.id, cardUpdateParams, config);
  }

  constructor(private http: Http) { }

}
