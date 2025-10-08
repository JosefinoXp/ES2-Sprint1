import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from "primeng/card";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  imports: [Card, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  nomeUsuario: string = "";

  senhaUsuario: string = "";

}
