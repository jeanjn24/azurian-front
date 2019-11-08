import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';


import { PaginatorEspañol } from './paginator-español';

import { MatInputModule, MatPaginatorModule, MatTableModule,
  MatSortModule, MatPaginatorIntl } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorEspañol}],
  bootstrap: [AppComponent]
})
export class AppModule { }
