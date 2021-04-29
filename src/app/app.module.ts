import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { WhatIsAngularComponent } from './pages/what-is-angular/what-is-angular.component';
import { AddingNavigationComponent } from './pages/gettingStarted/adding-navigation/adding-navigation.component';
import { ManagingDataComponent } from './pages/gettingStarted/managing-data/managing-data.component';
import { UsingFormsComponent } from './pages/gettingStarted/using-forms/using-forms.component';
import { DeployingApplicationComponent } from './pages/gettingStarted/deploying-application/deploying-application.component';
import { ComponentsComponent } from './pages/understandingAngular/components/components.component';
import { TemplatesComponent } from './pages/understandingAngular/templates/templates.component';
import { DirectivesComponent } from './pages/understandingAngular/directives/directives.component';
import { DependencyInjectionComponent } from './pages/understandingAngular/dependency-injection/dependency-injection.component';
import { RoutingNavigationComponent } from './pages/developerGuides/routing-navigation/routing-navigation.component';
import { FormsComponent } from './pages/developerGuides/forms/forms.component';
import { HttpClientComponent } from './pages/developerGuides/http-client/http-client.component';
import { TestingComponent } from './pages/developerGuides/testing/testing.component';
import { InternationalizationComponent } from './pages/developerGuides/internationalization/internationalization.component';
import { AnimationsComponent } from './pages/developerGuides/animations/animations.component';
import { SchematicsComponent } from './pages/developerGuides/schematics/schematics.component';
import { ServiceWorkersComponent } from './pages/developerGuides/service-workers/service-workers.component';
import { SecurityComponent } from './pages/bestPractices/security/security.component';
import { AccessibilityComponent } from './pages/bestPractices/accessibility/accessibility.component';
import { UpToDateComponent } from './pages/bestPractices/up-to-date/up-to-date.component';
import { PropertyBindingComponent } from './pages/bestPractices/property-binding/property-binding.component';
import { LazyLoadingComponent } from './pages/bestPractices/lazy-loading/lazy-loading.component';
import { RoutingComponent } from './pages/tutorials/routing/routing.component';
import { TemplateDrivenFormComponent } from './pages/tutorials/template-driven-form/template-driven-form.component';
import { WebWorkersComponent } from './pages/tutorials/web-workers/web-workers.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    WhatIsAngularComponent,
    AddingNavigationComponent,
    ManagingDataComponent,
    UsingFormsComponent,
    DeployingApplicationComponent,
    ComponentsComponent,
    TemplatesComponent,
    DirectivesComponent,
    DependencyInjectionComponent,
    RoutingNavigationComponent,
    FormsComponent,
    HttpClientComponent,
    TestingComponent,
    InternationalizationComponent,
    AnimationsComponent,
    SchematicsComponent,
    ServiceWorkersComponent,
    SecurityComponent,
    AccessibilityComponent,
    UpToDateComponent,
    PropertyBindingComponent,
    LazyLoadingComponent,
    RoutingComponent,
    TemplateDrivenFormComponent,
    WebWorkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
