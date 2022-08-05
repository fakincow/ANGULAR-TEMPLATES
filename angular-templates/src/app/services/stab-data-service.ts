import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StabDataService {
    constructor() { }
   
    
    getLobbySlotDats() {
        return  SLOT_LIST_STAB;
    }
   
  }


const SLOT_LIST_STAB = {
    "backgroundImage": "https://cdn.babacasino.net/common/master/assets/images/newMainLobby/newLobby_bg_easter.jpg",
    "backgroundMusic": "https://cdn.babacasino.net/common/master/assets/audio/new_lobby_music.mp3",
    "slots": [
      {
        "id": 1145,
        "name": "Buffalo Madness",
        "image": "https://cdn.babacasino.net/common/master/assets/images/mainLobby/slotsIcons/icon_1145.png",
        "order": 3,
        "isLocked": true,
        "jackpot": 9000000
      },
      {
        "id": 1135,
        "name": "Jackpots In Wonderland",
        "image": "https://s3cdn.babawildslots.com/uploadImages/icon_1135_n.png",
        "isLocked": false,
        "order": 5
      },
      {
        "id": 1128,
        "name": "Burning HOT 777",
        "image": "https://cdn.babacasino.net/common/master/assets/images/mainLobby/slotsIcons/icon_1128.png",
        "isLocked": false,
        "order": 4
      },
      {
        "id": 1148,
        "name": "Wicked Wins",
        "image": "https://cdn.babacasino.net/uploadImages/icon_1148.png",
        "isLocked": false,
        "order": 2,
        "jackpot": 9000000
      },
      {
        "id": 1142,
        "name": "Easterical Wins",
        "image": "https://cdn.babacasino.net/uploadImages/icon_1142.png",
        "order": 6,
        "isLocked": true
      },
      {
        "id": 1152,
        "name": "Grand Gorilla",
        "image": "https://cdn.babacasino.net/uploadImages/icon_1152_2.png",
        "order": 1,
        "isLocked": false
      },
      {
        "id": 1132,
        "name": "Leprechaun's Jackpots",
        "image": "https://cdn.babacasino.net/common/master/assets/images/mainLobby/slotsIcons/icon_1132.png",
        "order": 7,
        "isLocked": false
      },
      {
        "id": 1130,
        "name": "Roaring Lions",
        "image": "https://cdn.babacasino.net/common/master/assets/images/mainLobby/slotsIcons/icon_1130.png",
        "order": 8,
        "isLocked": false
      }
    ]
  };  
  