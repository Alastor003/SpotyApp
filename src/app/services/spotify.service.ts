import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token:string = 'BQBRbDW_7QM2RdtOuiCmYcdfekxQDBSpHDyobWrmUYSpcbJ3L713ga-cV05Xx_hTbWdxNypoXh1EneyfCUj5bSrrkmrL5MywpcSXfwX80ULisGj7B_M';

  constructor(private http: HttpClient) { 

  }

  getQuery( query: string) 
  {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    })

    return this.http.get(url, { headers } )
  }

  getNewReleases() {
      
    return this.getQuery('browse/new-releases')
               .pipe( map(data => data['albums'].items));
                    
  }            

  getArtistas( termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe( map(data => data['artists'].items));              
  }

  getArtista( id: string) {

    return this.getQuery(`artists/${id}`);
              //  .pipe( map(data => data['artists'].items));              
  }

  getTopTracks( id: string) {

    return this.getQuery(`artists/${id}/top-tracks?market=us`)
               .pipe( map(data => data['tracks']));              
  }
}
