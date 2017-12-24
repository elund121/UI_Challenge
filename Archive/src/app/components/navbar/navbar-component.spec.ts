import { TestBed, async } from '@angular/core/testing';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { DataTableComponent } from './../../components/dataTable/data-table.component';
import { DataTableIndexComponent } from './../../components/dataTable/dataTableIndex/data-table-index.component';

// Services
import { DataTableService } from './../../services/dataTableService/data-table.service';

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

describe('NavbarComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SidebarComponent,
                NavbarComponent,
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
    it('should create the navbar', async(() => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    //   it(`should have as title 'app'`, async(() => {
    //     const fixture = TestBed.createComponent(NavbarComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.title).toEqual('UI-Challenge');
    //   }));
});
