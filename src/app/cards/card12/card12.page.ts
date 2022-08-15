import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card12',
  templateUrl: './card12.page.html',
  styleUrls: ['./card12.page.scss'],
})
export class Card12Page implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  requestPage(){
    this.route.navigate(['/']);
  }
}
