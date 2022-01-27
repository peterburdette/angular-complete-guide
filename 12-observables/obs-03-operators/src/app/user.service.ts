import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  // Subject is a special kind of observable. A subject also is an object you can subscribe to but it's more active because you can actively call next on it from outside.
  // Subject is a more active observable that is perfect for when we want to use it as an event emitter, so if we don't have a passive event source, like an HTTP request or DOM events but if we have something that actively needs to be triggered by us in our application. That's exactly the use case we have here. We now can call 'next' in the user service on our activated emitter (user.component.ts).
  activatedEmitter = new Subject<boolean>();
}
