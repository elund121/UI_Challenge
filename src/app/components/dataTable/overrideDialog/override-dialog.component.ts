import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OverrideDetail } from '../../../services/dataTableService/data-table.service';
import { isDate } from 'util';

@Component({
    selector: 'app-override-dialog',
    templateUrl: './override-dialog.component.html'
})

export class OverrideDialogComponent {

    // Setup options and data
    overrideDetail = OverrideDetail;
    overrideTypes = [
        {
            value: 1,
            name: 'Total Override'
        }, {
            value: 2,
            name: 'Incremental Override'
        }
    ];

    constructor(
        public dialogRef: MatDialogRef<OverrideDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.overrideDetail = data.override;
            console.log(this.overrideDetail);
        }

    // Checks if a value is an number
    valueIsNumber(value: number): boolean {
        if (Number.isInteger(value)) {
            return true;
        } else if (value === undefined) {
            console.log('value undefined');
            return false;
        } else {
            return false;
        }
    }

    // Checks if a value is a date type
    valueIsDate(value: any): boolean {
        if (value instanceof Date) {
            return true;
        } else {
            return false;
        }
    }

    // Controls the Save button being enabled / disabled
    // Returns true is invalid, false is valid
    validateOverride(override: OverrideDetail): boolean {
        if (override.OverrideType === undefined
            || override.Value === undefined
            || override.Expiration === undefined
            || !this.valueIsNumber(override.Value)
            || !this.valueIsDate(override.Expiration)) {
            return true;
        } else {
            return false;
        }
    }

    // Handles closing dialog when cancel is clicked
    onNoClick(): void {
        this.dialogRef.close();
    }
}
