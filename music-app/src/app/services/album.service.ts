import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlbumModel } from 'src/album.model';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private static baseUri : string = "http://localhost:8880";

  constructor(private http : HttpClient) { }

  addAlbum(album : AlbumModel) {
    this.http.post(AlbumService.baseUri + "/add", album).subscribe(
      data => data = album);
  }

  async getList() {
    return await this.http.get<AlbumModel[]>(AlbumService.baseUri + "/list").toPromise();
    // return this.http.get<AlbumModel[]>(AlbumService.baseUri + "/list")
    //   .pipe(
    //     retry(1)
    //   );
  }

  delAlbum(id : number) {
    return this.http.delete(AlbumService.baseUri + "/del/" + id).subscribe();
  }

  // sortByTitle() {
  //   this.albums.sort((a,b) => a.title > b.title ? 1 : ((a.title < b.title) ? -1 : 0));
  //   return this.albums;
  // }

  findByTitle(title : string) {
    return this.http.get<AlbumModel>(AlbumService.baseUri + "/title/" + title)
      .pipe(
          retry(1)
      );
  }

  findByArtist(artist : string) {
    return this.http.get<AlbumModel[]>(AlbumService.baseUri + "/artist/" + artist)
    .pipe(
      retry(1)
    );
  }

  findByGenre(genre : string) {
    return this.http.get<AlbumModel[]>(AlbumService.baseUri + "/genre/" + genre)
    .pipe(
      retry(1)
    );
  }
}
