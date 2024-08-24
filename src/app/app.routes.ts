import {Routes} from '@angular/router';
import {SignalPlaygroundComponent} from "./signal-playground/signal-playground.component";
import {RxjsPlaygroundComponent} from "./rxjs-playground/rxjs-playground.component";

export const routes: Routes = [
  {
    path: 'signal',
    component: SignalPlaygroundComponent
  },
  {
    path: 'rxjs',
    component: RxjsPlaygroundComponent
  }
];
