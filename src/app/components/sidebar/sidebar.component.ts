import { Component, OnInit, Input } from '@angular/core';
import { MenuGroups } from './menu-groups';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    sidebarCollapsed = false;
    tooltipPosition = 'right';
    menuGroups = MenuGroups;

    constructor() {}

    ngOnInit() {}

    // Toggles a menu group
    toggleGroup(group) {
        if (group.expanded) {
            group.expanded = !group.expanded;
            return;
        } else {
            this.closeGroups();
            group.expanded = true;
        }
    }

    // Closes all menu groups
    closeGroups() {
        for (const mg of this.menuGroups) {
            mg.expanded = false;
        }
    }
}
