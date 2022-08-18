import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {

  }

  ngOnInit() {
  }

  requestMenu(tipo){

    if(tipo=='branco'){
      document.getElementById('azul').style.backgroundColor= 'rgba(37,98,150,1)';
      document.getElementById('rectangle_31').style.backgroundColor= 'white';
      document.getElementById('vector').setAttribute('src','assets/skins/vector-azul.png' );
      document.getElementById('vector_ek1').setAttribute('src','assets/skins/vector_ek1-link.png' );
    }else{
      document.getElementById('azul').style.backgroundColor= 'rgba(245.44,245.44,245.44,1)';
      document.getElementById('rectangle_31').style.backgroundColor= 'rgba(37,98,150,1)';
      document.getElementById('vector').setAttribute('src','assets/skins/vector.png' );
      document.getElementById('vector_ek1').setAttribute('src','assets/skins/pdf.png' );
    }
  }
}
