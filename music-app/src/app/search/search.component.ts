import { Component, OnInit } from '@angular/core';
import { AlbumModel } from 'src/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  album : AlbumModel;
  query : string;
  criteria : string;

  constructor(private service : AlbumService) { 
    this.album = new AlbumModel();
  }

  ngOnInit(): void {
  }

  search() {
    if(this.criteria == "Title")
      this.album = this.service.findByTitle(this.query);
  }
}
