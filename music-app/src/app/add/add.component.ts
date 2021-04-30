import { Component, OnInit } from '@angular/core';
import { AlbumModel } from 'src/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  album : AlbumModel;
  generes : string[];
  submitted : boolean;

  constructor(private service : AlbumService) { 
    this.album = new AlbumModel();
    this.generes = ["Rock","Jazz","Pop","Rap"];
  }

  ngOnInit(): void {
  }

  saveAlbum() {
    this.service.addAlbum(this.album);
    this.submitted = true;
  }
}
