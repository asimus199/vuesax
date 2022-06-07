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
import { Component, Prop, Watch } from 'vue-property-decorator';
import VsComponent from '../../../mixins/component';
import VsIconsArrow from '../../../icons/arrow';
var VsSidebarItem = /** @class */ (function (_super) {
    __extends(VsSidebarItem, _super);
    function VsSidebarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsSidebarItem.prototype.handleReduce = function (val) {
        if (val) {
            console.log('reduce');
        }
    };
    VsSidebarItem.prototype.handleClick = function () {
        if (this.to) {
            this.$router.push(this.to);
        }
        else if (this.href) {
            window.open(this.href, this.target);
        }
    };
    VsSidebarItem.prototype.render = function (h) {
        var _this = this;
        var icon = h('div', {
            staticClass: 'vs-sidebar__item__icon'
        }, [
            this.$slots.icon
        ]);
        var textTooltip = h('div', {
            staticClass: 'vs-sidebar__item__text-tooltip'
        }, [
            this.$slots["default"]
        ]);
        var text = h('div', {
            staticClass: 'vs-sidebar__item__text'
        }, [
            this.$slots["default"]
        ]);
        var iconArrow = h(VsIconsArrow);
        var arrow = h('div', {
            staticClass: 'vs-sidebar__item__arrow'
        }, [
            this.$slots.arrow || iconArrow
        ]);
        var iconActive = h('i', {
            staticClass: 'vs-sidebar__item__chevron bx bx-chevron-right'
        });
        var item = h('div', {
            staticClass: 'vs-sidebar__box'
        }, [
            this.$slots.icon && icon,
            text,
            textTooltip,
            iconActive,
            this.$slots.arrow || this.arrow && arrow
        ]);
        return h('button', {
            staticClass: 'vs-sidebar__item',
            "class": {
                active: this.$parent.getValue && this.id == this.$parent.getValue,
                hasIcon: !!this.$slots.icon
            },
            on: {
                click: function () {
                    if (_this.id) {
                        _this.$parent.handleClickItem(_this.id);
                    }
                    _this.handleClick();
                }
            }
        }, [
            item
        ]);
    };
    __decorate([
        Prop({})
    ], VsSidebarItem.prototype, "to");
    __decorate([
        Prop({})
    ], VsSidebarItem.prototype, "href");
    __decorate([
        Prop({ "default": '_blank' })
    ], VsSidebarItem.prototype, "target");
    __decorate([
        Prop({ type: String })
    ], VsSidebarItem.prototype, "value");
    __decorate([
        Prop({ type: String })
    ], VsSidebarItem.prototype, "id");
    __decorate([
        Prop({ type: Boolean })
    ], VsSidebarItem.prototype, "arrow");
    __decorate([
        Watch('$parent.reduce')
    ], VsSidebarItem.prototype, "handleReduce");
    VsSidebarItem = __decorate([
        Component
    ], VsSidebarItem);
    return VsSidebarItem;
}(VsComponent));
export default VsSidebarItem;
