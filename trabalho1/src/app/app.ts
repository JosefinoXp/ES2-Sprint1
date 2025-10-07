import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Card } from "primeng/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('trabalho1');
}
