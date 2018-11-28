import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'
import { FileUploader, FileUploaderOptions, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { CountryListComponent } from '../country-list/country-list.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  @ViewChild(CountryListComponent)
  child:CountryListComponent;
  public progress: number;
  public message: string;
  constructor(private http: Http) { }

  
  public uploader:FileUploader = new FileUploader({url:'http://localhost:5000/file-upload'});
  ngOnInit (){
    this.uploader.onSuccessItem = (item:FileItem, response:string, status:number, 
      headers:ParsedResponseHeaders) => 
      { 
        console.log("onSuccessItem " + status, response, item); 
        this.child.refreshList();
          if(response) 
          { //parse your response.
          } 
      }
  }
  

}
