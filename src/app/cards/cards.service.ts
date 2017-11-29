import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CardsService {

  getAllCards() {
    return this.http.get(environment.apiServer + '/cards');
  }

  getOneCard(cardId) {
    console.log('Card ID is', cardId);
    return this.http.get(environment.apiServer + '/cards/' + cardId);
  }

  deleteCard(card) {
    console.log('Card ID is', card.id);
    return this.http.delete(environment.apiServer + '/cards/' + card.Id);
  }

  saveCard(newCard) {
    console.log('New card is', newCard);
    return this.http.post(environment.apiServer + '/cards', newCard);
  }

  updateArtist(updatedArtist) {
    console.log('updatedArtist is', updatedArtist);
    return this.http.put(environment.apiServer + '/cards/', + card.Id);
  }

  constructor(private http: Http) { }

}
