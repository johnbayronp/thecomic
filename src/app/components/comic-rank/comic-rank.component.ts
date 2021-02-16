import { Component, OnInit } from '@angular/core';
import { ComicApiService } from 'src/app/services/comic-api.service';
@Component({
  selector: 'app-comic-rank',
  templateUrl: './comic-rank.component.html',
  styleUrls: ['./comic-rank.component.css']
})
export class ComicRankComponent implements OnInit {

  constructor(private comicAPI: ComicApiService) { }
  
  ngOnInit(): void {
    this.comicAPI.getComic(5).subscribe(res =>console.log('res',res));
  }

}
