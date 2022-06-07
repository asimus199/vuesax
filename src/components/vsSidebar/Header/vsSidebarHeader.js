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
var VsSidebarHeader = /** @class */ (function (_super) {
    __extends(VsSidebarHeader, _super);
    function VsSidebarHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsSidebarHeader.prototype.handleReduce = function (val) {
        if (val) {
            console.log('reduce');
        }
    };
    VsSidebarHeader.prototype.render = function (h) {
        return h('div', {
            staticClass: 'vs-sidebar__header'
        }, [
            this.$slots["default"]
        ]);
    };
    __decorate([
        Prop({})
    ], VsSidebarHeader.prototype, "to");
    __decorate([
        Prop({})
    ], VsSidebarHeader.prototype, "href");
    __decorate([
        Prop({ "default": '_blank' })
    ], VsSidebarHeader.prototype, "target");
    __decorate([
        Prop({ type: String })
    ], VsSidebarHeader.prototype, "value");
    __decorate([
        Prop({ type: String })
    ], VsSidebarHeader.prototype, "id");
    __decorate([
        Prop({ type: Boolean })
    ], VsSidebarHeader.prototype, "arrow");
    __decorate([
        Watch('$parent.reduce')
    ], VsSidebarHeader.prototype, "handleReduce");
    VsSidebarHeader = __decorate([
        Component
    ], VsSidebarHeader);
    return VsSidebarHeader;
}(VsComponent));
export default VsSidebarHeader;
