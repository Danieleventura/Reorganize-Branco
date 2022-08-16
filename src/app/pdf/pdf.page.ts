import { Component, OnInit } from '@angular/core';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
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
  constructor(private document: DocumentViewer) { }
  pdfSrc  =  "/assets/skins/tcc.pdf" ; 
  ngOnInit() {
  
  }

}
