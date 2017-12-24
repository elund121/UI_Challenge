import { TestBed, async } from '@angular/core/testing';
import { DataTableComponent } from './../../components/dataTable/data-table.component';
import { DataTableIndexComponent } from './../../components/dataTable/dataTableIndex/data-table-index.component';

// Services
import { DataTableService, RecDetail } from './../../services/dataTableService/data-table.service';

// Material Design Components
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DataTableComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DataTableComponent,
                DataTableIndexComponent,
            ],
            imports: [
                FormsModule,
                BrowserAnimationsModule,
                // Material
                MatButtonModule,
                MatButtonToggleModule,
                MatDatepickerModule,
                MatDialogModule,
                MatIconModule,
                MatInputModule,
                MatMenuModule,
                MatNativeDateModule,
                MatRippleModule,
                MatSelectModule,
                MatSidenavModule,
                MatSliderModule,
                MatSlideToggleModule,
                MatSortModule,
                MatTableModule,
                MatTabsModule,
                MatToolbarModule,
                MatTooltipModule,
                MatStepperModule,
            ],
            providers: [
                DataTableService
            ]

        }).compileComponents();
    }));
    it(`should create the data table`, async(() => {
        const fixture = TestBed.createComponent(DataTableComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
      it(`should call 'getRecDetailsData()' on ngOnInIt`, async(() => {
        const fixture = TestBed.createComponent(DataTableComponent);
        const app = fixture.debugElement.componentInstance;

        spyOn(app, 'getRecDetailsData').and.returnValue(Promise.resolve(true));
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(app.getRecDetailsData).toHaveBeenCalled();
        });
      }));
      it(`should check if a row if a pricing unit`, async(() => {
        const fixture = TestBed.createComponent(DataTableComponent);
        const app = fixture.debugElement.componentInstance;

        const testRow: RecDetail = {
            'Override': null,
            'RentChangePct': 3.07,
            'RecRent': 2610,
            'UnitCount': 37,
            'RentChange': 78,
            'OccupiedPercent': 100,
            'RMProductKey': 832,
            'PhysicalUnitCount': 37,
            'UnitTypeKey': null,
            'HierarchyLevel': 1,
            'ExpChange': -1,
            'OccupiedRent': 2032.08,
            'UnitType': 'STD',
            'OccupiedCount': 37,
            'ExpPct': 0,
            'CurrRent': 2532,
            'OccupiedChange': 1,
            'Stage': 'Saved',
            'Exposure': 0
        };

        const testFn = app.rowIsPricingUnit(testRow);
        expect(testFn).toBeTruthy();
      }));
      it(`should check create a default override and display '$2137'`, async(() => {
        const fixture = TestBed.createComponent(DataTableComponent);
        const app = fixture.debugElement.componentInstance;

        const testRow: RecDetail = {
            'Override': null,
            'RentChangePct': 2.34,
            'RecRent': 2187,
            'UnitCount': 2,
            'RentChange': 50,
            'OccupiedPercent': 100,
            'RMProductKey': 832,
            'PhysicalUnitCount': 2,
            'UnitTypeKey': 694,
            'HierarchyLevel': 2,
            'ExpChange': 0,
            'OccupiedRent': 1722,
            'UnitType': 'STD-341',
            'OccupiedCount': 2,
            'ExpPct': 0,
            'CurrRent': 2137,
            'OccupiedChange': 0,
            'Stage': 'Saved',
            'Exposure': 0
          };

        const testFn = app.overrideWithCurrentRent(testRow);
        expect(testRow.Override.DisplayValue).toEqual('$2137');
      }));
});
