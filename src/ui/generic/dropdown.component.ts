/*
 * Copyright 2016 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

import {Component, Directive, ContentChild, TemplateRef} from '@angular/core';

@Directive({
    selector: '[atdiff-dropdown-menu]'
})
export class DropdownMenu {
    constructor(public template: TemplateRef<any>) {}
}

@Component({
    selector: '[atdiff-dropdown]',
    host: {
        '[class.dropdown]': 'true',
        '[class.open]': 'open',
        '(click)': 'toggleDropdown()'
    },
    template: `
<ng-content></ng-content>
<ul *ngIf="open" class="dropdown-menu" style="min-width:100%;"><template [ngTemplateOutlet]="dropdownMenu.template"></template></ul>
`
})
export class Dropdown {
    @ContentChild(DropdownMenu) dropdownMenu: DropdownMenu;

    public open;

    toggleDropdown() {
        this.open = !this.open;
    }
}
