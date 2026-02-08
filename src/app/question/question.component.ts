import {Component} from '@angular/core';

@Component({
  selector: 'app-question-app',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  standalone: false
})
export class QuestionComponent {
  protected readonly question = 'Hello World'

  //'Salut Giugiu, est-ce que ça te dit de passer la St-Valentin avec moi ?'

  answerYes(): void {
    console.log('YES');
  }

  answerNo(): void {
    console.log('NO');
  }
}
