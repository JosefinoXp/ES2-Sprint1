import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule, FormsModule, SelectModule, RouterLink],
  templateUrl: './register2.html',
  styleUrl: './register2.css'
})
export class Register2 {
  pais: string = '';
  estado: string = '';
  cidade: string = '';
  bairro: string = '';
  rua: string = '';
  numero: string = '';
  complemento: string = '';

  errorPais: string | null = null;
  errorEstado: string | null = null;
  errorCidade: string | null = null;
  errorBairro: string | null = null;
  errorRua: string | null = null;
  errorNumero: string | null = null;
  errorComplemento: string | null = null;
  isSubmitting = false;

  validateCampoObrigatorio(campo: string, nome: string): string | null {
    if (!campo.trim()) return nome + ' é obrigatório.';
    if (campo.trim().length < 2) return nome + ' deve ter pelo menos 2 caracteres.';
    return null;
  }

  onSubmit() {
    this.errorPais = this.validateCampoObrigatorio(this.pais, 'País');
    this.errorEstado = this.validateCampoObrigatorio(this.estado, 'Estado');
    this.errorCidade = this.validateCampoObrigatorio(this.cidade, 'Cidade');
    this.errorBairro = this.validateCampoObrigatorio(this.bairro, 'Bairro');
    this.errorRua = this.validateCampoObrigatorio(this.rua, 'Rua');
    this.errorNumero = this.validateCampoObrigatorio(this.numero, 'Número');
    // Complemento pode ser opcional, não valida erro

    if (this.errorPais || this.errorEstado || this.errorCidade || this.errorBairro || this.errorRua || this.errorNumero) return;

    this.isSubmitting = true;
    setTimeout(() => {
      console.log('Cadastro:', {
        pais: this.pais,
        estado: this.estado,
        cidade: this.cidade,
        bairro: this.bairro,
        rua: this.rua,
        numero: this.numero,
        complemento: this.complemento
      });
      alert('Conta criada com sucesso!');
      this.isSubmitting = false;
    }, 1000);
  }
}
