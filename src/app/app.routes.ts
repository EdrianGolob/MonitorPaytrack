import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{   
    path: '', component: AppComponent, children: [
        { path: 'adto', loadChildren: () => import('../app/adto/adto.module').then(
            (file) => file.AdtoModule
            ),
        },
    ],
},
{   
    path: '', component: AppComponent, children: [
        { path: 'prest', loadChildren: () => import('../app/prest/prest.module').then(
                (file) => file.PrestModule
            ),
        },
    ],
},
];

NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    }
)
