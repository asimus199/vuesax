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
import { Component, Prop, Watch } from 'vue-property-decorator';
import VsComponent from '../../../mixins/component';
import '../../vsCheckbox/Base/style.sass';
import vsCheckbox from '../../vsCheckbox/Base/vsCheckbox';
var VsSelectOption = /** @class */ (function (_super) {
    __extends(VsSelectOption, _super);
    function VsSelectOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeOption = false;
        _this.hiddenOption = false;
        return _this;
    }
    VsSelectOption.prototype.handleTextFilter = function (val) {
        if (val) {
            if (this.label.toLowerCase().indexOf(val.toLowerCase()) === -1) {
                this.hiddenOption = true;
            }
            else {
                this.hiddenOption = false;
            }
        }
        else {
            this.hiddenOption = false;
        }
    };
    Object.defineProperty(VsSelectOption.prototype, "isActive", {
        get: function () {
            return typeof this.getParent().value == 'number' ?
                this.getParent().value == this.value : this.getParent().value.indexOf(this.value) !== -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VsSelectOption.prototype, "isHover", {
        get: function () {
            return this.getParent().uids.indexOf(this._uid) == this.getParent().hoverOption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VsSelectOption.prototype, "isMultiple", {
        get: function () {
            return this.getParent().multiple;
        },
        enumerable: false,
        configurable: true
    });
    VsSelectOption.prototype.getParent = function () {
        return this.$parent.isSelect && this.$parent
            || this.$parent.$parent.isSelect && this.$parent.$parent;
    };
    VsSelectOption.prototype.mounted = function () {
        if (!this.getParent().renderSelect) {
            this.getParent().childOptions.push(this);
        }
        this.getParent().uids.push(this._uid);
        this.activeOption = this.isActive;
        this.getParent().setHover();
    };
    VsSelectOption.prototype.render = function (h) {
        var _this = this;
        var checkbox = h(vsCheckbox, {
            props: {
                checkedForce: this.isActive
            }
        }, [this.$slots["default"]]);
        return h('button', {
            attrs: {
                disabled: this.disabled
            },
            staticClass: 'vs-select__option',
            "class": [{
                    activeOption: this.isActive,
                    isHover: this.isHover,
                    isMultiple: this.isMultiple,
                    hiddenOption: this.hiddenOption
                }],
            on: __assign(__assign({}, this.$listeners), { mousedown: function () {
                    console.log(_this.value);
                    _this.$parent.clickOption(_this.value, _this.label);
                }, blur: function () {
                    if (!_this.$parent.targetSelect && !_this.$parent.targetClose) {
                        _this.$parent.activeOptions = false;
                    }
                } })
        }, [
            this.isMultiple && checkbox,
            !this.isMultiple && this.$slots["default"],
        ]);
    };
    __decorate([
        Prop({})
    ], VsSelectOption.prototype, "value");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsSelectOption.prototype, "disabled");
    __decorate([
        Prop({})
    ], VsSelectOption.prototype, "label");
    __decorate([
        Watch('$parent.textFilter')
    ], VsSelectOption.prototype, "handleTextFilter");
    VsSelectOption = __decorate([
        Component
    ], VsSelectOption);
    return VsSelectOption;
}(VsComponent));
export default VsSelectOption;
