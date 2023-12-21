import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensaje: string;

  constructor( private spotify: SpotifyService )
  {
    this.error = false;

    this.loading = true;
    this.spotify.getNewReleases()
                .subscribe(data => { 
                 this.nuevasCanciones = data;
                 this.loading = false;
                }, (errorM) => {
                 
                  this.loading = false;
                  this.error = true;
                  this.mensaje = errorM.error.error.message;
                })
  }

  ngOnInit(){

  }
}
