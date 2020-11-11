import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, timer} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'versiculos';
  versicles = [
    'Porque tanto amó Dios al mundo que ha dado a Su Hijo Unigénito para que todo aquel que en El crea no se pierda, mas tenga vida eterna. Juan 3:16',
    'El que cree en el Hijo tiene vida eterna; pero el que rehúsa creer en el Hijo no verá la vida, sino que la ira de Dios está sobre él. Juan 3:36',
    'Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron.Romanos 5:12'
  ];
  nextIndex = 0;
  currentVersicle$ = new BehaviorSubject<string>(this.versicles[this.nextIndex])

  ngOnInit() {
    setInterval(function() {this.changeVersicle()}.bind(this), 3000)
  }

  changeVersicle(): void {
    this.nextIndex = Math.floor(Math.random() * 3);
    console.log(this.nextIndex);

    this.currentVersicle$.next(this.versicles[this.nextIndex])
  }
}
