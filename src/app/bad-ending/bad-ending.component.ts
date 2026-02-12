import {Component} from '@angular/core';

@Component({
  selector: 'bad-ending-component',
  templateUrl: './bad-ending.component.html',
  styleUrls: ['./bad-ending.component.css'],
  standalone: false
})
export class BadEndingComponent {
  protected readonly phrase1 = "Tu as été très vilaine à cliquer sur Non ! Kiki est en colère !";
  protected readonly phrase2 = "Reviens vite sur la page d'accueil avant qu'elle ne te morde !";
}
