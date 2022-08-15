import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card15',
  templateUrl: './card15.page.html',
  styleUrls: ['./card15.page.scss'],
})
export class Card15Page implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  requestPage(){
    this.route.navigate(['/']);
  }
}
