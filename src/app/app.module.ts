import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AutoSearchComponent } from './auto-search/auto-search.component';
import { SearchPipePipe } from './pipe/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutoSearchComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
