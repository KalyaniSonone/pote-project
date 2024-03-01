import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
    selector: 'app-application-table',
    templateUrl: './application-table.component.html',
    styleUrls: ['./application-table.component.css']
})
  export class ApplicationTableComponent
  implements
  AfterViewInit {
  displayedColumns: string[] = ['name', 'xapikey', 'developer', 'status', 'created', 'actions'];
  dataSource = new MatTableDataSource<Table>(ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
 interface Table {
  name: string;
  xapikey: string;
  developer: string;
  status: string;
  created: string;
  actions: string;
}
const ELEMENT_DATA: Table[] = [
  {
    name: 'TeamPilot',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'TeamTracker',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'SmartAds',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'HawkEye',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'GeoPluse',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'SmartAds',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'SmartBuddies',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'FriendFinder',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'TeamPilot',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'TeamTracker',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'SmartAds',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'HawkEye',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'GeoPluse',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'SmartAds',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'SmartBuddies',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'FriendFinder',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'TeamPilot',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'TeamTracker',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'SmartAds',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'HawkEye',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'GeoPluse',
    xapikey: 'A322C758132B45EO4B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'SmartAds',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'SmartBuddies',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
  {
    name: 'FriendFinder',
    xapikey: 'A322C758132B45EO84B99D70B02FE64A',
    developer: 'LocationGuru',
    status: 'Live',
    created: '12 Aug 2023 10:30 AM',
    actions: ''
  },
];
