import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './historial/historial.component';
import { LoginComponent } from './login/login.component';
import { LoginregistroComponent } from './loginregistro/loginregistro.component';
import { NuevasoliComponent } from './nuevasoli/nuevasoli.component';
import { NuevoregistroComponent } from './nuevoregistro/nuevoregistro.component';
import { OrganizacionsocialComponent } from './organizacionsocial/organizacionsocial.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  
  {path:'historial', component: HistorialComponent},
  {path:'login',component: LoginComponent},
  {path:'loginregistro',component: LoginregistroComponent},
  {path:'nuevasoli', component: NuevasoliComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'registro',component: RegistroComponent},
  {path: 'organizacion', component: OrganizacionsocialComponent},
  {path:'nuevoregistro', component: NuevoregistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
