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
var VsSidebarGroup = /** @class */ (function (_super) {
    __extends(VsSidebarGroup, _super);
    function VsSidebarGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.group = true;
        _this.openState = false;
        return _this;
    }
    VsSidebarGroup.prototype.handleOpen = function (val) {
        var _this = this;
        this.$nextTick(function () {
            var h = _this.$refs.content.scrollHeight;
            var parent = _this.$parent;
            if (parent.group) {
                if (val) {
                    parent.$refs.content.style.height = parent.$refs.content.scrollHeight + h - 1 + "px";
                }
                else {
                    parent.$refs.content.style.height = parent.$refs.content.scrollHeight - h + 1 + "px";
                }
            }
        });
    };
    VsSidebarGroup.prototype.handleClickItem = function (id) {
        this.$parent.handleClickItem(id);
    };
    Object.defineProperty(VsSidebarGroup.prototype, "getValue", {
        get: function () {
            return this.$parent.getValue;
        },
        enumerable: false,
        configurable: true
    });
    VsSidebarGroup.prototype.beforeEnter = function (el) {
        el.style.height = 0;
    };
    VsSidebarGroup.prototype.enter = function (el, done) {
        var h = el.scrollHeight;
        el.style.height = h - 1 + 'px';
        done();
    };
    VsSidebarGroup.prototype.leave = function (el, done) {
        el.style.minHeight = '0px';
        el.style.height = '0px';
    };
    VsSidebarGroup.prototype.mounted = function () {
        if (this.$el.querySelector('.active') || this.open) {
            this.openState = true;
        }
    };
    VsSidebarGroup.prototype.render = function (h) {
        var _this = this;
        var header = h('div', {
            staticClass: 'vs-sidebar__group__header',
            on: {
                click: function () {
                    _this.openState = !_this.openState;
                }
            }
        }, [
            this.$slots.header
        ]);
        var content = h('div', {
            staticClass: 'vs-sidebar__group__content',
            ref: 'content',
            directives: [
                {
                    name: 'show',
                    value: this.openState
                }
            ]
        }, [
            this.$slots["default"]
        ]);
        var transition = h('transition', {
            on: {
                beforeEnter: this.beforeEnter,
                enter: this.enter,
                leave: this.leave
            }
        }, [content]);
        return h('div', {
            staticClass: 'vs-sidebar__group',
            "class": {
                open: this.openState
            }
        }, [
            header,
            transition
        ]);
    };
    __decorate([
        Prop({ type: Boolean })
    ], VsSidebarGroup.prototype, "open");
    __decorate([
        Watch('open')
    ], VsSidebarGroup.prototype, "handleOpen");
    VsSidebarGroup = __decorate([
        Component
    ], VsSidebarGroup);
    return VsSidebarGroup;
}(VsComponent));
export default VsSidebarGroup;
