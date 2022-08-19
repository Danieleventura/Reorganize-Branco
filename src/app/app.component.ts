import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private route:Router, private plt: Platform, 
     private alertCtrl: AlertController) {
    const firstOpen = localStorage.getItem('firstOpen');

    if(firstOpen==null){
      this.scheduleNotification();
      this.startNotification();
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

  async scheduleNotification(){
    await LocalNotifications.schedule({
      notifications:[
        {
          //title: 'Bom dia',
          body: 'Vamos Reorganizar seu dia hoje ;)? - 1 min',
          id: 2,
          schedule: {
            every: 'day',
           
            repeats: true
          },
          sound: null,
          attachments: null,
          actionTypeId: "",
          extra: null
        }
      ]
    });
  }

  async startNotification(){
    await LocalNotifications.schedule({
      notifications:[
        {
          //title: 'Bom dia',
          body: 'Vamos Reorganizar seu dia hoje ;)?',
          id: 1,
          schedule: {  
            at: new Date(Date.now() + 1000 *3)
          },
          sound: null,
          attachments: null,
          actionTypeId: "",
          extra: null
        }
      ]
    });
  }
}
