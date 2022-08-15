import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private route:Router) {
    const firstOpen = localStorage.getItem('firstOpen');
    if(firstOpen==null){
      localStorage.setItem('firstOpen', JSON.stringify(true));
      this.route.navigate(['/tela1']);
    }else{
      if(firstOpen == 'true'){
        this.route.navigate(['/tela1']);
      } else{
        this.route.navigate(['/tabs/tab2']);
      }
    }
  }
}
