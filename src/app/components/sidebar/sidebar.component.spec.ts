import { TestBed, async } from '@angular/core/testing';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { DataTableComponent } from './../../components/dataTable/data-table.component';
import { DataTableIndexComponent } from './../../components/dataTable/dataTableIndex/data-table-index.component';
import { MenuGroups } from './menu-groups';

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

describe('SidebarComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SidebarComponent,
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
    it('should create the sidenav', async(() => {
        const fixture = TestBed.createComponent(SidebarComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
      it(`should have menu groups`, async(() => {
        const fixture = TestBed.createComponent(SidebarComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.menuGroups).toBe(MenuGroups);
      }));
      it(`should toggle a group`, async(() => {
        const fixture = TestBed.createComponent(SidebarComponent);
        const app = fixture.debugElement.componentInstance;
        app.toggleGroup(MenuGroups[0]);
        expect(MenuGroups[0].expanded).toBeTruthy();
      }));
});
