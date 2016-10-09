import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';
import { Routing } from './routes';
import { HomepageService } from './services/homepage.service';


import { AppComponent }             from './app.component';
import { HomepageComponent } from './components/homepage.component';
import { MemopageComponent } from './components/memopage.component';

import { AppHeaderDirective } from './directives/header.directive';
import { AppFooterDirective } from './directives/footer.directive';


@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, JsonpModule, Routing
  ],

  providers:[HomepageService],

  declarations: [
    AppComponent, HomepageComponent, MemopageComponent,
    AppHeaderDirective, AppFooterDirective
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }