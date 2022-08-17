import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela4',
  templateUrl: './tela4.page.html',
  styleUrls: ['./tela4.page.scss'],
})
export class Tela4Page implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  requestPage(){
    this.route.navigate(['/tabs/tab2']);
  }

  requestPageBack(){
    this.route.navigate(['/tela3']);
  }
}