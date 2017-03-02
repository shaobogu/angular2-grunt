import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import AppComponent from "./App.component";
import ResourceManager from "./shared/resources/ResourceManager.service";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import HomeComponent from "./home/Home.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: "home", component: HomeComponent },
            { path: "", redirectTo: "/home", pathMatch: "full" }
        ], { useHash: true })
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    entryComponents: [
    ],
    providers: [
        ResourceManager
    ],
    bootstrap: [
        AppComponent
    ]
})

export default class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);