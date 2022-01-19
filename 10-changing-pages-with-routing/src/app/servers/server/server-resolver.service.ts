import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
// this resolver will load data for the component that utilizes it in advance (another alternative would be to use ngOnInit)
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  // Interface that classes can implement to be a data provider. A data provider class can be used with the router to resolve data during navigation. The interface defines a resolve() method that is invoked when the navigation starts. The router waits for the data to be resolved before the route is finally activated.
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params["id"]);
  }
}
