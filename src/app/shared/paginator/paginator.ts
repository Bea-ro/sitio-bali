import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconButton } from '../icon-button/icon-button';
import { nextPath, prevPath } from '../../data/icon-paths';

@Component({
  selector: 'app-paginator',
  imports: [IconButton],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
})
export class Paginator {
  @Input() page: number = 0;
  @Input() pageSize: number = 2;
  @Input() totalItems: number = 0;

  @Output() pageChange = new EventEmitter<{ page: number; pageSize: number }>();

  public prevPath: string = prevPath;
  public nextPath: string = nextPath;

  public nextPage() {
    this.pageChange.emit({
      page: this.page + 1,
      pageSize: this.pageSize,
    });
  }

  public prevPage() {
    if (this.page > 0) {
      this.pageChange.emit({
        page: this.page - 1,
        pageSize: this.pageSize,
      });
    }
  }

  get startItem() {
    return this.page * this.pageSize + 1;
  }

  get endItem() {
    return Math.min((this.page + 1) * this.pageSize, this.totalItems);
  }
}
