import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from 'entity-metadata';
import { ExercicioEditComponent } from './pages/exercicio-edit/exercicio-edit.component';
import { ExercicioListComponent } from './pages/exercicio-list/exercicio-list.component';
import { ExercicioAddComponent } from './pages/exercicio-add/exercicio-add.component';
import { ItensAddComponent } from './pages/itens-add/itens-add.component';
import { ItensEditComponent } from './pages/itens-edit/itens-edit.component';
import { ItensListComponent } from './pages/itens-list/itens-list.component';
import { CardExercicioComponent } from './shared/card-exercicio/card-exercicio.component';
import { TopComponent } from './shared/top/top.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardItemComponent } from './shared/card-item/card-item.component';

const customDataServiceConfig: DefaultDataServiceConfig = { 
  root: environment.apiUrl,
  timeout: 15000, // request timeout 
}

@NgModule({
  declarations: [
    AppComponent,
    ExercicioEditComponent,
    ExercicioListComponent,
    ExercicioAddComponent,
    ItensAddComponent,
    ItensEditComponent,
    ItensListComponent,
    CardExercicioComponent,
    TopComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)    
  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: customDataServiceConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
