import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valueProgressBar = 0
  tarefas=[{
    name: '',
      done: false,
      date: 0,
      month: 0,
      color: '#2EA8FF'
    }, 
    {
      name: '',
      done: false,
      date: 0,
      month: 0,
      color: '#2EA8FF'
    },
    {
      name: '',
      done: false,
      date: 0,
      month: 0,
      color: '#2EA8FF'
    },{
      name: '',
      done: false,
      date: 0,
      month: 0,
      color: '#2EA8FF'
    }];
  modelTarefa=['','','', ''];
  date = new Date().getUTCDate();
  month = new Date().getMonth();
  constructor(private toastCtrl: ToastController, private route:Router) {
    //this.tarefas.length = 4;
    let taskJSON = localStorage.getItem('taskDB');
    localStorage.setItem('firstOpen', JSON.stringify(false));
    if(taskJSON != null){
      this.tarefas = JSON.parse(taskJSON);
      this.updateProgressBar();
      for(let i =0; i<this.modelTarefa.length; i++){
        this.modelTarefa[i] =this.tarefas[i].name;
      }
      const sameDay = this.verificarValidade(this.tarefas);
      if(sameDay){
        localStorage.removeItem('taskDB');
        this.updateProgressBar();
      }
    }
  }

  verificarValidade(tasks){
    const taskAux = tasks[0];
    if(taskAux.date != null && taskAux.month!= null && taskAux.date != this.date && taskAux.month!= this.month){
      return true;
    }else{return false;}
  }

  async addTarefa(taskInput, i){
    const size = this.modelTarefa[i].length;
    var index = this.tarefas.indexOf(taskInput);
    if(size < 1 ){
      this.tarefas[index].name = '';
      this.tarefas[index].done = false;
      this.updateLocalStorage();
      return;
    }
    const date = new Date().getUTCDate();
    const month = new Date().getMonth();

    let task = {
      name: this.modelTarefa[i],
      done: false,
      date: date,
      month: month,
      color: '#2EA8FF'
    };

    const size2 = this.tarefas.length;
    if(size2 <=4){
      this.tarefas[index] = task;
      this.updateLocalStorage();
    }
  }

  updateLocalStorage(){
    localStorage.setItem('taskDB', JSON.stringify(this.tarefas));
  }

  changeStatus(task: any){
    console.log("status");
    var index = this.tarefas.indexOf(task);

    if(task.name != ''){
      if (index > -1) {
        this.tarefas[index].done = !task.done;
        if(this.tarefas[index].done){
          this.tarefas[index].color = 'rgba(37,98,150,1)';
        }else{
          this.tarefas[index].color = '#2EA8FF';
        }
        
        console.log("alterou");
        this.updateLocalStorage();
        if(task.done){
          this.valueProgressBar+= 0.25
          if(this.valueProgressBar == 1){
            this.route.navigate(['/tabs/estrela-parabens']);
          }
        }else{
          this.valueProgressBar-= 0.25
        }
      } 
    }
  }

  updateProgressBar(){
    this.tarefas.forEach(element => {
      if(element.done){
        this.valueProgressBar+= 0.25
      }
    });
  }
}
