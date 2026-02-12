import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {WeatherAppComponent} from './weather-app/weather-app.component';
import {RouterModule} from '@angular/router';
import {QuestionComponent} from './question/question.component';
import {AfkComponent} from './afk/afk.component';
import {BadEndingComponent} from './bad-ending/bad-ending.component';
import {AppRoutes} from './app.routes';
import {HomeComponent} from './home/home.component';
import {HappyEndingComponent} from './happy-ending/happy-ending.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent,
    QuestionComponent,
    WeatherAppComponent,
    AfkComponent,
    BadEndingComponent,
    HappyEndingComponent,
    HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutes],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
