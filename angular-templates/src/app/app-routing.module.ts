import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './games/game.component';
import { RoomsLobbyComponent } from './rooms-lobby/rooms-lobby.component';
import { PageNotFoundComponent } from './error-page/error-room.component';
import { SpinWheelComponent } from './games/spin-wheel/spin-wheel.component';
import { WheelRotateComponent } from './games/wheel-rotate/wheel-rotate.component';
import { BingoComponent } from './games/bingo/bingo.component';
import { FormsComponent } from './forms/forms.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
import { RxJSComponent } from './rx-js/rx-js.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  { path: 'spin-wheel', component: SpinWheelComponent },
  { path: 'spin-wheel2', component: WheelRotateComponent },
  { path: 'rooms-lobby', component: RoomsLobbyComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'bingo', component: BingoComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'dynamic', component: DynamicContentComponent },
  { path: 'rxjs', component: RxJSComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
