import { Component, computed, OnInit, signal } from '@angular/core';
import { NoticiaCard } from '../../shared/noticia-card/noticia-card';
import { CommonModule } from '@angular/common';
import { GetNoticias } from '../../core/services/get-noticias';
import { CategoriesMenu } from '../../shared/categories-menu/categories-menu';
import { AdminNoticiasService } from '../../services/admin-noticias';

@Component({
  selector: 'app-noticias',
  imports: [NoticiaCard, CategoriesMenu, CommonModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
})
export class Noticias implements OnInit {
  public selectedCategory = signal<string | undefined>(undefined);
  public rss?: any[];

  private pageSize = 15;
  private visibleCount = signal(15);

  public visibleNoticias = computed(() => {
    const noticias = this.getNoticias.noticias();
    const filtradas = this.selectedCategory()
      ? noticias.filter((n) => n.category.toLowerCase() === this.selectedCategory()?.toLowerCase())
      : noticias;
    return filtradas.slice(0, this.visibleCount());
  });

  constructor(public getNoticias: GetNoticias, public adminNoticias: AdminNoticiasService) {}

  public ngOnInit() {
    this.getNoticias.getRSS$().subscribe();
    console.log(this.getNoticias.getRSS$().subscribe());
  }

  public onSelectedCategoryChange(category: string) {
    this.selectedCategory.set(category);
    this.visibleCount.set(this.pageSize);
    console.log(this.selectedCategory);
  }

  public loadMore() {
    console.log('boton');
    this.visibleCount.update((v) => v + this.pageSize);
  }
}
