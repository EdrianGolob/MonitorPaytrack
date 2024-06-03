import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule, routing } from "./app.routes";
import { PoTemplatesModule } from "@po-ui/ng-templates";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PoModule } from "@po-ui/ng-components";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
      //AppComponent,
    ],
 
    imports: [
      PoModule,
      BrowserModule,
      RouterModule,
      AppRoutingModule,
      routing,
      HttpClientModule,
      PoTemplatesModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [{
      provide: APP_BASE_HREF,
      useValue: window.location.pathname,
    },],
  

    //bootstrap: [AppComponent]
  })
  export class AppModule { }