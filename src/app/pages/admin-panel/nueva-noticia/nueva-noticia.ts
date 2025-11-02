import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../../models/models';

@Component({
  selector: 'app-nueva-noticia',
  imports: [FormsModule],
  templateUrl: './nueva-noticia.html',
  styleUrl: './nueva-noticia.css',
})
export class NuevaNoticia {
  public newNoticia: INoticia = {
    title: '',
    slug: '',
    text: '',
    date: '',
    category: '',
  };

  //constructor(private adminNoticiasService: AdminNoticiasService) {}

  public onSubmit() {
    // this.newNoticia && this.adminNoticiasService.addElement(this.newNoticia);
    // this.productAdded.emit()
  }
}
