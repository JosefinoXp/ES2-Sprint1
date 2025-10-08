import { Component, signal } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Card } from "primeng/card";
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('trabalho1');
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),

  ]
});