import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Service to alert components when the sidebar has been toggled
// Angular Material supports a SideNav module that handles this now
// but originally I intended to have a service to allow non-related
// components be alerted of sidebar changes
@Injectable()
export class SidebarToggleService {
    sidebarCollapsed: BehaviorSubject<boolean> = new BehaviorSubject(true);

    constructor() { }
}
