import {ChangeDetectorRef, Component, Injectable, NgZone} from '@angular/core';
import {fromEvent, merge, Subscription, switchMap, timer} from 'rxjs';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false
})
@Injectable({providedIn: 'root'})
export class HomeComponent {
  private idleSub: Subscription = new Subscription();
  isAfkPanelVisible: boolean = false;
  protected readonly afkTimer = 20;

  constructor(private ngZone: NgZone, cd: ChangeDetectorRef) {
    this.detectAfk(cd);
  }

  detectAfk(cd: ChangeDetectorRef) {
    // Liste des événements considérés comme une activité
    const activity$ = merge(
      fromEvent(window, 'mousemove'),
      fromEvent(window, 'keydown'),
      fromEvent(window, 'click'),
      fromEvent(window, 'scroll')
    );

    // Exécuter en dehors de la Zone Angular pour éviter de déclencher
    // la détection de changement à chaque mouvement de souris
    this.ngZone.runOutsideAngular(() => {
      this.idleSub = activity$.pipe(
        // Réinitialise le timer
        switchMap(() => timer(1000 * this.afkTimer))
      ).subscribe(() => {
        this.ngZone.run(() => {
          this.isAfkPanelVisible = true;
          cd.detectChanges();
        });
      });
    });
  }

  clickOnAfkCard(): void {
    this.isAfkPanelVisible = false;
  }

}
