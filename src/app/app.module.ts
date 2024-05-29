import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AdtoComponent } from "./adto/adto.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PrestComponent } from "./prest/prest.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routes";
import { PoTemplatesModule } from "@po-ui/ng-templates";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PoModule } from "@po-ui/ng-components";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      AdtoComponent,
      PrestComponent,
    ],
 
    imports: [
      PoModule,
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot([]),
      HttpClientModule,
      PoTemplatesModule,
      FormsModule,
      ReactiveFormsModule
    ],


    bootstrap: [AppComponent]
  })
  export class AppModule { }