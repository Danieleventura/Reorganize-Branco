import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card11',
  templateUrl: './card11.page.html',
  styleUrls: ['./card11.page.scss'],
})
export class Card11Page implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  requestPage(){
    this.route.navigate(['/']);
  }
}
