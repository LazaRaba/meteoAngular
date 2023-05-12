import { Component, OnDestroy, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { Meteo } from '../model/meteo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit, OnDestroy {

  //* Injecter le service MeteoService dans le composant
  constructor(private meteoService: MeteoService) { }

  //* Déclarer une propriété newName pour stocker le nouveau nom de la ville
  newName: string = 'Toulouse';

  //* Déclarer une propriété meteo pour stocker les données de la météo
  meteo: Meteo | undefined;

  //* Déclarer une propriété meteoSubscription pour stocker l'abonnement à la météo
  meteoSubscription: Subscription | undefined;

  ngOnInit(): void {
    //* Appeler la méthode updateMeteo() au démarrage du composant
    this.updateMeteo();
  }

  ngOnDestroy(): void {
    //* Se désabonner de la météo lorsque le composant est détruit pour éviter les fuites de mémoire
    this.meteoSubscription?.unsubscribe();
  }

  //* Définir la méthode pour mettre à jour la météo en utilisant le service MeteoService
  updateMeteo(): void {
    //* Changer le nom de la ville dans le service MeteoService en utilisant la propriété newName
    this.meteoService.setName(this.newName);
    //* Vider le nom de la ville dans le input html une fois le bouton cliquer
    this.newName = "";
    //* Récupérer les données de la météo en utilisant le service MeteoService et s'abonner à l'observable pour recevoir les données
    this.meteoSubscription = this.meteoService.getMeteo()
      .subscribe({
        next: (meteo: Meteo) => {
          //* Stocker les données de la météo dans la propriété meteo du composant
          this.meteo = meteo;
          console.log(this.meteo);
        },
        error: (error: any) => {
          console.log("Error :", error);
        },
        complete: () => {
          console.log("Complete !")
        },
      });
  }
}
