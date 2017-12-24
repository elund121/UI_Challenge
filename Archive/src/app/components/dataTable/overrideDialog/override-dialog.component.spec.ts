// import { TestBed, async } from '@angular/core/testing';
// import { OverrideDialogComponent } from '../../../components/dataTable/overrideDialog/override-dialog.component';

// // Services
// import { DataTableService, RecDetail, UnitTypeIndex } from '../../../services/dataTableService/data-table.service';

// // Material Design Components
// import {
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatDatepickerModule,
//     MatDialogModule,
//     MatIconModule,
//     MatInputModule,
//     MatMenuModule,
//     MatNativeDateModule,
//     MatRippleModule,
//     MatSelectModule,
//     MatSidenavModule,
//     MatSliderModule,
//     MatSlideToggleModule,
//     MatSortModule,
//     MatTableModule,
//     MatTabsModule,
//     MatToolbarModule,
//     MatTooltipModule,
//     MatStepperModule,
// } from '@angular/material';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// describe('DataTableIndexComponent', () => {
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 OverrideDialogComponent,
//             ],
//             imports: [
//                 FormsModule,
//                 BrowserAnimationsModule,
//                 // Material
//                 MatButtonModule,
//                 MatButtonToggleModule,
//                 MatDatepickerModule,
//                 MatDialogModule,
//                 MatIconModule,
//                 MatInputModule,
//                 MatMenuModule,
//                 MatNativeDateModule,
//                 MatRippleModule,
//                 MatSelectModule,
//                 MatSidenavModule,
//                 MatSliderModule,
//                 MatSlideToggleModule,
//                 MatSortModule,
//                 MatTableModule,
//                 MatTabsModule,
//                 MatToolbarModule,
//                 MatTooltipModule,
//                 MatStepperModule,
//             ],
//             providers: [
//                 DataTableService
//             ]

//         }).compileComponents();
//     }));
//     it(`should create the data override dialog`, async(() => {
//         const fixture = TestBed.createComponent(OverrideDialogComponent);
//         const app = fixture.debugElement.componentInstance;
//         expect(app).toBeTruthy();
//     }));
//       it(`should inject override data into scope`, async(() => {
//         const fixture = TestBed.createComponent(OverrideDialogComponent);
//         const app = fixture.debugElement.componentInstance;

//         spyOn(app, 'overrideDetail').and.returnValue(Promise.resolve(true));
//         fixture.whenStable().then(() => {
//             fixture.detectChanges();
//             expect(app.overrideDetail).toContain('width');
//         });
//       }));
// });
