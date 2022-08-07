import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsLobbyComponent } from './rooms-lobby/rooms-lobby.component';
import { PageNotFoundComponent } from './error-page/error-room.component';
import { GameComponent } from './games/game.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CountToModule } from 'angular-count-to';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SpinWheelComponent } from './games/spin-wheel/spin-wheel.component';
import { WheelRotateComponent } from './games/wheel-rotate/wheel-rotate.component';
import { BingoComponent } from './games/bingo/bingo.component';
import { BingoCardComponent } from './games/bingo/bingo-card/bingo-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsLobbyComponent,
    PageNotFoundComponent,
    GameComponent,
    HeaderComponent,
    SpinWheelComponent,
    WheelRotateComponent,
    BingoComponent,
    BingoCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SlickCarouselModule,
    MatProgressBarModule,
    CountToModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
