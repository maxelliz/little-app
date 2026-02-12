import {Component} from '@angular/core';

@Component({
  selector: 'happy-ending-component',
  templateUrl: './happy-ending.component.html',
  styleUrls: ['./happy-ending.component.css'],
  standalone: false
})
export class HappyEndingComponent {
  protected readonly phrase1 = "'Va faire un gros bisou à Batou, tu l'as bien mérité petit Chorizo :)'";
}
