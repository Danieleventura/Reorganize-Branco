import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
})
export class LinksPage implements OnInit {
  url = ['https://www.youtube.com/watch?v=Qx8JIoNOz0Y&ab_channel=CursosATG',
  'https://www.vittude.com/blog/hiperconectividade-como-contribui-para-ansiedade/',
  'https://www.youtube.com/watch?v=uaaC57tcci0&ab_channel=Netflix'];
  constructor() { }

  ngOnInit() {
  }

  openUrlExterna(index){
    window.open(this.url[index-1], '_system');
  }
}
