import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '../app/views/myApp.html'
})
export class AppComponent {

    testClick(args: string) {
        //test comments
        alert(args);
    }
}
