import { Component, OnDestroy, OnInit } from '@angular/core';

declare global {
  interface Window {
    singleSpa: any;
    app: any;
    app2: any;
    angularLifecycles: any;
    singleSpaAngularjs: any;
    angular: any;
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'app2';

  ngOnInit() {

    const domElement = document.getElementById('ang1Parcel-test');
    const parcelProps = {
      domElement,
      customProps: {
        prop1: 'test'
      }
    };

    const angularLifecycles = window.singleSpaAngularjs.default({
        angular: window.angular,
        domElementGetter: () => document.getElementById('ang1Parcel'),
        mainAngularModule: 'app',
        uiRouter: false,
        // angular-ui-router references `window.angular` :(, so we have to preserve the window.angular global
        preserveGlobal: true,
        template: `<example-directive></example-directive>`
    });

    const bootstrap = [
        angularLifecycles.bootstrap,
    ];

    const mount = [
        angularLifecycles.mount,
    ];

    const unmount = [
        angularLifecycles.unmount,
    ];

    const parcel = window.singleSpa.mountRootParcel(angularLifecycles, parcelProps);
    parcel.mountPromise.then((result) => {
        console.log('finished mounting parcel!');
    });

  }

  ngOnDestroy() {
    console.log('destroying app2');
  }
}
