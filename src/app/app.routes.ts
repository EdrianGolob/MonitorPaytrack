import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
/*    

*/
{ path: '' , pathMatch: 'full' , redirectTo:'home'},

{   
    path: '', component: AppComponent, children: [
        { path: 'home', loadChildren: () => import('../app/home/home.module').then(
                (file) => file.HomeModule
            ),
        },
    ],
},

];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    }
)

export class AppRoutingModule{}
