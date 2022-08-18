/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valueProgressBar = 0;
  tarefas=[{
    name: '',
      done: false,
      date: 0,
      month: 0,
      color: '#2EA8FF',
      checkbox: true
    },
    {
      name: '',
      done: false,
      date: 0,
      month: 0,
      color: '#2EA8FF',
      checkbox: true
    },
    {
      name: '',
      done: false,
      date: 0,
      month: 0,
      color: '#2EA8FF',
      checkbox: true
    },{
      name: '',
      done: false,
      date: 0,
      month: 0,
      color: '#2EA8FF',
      checkbox: true
    }];
  modelTarefa=['','','', ''];
  date = 0;
  month = 0;
  constructor(private toastCtrl: ToastController, private route:Router) {
    this.date = new Date().getUTCDate();
    this.month = new Date().getUTCMonth();
    let taskJSON = localStorage.getItem('taskDB');
    localStorage.setItem('firstOpen', JSON.stringify(false));
    this.valueProgressBar = 0;
    if(taskJSON != null){
      this.tarefas = JSON.parse(taskJSON);
      for(let i =0; i<this.modelTarefa.length; i++){
        this.modelTarefa[i] =this.tarefas[i].name;
      }
      this.updateProgressBar();
      const sameDay = this.verificarValidade(this.tarefas);
      if(sameDay){
        localStorage.removeItem('taskDB');
        console.log("apagando storage");
        this.tarefas=[{
          name: '',
            done: false,
            date: 0,
            month: 0,
            color: '#2EA8FF',
            checkbox: true
          },
          {
            name: '',
            done: false,
            date: 0,
            month: 0,
            color: '#2EA8FF',
            checkbox: true
          },
          {
            name: '',
            done: false,
            date: 0,
            month: 0,
            color: '#2EA8FF',
            checkbox: true
          },{
            name: '',
            done: false,
            date: 0,
            month: 0,
            color: '#2EA8FF',
            checkbox: true
          }];
          this.modelTarefa=['','','', ''];
          this.valueProgressBar = 0;
      }
    }
  }

  verificarValidade(tasks){

    for(let i =0; i<tasks.length; i++){
      if(tasks[i].date != this.date || tasks[i].month != this.month){
        if(tasks[i].date != 0 || tasks[i].month != 0){
          return true;
        }
      }
    }
    return false;
  }

  async addTarefa(taskInput, i){
    const size = this.modelTarefa[i].length;
    //var index = this.tarefas.indexOf(taskInput);
    console.log(size);
    var type = false;
    if(size < 1 ){
      this.tarefas[i].name = '';
      this.tarefas[i].done = false;
      type= true;
      this.updateLocalStorage();
      //return;
    }
    const date = new Date().getUTCDate();
    const month = new Date().getUTCMonth();

    let task = {
      name: this.modelTarefa[i],
      done: false,
      date: date,
      month: month,
      color: '#2EA8FF',
      checkbox: type
    };

    this.tarefas[i] = task;
    this.updateLocalStorage();
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
