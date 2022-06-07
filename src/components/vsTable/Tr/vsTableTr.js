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
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import VsComponent from '../../../mixins/component';
import expand from './vsTableExpand';
var VsTableTr = /** @class */ (function (_super) {
    __extends(VsTableTr, _super);
    function VsTableTr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expand = false;
        _this.instanceExpand = null;
        return _this;
    }
    VsTableTr.prototype.insertAfter = function (element) {
        if (this.$el.nextSibling) {
            this.$el.parentNode.insertBefore(element, this.$el.nextSibling);
        }
        else {
            this.$el.parentNode.appendChild(element);
        }
    };
    VsTableTr.prototype.handleChangeData = function () {
        this.$el.style.removeProperty("--vs-color");
        if (this.instanceExpand) {
            this.instanceExpand.$data.hidden = true;
            this.instanceExpand = null;
            // this.expand = false
        }
    };
    VsTableTr.prototype.handleClickHasExpand = function (h) {
        if (this.instanceExpand) {
            this.instanceExpand.$data.hidden = !this.instanceExpand.$data.hidden;
            this.instanceExpand = null;
            // this.expand = false
        }
        else {
            var colspan = this.$parent.$el.querySelectorAll('thead th').length;
            var trExpand = Vue.extend(expand);
            this.instanceExpand = new trExpand();
            this.instanceExpand.$props.colspan = colspan;
            this.instanceExpand.$slots["default"] = this.$slots.expand;
            this.instanceExpand.vm = this.instanceExpand.$mount();
            this.instanceExpand.$data.hidden = false;
            this.insertAfter(this.instanceExpand.vm.$el);
            // this.expand = true
        }
    };
    VsTableTr.prototype.render = function (h) {
        var _this = this;
        return h('tr', {
            staticClass: 'vs-table__tr',
            on: {
                click: function (evt) {
                    if (_this.$slots.expand) {
                        if ((_this.openExpandOnlyTd ? evt.target.nodeName == 'TD' : true) &&
                            !evt.target.className.includes('isEdit')) {
                            _this.handleClickHasExpand(h);
                        }
                    }
                    if (evt.target.nodeName == 'TD' && !_this.notClickSelected) {
                        _this.$parent.selected(_this.data);
                        _this.$emit('selected', _this.data);
                    }
                    _this.$emit('click', evt);
                }
            },
            "class": {
                selected: this.isSelected,
                isExpand: !!this.instanceExpand,
                expand: this.$slots.expand
            }
        }, this.$slots["default"]);
    };
    __decorate([
        Prop({})
    ], VsTableTr.prototype, "data");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsTableTr.prototype, "isSelected");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsTableTr.prototype, "notClickSelected");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsTableTr.prototype, "openExpandOnlyTd");
    __decorate([
        Watch('data')
    ], VsTableTr.prototype, "handleChangeData");
    VsTableTr = __decorate([
        Component
    ], VsTableTr);
    return VsTableTr;
}(VsComponent));
export default VsTableTr;
