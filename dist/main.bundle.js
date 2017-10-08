webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/admin/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loading_loading_component__ = __webpack_require__("../../../../../src/app/admin/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__peliculas_peliculas_component__ = __webpack_require__("../../../../../src/app/admin/peliculas/peliculas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__generos_generos_component__ = __webpack_require__("../../../../../src/app/admin/generos/generos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_p_form_p_component__ = __webpack_require__("../../../../../src/app/admin/form-p/form-p.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__form_g_form_g_component__ = __webpack_require__("../../../../../src/app/admin/form-g/form-g.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__massive_massive_component__ = __webpack_require__("../../../../../src/app/admin/massive/massive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__generos_generos_service__ = __webpack_require__("../../../../../src/app/admin/generos/generos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__peliculas_peliculas_service__ = __webpack_require__("../../../../../src/app/admin/peliculas/peliculas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// componentes








//servicios.



var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__loading_loading_component__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__form_p_form_p_component__["a" /* FormPComponent */],
            __WEBPACK_IMPORTED_MODULE_12__form_g_form_g_component__["a" /* FormGComponent */],
            __WEBPACK_IMPORTED_MODULE_13__massive_massive_component__["a" /* MassiveComponent */],
            __WEBPACK_IMPORTED_MODULE_9__peliculas_peliculas_component__["a" /* PeliculasComponent */],
            __WEBPACK_IMPORTED_MODULE_10__generos_generos_component__["a" /* GenerosComponent */]
        ],
        providers: [
            // servicios usados en cualquiera de los componentes
            __WEBPACK_IMPORTED_MODULE_14__generos_generos_service__["a" /* GenerosService */],
            __WEBPACK_IMPORTED_MODULE_15__peliculas_peliculas_service__["a" /* PeliculasService */],
            __WEBPACK_IMPORTED_MODULE_16__auth_auth_guard_service__["a" /* AuthGuardService */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__peliculas_peliculas_component__ = __webpack_require__("../../../../../src/app/admin/peliculas/peliculas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__massive_massive_component__ = __webpack_require__("../../../../../src/app/admin/massive/massive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generos_generos_component__ = __webpack_require__("../../../../../src/app/admin/generos/generos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_p_form_p_component__ = __webpack_require__("../../../../../src/app/admin/form-p/form-p.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_g_form_g_component__ = __webpack_require__("../../../../../src/app/admin/form-g/form-g.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");







var AdminRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_0__admin_component__["a" /* AdminComponent */],
        children: [
            //rutas generos
            { path: 'generos', component: __WEBPACK_IMPORTED_MODULE_3__generos_generos_component__["a" /* GenerosComponent */] },
            { path: 'generos/:id', component: __WEBPACK_IMPORTED_MODULE_5__form_g_form_g_component__["a" /* FormGComponent */] },
            { path: 'generos_new', component: __WEBPACK_IMPORTED_MODULE_5__form_g_form_g_component__["a" /* FormGComponent */] },
            // rutas peliculas
            { path: 'peliculas', component: __WEBPACK_IMPORTED_MODULE_1__peliculas_peliculas_component__["a" /* PeliculasComponent */] },
            { path: 'peliculas/:id', component: __WEBPACK_IMPORTED_MODULE_4__form_p_form_p_component__["a" /* FormPComponent */] },
            { path: 'peliculas_new', component: __WEBPACK_IMPORTED_MODULE_4__form_p_form_p_component__["a" /* FormPComponent */] },
            { path: 'peliculas_massive', component: __WEBPACK_IMPORTED_MODULE_2__massive_massive_component__["a" /* MassiveComponent */] },
        ],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuardService */]]
    }
];
//# sourceMappingURL=admin.routes.js.map

/***/ }),

/***/ "../../../../../src/app/admin/form-g/form-g.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#caja-genero-create{\n    margin-top: 50px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/form-g/form-g.component.html":
/***/ (function(module, exports) {

module.exports = "<loading [visible]=\"generoLoading\" [module]=\"generoModule\"></loading>\n\n<div class=\"row\" id=\"caja-genero-create\">\n\t\n  <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n    <div class=\"card \">\n        <div class=\"card-header\">\n            <span>Genero</span>\n        </div>\n        <div class=\"card-block\"> \n\t\t\t<form [formGroup]=\"form\" (ngSubmit)=\"save()\" >\n\t            <div class=\"form-group\">\n\n\t            \t<label for=\"name\">Nombre</label>\n\t            \t<input [(ngModel)]=\"genero.nombre\" formControlName=\"nombre\" type=\"text\" class=\"form-control\">\n\n\t            \t<div *ngIf=\"form.controls['nombre'].touched && !form.controls['nombre'].valid\" class=\"alert alert-danger\">\n\t                    Nombre del Genero es Obligatorio.\n\t                </div>\n\n\t            </div>\n\n\t            <input type=\"submit\" class=\"btn btn-primary\" value=\"Registrar\" [disabled]=\"!form.valid\" >\n\t\t\t</form>\n        </div> \n    </div>    \n  </div>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/form-g/form-g.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormGComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generos_generos_service__ = __webpack_require__("../../../../../src/app/admin/generos/generos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generos_generos__ = __webpack_require__("../../../../../src/app/admin/generos/generos.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormGComponent = (function () {
    function FormGComponent(fb, router, routeParams, generoService) {
        this.fb = fb;
        this.router = router;
        this.routeParams = routeParams;
        this.generoService = generoService;
        this.genero = new __WEBPACK_IMPORTED_MODULE_4__generos_generos__["a" /* Generos */]();
        this.generoModule = "";
    }
    FormGComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        var id = this.routeParams
            .snapshot
            .params['id'];
        if (!id)
            return;
        this.generoLoading = true;
        this.generoModule = "Cargando datos...";
        this.generoService
            .getGenerosId(id)
            .subscribe(function (genero) { _this.genero = genero; }, null, function () {
            _this.generoLoading = false;
            _this.generoModule = "";
        });
    };
    FormGComponent.prototype.save = function () {
        var _this = this;
        if (this.genero._id)
            this.generoService
                .updateGenero(this.genero)
                .subscribe(function (genero) {
                console.log(genero);
                _this.router.navigate(['admin/generos']);
            });
        else
            this.generoService
                .addGeneros(this.genero)
                .subscribe(function (x) {
                // respuesta del servidor
                console.log(x);
                // una vez sale todo bien redireccionamos a la vista principal
                _this.router.navigate(['admin/generos']);
            });
    };
    return FormGComponent;
}());
FormGComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'form-generos',
        template: __webpack_require__("../../../../../src/app/admin/form-g/form-g.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/form-g/form-g.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__generos_generos_service__["a" /* GenerosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__generos_generos_service__["a" /* GenerosService */]) === "function" && _d || Object])
], FormGComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form-g.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/form-p/form-p.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margen-top-card{\n    margin-top: 30px;\n}\n\n.caja-enlace{\n    margin-bottom: 30px;\n}\n\n.margen-div-btn{\n    margin-bottom: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/form-p/form-p.component.html":
/***/ (function(module, exports) {

module.exports = "<loading [visible]=\"pelisLoading\" [module]=\"pelisModule\"></loading>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"save()\" enctype=\"multipart/form-data\">\n\n    <div class=\"caja-pelicula margen-top-card\">\n\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <span>Datos de la Pelicula</span>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"row\">\n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Titulo</label>\n                            <input [(ngModel)]=\"pelicula.titulo\" formControlName=\"titulo\" type=\"text\" class=\"form-control form-control-sm\" >  \n                            <div *ngIf=\"form.controls['titulo'].touched && !form.controls['titulo'].valid\" class=\"text-danger\">\n                                El Titulo es Obligatorio.\n                            </div>\n\n                            <label for=\"name\">Año</label>\n                            <input [(ngModel)]=\"pelicula.age\" formControlName=\"age\" type=\"text\" class=\"form-control form-control-sm\" >  \n                            <div *ngIf=\"form.controls['age'].touched && !form.controls['age'].valid\" class=\"text-danger\">\n                                El Año es Obligatorio.\n                            </div> \n\n                            <label for=\"portada\">Portada</label>\n                            <input [(ngModel)]=\"pelicula.portada\" formControlName=\"portada\" type=\"file\" (change)=\"fileChange($event)\" accept=\".png, .jpg, .jpeg\" class=\"form-control form-control-sm\">\n                            <div *ngIf=\"form.controls['portada'].touched && !form.controls['portada'].valid\" class=\"text-danger\">\n                                La Portada es Obligatoria.\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Audio</label>\n                            <input [(ngModel)]=\"pelicula.audio\" formControlName=\"audio\" type=\"text\" class=\"form-control form-control-sm\" >  \n                            <div *ngIf=\"form.controls['audio'].touched && !form.controls['audio'].valid\" class=\"text-danger\">\n                                El Audio es Obligatorio.\n                            </div>\n\n                            <label for=\"genero\">Genero</label>\n                            <select class=\"custom-select form-control form-control-sm\" [(ngModel)]=\"pelicula.genero\" formControlName=\"genero\">\n                                <option *ngFor=\"let genero of generos\" [ngValue]=\"genero._id\">{{ genero.nombre }}</option>\n                            </select>\n                            <div *ngIf=\"form.controls['genero'].touched && !form.controls['genero'].valid\" class=\"text-danger\">\n                                El Genero es Obligatorio.\n                            </div>   \n                        </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <label for=\"name\">Calidad</label>\n                        <input [(ngModel)]=\"pelicula.calidad\" formControlName=\"calidad\" type=\"text\" class=\"form-control form-control-sm\" >  \n                        <div *ngIf=\"form.controls['calidad'].touched && !form.controls['calidad'].valid\" class=\"text-danger\">\n                            La Calidad es Obligatoria.\n                        </div>\n\n                        <label for=\"name\">Puntuacion</label>\n                        <input [(ngModel)]=\"pelicula.puntuacion\" formControlName=\"puntuacion\" type=\"text\" class=\"form-control form-control-sm\" >  \n                        <div *ngIf=\"form.controls['puntuacion'].touched && !form.controls['puntuacion'].valid\" class=\"text-danger\">\n                            La Puntuacion es Obligatoria.\n                        </div>\n\n                        <label for=\"name\">Director</label>\n                        <input [(ngModel)]=\"pelicula.director\" formControlName=\"director\" type=\"text\" class=\"form-control form-control-sm\" >  \n                        <div *ngIf=\"form.controls['director'].touched && !form.controls['director'].valid\" class=\"text-danger\">\n                            El Director es Obligatorio.\n                        </div> \n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Descripcion</label>\n                            <textarea [(ngModel)]=\"pelicula.descripcion\" formControlName=\"descripcion\" class=\"form-control form-control-sm\"></textarea>\n                            <div *ngIf=\"form.controls['descripcion'].touched && !form.controls['descripcion'].valid\" class=\"text-danger\">\n                                La Descripcion es Obligatoria.\n                            </div> \n                             \n                            \n                        </div>\n                    </div>\n                        \n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\"> \n                             \n                            <label for=\"name\">Elenco</label>\n                            <textarea [(ngModel)]=\"pelicula.elenco\" formControlName=\"elenco\" type=\"text\" class=\"form-control form-control-sm\"></textarea>\n                            <div *ngIf=\"form.controls['elenco'].touched && !form.controls['elenco'].valid\" class=\"text-danger\">\n                                El Elenco es Obligatorio.\n                            </div>\n                        </div>  \n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"caja-enlace\">\n      <fieldset>\n          <div class=\"d-flex justify-content-end\">\n            <div class=\"mr-auto p-2\"><legend class=\"float-left\">Enlaces:</legend></div>\n            <div class=\"p-2\"><a (click)=\"addArray()\" style=\"cursor: default\" class=\"btn btn-outline-secondary \">Agregar Enlace +</a></div>\n          </div>\n            <div formArrayName=\"myArray\"> \n                <div class=\"row\">      \n                    <div *ngFor=\"let myGroup of form.controls.myArray.controls; let i=index\" class=\"col-md-4 margen-top-card\">\n                        <div class=\"card \">\n                            <div class=\"card-header\">\n                                <span>Enlace</span>\n                                <!--<span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.addresses.controls.length > 1\" (click)=\"removeAddress(i)\"></span>-->\n                            </div>\n                            <div [formGroupName]=\"i\" class=\"card-block\"> \n                                <div class=\"form-group\">\n                                    <label>Servidor</label>\n                                    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"servidor\" >\n                                </div>\n                                <div *ngIf=\"form.controls.myArray.controls[i].controls.servidor.touched && \n                                !form.controls.myArray.controls[i].controls.servidor.valid\" class=\"text-danger\">\n                                    El nombre del servidor es Obligatorio.\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <label>Url</label>\n                                    <input type=\"url\" class=\"form-control form-control-sm\" formControlName=\"url\" >\n                                </div>\n                                <div *ngIf=\"form.controls.myArray.controls[i].controls.url.touched && \n                                !form.controls.myArray.controls[i].controls.url.valid\" class=\"text-danger\">\n                                    La direccion del Servidor es Obligatoria.\n                                </div>\n\n                            </div> \n                        </div>                \n                    </div>\n                </div>        \n            </div>\n        </fieldset>\n     </div>\n  \n      <div class=\"float-right margen-div-btn\">\n        <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Registrar\" [disabled]=\"!form.valid\" >        \n      </div>\n\n      <!--<pre>form value: <br>{{form.value | json}}</pre>-->\n</form>  \n"

/***/ }),

/***/ "../../../../../src/app/admin/form-p/form-p.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas_service__ = __webpack_require__("../../../../../src/app/admin/peliculas/peliculas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generos_generos_service__ = __webpack_require__("../../../../../src/app/admin/generos/generos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__peliculas_peliculas__ = __webpack_require__("../../../../../src/app/admin/peliculas/peliculas.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormPComponent = (function () {
    function FormPComponent(fb, router, routeParams, peliculaService, generoServ) {
        this.fb = fb;
        this.router = router;
        this.routeParams = routeParams;
        this.peliculaService = peliculaService;
        this.generoServ = generoServ;
        this.pelicula = new __WEBPACK_IMPORTED_MODULE_5__peliculas_peliculas__["a" /* Peliculas */]();
        this.pelisModule = "";
    }
    // se ejecutara una sola vez, solo cuando inicie la vista
    FormPComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelisLoading = true;
        this.pelisModule = "Cargando generos...";
        // recibe un array de generos
        this.generoServ
            .getGeneros()
            .subscribe(function (generos) {
            _this.generos = generos;
        }, null, function () {
            _this.pelisLoading = false;
            _this.pelisModule = "";
        });
        // inicializo el formulario y declaro las validaciones a realizar
        this.form = this.fb.group({
            titulo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            age: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            audio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            calidad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            puntuacion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            director: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            elenco: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            genero: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            portada: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            myArray: this.fb.array([])
        });
        // tomo la variable que se muestra en ruta de la vista
        var id = this.routeParams
            .snapshot
            .params['id'];
        // si no hay identificador, inicializar el array de enlaces
        if (!id) {
            this.addArray();
            return;
        }
        else {
            this.pelisLoading = true;
            this.pelisModule = "Cargando datos de la pelicula...";
            this.peliculaService
                .getPeliculasId(id)
                .subscribe(function (pelicula) {
                _this.pelicula = pelicula;
                // si la longitud del objeto de enlace es mayor que 0
                if (_this.pelicula.enlace.length)
                    _this.addEnlaces(_this.pelicula); // inicializo el array de enlaces con cada uno de los valores registrados.
            }, null, function () {
                _this.pelisLoading = false;
                _this.pelisModule = "";
            });
        }
    };
    // guarda los datos de la pelicula
    FormPComponent.prototype.save = function () {
        var _this = this;
        // si existe la pelicula
        if (this.pelicula._id) {
            // envio los datos para actualizar la pelicula
            this.peliculaService
                .updatePelicula(this.pelicula._id, this.form.value, this.portada)
                .subscribe(function (pelicula) {
                console.log(pelicula);
                _this.router.navigate(['admin/peliculas']);
            });
        }
        else {
            // agrego la pelicula
            this.peliculaService
                .addPelicula(this.form.value, this.portada)
                .subscribe(function (x) {
                // una vez sale todo bien redireccionamos a la vista principal
                _this.router.navigate(['admin/peliculas']);
            });
        }
        // console.log(this.form.value);
    };
    FormPComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.portada = fileList[0];
        }
    };
    // inicializo el array de enlaces
    FormPComponent.prototype.initArray = function () {
        return this.fb.group({
            servidor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            url: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    // agrego los valores al formulario, con los datos del enlace de la pelicula a actualizar
    FormPComponent.prototype.initArrayUpdate = function (pelis) {
        return this.fb.group({
            _id: [pelis._id],
            servidor: [pelis.servidor, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            url: [pelis.url, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    FormPComponent.prototype.addArray = function () {
        var control = this.form.controls['myArray'];
        control.push(this.initArray());
    };
    // elimino el enlace 
    FormPComponent.prototype.removeDataKey = function (i) {
        var control = this.form.controls['myArray'];
        control.removeAt(i);
        //  this.myGroupName.splice(i,1);
    };
    // agrego al formulario los campos de enlace inicializados con cada uno de los datos
    FormPComponent.prototype.addEnlaces = function (pelicula) {
        var control = this.form.controls['myArray'];
        // agregando datos del enlace
        for (var pelis in pelicula.enlace) {
            // console.log(pelicula.enlace[pelis]);
            control.push(this.initArrayUpdate(pelicula.enlace[pelis]));
        }
    };
    return FormPComponent;
}());
FormPComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-p',
        template: __webpack_require__("../../../../../src/app/admin/form-p/form-p.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/form-p/form-p.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas_service__["a" /* PeliculasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas_service__["a" /* PeliculasService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__generos_generos_service__["a" /* GenerosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__generos_generos_service__["a" /* GenerosService */]) === "function" && _e || Object])
], FormPComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=form-p.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/generos/generos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#caja-genero,\n#btn-add-genero,\n#display-genero{\n    margin-top:50px;\n}\n\n.clickable{\n    cursor: pointer;\n    color: #f44040;\n}\n\n.btn-update{\n    color: #68f58a;\n    text-decoration: none;\n}\n\n.margen-genero-inf{\n    margin-bottom: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/generos/generos.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"caja-genero\">\n\t\n\t<loading [visible]=\"generosLoading\" [module]=\"generosModule\"></loading>\n\t\n\t<h1>Generos</h1>\n\n\t<p id=\"btn-add-genero\">\n\t\t<a routerLink=\"/admin/generos_new\" class=\"btn btn-primary\">Agregar Genero</a>\n\t</p>\n\n\t<div id=\"display-genero\" *ngIf=\"isGeneros\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-6 margen-genero-inf\" *ngFor=\"let genero of generos\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t\t<h5 class=\"card-title text-center\"> {{ genero.nombre }} </h5>\n\t\t\t\t\t\t<div class=\"card-text text-right\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/admin/generos', genero._id]\" class=\"btn-update\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o fa-lg\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<i (click)=\"deleteGenero(genero)\" class=\"fa fa-trash fa-lg clickable\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/generos/generos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generos_service__ = __webpack_require__("../../../../../src/app/admin/generos/generos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenerosComponent = (function () {
    function GenerosComponent(generoServ, router) {
        this.generoServ = generoServ;
        this.router = router;
        this.generosModule = "";
    }
    GenerosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generosLoading = true;
        this.generosModule = "Cargando CRUD de Generos...";
        this.generoServ
            .getGeneros()
            .subscribe(function (generos) {
            _this.generos = generos,
                _this.isGeneros = _this.generos.length == 0 ? false : true;
            _this.generosLoading = false;
            _this.generosModule = "";
        }, null, function () {
            _this.generosLoading = false;
            _this.generosModule = "";
        });
    };
    GenerosComponent.prototype.deleteGenero = function (genero) {
        var _this = this;
        if (confirm("Estas seguro de eliminar el genero " + genero.nombre + "?")) {
            this.generosLoading = true;
            this.generosModule = "Eliminando genero " + genero.nombre;
            var index = this.generos.indexOf(genero);
            this.generos.splice(index, 1);
            // apenas se elimine cargar los datos nuevamente
            // aqui lo que hace es jugar con los datos de la tabla
            this.generoServ
                .deleteGenero(genero._id)
                .subscribe(function (x) {
                // respuesta del servidor
                console.log(x);
                // una vez sale todo bien redireccionamos a la vista principal
                // location.reload();
            }, function (err) {
                _this.generos
                    .splice(index, 0, genero);
                _this.generosLoading = false;
                _this.generosModule = "";
            }, function () {
                _this.generosLoading = false;
                _this.generosModule = "";
            });
        }
    };
    return GenerosComponent;
}());
GenerosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-generos',
        template: __webpack_require__("../../../../../src/app/admin/generos/generos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/generos/generos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__generos_service__["a" /* GenerosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__generos_service__["a" /* GenerosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GenerosComponent);

var _a, _b;
//# sourceMappingURL=generos.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/generos/generos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenerosService = (function () {
    function GenerosService(http) {
        this.http = http;
        // private url = "//localhost:4000/api/genero"; // url de los servicios en desarrollo
        this.url = "//filmsplay.herokuapp.com/api/genero"; // url de los servicios en produccion
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (localStorage.getItem('token')) {
            this.headers.append('x-access-token', localStorage.getItem('token'));
        }
    }
    GenerosService.prototype.getGeneros = function () {
        return this.http
            .get(this.url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    GenerosService.prototype.getGenerosId = function (generoId) {
        return this.http
            .get(this.getGeneroUrl(generoId), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    GenerosService.prototype.addGeneros = function (genero) {
        var headersLocal = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersLocal.append('Content-Type', 'application/json');
        headersLocal.append('x-access-token', localStorage.getItem('token'));
        return this.http
            .post(this.url, JSON.stringify({
            nombre: genero.nombre
        }), { headers: headersLocal })
            .map(function (res) { return res.json(); });
    };
    GenerosService.prototype.updateGenero = function (genero) {
        var headersLocal = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersLocal.append('Content-Type', 'application/json');
        headersLocal.append('x-access-token', localStorage.getItem('token'));
        return this.http.put(this.getGeneroUrl(genero._id), JSON.stringify(genero), { headers: headersLocal })
            .map(function (res) { return res.json(); });
    };
    GenerosService.prototype.deleteGenero = function (generoId) {
        return this.http.delete(this.getGeneroUrl(generoId), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    GenerosService.prototype.getGeneroUrl = function (userId) {
        return this.url + "/" + userId;
    };
    return GenerosService;
}());
GenerosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GenerosService);

var _a;
//# sourceMappingURL=generos.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/generos/generos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Generos; });
var Generos = (function () {
    function Generos() {
    }
    return Generos;
}());

//# sourceMappingURL=generos.js.map

/***/ }),

/***/ "../../../../../src/app/admin/loading/loading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".caja-spinner {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  /*background: #050519;*/\n  opacity: 0.9;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  z-index: 2;\n}\n\n.flex {\n  min-height: 60pt;\n}\n\n@-webkit-keyframes loading {\n  0% {\n    width: 50pt;\n    height: 50pt;\n    margin-top: 0;\n  }\n  25% {\n    height: 4pt;\n    margin-top: 23pt;\n  }\n  50% {\n    width: 4pt;\n  }\n  75% {\n    width: 50pt;\n  }\n  100% {\n    width: 50pt;\n    height: 50pt;\n    margin-top: 0;\n  }\n}\n\n@keyframes loading {\n  0% {\n    width: 50pt;\n    height: 50pt;\n    margin-top: 0;\n  }\n  25% {\n    height: 4pt;\n    margin-top: 23pt;\n  }\n  50% {\n    width: 4pt;\n  }\n  75% {\n    width: 50pt;\n  }\n  100% {\n    width: 50pt;\n    height: 50pt;\n    margin-top: 0;\n  }\n}\n\n.loader {\n  width: 50pt;\n  height: 50pt;\n  border-radius: 100%;\n  border: #6767fa 4pt solid;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: transparent;\n  -webkit-animation: loading 1s infinite;\n          animation: loading 1s infinite;\n}\n\n.load-text {\n  padding-top: 15px;\n  text-align: center;\n  font: 14pt \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: lighten(#6767fa, 75%);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"caja-spinner\" *ngIf=\"visible\">\n  <div class=\"flex\">\n    <div class=\"loader\">\n    </div>\n  </div>\n  <div class=\"load-text\">\n    {{ module }}\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
        this.visible = true;
        this.module = "Cargando...";
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    return LoadingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LoadingComponent.prototype, "visible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LoadingComponent.prototype, "module", void 0);
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'loading',
        template: __webpack_require__("../../../../../src/app/admin/loading/loading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/loading/loading.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/massive/massive.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".caja-form{\n    margin-top: 125px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/massive/massive.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex justify-content-center caja-form\">\n    <div class=\"col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"sendArchivo()\" enctype=\"multipart/form-data\">\n            <div class=\"card \">\n                <div class=\"card-header\">\n                    <span>Carga Masiva de datos</span>\n                </div>\n                <div class=\"card-block\"> \n                    <div class=\"form-group\">\n                        <label>Servidor</label>\n                        <input formControlName=\"archivo\" type=\"file\" (change)=\"fileChange($event)\" accept=\".csv\" class=\"form-control form-control-sm\">\n                    </div>\n                    <div *ngIf=\"form.controls['archivo'].touched && !form.controls['archivo'].valid\" class=\"text-danger\">\n                        Es necesario que ingrese un archivo .csv para realizar la carga masiva de datos.\n                    </div>\n                </div> \n                <div class=\"card-footer\">\n                    <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Registrar\" [disabled]=\"!form.valid\" >\n                </div>\n            </div>\n        </form>\n    </div>   \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/massive/massive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MassiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas_service__ = __webpack_require__("../../../../../src/app/admin/peliculas/peliculas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MassiveComponent = (function () {
    function MassiveComponent(fb, router, peliculaService) {
        this.fb = fb;
        this.router = router;
        this.peliculaService = peliculaService;
    }
    MassiveComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            archivo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    // envia el archivo al servidor
    MassiveComponent.prototype.sendArchivo = function () {
        var _this = this;
        this.peliculaService
            .sendCsv(this.archivo)
            .subscribe(function (x) {
            // una vez sale todo bien redireccionamos a la vista principal
            _this.router.navigate(['admin/peliculas']);
        });
    };
    MassiveComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.archivo = fileList[0];
        }
    };
    return MassiveComponent;
}());
MassiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-massive',
        template: __webpack_require__("../../../../../src/app/admin/massive/massive.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/massive/massive.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas_service__["a" /* PeliculasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__peliculas_peliculas_service__["a" /* PeliculasService */]) === "function" && _c || Object])
], MassiveComponent);

var _a, _b, _c;
//# sourceMappingURL=massive.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/admin/peliculas\">Admin Films</a>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" routerLink=\"/admin/peliculas\">Peliculas <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" routerLink=\"/admin/generos\" >Generos <span class=\"sr-only\">(current)</span></a>\n                </li>\n            </ul>\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n            </form>\n\n            <div class=\"dropdown show\">\n                <a class=\"btn btn-secondary dropdown-toggle\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{ username }}\n                </a>\n\n                 <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n                    <a class=\"dropdown-item\" (click)=\"auth.logout()\">Cerrar Sesion</a>\n                </div> \n            </div>\n        </div>\n    </nav>\n\n    <div id=\"page-wrapper\">\n        <router-outlet></router-outlet>        \n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.username = '';
        this.username = localStorage.getItem("username");
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../src/app/admin/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/peliculas/peliculas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#caja-peli,\n#btn-add-peli,\n#display-peli{\n    margin-top:50px;\n}\n\n.clickable{\n    cursor: pointer;\n    color: #f44040;\n}\n\n.btn-update{\n    color: #68f58a;\n    text-decoration: none;\n}\n\n.margen-peli-inf{\n    margin-bottom: 25px;\n}\n\n.img-pelicula{\n    width: 100%;\n    height: 280px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/peliculas/peliculas.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"caja-peli\">\n\n\t<loading [visible]=\"pelisLoading\" [module]=\"pelisModule\"></loading>\n\n\t<h1>Peliculas</h1>\n\n\t<p id=\"btn-add-peli\">\n\t\t<a routerLink=\"/admin/peliculas_new\" class=\"btn btn-primary\">Agregar Pelicula</a>\n\t\t<a routerLink=\"/admin/peliculas_massive\" class=\"btn btn-success\">Registro masivo</a>\n\t</p>\n\n\t<div id=\"display-peli\" *ngIf=\"isPeliculas\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-3 col-md-4 margen-peli-inf\" *ngFor=\"let pelicula of peliculas\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<img class=\"card-img-top\" src=\"/imagenes/films/{{pelicula.foto}}\" alt=\"...\" class=\"img-pelicula\">\n\t\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t\t<h5 class=\"card-title text-center\"> {{ pelicula.titulo.substr(0,23) }} </h5>\n\t\t\t\t\t\t<div class=\"card-text text-right\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/admin/peliculas', pelicula._id]\" class=\"btn-update\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil-square-o fa-lg\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<i (click)=\"deletePelicula(pelicula)\" class=\"fa fa-trash fa-lg clickable\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/peliculas/peliculas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeliculasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__peliculas_service__ = __webpack_require__("../../../../../src/app/admin/peliculas/peliculas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeliculasComponent = (function () {
    function PeliculasComponent(peliculaServ, router) {
        this.peliculaServ = peliculaServ;
        this.router = router;
        this.pelisModule = "";
    }
    PeliculasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pelisLoading = true;
        this.pelisModule = "Cargando CRUD de peliculas...";
        this.peliculaServ
            .getPeliculas()
            .subscribe(function (peliculas) {
            _this.peliculas = peliculas,
                _this.isPeliculas = _this.peliculas.length == 0 ? false : true;
            _this.pelisLoading = false;
            _this.pelisModule = "";
        }, null, function () {
            _this.pelisLoading = false;
            _this.pelisModule = "";
        });
    };
    PeliculasComponent.prototype.deletePelicula = function (pelicula) {
        var _this = this;
        if (confirm("Estas seguro de eliminar el pelicula " + pelicula.titulo + "?")) {
            var index = this.peliculas.indexOf(pelicula);
            this.peliculas.splice(index, 1);
            this.pelisLoading = true;
            this.pelisModule = "Eliminando Pelicula " + pelicula.titulo;
            // apenas se elimine cargar los datos nuevamente
            // aqui lo que hace es jugar con los datos de la tabla
            this.peliculaServ
                .deletePelicula(pelicula._id)
                .subscribe(function (x) {
                // respuesta del servidor
                console.log(x);
                // una vez sale todo bien redireccionamos a la vista principal
                // location.reload();
                _this.pelisLoading = false;
                _this.pelisModule = "";
            }, function (err) {
                _this.peliculas
                    .splice(index, 0, pelicula);
                _this.pelisLoading = false;
                _this.pelisModule = "";
            });
        }
    };
    return PeliculasComponent;
}());
PeliculasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-peliculas',
        template: __webpack_require__("../../../../../src/app/admin/peliculas/peliculas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/peliculas/peliculas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__peliculas_service__["a" /* PeliculasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__peliculas_service__["a" /* PeliculasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PeliculasComponent);

var _a, _b;
//# sourceMappingURL=peliculas.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/peliculas/peliculas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeliculasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeliculasService = (function () {
    function PeliculasService(http) {
        this.http = http;
        // private url = "//localhost:4000/api/peliculas"; // url local
        // private urlBase = "//localhost:4000/api";
        this.url = "//filmsplay.herokuapp.com/api/peliculas"; // url de los servicios en produccion
        this.urlBase = "//filmsplay.herokuapp.com/api";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (localStorage.getItem('token')) {
            this.headers.append('x-access-token', localStorage.getItem('token'));
        }
    }
    PeliculasService.prototype.getPeliculas = function () {
        return this.http
            .get(this.url, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    PeliculasService.prototype.getPeliculasId = function (peliculaId) {
        return this.http
            .get(this.getPeliculaUrl(peliculaId), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    PeliculasService.prototype.addPelicula = function (pelicula, portada) {
        var form_data = new FormData();
        for (var key in pelicula) {
            form_data.append(key, pelicula[key]);
        }
        for (var i = 0; i < Object.keys(pelicula.myArray).length; i++) {
            form_data.append('servidor[]', pelicula.myArray[i].servidor);
            form_data.append('url[]', pelicula.myArray[i].url);
        }
        form_data.append('portada', portada, portada.name);
        return this.http
            .post(this.url, form_data, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    PeliculasService.prototype.updatePelicula = function (id, pelicula, portada) {
        var form_data = new FormData();
        for (var key in pelicula) {
            if (key == "genero" && typeof pelicula[key] == "object") {
                form_data.append("genero", pelicula[key]._id);
            }
            else {
                form_data.append(key, pelicula[key]);
            }
        }
        for (var i = 0; i < Object.keys(pelicula.myArray).length; i++) {
            if (pelicula.myArray[i]._id) {
                form_data.append('_id[]', pelicula.myArray[i]._id);
            }
            form_data.append('servidor[]', pelicula.myArray[i].servidor);
            form_data.append('url[]', pelicula.myArray[i].url);
        }
        form_data.append('portada', portada, portada.name);
        return this.http
            .put(this.getPeliculaUrl(id), form_data, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    PeliculasService.prototype.deletePelicula = function (peliculaId) {
        return this.http.delete(this.getPeliculaUrl(peliculaId), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    PeliculasService.prototype.sendCsv = function (archivo) {
        var form_data = new FormData();
        form_data.append('archivo', archivo, archivo.name);
        return this.http
            .post(this.urlBase + "/csv/peliculas", form_data, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    PeliculasService.prototype.getPeliculaUrl = function (peliculaId) {
        return this.url + "/" + peliculaId;
    };
    return PeliculasService;
}());
PeliculasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PeliculasService);

var _a;
//# sourceMappingURL=peliculas.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/peliculas/peliculas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Peliculas; });
//import { Enlaces } from './enlaces';
var Peliculas = (function () {
    function Peliculas() {
    }
    return Peliculas;
}());

//# sourceMappingURL=peliculas.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.username = 'Bello';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// modulo administrativo

// componente de autenticacion

//servicios

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__["a" /* AuthComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6__admin_admin_module__["a" /* AdminModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin_routes__ = __webpack_require__("../../../../../src/app/admin/admin.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");



var routes = __WEBPACK_IMPORTED_MODULE_1__admin_admin_routes__["a" /* AdminRoutes */].concat([
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthComponent */] }
    // toda ruta que no conozca redireccionala al componente notfound
    // {path: '**', component: NotFoundComponent}   
]);
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        // Check to see if a user has a valid JWT
        if (localStorage.getItem('token')) {
            // If they do, return true and allow the user to load the home component
            return true;
        }
        // If not, they redirect them to the login page
        this.router.navigate(['/auth']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#caja-auth{\n    width: 300px;\n    height: auto;\n    /*centrado tanto vertical como horizontal*/\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n}\n\n.caja-login{\n    margin-top: 60px;\n}\n\n.caja-logout{\n    margin-top: 25px;    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"caja-auth\">\n    <h3 class=\"text-center\">Autenticación</h3>\n    <hr>\n    <div class=\"caja-login\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"login()\" >\n\t            <div class=\"form-group\">\n\t            \t<label for=\"username\">Usuario</label>\n\t            \t<input [(ngModel)]=\"user.username\" formControlName=\"username\" type=\"text\" class=\"form-control\">\n\n\t            \t<div *ngIf=\"form.controls['username'].touched && !form.controls['username'].valid\" class=\"alert alert-danger\">\n                    Nombre del Usuario es Obligatorio.\n                </div>\n\t            </div>\n\n              <div class=\"form-group\">\n\t            \t<label for=\"password\">Password</label>\n\t            \t<input [(ngModel)]=\"user.password\" formControlName=\"password\" type=\"password\" class=\"form-control\">\n\n\t            \t<div *ngIf=\"form.controls['password'].touched && !form.controls['password'].valid\" class=\"alert alert-danger\">\n                    La clave del usuario es Obligatoria.\n                </div>\n\t            </div>\n\n\t            <input type=\"submit\" class=\"btn btn-primary\" value=\"Iniciar Sesion\" [disabled]=\"!form.valid\" >\n\t\t\t</form>    \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/auth/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = (function () {
    function AuthComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.user).subscribe(function (x) {
            if (!localStorage.getItem('token')) {
                localStorage.setItem('token', x.token);
                localStorage.setItem('username', x.user);
            }
            _this.router.navigate(['admin/peliculas']);
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuthComponent);

var _a, _b, _c;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.url = ""; // url de los servicios en desarrollo
        //   this.url = "//localhost:4000/api/user/";
        this.url = "//filmsplay.herokuapp.com/api/user/";
    }
    AuthService.prototype.login = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.url + "login", JSON.stringify({
            username: user.username,
            password: user.password,
        }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.router.navigateByUrl('/auth');
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map