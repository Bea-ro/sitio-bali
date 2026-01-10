import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconButton } from '../icon-button/icon-button';
import { acceptPath, cancelPath } from '../../data/icon-paths';

@Component({
  selector: 'app-accept-cancel-buttons',
  imports: [IconButton],
  templateUrl: './accept-cancel-buttons.html',
  styleUrl: './accept-cancel-buttons.css',
})
export class AcceptCancelButtons {
  public acceptPath: string = acceptPath;
  public cancelPath: string = cancelPath;
  @Input() acceptDisabled?: boolean = false;
  @Input() cancelDisabled?: boolean = false;

  @Input() acceptType?: string = 'submit';
  @Input() cancelType?: string = 'reset';

  @Output() accept = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  public onAccept() {
    if (this.acceptType === 'button') {
      this.accept.emit();
    }
  }

  public onCancel() {
    if (this.acceptType === 'button') {
      this.cancel.emit();
    }
  }
}
