import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, interval, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Versicle, VERSICLES} from "../../share";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {
  title = 'versiculos';
  versicles: Versicle[] = VERSICLES;
  nextIndex = 0;
  currentVersicle$ = new BehaviorSubject<Versicle>(this.versicles[this.nextIndex])
  destroySubject$ = new Subject();
  constructor() { }

  ngOnInit() {
    //setInterval(function() {this.changeVersicle()}.bind(this), 15000)
    const number$ = interval(15000).pipe(
      takeUntil(this.destroySubject$)
    )
    number$.subscribe(value => this.changeVersicle())


    this.destroySubject$.subscribe({next: null, error: null, complete: ()=>console.log('destroy complete') })
  }
  ngOnDestroy() {
    this.destroySubject$.next()
    //this.destroySubject$.unsubscribe()
  }

  changeVersicle(): void {
    console.log('change');
    this.nextIndex = Math.floor(Math.random() * this.versicles.length);

    if(this.nextIndex > 14) this.nextIndex = 0;

    this.currentVersicle$.next(this.versicles[this.nextIndex])
  }
}
