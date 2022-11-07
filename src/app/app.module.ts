import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HistorialComponent } from './historial/historial.component';
import { NuevasoliComponent } from './nuevasoli/nuevasoli.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { LoginregistroComponent } from './loginregistro/loginregistro.component';
import { OrganizacionsocialComponent } from './organizacionsocial/organizacionsocial.component';
import { NuevoregistroComponent } from './nuevoregistro/nuevoregistro.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HistorialComponent,
    NuevasoliComponent,
    RegistroComponent,
    LoginComponent,
    LoginregistroComponent,
    OrganizacionsocialComponent,
    NuevoregistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
