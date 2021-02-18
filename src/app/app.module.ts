import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicRankComponent } from './components/comic-rank/comic-rank.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComicApiService } from './services/comic-api.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotfoundComponent } from './components/notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    ComicRankComponent,
    FooterComponent,
    SpinnerComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ComicApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
