import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnitTypeIndex } from '../../../services/dataTableService/data-table.service';
import { element } from 'protractor';

@Component({
    selector: 'app-data-table-index',
    templateUrl: './data-table-index.component.html',
    styleUrls: ['./data-table-index-component.scss']
})

export class DataTableIndexComponent implements OnInit {
    @Input() indexList: UnitTypeIndex[];
    @Output() indexListUpdated = new EventEmitter<UnitTypeIndex>();

    // Show all unit types by default
    toggleValue = 2;
    constructor() {}

    ngOnInit() {}

    // Toggles a unit type grouping
    toggleUnitTypeGroup(unitType: UnitTypeIndex): void {
        unitType.Collapsed = !unitType.Collapsed;
        this.indexListUpdated.emit(unitType);
    }

    // Handles Show / Hide button toggle
    showOrHideAll(value: number) {
        this.indexList.forEach(ut => {
            if (value === 1) {
                ut.Collapsed = true;
            } else if (value === 2) {
                ut.Collapsed = false;
            }
            this.indexListUpdated.emit(ut);
        });
    }
}
