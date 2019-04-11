import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="cui">
      <header cui-top-bar color="light">
        <ng-container *ngTemplateOutlet="brand" ngProjectAs="brand"></ng-container>
        <cui-top-bar-nav>
          <ng-container *ngTemplateOutlet="list"></ng-container>
        </cui-top-bar-nav>
        <cui-top-bar-right>
          <div class="cui-top-bar__user"></div>
          <div class="cui-top-bar__logged-out">
            <a href="#">Log In</a>
            <button cui-button color="blue" aria-label="myAriaLabel">
              Button
            </button>
          </div>
        </cui-top-bar-right>
        <cui-top-bar-mobile [shouldCloseOnClick]="false">
          <ng-container *ngTemplateOutlet="brand" ngProjectAs="brand"></ng-container>
          <ng-container *ngTemplateOutlet="list"></ng-container>
        </cui-top-bar-mobile>
      </header>

      <div class="row">
        <router-outlet></router-outlet>
      </div>
    </div>
    <ng-template #brand>
      <a routerLink="/home" cui-top-bar-brand [title]="title" image="assets/momentum-color-icon.png"></a>
    </ng-template>

    <ng-template #list>
      <a cui-list-item routerLink="/home" [active]="true" label="Home"></a>
      <a cui-list-item routerLink="/about" label="About"></a>
      <a cui-list-item routerLink="/blog" label="Blog"></a>
    </ng-template>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Collab UI Angular Starter';
}
