import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela1',
  templateUrl: './tela1.page.html',
  styleUrls: ['./tela1.page.scss'],
})
export class Tela1Page implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  requestPage(){
    this.route.navigate(['/tela2']);
  }
}

