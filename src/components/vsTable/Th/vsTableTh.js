var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop } from 'vue-property-decorator';
import VsIconsArrow from '../../../icons/arrow';
import VsComponent from '../../../mixins/component';
var VsTableTh = /** @class */ (function (_super) {
    __extends(VsTableTh, _super);
    function VsTableTh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsTableTh.prototype.mounted = function () {
        this.$el.style.width = this.$el.scrollWidth + "px";
    };
    VsTableTh.prototype.render = function (h) {
        var icon2 = h(VsIconsArrow, {
            staticClass: 'icon-sort-2'
        });
        var icon = h(VsIconsArrow, {
            staticClass: 'icon-sort-1'
        });
        var icons = h('div', {
            staticClass: 'vs-table__th__content__icons'
        }, [
            icon,
            icon2
        ]);
        var content = h('div', {
            staticClass: 'vs-table__th__content'
        }, [
            this.$slots["default"],
            this.sort && icons
        ]);
        return h('th', {
            staticClass: 'vs-table__th',
            "class": {
                sort: this.sort
            },
            on: __assign({}, this.$listeners)
        }, [
            content
        ]);
    };
    __decorate([
        Prop({ "default": false, type: Boolean })
    ], VsTableTh.prototype, "sort");
    VsTableTh = __decorate([
        Component
    ], VsTableTh);
    return VsTableTh;
}(VsComponent));
export default VsTableTh;
