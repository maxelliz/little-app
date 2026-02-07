import {Component, OnInit} from '@angular/core';
import moment from 'moment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
  standalone: false
})
export class WeatherAppComponent implements OnInit {
  cityName: string = '';
  weatherData: any;
  iconUrl: string = '';
  currentDate: string = '';
  loading: boolean = false;
  error: string = '';

  private url = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getWeather();
  }

  getNearestCity(): String {
    this.cityName = 'Managua';
    return this.cityName;
  }

  getWeather(): void {
    this.loading = true;
    this.error = '';
    const fullUrl = `${this.url}?q=${this.getNearestCity()}&appid=${this.apiKey}&units=metric`;
    this.http.get(fullUrl).subscribe(
      (data: any) => {
        this.weatherData = data;
        this.iconUrl = `https://openweathermap.org/img/w/$%7Bdata.weather%5B0%5D.icon%7D.png%60`;
        this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        document.getElementById('weather-info')?.style.setProperty('display', 'block');
        this.loading = false;
      },
      (error) => {
        this.error = 'City not found. Please try again.';
        this.loading = false;
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
