import { Component, OnChanges, OnInit } from '@angular/core';
import { ComicApiService } from 'src/app/services/comic-api.service';

@Component({
  selector: 'app-comic-rank',
  templateUrl: './comic-rank.component.html',
  styleUrls: ['./comic-rank.component.css']
})
export class ComicRankComponent implements OnInit {

  constructor(private comicService: ComicApiService) { }
  loading: boolean = false;
  notFound: boolean = false;
  comic: any;

  ngOnInit() {
    
    this.loading = true;
    setTimeout(() =>{
      this.getComic();
    },1000);
    
  }

  getComic(){

    this.loading = true;
    let idRand = Math.floor(Math.random()*(1000-0)) + 0;
    this.comicService.getComic(idRand)
      .subscribe(
        res => {
          this.comic = res; 
          this.loading = false; 
          this.notFound = false
        },
        err => {
          this.notFound = true;
          this.loading = false;
        }  
      );
  } 

}
