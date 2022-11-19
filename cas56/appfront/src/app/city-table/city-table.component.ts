import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataProviderService, Municipality } from '../services/data-provider.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { TableUtil } from './citi-table-export';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent implements AfterViewInit {

  dataSource: any;
  displayedColumns: string[] = ['city', 'zip', 'x', 'y', 'pop', 'state'];

  cityFilter = new FormControl('');
  zipFilter = new FormControl('');
  stateFilter = new FormControl('');

  filterValue: any = {
    city: '',
    zip: '',
    state: ''
  };

  private inputListener() {
    this.cityFilter.valueChanges.subscribe(
      city => {
        this.filterValue.city = city;
        this.dataSource.filter = JSON.stringify(this.filterValue);
      }
    );

    this.zipFilter.valueChanges.subscribe(
      zip => {
        this.filterValue.zip = zip;
        this.dataSource.filter = JSON.stringify(this.filterValue);
      }
    );

    this.stateFilter.valueChanges.subscribe(
      state => {
        this.filterValue.state = state;
        this.dataSource.filter = JSON.stringify(this.filterValue);
      }
    );
  }

  private filterFunction = function (municipality: Municipality, filterString: string): boolean {
    const filterObject = JSON.parse(filterString);

    return municipality.city.indexOf(filterObject.city) !== -1
      && municipality.zip.indexOf(filterObject.zip) !== -1
      && municipality.state.indexOf(filterObject.state) !== -1;
  }

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(private dataProvider: DataProviderService) {
    this.dataSource =
      new MatTableDataSource<Municipality>(dataProvider.getAllMunicipalities());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.inputListener();
    this.dataSource.filterPredicate = this.filterFunction;
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  clearFilters() {
    this.cityFilter.setValue('');
    this.zipFilter.setValue('');
    this.stateFilter.setValue('');
  }

  exportToPdf() {
    TableUtil.exportToPdf("mytable");
  }

}
