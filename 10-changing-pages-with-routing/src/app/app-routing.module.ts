import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  // The path-match strategy 'full' matches against the entire URL. It is important to do this when redirecting empty-path routes. Otherwise, because an empty path is a prefix of any URL, the router would apply the redirect even when navigating to the redirect destination, creating an endless loop.
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [
      // the colon (:) tells Angular that this is a dynamic part of the path
      { path: ":id/:name", component: UserComponent },
    ],
  },
  {
    path: "servers",
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      // the data that gets retrieed before the page loads will be stored as an object withing 'server'
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  // { path: "not-found", component: PageNotFoundComponent },
  {
    path: "not-found",
    component: ErrorPageComponent,
    // 'data' gets passed through the route snapshot (this.route.snapshot)
    data: { message: "Page not found!" },
  },
  // the double asterisk is a wildcard that tells Angular to catch all unfamiliar paths - this needs to be the last path in the list of paths as paths are parsed from top to bottom
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  // useHash will add a # after the top level URL and this will inform the web server that we only care about the part in the URL before the hash. All other parts after it will be ignored by the web server. The part after the hash will be parsed by Angular. This approach should be used only if traditional routes don't work on a production server (if the server isn't configured correctly for Angular web apps).
  // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
