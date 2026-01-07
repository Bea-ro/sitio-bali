import { Component, Output, EventEmitter } from '@angular/core';
import { IconButton } from '../icon-button/icon-button';
import { binPath, pencilPath } from '../../data/icon-paths';

@Component({
  selector: 'app-edit-delete-buttons',
  imports: [IconButton],
  templateUrl: './edit-delete-buttons.html',
  styleUrl: './edit-delete-buttons.css',
})
export class EditDeleteButtons {
  public binPath = binPath;
  public pencilPath = pencilPath;

  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  public onEdit() {
    this.edit.emit();
  }

  public onDelete() {
    this.delete.emit();
  }
}
