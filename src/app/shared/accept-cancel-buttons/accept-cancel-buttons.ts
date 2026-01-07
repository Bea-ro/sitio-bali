import { Component, Input } from '@angular/core';
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
}
