import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
  } from '@angular/material';
  import {NgModule} from '@angular/core';

  @NgModule({
    imports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatSliderModule,
      MatProgressBarModule,
      MatAutocompleteModule,
      MatInputModule,
      MatGridListModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatListModule,
      MatDialogModule,
      MatSelectModule,
      MatSidenavModule,
      MatToolbarModule
    ],
    exports: [
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatSliderModule,
      MatProgressBarModule,
      MatAutocompleteModule,
      MatInputModule,
      MatGridListModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatListModule,
      MatDialogModule,
      MatSelectModule,
      MatSidenavModule,
      MatToolbarModule
    ],
  })

  export class MaterialModule {
  }
