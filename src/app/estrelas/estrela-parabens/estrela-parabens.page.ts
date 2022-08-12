import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estrela-parabens',
  templateUrl: './estrela-parabens.page.html',
  styleUrls: ['./estrela-parabens.page.scss'],
})
export class EstrelaParabensPage implements OnInit {
  cards = ['/card1'];

  constructor(private route:Router) { }

  ngOnInit() {
  }

  requestPage(){
    this.route.navigate(['/card1']);
  }
}
