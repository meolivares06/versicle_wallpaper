import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import * as fileSaver from 'file-saver';
import {Versicle} from "../../share";

// Objetivo mostrar un versiculo
@Component({
  selector: 'app-versicle',
  templateUrl: './versicle.component.html',
  styleUrls: ['./versicle.component.scss']
})
export class VersicleComponent implements OnInit {
  @Input() versicle: Versicle;
  @Input() index: number = 0

  @ViewChild('sectionVersicle') sectionVersicle: ElementRef;
  @ViewChild('btnDownload') btnDownload: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  wallpaperDownload() {
    this.btnDownload.nativeElement.style.visibility = 'hidden';
    htmlToImage
      .toPng(this.sectionVersicle.nativeElement, {pixelRatio: 1/*window.devicePixelRatio*/})
      .then((dataUrl) => {

        fileSaver.saveAs(dataUrl, `wallpaper${this.index}.png`);

        this.btnDownload.nativeElement.style.visibility = 'visible';

      })
      .catch((e) => {
        this.btnDownload.nativeElement.style.visibility = 'visible';
        console.error('Se produjo un error al intentar exportar la imagen del grafo de relaciones: ', e);
      });
  }
}
