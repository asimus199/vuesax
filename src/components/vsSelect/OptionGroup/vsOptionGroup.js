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
import { Component, Watch } from 'vue-property-decorator';
import VsComponent from '../../../mixins/component';
var VsOptionGroup = /** @class */ (function (_super) {
    __extends(VsOptionGroup, _super);
    function VsOptionGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionGroup = true;
        _this.textFilter = null;
        _this.hiddenOptionGroup = false;
        return _this;
    }
    VsOptionGroup.prototype.clickOption = function (value, label) {
        this.$parent.clickOption(value, label);
    };
    Object.defineProperty(VsOptionGroup.prototype, "labels", {
        get: function () {
            var labels = '';
            this.$slots["default"].forEach(function (item) {
                if (item.tag) {
                    labels += item.componentInstance.label;
                }
            });
            return labels;
        },
        enumerable: false,
        configurable: true
    });
    VsOptionGroup.prototype.handleTextFilter = function (val) {
        if (val) {
            if (this.labels.toLowerCase().indexOf(val.toLowerCase()) === -1) {
                this.hiddenOptionGroup = true;
            }
            else {
                this.hiddenOptionGroup = false;
            }
        }
        else {
            this.hiddenOptionGroup = false;
        }
        this.textFilter = val;
    };
    VsOptionGroup.prototype.render = function (h) {
        return h('div', {
            staticClass: 'vs-select__option-group',
            "class": [
                {
                    hiddenOptionGroup: this.hiddenOptionGroup
                }
            ]
        }, [
            h('h5', {}, this.$slots.title),
            this.$slots["default"]
        ]);
    };
    __decorate([
        Watch('$parent.textFilter')
    ], VsOptionGroup.prototype, "handleTextFilter");
    VsOptionGroup = __decorate([
        Component
    ], VsOptionGroup);
    return VsOptionGroup;
}(VsComponent));
export default VsOptionGroup;
