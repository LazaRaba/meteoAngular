import { Injectable } from '@angular/core';
import { Meteo } from '../model/meteo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  // Déclarer les propriétés de l'API et les initialiser à partir de l'environnement
  private urlApi: string = environment.meteoApiBaseUrl;
  private nameApi: string = environment.meteoApiNameParam;
  private langApi: string = environment.meteoApiLangParam;
  private unitsApi: string = environment.meteoApiUnitsParam;

  private iconApi: string = environment.meteoApiIconUrl;

  // Déclarer les propriétés de la ville, de la langue et de l'unité par défaut
  name: string = '';
  lang: string = 'fr';
  units: string = 'metric';
  icon: string = '';



  constructor(private http: HttpClient) {
    this.getMeteoData();
  }

  

  // Définir la méthode pour récupérer la météo en utilisant l'API OpenWeatherMap
  getMeteoData(): Observable<Meteo> {

    // Construire l'URL de l'API avec les propriétés de la ville, de la langue et de l'unité actuelles
    const url = `${this.urlApi}&${this.nameApi}=${this.name}&${this.langApi}=${this.lang}&${this.unitsApi}=${this.units}`; 

    // Envoyer une requête HTTP GET à l'API et retourner l'observable de la réponse
    return this.http.get<Meteo>(url);
  }

  getIconUrl(iconCode: string): string {
    return `${this.iconApi}${iconCode}@4x.png`;
  }

  // Définir une méthode pour changer le nom de la ville
  setName(name: string) {
    this.name = name;
  }

}
