import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';

import { IonicModule } from '@ionic/angular';

import { PdfPageRoutingModule } from './pdf-routing.module';

import { PdfPage } from './pdf.page';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer' ;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfPageRoutingModule,
    PdfViewerModule
  ],
  providers: [DocumentViewer],
  declarations: [PdfPage]
})
export class PdfPageModule {}
