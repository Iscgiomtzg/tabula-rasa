import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibilityComponent } from './pages/bestPractices/accessibility/accessibility.component';
import { LazyLoadingComponent } from './pages/bestPractices/lazy-loading/lazy-loading.component';
import { PropertyBindingComponent } from './pages/bestPractices/property-binding/property-binding.component';
import { SecurityComponent } from './pages/bestPractices/security/security.component';
import { UpToDateComponent } from './pages/bestPractices/up-to-date/up-to-date.component';
import { AnimationsComponent } from './pages/developerGuides/animations/animations.component';
import { FormsComponent } from './pages/developerGuides/forms/forms.component';
import { HttpClientComponent } from './pages/developerGuides/http-client/http-client.component';
import { InternationalizationComponent } from './pages/developerGuides/internationalization/internationalization.component';
import { RoutingNavigationComponent } from './pages/developerGuides/routing-navigation/routing-navigation.component';
import { SchematicsComponent } from './pages/developerGuides/schematics/schematics.component';
import { ServiceWorkersComponent } from './pages/developerGuides/service-workers/service-workers.component';
import { TestingComponent } from './pages/developerGuides/testing/testing.component';
import { AddingNavigationComponent } from './pages/gettingStarted/adding-navigation/adding-navigation.component';
import { DeployingApplicationComponent } from './pages/gettingStarted/deploying-application/deploying-application.component';
import { ManagingDataComponent } from './pages/gettingStarted/managing-data/managing-data.component';
import { UsingFormsComponent } from './pages/gettingStarted/using-forms/using-forms.component';
import { RoutingComponent } from './pages/tutorials/routing/routing.component';
import { TemplateDrivenFormComponent } from './pages/tutorials/template-driven-form/template-driven-form.component';
import { WebWorkersComponent } from './pages/tutorials/web-workers/web-workers.component';
import { ComponentsComponent } from './pages/understandingAngular/components/components.component';
import { DependencyInjectionComponent } from './pages/understandingAngular/dependency-injection/dependency-injection.component';
import { DirectivesComponent } from './pages/understandingAngular/directives/directives.component';
import { TemplatesComponent } from './pages/understandingAngular/templates/templates.component';
import { WhatIsAngularComponent } from './pages/what-is-angular/what-is-angular.component';

const routes: Routes = [
  { path: '', component: WhatIsAngularComponent },
  { path: 'add-navigation', component: AddingNavigationComponent },
  { path: 'manage-data', component: ManagingDataComponent },
  { path: 'using-forms', component: UsingFormsComponent },
  { path: 'deploying-app', component: DeployingApplicationComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'dependency-injection', component: DependencyInjectionComponent },
  { path: 'routing-nav', component: RoutingNavigationComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'http-client', component: HttpClientComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'internationalization', component: InternationalizationComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'schematics', component: SchematicsComponent },
  { path: 'service-workers', component: ServiceWorkersComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'up-to-date', component: UpToDateComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'lazy-loading', component: LazyLoadingComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'template-forms', component: TemplateDrivenFormComponent },
  { path: 'web-workers', component: WebWorkersComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
