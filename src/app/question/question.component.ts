import {ChangeDetectorRef, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'question-component',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  standalone: false
})
export class QuestionComponent {

  protected readonly question = 'Salut Giugiu, est-ce que ça te dit de passer la St-Valentin avec moi ?';

  loveImages: string[] = [];
  angryImages: string[] = [];
  loveImageUrl = 'animated_heart.gif'
  angryImageUrl = 'animated_angry.gif';
  emojiMinSize = 25;
  emojiMaxSize = 200;

  screenWidth: any;
  screenHeight: any;

  boxWidth: any;
  boxHeight: any;

  noButtonWidth = 0;
  noButtonHeight = 0;
  noButtonLeft = 0;
  noButtonTop = 0;
  countMouseOverNoButton = 0;
  maxCountMouseOverNoButton = 10;

  yesButtonBigRate = 1.2;
  yesButtonWidth = 0;
  yesButtonHeight = 0;
  yesButtonFontSize = 16;
  yesInitalButtonWidth = 0;
  yesInitialButtonHeight = 0;
  yesInitialButtonFontSize = 16;
  countClickOnYesButton = 0;
  maxCountClickOnYesButton = 5;

  minX = 0;
  maxX = 0;
  minY = 0;
  maxY = 0;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getViewPortWidthHeight();
    this.getQuestionBoxWidthHeight();
    this.getButtonWidthHeight();
    this.getMinMaxTopLeft();
  }

  getViewPortWidthHeight(): void {
    const element = document.querySelector('.main') as HTMLElement;

    if (element) {
      const rect = element.getBoundingClientRect();
      this.screenWidth = rect.width;
      this.screenHeight = rect.height;
    } else {
      console.error('Element with class "main" not found.');
    }
  }

  getQuestionBoxWidthHeight(): void {
    const element = document.querySelector('.question-card-frame') as HTMLElement;

    if (element) {
      const rect = element.getBoundingClientRect();
      this.boxWidth = rect.width;
      this.boxHeight = rect.height;
    } else {
      console.error('Element with class "question-card-frame" not found.');
    }
  }

  getButtonWidthHeight(): void {
    const element = document.querySelector('.no-button') as HTMLElement;

    if (element) {
      const rect = element.getBoundingClientRect();
      this.noButtonWidth = rect.width;
      this.noButtonHeight = rect.height;
      this.yesButtonWidth = rect.width;
      this.yesButtonHeight = rect.height;
      this.yesInitalButtonWidth = rect.width;
      this.yesInitialButtonHeight = rect.height;
    } else {
      console.error('Element with class "no-button" not found.');
    }
  }

  moveNoButton(): void {
    if (this.countMouseOverNoButton < this.maxCountMouseOverNoButton) {
      const element = document.querySelector('.no-button') as HTMLElement;

      if (element) {
        this.resetYesButton();
        this.noButtonLeft = this.randomNumberInRange(this.minX, this.maxX);
        this.noButtonTop = this.randomNumberInRange(this.minY, this.maxY);

        this.addDynamicImages(3, this.angryImages, this.angryImageUrl);
        this.countMouseOverNoButton++;
      }

    } else {
      this.router.navigate(['/bad-ending']);
    }
  }

  resetNoButton(): void {
    this.countMouseOverNoButton = 0;
    this.noButtonLeft = 0;
    this.noButtonTop = 0;
    this.angryImages = [];
  }

  biggerYesButton(): void {
    if (this.countClickOnYesButton < this.maxCountClickOnYesButton) {
      const element = document.querySelector('.yes-button') as HTMLElement;

      if (element) {
        this.resetNoButton();
        this.yesButtonWidth = this.yesButtonWidth * this.yesButtonBigRate;
        this.yesButtonHeight = this.yesButtonHeight * this.yesButtonBigRate;
        this.yesButtonFontSize = this.yesButtonFontSize * this.yesButtonBigRate;

        this.addDynamicImages(4, this.loveImages, this.loveImageUrl);
        this.countClickOnYesButton++;
      }

    } else {
      this.router.navigate(['/happy-ending']);
    }
  }

  resetYesButton(): void {
    this.countClickOnYesButton = 0;
    this.yesButtonWidth = this.yesInitalButtonWidth;
    this.yesButtonHeight = this.yesInitialButtonHeight;
    this.yesButtonFontSize = this.yesInitialButtonFontSize;
    this.loveImages = [];
  }

  getMinMaxTopLeft() {
    this.minX = -this.boxWidth / 2;
    this.maxX = (this.boxWidth / 2) - 10 - this.noButtonWidth;
    this.minY = -this.boxHeight / 2 - this.noButtonHeight;
    this.maxY = (this.boxHeight / 2) - 5 - (2 * this.noButtonHeight);
  }

  randomNumberInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
    this.cdr.detectChanges();
  }

  addDynamicImages(maxNumber: number, tab: string[], image: string): void {
    for (let i: number = 0; i < maxNumber; i++) {
      tab.push(image);
    }
  }

  getRandomWidth(): number {
    return Math.floor(Math.random() * (this.emojiMaxSize - this.emojiMinSize)) + this.emojiMinSize;
    this.cdr.detectChanges();
  }

}
