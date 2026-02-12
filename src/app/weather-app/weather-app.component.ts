import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'weather-app-component',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
  standalone: false
})
export class WeatherAppComponent implements OnInit {
  lat: any;
  lng: any;
  country: string = '';
  cityName: string = '';
  weatherData: any;
  iconUrl: string = '';
  loading: boolean = true;
  error: string = '';

  private urlPosition = 'https://api.openweathermap.org/geo/1.0/reverse';
  private urlWeather = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            const fullUrlPosition = `${this.urlPosition}?lat=${this.lat}&lon=${this.lng}&appid=${this.apiKey}&units=metric`;

            this.http.get(fullUrlPosition).subscribe(
              (data: any) => {
                this.country = data[0].country;
                this.cityName = data[0].name;
                const fullUrlWeather = `${this.urlWeather}?q=${this.cityName}&appid=${this.apiKey}&units=metric`;

                this.http.get(fullUrlWeather).subscribe(
                  (data: any) => {
                    this.weatherData = data;
                    this.iconUrl = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
                    this.loading = false;
                    this.cdr.detectChanges();
                  },
                  (error) => {
                    this.error = 'City not found. Please try again.';
                    this.loading = false;
                    console.error('Error fetching weather data:', error);
                    this.cdr.detectChanges();
                  }
                );
              },
              (error) => {
                console.error('Error fetching position data:', error);
              }
            );
          }
        },
        (error: GeolocationPositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
