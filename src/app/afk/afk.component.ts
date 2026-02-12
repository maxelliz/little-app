import {Component} from '@angular/core';

@Component({
  selector: 'afk-component',
  templateUrl: './afk.component.html',
  styleUrls: ['./afk.component.css'],
  standalone: false
})
export class AfkComponent {
  protected readonly afkTimer = 20; //doit etre la meme valeur que dans le home.component.ts
  protected readonly afkQuestion1 = "Tu vas bien Giugiu ???";
  protected readonly afkQuestion2 = "Tu n'as pas cliqué sur l'écran depuis " + this.afkTimer + " secondes";
  protected readonly afkQuestion3 = "Préviens tout de suite Batou ou bien appelle une ambulance :)";
}
