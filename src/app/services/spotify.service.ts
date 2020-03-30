import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

    // console.log('Spotify service listo');
  }

  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBaULu98qwR-xx3wuN8pd4_rQ8mL8hnpX0Subta9amfNKv0S8v1Mobuo9S-Rv0WmSVvsI6DPapC_lxlAfE'

    })
    return this.http.get(url, {headers});

  }

  getNewReleases(){

    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQCQ_1D3XMWw-XNMuOGEIdjaqHPxqeef0Dt_g2e1AxbdkY57yv8rcr8nkWNg1XTQIhlGnzbtJvv1bkpz9_Y'

    // })
    return this.getQuery('browse/new-releases?limit=15')
          .pipe( map(data => data['albums'].items));
  }

  getArtistas( termino: string){

    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQCQ_1D3XMWw-XNMuOGEIdjaqHPxqeef0Dt_g2e1AxbdkY57yv8rcr8nkWNg1XTQIhlGnzbtJvv1bkpz9_Y'

    // })
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
          .pipe(map(data => data['artists'].items));

  }

  getArtista ( id: string){
    return this.getQuery(`artists/${ id }`);
          // .pipe(map(data => data['artists'].items));
  }

  getTopTracks ( id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=es`)
          .pipe(map(data => data['tracks']));
  }


}
