import {Component} from '@angular/core';

@Component({
  selector: 'app-question-app',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  standalone: false
})
export class QuestionComponent {

  protected readonly question = 'Salut Giugiu, est-ce que ça te dit de passer la St-Valentin avec moi ?';
  boxWidth: any;
  boxHeight: any;
  noButtonWidth = 0;
  noButtonHeight = 0;
  noButtonLeft = 0;
  noButtonTop = 0;
  yesButtonWidth = 0;
  yesButtonHeight = 0;
  yesButtonFontSize = 16;
  minX = 0;
  maxX = 0;
  minY = 0;
  maxY = 0;
  countClickOnYesButton = 0;
  maxCountClickOnYesButton = 4;

  ngOnInit() {
    this.getQuestionBoxWidthHeight();
    this.getButtonWidthHeight();
    this.getMinMaxTopLeft();
  }

  getQuestionBoxWidthHeight() {
    const element = document.querySelector('.question-card-frame') as HTMLElement;

    if (element) {
      const rect = element.getBoundingClientRect();
      this.boxWidth = rect.width;
      this.boxHeight = rect.height;
    } else {
      console.error('Element with class "question-card-frame" not found.');
    }
  }

  getButtonWidthHeight() {
    const element = document.querySelector('.no-button') as HTMLElement;

    if (element) {
      const rect = element.getBoundingClientRect();
      this.noButtonWidth = rect.width;
      this.noButtonHeight = rect.height;
      this.yesButtonWidth = rect.width;
      this.yesButtonHeight = rect.height;
    } else {
      console.error('Element with class "no-button" not found.');
    }
  }

  getMinMaxTopLeft() {
    this.minX = -this.boxWidth / 2;
    this.maxX = (this.boxWidth / 2) - 10 - this.noButtonWidth;
    this.minY = -this.boxHeight / 2 - this.noButtonHeight;
    this.maxY = (this.boxHeight / 2) - 5 - (2 * this.noButtonHeight);
  }

  moveNoButton(): void {
    const element = document.querySelector('.no-button') as HTMLElement;

    if (element) {
      this.noButtonLeft = Math.random() * (this.maxX - this.minX) + this.minX;
      this.noButtonTop = Math.random() * (this.maxY - this.minY) + this.minY;
    }
  }

  biggerYesButton(): void {
    if (this.countClickOnYesButton < this.maxCountClickOnYesButton) {
      const element = document.querySelector('.yes-button') as HTMLElement;

      if (element) {
        this.countClickOnYesButton++;
        this.yesButtonWidth = this.yesButtonWidth * 1.5;
        this.yesButtonHeight = this.yesButtonHeight * 1.5;
        this.yesButtonFontSize = this.yesButtonFontSize * 1.5;
      }
    } else {
      // aller a la page de fin
    }
  }

}
