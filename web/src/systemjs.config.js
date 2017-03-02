(function (global) {
    System.config({
        map: {

            // angular bundles
            '@angular/core': 'lib/@angular/core/bundles/core.umd.js',
            '@angular/common': 'lib/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'lib/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'lib/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'lib/@angular/http/bundles/http.umd.js',
            '@angular/router': 'lib/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'lib/@angular/forms/bundles/forms.umd.js',
            'rxjs': 'lib/rxjs',

            // libs
            'angular2-cookie': 'lib/angular2-cookie',
            '@ng-bootstrap': 'lib/@ng-bootstrap/ng-bootstrap/bundles',
            'ag-grid': 'lib/ag-grid',
            'ag-grid-ng2': 'lib/ag-grid-ng2',
            'lodash': 'lib/lodash'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            "": {
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-cookie': {
                main: './core.js',
                defaultExtension: 'js'
            },
            'ag-grid': {
                defaultExtension: 'js'
            },
            'ag-grid-ng2': {
                defaultExtension: 'js'
            },
            'lodash': {
                main: 'index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);