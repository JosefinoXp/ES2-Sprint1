import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-register',  // Ou 'app-login' se reutilizar
  standalone: true,
  imports: [CardModule, FormsModule, SelectModule],
  templateUrl: './register1.html',  // Renomeie se necessário
  styleUrl: './register1.css'
})
export class Register1 {
  nome: string = '';
  email: string = '';
  senha: string = '';
  telefone: string = '';
  cargo: string = '';  // Valor selecionado no dropdown

  // Opções para Cargo (ajuste conforme necessário)
  cargos: { label: string; value: string }[] = [
    { label: 'Selecionar', value: '' },
    { label: 'Desenvolvedor', value: 'dev' },
    { label: 'Designer', value: 'designer' },
    { label: 'Gerente', value: 'gerente' },
    { label: 'Outro', value: 'outro' }
  ];

  errorNome: string | null = null;
  errorEmail: string | null = null;
  errorSenha: string | null = null;
  errorTelefone: string | null = null;
  errorCargo: string | null = null;
  isSubmitting = false;
  mostrarSenha = false;

  validateNome(nome: string): string | null {
    if (!nome.trim()) return 'Nome é obrigatório.';
    if (nome.trim().length < 2) return 'Nome deve ter pelo menos 2 caracteres.';
    return null;
  }

  validateEmail(email: string): string | null {
    if (!email.trim()) return 'E-mail é obrigatório.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? null : 'E-mail inválido.';
  }

  validateSenha(senha: string): string | null {
    if (!senha) return 'Senha é obrigatória.';
    if (senha.length < 8) return 'Senha deve ter pelo menos 8 caracteres.';
    return null;
  }

  validateTelefone(tel: string): string | null {
    if (!tel) return 'Telefone é obrigatório.';
    const telRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;  // Formato BR: (49) 9999-9999
    return telRegex.test(tel) ? null : 'Formato: (DD) 9999-9999';
  }

  validateCargo(cargo: string): string | null {
    return cargo ? null : 'Selecione um cargo.';
  }

  onToggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  onCadastrar() {
    // Navegue para login; injete Router se necessário
    console.log('Ir para login');
  }

  onEsqueciSenha() {
    // Lógica para reset de senha
    console.log('Reset senha');
  }

  onSubmit() {
    this.errorNome = this.validateNome(this.nome);
    this.errorEmail = this.validateEmail(this.email);
    this.errorSenha = this.validateSenha(this.senha);
    this.errorTelefone = this.validateTelefone(this.telefone);
    this.errorCargo = this.validateCargo(this.cargo);

    if (this.errorNome || this.errorEmail || this.errorSenha || this.errorTelefone || this.errorCargo) return;

    this.isSubmitting = true;
    // Simula API de cadastro; substitua por service real
    setTimeout(() => {
      console.log('Cadastro:', { nome: this.nome, email: this.email, senha: this.senha, telefone: this.telefone, cargo: this.cargo });
      alert('Conta criada com sucesso!');
      this.isSubmitting = false;
      // Reset form ou redirecione para login
    }, 1000);
  }
}
