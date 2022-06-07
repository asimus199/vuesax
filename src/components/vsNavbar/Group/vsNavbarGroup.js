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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from 'vue-property-decorator';
import VsComponent from '../../../mixins/component';
var VsNavbarGroup = /** @class */ (function (_super) {
    __extends(VsNavbarGroup, _super);
    function VsNavbarGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsNavbarGroup.prototype.setModel = function (id) {
        var parent = this.$parent;
        parent.setModel(id);
    };
    VsNavbarGroup.prototype.setLeftLine = function () {
        var parent = this.$parent;
        var left = this.$el.offsetLeft;
        parent.setLeftLine(left);
        var width = this.$refs.item.scrollWidth;
        parent.setWidthLine(width);
    };
    VsNavbarGroup.prototype.setWidthLine = function () { };
    VsNavbarGroup.prototype.render = function (h) {
        var item = h('button', {
            staticClass: 'vs-navbar__group__item',
            ref: 'item'
        }, [
            this.$slots["default"]
        ]);
        var items = h('div', {
            staticClass: 'vs-navbar__group__items'
        }, [
            this.$slots.items
        ]);
        return h('div', {
            staticClass: 'vs-navbar__group'
        }, [
            item,
            items
        ]);
    };
    VsNavbarGroup = __decorate([
        Component
    ], VsNavbarGroup);
    return VsNavbarGroup;
}(VsComponent));
export default VsNavbarGroup;
