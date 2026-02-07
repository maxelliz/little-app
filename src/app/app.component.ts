import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  protected readonly question = 'Salut Giugiu, est-ce que ça te dit de passer la St-Valentin avec moi ?'

  answerYes(): void {
    console.log('YES');
  }

  answerNo(): void {
    console.log('NO');
  }
}
