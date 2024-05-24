import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxCheckboxModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
    FormsModule
  ]
})
export class LoginModule {
}
