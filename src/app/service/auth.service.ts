import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{ 
    return this.http.post<UsuarioLogin>('https://blogpessoal-agda.herokuapp.com/usuario/login', usuarioLogin)
  }

  cadastrar(usuario : Usuario): Observable<Usuario>{ 
    return this.http.post<Usuario>('https://blogpessoal-agda.herokuapp.com/usuario/cadastrar', usuario)}

    getByIdUser(id: number): Observable<Usuario>{
      return this.http.get<Usuario>(`https://blogpessoal-agda.herokuapp.com/usuario/${id}`)
    }
  

    logado(){
      let usuarioLogado: boolean = false
      if (environment.token != ''){
        usuarioLogado = true
      }  
      return usuarioLogado
    }

}