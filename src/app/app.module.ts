import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {WeatherAppComponent} from './weather-app/weather-app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent,
    WeatherAppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
