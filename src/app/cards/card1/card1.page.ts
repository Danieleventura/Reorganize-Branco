import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.page.html',
  styleUrls: ['./card1.page.scss'],
})
export class Card1Page implements OnInit {
  cards = [
    { photo: 'assets/skins/foto_parque.png',
      text: 'assets/skins/card1.PNG'
    },
    { photo: 'assets/skins/foto_ouvindo_m_sica.png',
      text: 'assets/skins/card2.PNG'
    },
    { photo: 'assets/skins/foto_dog.png',
      text: 'assets/skins/card3.PNG'
    },
    { photo: 'assets/skins/foto_amigos.png',
      text: 'assets/skins/card4.PNG'
    },
    { photo: 'assets/skins/foto_abra_o.png',
      text: 'assets/skins/card5.PNG'
    },
    { photo: 'assets/skins/foto_museu.png',
      text: 'assets/skins/card6.PNG'
    },
    { photo: 'assets/skins/foto_doa__o.png',
      text: 'assets/skins/card8.PNG'
    },
    { photo: 'assets/skins/foto_sorvete.png',
      text: 'assets/skins/card10.PNG'
    },
    { photo: 'assets/skins/foto_cinema.png',
      text: 'assets/skins/card11.PNG'
    },
    { photo: 'assets/skins/foto_yoga.png',
      text: 'assets/skins/card12.PNG'
    },
    { photo: 'assets/skins/foto_viol_o.png',
      text: 'assets/skins/card14.PNG'
    },
    { photo: 'assets/skins/foto_chuveiro.png',
      text: 'assets/skins/card15.PNG'
    },
    { photo: 'assets/skins/foto_cozinha.png',
      text: 'assets/skins/card16.PNG'
    },
    { photo: 'assets/skins/foto_cabides.png',
      text: 'assets/skins/card17.PNG'
    },
    { photo: 'assets/skins/foto_copo_d_gua.png',
      text: 'assets/skins/card18.PNG'
    },
    { photo: 'assets/skins/foto_call.png',
      text: 'assets/skins/card19.PNG'
    },
    { photo: 'assets/skins/foto_banho_de_mar.png',
      text: 'assets/skins/card20.PNG'
    }
  ];
  id = 0;
  constructor(private route:Router) {
     this.id = Math.floor(Math.random()*this.cards.length);

   }

  ngOnInit() {
    document.getElementById('foto_parque').setAttribute('src',this.cards[this.id].photo);
    document.getElementById('text').setAttribute('src',this.cards[this.id].text );

  }

  requestPage(){
    this.route.navigate(['/']);
  }
}
