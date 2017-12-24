import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { OverrideDialogComponent } from './overrideDialog/override-dialog.component';
import { DataTableService, RecDetail, OverrideDetail, UnitTypeIndex } from '../../services/dataTableService/data-table.service';
import { DataSource } from '@angular/cdk/collections';
import { element } from 'protractor';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

    // Set up table headers
    columns = [
        {
            name: '',
            colpsna: 1,
            rowspan: 2
        },
        {
            name: 'Unit Type',
            colspan: 1,
            rowspan: 2,
        },
        {
            name: 'Unit Count',
            colspan: 2,
            rowspan: 1
        },
        {
            name: 'Occupancy',
            colspan: 3,
            rowspan: 1
        },
        {
            name: 'Exposure',
            colspan: 3,
            rowspan: 1
        },
        {
            name: 'Rent',
            colspan: 6,
            rowspan: 1
        }
    ];

    subColumns = [
        {
            name: 'Total',
            dataName: 'PhysicalUnitCount',
            tooltip: ''
        },
        {
            name: 'Avail',
            dataName: 'UnitCount',
            tooltip: ''
        },
        {
            name: 'Units',
            dataName: 'OccupiedCount',
            tooltip: ''
        },
        {
            name: 'Chg',
            dataName: 'OccupiedChange',
            tooltip: ''
        },
        {
            name: 'Pct',
            dataName: 'OccupiedPercent',
            tooltip: ''
        },

        {
            name: 'Units',
            dataName: 'Exposure',
            tooltip: ''
        },
        {
            name: 'Chg',
            dataName: 'ExpChange',
            tooltip: ''
        },
        {
            name: 'Pct',
            dataName: 'ExpPct',
            tooltip: ''
        },

        {
            name: 'Occupied',
            dataName: 'OccupiedRent',
            tooltip: ''
        },
        {
            name: 'Current',
            dataName: 'CurrRent',
            tooltip: ''
        },
        {
            name: 'Rec.ed',
            dataName: 'RecRent',
            tooltip: ''
        },

        {
            name: 'Override',
            dataName: 'Override',
            tooltip: ''
        },
        {
            name: 'Chg$',
            dataName: 'RentChange',
            tooltip: ''
        },
        {
            name: 'Chg%',
            dataName: 'RentChangePct',
            tooltip: ''
        },
    ];

    dataSource: RecDetail[] = [];
    dataTableIndecies: UnitTypeIndex[] = [];

    constructor(
        public overrideDialog: MatDialog,
        private dataTableSerivce: DataTableService
    ) {}

    ngOnInit() {
        this.getRecDetailsData();
    }

    // Gets RecDetailsData from a service
    getRecDetailsData(): void {
        this.dataTableSerivce.getRecDetailsData()
            .subscribe(dataSource => {

                // Clear out dataTableIndex list
                this.dataTableIndecies = [];
                dataSource.forEach(element => {
                    // Find Pricing Units and generate new index list
                    if (element.HierarchyLevel === 1) {
                        this.dataTableIndecies.push({
                            Name: element.UnitType,
                            Collapsed: false
                        });
                    }

                    // Setup Override sub objects
                    if (element.Override === null || element.Override === undefined) {
                        element.Override = new OverrideDetail;
                    }

                    // All rows expanded on load
                    element.Collapsed = false;
                });

                this.dataSource = dataSource;
            });
    }

    // Toggles a unit type group directly from table
    toggleUnitTypeGroup(unitTypeName: string, skipIndexUpdate: boolean): void {

        // Find and update index or skip (called from DataTableIndexComponent)
        if (!skipIndexUpdate) {
            console.log('no skip');
            const match = this.dataTableIndecies.find(e => e.Name === unitTypeName);
            match.Collapsed = !match.Collapsed;
        }

        // Find all master units that belong to this pricing unit
        const start = this.dataSource.findIndex(e => e.UnitType === unitTypeName);
        for (let i = start + 1; i < this.dataSource.length; i++) {
            if (this.dataSource[i].HierarchyLevel === 2) {
                this.dataSource[i].Collapsed = !this.dataSource[i].Collapsed;
            } else {
                return;
            }
        }
    }

    // Event emitter handler for toggleing table from child component (DataTableIndexComponent)
    toggleUnitTypeGroupFromIndex(unitType: UnitTypeIndex): void {
        this.toggleUnitTypeGroup(unitType.Name, true);
    }

    // Checks if a row is a pricing unit (Hierarchy: 1)
    rowIsPricingUnit(row: RecDetail): boolean {
        const isPricingUnit = row.HierarchyLevel === 1;
        return isPricingUnit;
    }

    // Creates a new override with "Total Override", current rent as value, and null expiration date
    overrideWithCurrentRent(row: RecDetail): void {
        row.CurrentRentOverride = true;
        row.Override = new OverrideDetail;
        row.Override.CurrRent = row.CurrRent;
        row.Override.RecRent = row.RecRent;
        row.Override.OverrideType = 1;
        row.Override.Value = row.CurrRent;
        row.Override.Expiration = null;
        row.Override.DisplayValue = row.CurrRent;

        // Call this to set pricing unit override
        this.findPricingMasterUnitGroupFromRow(row);
    }

    // Opens a override dialog
    openOverrideDialog(row: RecDetail): void {
        // Exit function if pricing unit row
        if (row.HierarchyLevel === 1) {
            return;
        }

        // Fill in some data on Override object
        row.Override.CurrRent = row.Override.CurrRent === undefined ? row.CurrRent : row.Override.CurrRent;
        row.Override.RecRent = row.Override.RecRent === undefined ? row.RecRent : row.Override.RecRent;

        // Pop open the dialog and pass in the data
        const overrideDialogRef = this.overrideDialog.open(OverrideDialogComponent, {
            width: '500px',
            data: { override: row.Override }
        });

        // Dialog close callback
        overrideDialogRef.afterClosed().subscribe(result => {

            // If saved, update the Override display value for table
            if (result !== undefined && result === true) {
                const newDisplayValue =
                    row.Override.OverrideType === 1 ? row.Override.Value : (+row.RecRent) + (+row.Override.Value);
                row.Override.DisplayValue = newDisplayValue;
                row.CurrentRentOverride = false;

                // Finds all pricing and master units that belong to a row
                this.findPricingMasterUnitGroupFromRow(row);
            }
        });
    }

    // Takes any row and finds its Pricing Unit it belongs to
    // Returns pricing / master unit group array
    findPricingMasterUnitGroupFromRow(row: RecDetail): void {
        const rows = [];
        const idxRows = [];

        // Find the index of the row inputed to function
        let start = 0;
        start = this.dataSource.findIndex(e => e.UnitType === row.UnitType);

        // Check if pricing row is a lesser number than the 'start' row index
        this.dataSource.forEach(function(e, idx) {
            if (e.HierarchyLevel === 1) {
                if (idx < start) {
                    idxRows.push(idx);
                } else if (idx > start) {
                    return;
                }
            }
        });

        // Take the last value of this array, this will be our new starting point
        start = idxRows.slice(-1)[0];

        // Find all MasterUnits that belong to our pricing unit ('start')
        for (let i = start + 1; i < this.dataSource.length; i++) {
            if (this.dataSource[i].HierarchyLevel === 2) {
                rows.push(this.dataSource[i]);
            }
        }

        // Finally update the pricing unit override value
        this.dataSource[start].Override.DisplayValue = this.setPricingUnitOverride(rows);
    }

    // Sets the override value for a pricing unit
    setPricingUnitOverride(rows: RecDetail[]): number {
        let result = 0;

        let numerator:number = 0;
        let denominator:number = 0;

        rows.forEach(element => {

            const coalesce = element.Override.DisplayValue || element.RecRent;
            const product = coalesce * element.UnitCount;

            numerator = numerator += product;
            denominator = denominator += element.UnitCount;
        });

        result = numerator / denominator;
        return result;
    }
}
