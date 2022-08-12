import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estrela-parabens',
  templateUrl: './estrela-parabens.page.html',
  styleUrls: ['./estrela-parabens.page.scss'],
})
export class EstrelaParabensPage implements OnInit {
  cards = ['/card1', '/card2', '/card3', '/card4'
  , '/card5', '/card6', '/card7', '/card8', '/card9'
  , '/card10'];

  constructor(private route:Router) { }

  ngOnInit() {
  }

  requestPage(){
    this.route.navigate([this.cards[Math.floor(Math.random()*this.cards.length)]]);
  }
}
