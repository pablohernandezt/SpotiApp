import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  resultadoCanciones : any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }


  buscar(termino: string){
    this.loading = true;

    console.log(termino);
    this.spotify.getArtistas( termino) . subscribe( (data: any) =>{
        console.log(data);
        this.resultadoCanciones = data;
      
      this.loading= false;
    })

  }
}
