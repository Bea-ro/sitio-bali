import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconButton } from '../icon-button/icon-button';
import { cancelPath } from '../../data/icon-paths';

@Component({
  selector: 'app-search',
  imports: [FormsModule, IconButton],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private timeout: any;
  public filter = '';
  public cancelPath: string = cancelPath;

  @Input() searchTerm: string = '';
  @Output() inputChange = new EventEmitter<{ filter: string }>();

  public emitFilter() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.inputChange.emit({ filter: this.filter.trim().toLowerCase() });
    }, 300);
  }

  clear() {
    this.filter = '';
    this.inputChange.emit({ filter: this.filter.trim().toLowerCase() });
  }
}
