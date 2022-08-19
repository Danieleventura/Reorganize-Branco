import { Component, OnInit } from '@angular/core';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer' ;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.page.html',
  styleUrls: ['./pdf.page.scss'],
})
export class PdfPage implements OnInit {
  options = {
    title: 'My PDF'
  }
  constructor() { }
  pdfSrc  =  "/assets/skins/reorganize.pdf" ;
  ngOnInit() {

  }

}
