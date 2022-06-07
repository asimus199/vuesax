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
import { Component, Prop } from 'vue-property-decorator';
import VsComponent from '../../../mixins/component';
var VsAvatarGroup = /** @class */ (function (_super) {
    __extends(VsAvatarGroup, _super);
    function VsAvatarGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatars = [];
        _this.vsAvatarGroup = true;
        return _this;
    }
    VsAvatarGroup.prototype.render = function (h) {
        return h('div', {
            staticClass: 'vs-avatar__group',
            "class": {
                float: this.float
            }
        }, [
            this.$slots["default"]
        ]);
    };
    __decorate([
        Prop({ "default": null })
    ], VsAvatarGroup.prototype, "max");
    __decorate([
        Prop({ "default": false, type: Boolean })
    ], VsAvatarGroup.prototype, "float");
    VsAvatarGroup = __decorate([
        Component
    ], VsAvatarGroup);
    return VsAvatarGroup;
}(VsComponent));
export default VsAvatarGroup;
