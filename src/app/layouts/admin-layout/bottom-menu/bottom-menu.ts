import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homePath, lockPath, newspaperPath, userPath } from '../../../data/icon-paths';

@Component({
  selector: 'app-bottom-menu',
  imports: [RouterModule],
  templateUrl: './bottom-menu.html',
  styleUrl: './bottom-menu.css',
})
export class BottomMenu {
  public homePath: string = homePath;
  public newspaperPath: string = newspaperPath;
  public userPath: string = userPath;
  public lockPath: string = lockPath;
}
