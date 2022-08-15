import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card13',
  templateUrl: './card13.page.html',
  styleUrls: ['./card13.page.scss'],
})
export class Card13Page implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  requestPage(){
    this.route.navigate(['/']);
  }
}