import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { MatCardActions, MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
//  MatCardModule, MatCardActions, MatIconModule

@Component({
  selector: 'app-error404',
  imports: [RouterLink],
  templateUrl: './error404.html',
  styleUrl: './error404.scss',
})
export class Error404 {}
