import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumModel } from 'src/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : AlbumModel[] = [];

  constructor(private service : AlbumService, private router : Router) { }

  ngOnInit(): void {
    this.service.getList().then(data => this.list = data);
    // this.service.getList().subscribe(data => this.list = data);
    if(localStorage.getItem("user") == null)
      this.router.navigate(['login']);
  }

  delete(id : number) {
    var ans = confirm("Are you sure to delete?");
    if(ans)
      this.service.delAlbum(id);
  }

  orderByTitle() {
    this.list.sort((a,b) => a.title > b.title ? 1 : ((a.title < b.title) ? -1 : 0));
  }

  orderByArtist() {
    this.list.sort((a,b) => a.artist > b.artist ? 1 : ((a.artist < b.artist ? -1 : 0)));
  }
}
