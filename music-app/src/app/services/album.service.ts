import { Injectable } from '@angular/core';
import { AlbumModel } from 'src/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums : AlbumModel[] = [];

  constructor() { }

  addAlbum(album : AlbumModel) {
    this.albums.push(album);
  }

  getList() {
    return this.albums;
  }
}
