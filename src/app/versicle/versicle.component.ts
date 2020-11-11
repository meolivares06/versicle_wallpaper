import { Component, OnInit, Input } from '@angular/core';
// Objetivo mostrar un versiculo
@Component({
  selector: 'app-versicle',
  templateUrl: './versicle.component.html',
  styleUrls: ['./versicle.component.scss']
})
export class VersicleComponent implements OnInit {
  @Input() versicle: string = 'ninguno';
  @Input() index: number = 0
  constructor() { }

  ngOnInit(): void {
  }

}
