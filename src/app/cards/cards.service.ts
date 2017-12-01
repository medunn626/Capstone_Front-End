import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CardsService {

  deleteCardSuccess: boolean;
  deleteCardFailure: boolean;
  createCardFailure: boolean;
  updateCardFailure: boolean;

  getAllCards() {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.get(environment.apiServer + '/cards', config);
  }

  getOneCard(cardId) {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.get(environment.apiServer + '/cards/' + cardId, config);
  }

  deleteCard(card) {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.delete(environment.apiServer + '/cards/' + card.id, config)
  }

  saveCard(newCard) {
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

  removeMessage() {
    this.deleteCardSuccess = false
    this.deleteCardFailure = false
    this.createCardFailure = false
    this.updateCardFailure = false
  }

  constructor(private http: Http) { }

}
