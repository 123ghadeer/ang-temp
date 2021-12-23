import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit(): void {
  }


  public createImgPath = (serverPath: string) => {
    console.log(serverPath)
    return `https://localhost:44376/${serverPath}`;
  }


}
