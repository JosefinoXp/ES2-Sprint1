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
  nomeUsuario: string = '';  // Renomeia para emailUsuario se for e-mail
  senhaUsuario: string = '';

  // Mensagens de erro
  errorEmail: string | null = null;
  errorSenha: string | null = null;
  isSubmitting = false;

  validateEmail(email: string): string | null {
    if (!email.trim()) return 'E-mail é obrigatório.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? null : 'E-mail inválido.';
  }

  validateSenha(senha: string): string | null {
    if (!senha) return 'Senha é obrigatória.';
    return senha.length < 8 ? 'Senha deve ter pelo menos 8 caracteres.' : null;
  }

  onSubmit() {
    this.errorEmail = this.validateEmail(this.nomeUsuario);
    this.errorSenha = this.validateSenha(this.senhaUsuario);

    if (this.errorEmail || this.errorSenha) return;

    this.isSubmitting = true;

    // Simula chamada API; substitua por service real
    setTimeout(() => {
      console.log('Login:', { email: this.nomeUsuario, senha: this.senhaUsuario });
      alert('Login realizado com sucesso!');
      this.isSubmitting = false;
    }, 1000);
  }

  onToggleSenha() {
    // Para mostrar/ocultar senha, adicione lógica no template ou use ref
    // Exemplo: toggle via ViewChild no input
  }

  onCadastrar() {}

  onEsqueciSenha() {}
}
