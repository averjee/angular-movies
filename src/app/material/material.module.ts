import { NgModule } from '@angular/core';
import { MatButtonModule, 
         MatButtonToggleModule, 
         MatIconModule,
         MatProgressSpinnerModule,
         MatToolbarModule,
         MatMenuModule,
         MatListModule,
         MatDividerModule,
         MatGridListModule,
         MatExpansionModule,
         MatCardModule,
         MatTabsModule,
         MatStepperModule,
         MatFormFieldModule,
         MatInputModule,
         MatSelectModule,
         MatAutocompleteModule,
         MatCheckboxModule,
         MatRadioModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatTooltipModule,
         MatSnackBarModule,
         MatDialogModule,
         MatTableModule,
         MatSortModule,
         MatPaginatorModule 
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule  
];

@NgModule({
  imports: [Material],
  exports: [Material],
  declarations: []
})
export class MaterialModule { }
