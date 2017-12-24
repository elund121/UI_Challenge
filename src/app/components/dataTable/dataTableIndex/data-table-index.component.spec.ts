import { TestBed, async } from '@angular/core/testing';
import { DataTableIndexComponent } from '../../../components/dataTable/dataTableIndex/data-table-index.component';

// Services
import { DataTableService, RecDetail, UnitTypeIndex } from '../../../services/dataTableService/data-table.service';

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

describe('DataTableIndexComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
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
    it(`should create the data table index`, async(() => {
        const fixture = TestBed.createComponent(DataTableIndexComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
      it(`should toggle a unit type group`, async(() => {
        const fixture = TestBed.createComponent(DataTableIndexComponent);
        const app = fixture.debugElement.componentInstance;

        const testData: UnitTypeIndex = {
            Name: '1BR',
            Collapsed: false
        };

        const testFn = app.toggleUnitTypeGroup(testData);
        expect(testData.Collapsed).toBeTruthy();
      }));
});
