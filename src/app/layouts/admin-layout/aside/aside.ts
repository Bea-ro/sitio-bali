import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homePath, lockPath, newspaperPath, userPath } from '../../../data/icon-paths';

@Component({
  selector: 'app-aside',
  imports: [RouterModule],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  public homePath: string = homePath;
  public newspaperPath: string = newspaperPath;
  public userPath: string = userPath;
  public lockPath: string = lockPath;
}
