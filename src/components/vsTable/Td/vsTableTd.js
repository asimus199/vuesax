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
var VsTableTd = /** @class */ (function (_super) {
    __extends(VsTableTd, _super);
    function VsTableTd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsTableTd.prototype.render = function (h) {
        var _this = this;
        return h('td', {
            staticClass: 'vs-table__td',
            on: {
                click: function (evt) {
                    _this.$emit('click', evt);
                }
            },
            "class": {
                isCheckbox: this.checkbox,
                isEdit: this.edit
            }
        }, this.$slots["default"]);
    };
    __decorate([
        Prop({ type: Boolean })
    ], VsTableTd.prototype, "checkbox");
    __decorate([
        Prop({ type: Boolean })
    ], VsTableTd.prototype, "edit");
    VsTableTd = __decorate([
        Component
    ], VsTableTd);
    return VsTableTd;
}(VsComponent));
export default VsTableTd;
