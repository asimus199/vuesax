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
var VsNavbarItem = /** @class */ (function (_super) {
    __extends(VsNavbarItem, _super);
    function VsNavbarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsNavbarItem.prototype.handleWatchActive = function () {
        this.handleLine();
    };
    VsNavbarItem.prototype.handleLine = function () {
        var _this = this;
        this.$nextTick(function () {
            if (_this.active) {
                var parent_1 = _this.$parent;
                var left = _this.$el.offsetLeft;
                parent_1.setLeftLine(left);
                var width = _this.$el.scrollWidth;
                parent_1.setWidthLine(width);
            }
        });
    };
    VsNavbarItem.prototype.handleClick = function () {
        if (this.to) {
            this.$router.push(this.to);
        }
        else if (this.href) {
            window.open(this.href, this.target);
        }
    };
    VsNavbarItem.prototype.handleActive = function () {
        var parent = this.$parent;
        parent.setModel(this.id);
        this.handleLine();
    };
    VsNavbarItem.prototype.mounted = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.active) {
                var el = _this.$el;
                var parent_2 = _this.$parent;
                var left = el.offsetLeft;
                parent_2.setLeftLine(left);
                var width = el.scrollWidth;
                parent_2.setWidthLine(width);
            }
        }, 150);
    };
    VsNavbarItem.prototype.render = function (h) {
        var _this = this;
        return h('button', {
            staticClass: 'vs-navbar__item',
            "class": {
                active: this.active
            },
            on: {
                click: function (evt) {
                    _this.$emit('click', evt);
                    _this.handleLine();
                    _this.handleClick();
                    _this.handleActive();
                }
            }
        }, this.$slots["default"]);
    };
    __decorate([
        Prop({ "default": false, type: Boolean })
    ], VsNavbarItem.prototype, "active");
    __decorate([
        Prop({})
    ], VsNavbarItem.prototype, "to");
    __decorate([
        Prop({})
    ], VsNavbarItem.prototype, "id");
    __decorate([
        Prop({})
    ], VsNavbarItem.prototype, "href");
    __decorate([
        Prop({ "default": '_blank' })
    ], VsNavbarItem.prototype, "target");
    __decorate([
        Watch('active')
    ], VsNavbarItem.prototype, "handleWatchActive");
    VsNavbarItem = __decorate([
        Component
    ], VsNavbarItem);
    return VsNavbarItem;
}(VsComponent));
export default VsNavbarItem;
