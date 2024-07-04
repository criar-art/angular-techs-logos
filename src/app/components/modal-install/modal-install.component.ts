import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-install',
  standalone: true,
  templateUrl: './modal-install.component.html',
  styleUrl: './modal-install.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ModalinstallComponent {

  @Input() active: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal(): void {
    this.closeModal.emit();
  }

  codeExample: string = `import { AngularTechsLogosModule } from 'angular-techs-logos';

// Example of imports within @NgModule or @Component
// imports: [ AngularTechsLogosModule ]

<angular-techs-logos name="angular" />`
}
