import { Component, Input, OnInit } from '@angular/core';
import { GenerateURLShortnerService } from '../service/generate-url-shortner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.css']
})
export class URLShortnerComponent implements OnInit {

  url : string = "";
  shortURL : string = "";
  constructor(private service : GenerateURLShortnerService) {}

  ngOnInit(): void {
  }

  getShortnedURL(){
    this.service.getShortURL(this.url).subscribe(
      Response => {
        return this.getSuccessfullResponse(Response);
      },
      Error => { 
        return this.getErrorResponse(Error);
      }
    )
  }

  getSuccessfullResponse(Response : any){
    this.shortURL = Response.result.short_link;
  }

  getErrorResponse(Error : any){
    alert("Invalid Attempt!!");
  }

}
