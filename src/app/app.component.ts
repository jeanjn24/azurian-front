import { Component, ViewChild, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'azurian-front';
  articles: any = [];

  displayedColumns = ['Agent Number', 'City', 'Working Area', 'Country', 'Grade', 'Initial Founds'
  , 'Found Limit', 'Mensual Founds', 'Found Extra Limit', 'Phone No'];
  dataSource: any;
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private dataService: ArticleService) {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}

ngOnInit() {  
  this.renderDataTable(); 
} 

renderDataTable() {  
  this.dataService.getArticles()  
    .subscribe(  
        x => {  
  this.dataSource = new MatTableDataSource();  
  this.dataSource.data = x;  
  console.log(this.dataSource.data);




  Object.keys(x).map(function(artNamedIndex){
    let art = x[artNamedIndex];
    // do something with person
    console.log('here art ' + JSON.stringify(art));
    if(art.title == 'null'){
      art.title = 'Articulo Sin Titulo';
    }
});

  
  this.dataSource.sort = this.sort; 
  this.dataSource.paginator = this.paginator;  
},  
error => {  
  console.log('There was an error while retrieving Articles!' + error);  
});  
} 

getArticles() {  
  this.dataService.getArticles()
      .subscribe(
            x => console.log(`Observer tiene una respuesta del web Api: ${JSON.stringify(x)}`),
            err => console.error('Observer tiene un error: ' + err),
            () => console.log('Observer tiene una notificación completa')
      ); 
}  

}
