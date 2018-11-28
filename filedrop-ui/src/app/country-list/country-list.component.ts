import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
// import { Country } from '../view-models/Country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  allCountries: any;
  count = 0;
  countries: any;

  constructor(private dataService: AppDataService,
    private route: ActivatedRoute) {
  }

  private error;
  ngOnInit() {
    this.refreshList();
    // this.dataService.getCountries().subscribe(
    //   countries => {
    //     this.allCountries = countries;

    //     this.count = this.route.snapshot.params['count'];
    //     this.updateList();
    //   }
    // );

    this.route.params.subscribe(params => {
      this.count = params['count'];
      this.updateList();
    });
  }
  refreshList() {
    this.dataService.getCountries().subscribe(res => {
      // If request fails, throw an Error that will be caught
      if (res.status < 200 || res.status >= 300) {
        throw new Error('This request has failed ' + res.status);
      }
      // If everything went fine, return the response
      else {
        this.countries = res.json();
        this.allCountries = res.json();
        this.count = this.route.snapshot.params['count'];
        this.updateList();
      }
    });
  }
  updateList() {
    if (!this.allCountries) {
      this.dataService.getCountries().subscribe(res => {
        // If request fails, throw an Error that will be caught
        if (res.status < 200 || res.status >= 300) {
          throw new Error('This request has failed ' + res.status);
        }
        // If everything went fine, return the response
        else {
          this.countries = res.json();
          this.allCountries = res.json();
          this.count = this.route.snapshot.params['count'];
          this.countries = this.count > 0 ? this.allCountries.sort((a, b) => b.epiIndex > a.epiIndex).slice(0, this.count) : this.allCountries;
          // this.updateList();
        }
      });
    } else {
      this.countries = this.count > 0 ? this.allCountries.sort((a, b) => b.epiIndex > a.epiIndex).slice(0, this.count) : this.allCountries;
    }
    
  }
}

