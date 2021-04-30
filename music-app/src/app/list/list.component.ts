import { Component, OnInit } from '@angular/core';
import { AlbumModel } from 'src/album.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : AlbumModel[] = [];

  constructor(private service : AlbumService) { }

  ngOnInit(): void {
    this.list = this.service.getList();
  }

}
