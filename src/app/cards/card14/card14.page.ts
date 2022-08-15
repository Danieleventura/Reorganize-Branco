import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card14',
  templateUrl: './card14.page.html',
  styleUrls: ['./card14.page.scss'],
})
export class Card14Page implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  requestPage(){
    this.route.navigate(['/']);
  }
}
