import { Component, OnChanges, OnInit } from '@angular/core';
import { Comic } from 'src/app/interfaces/comic';
import { ComicApiService } from 'src/app/services/comic-api.service';

@Component({
  selector: 'app-comic-rank',
  templateUrl: './comic-rank.component.html',
  styleUrls: ['./comic-rank.component.css']
})
export class ComicRankComponent implements OnInit {

  constructor(private comicService: ComicApiService) { }
  loading: boolean = true;
  comic: any;

  ngOnInit() {
    this.getComic();
    
    setTimeout(() =>{
      this.loading = false;
    },1000);
    
  }

  getComic(){
    let idRand = Math.floor(Math.random()*(1000-0)) + 0;
    this.comicService.getComic(idRand)
      .subscribe(res => this.comic = res);
  } 

}
