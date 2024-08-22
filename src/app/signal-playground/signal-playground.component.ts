import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-signal-playground',
  standalone: true,
  imports: [],
  templateUrl: './signal-playground.component.html',
  styleUrl: './signal-playground.component.sass'
})
export class SignalPlaygroundComponent {
  signal = signal({
    name: 'signal-playground',
    count: 0,
    description: 'A playground for testing signals',
    inputs: {
      input: {
        description: 'An input signal',
        type: 'number',
        default: 0
      }
    },
    outputs: {
      output: {
        description: 'An output signal',
        type: 'number'
      }
    }
  });

  signal_copy = {...this.signal()};

  add() {
    this.signal_copy.count++;
  }

  rename() {
    this.signal_copy.name = 'renamed';
  }
}
