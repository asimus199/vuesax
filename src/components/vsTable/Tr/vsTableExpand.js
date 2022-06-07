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
var VsTableTr = /** @class */ (function (_super) {
    __extends(VsTableTr, _super);
    function VsTableTr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hidden = true;
        return _this;
    }
    VsTableTr.prototype.handleChangeHidden = function (val) {
        var _this = this;
        if (val) {
            setTimeout(function () {
                _this.$el.parentNode.removeChild(_this.$el);
                _this.$destroy();
            }, 300);
        }
        else {
            this.$nextTick(function () {
                var content = _this.$refs.content;
                content.style.height = content.scrollHeight + "px";
            });
        }
    };
    VsTableTr.prototype.render = function (h) {
        var subContent = h('div', {
            staticClass: 'vs-table__expand__td__content__sub'
        }, [
            this.$slots["default"]
        ]);
        var content = h('div', {
            staticClass: 'vs-table__expand__td__content',
            ref: 'content'
        }, [
            subContent
        ]);
        var td = h('td', {
            staticClass: 'vs-table__expand__td',
            attrs: {
                colspan: this.colspan
            }
        }, [
            content
        ]);
        var expand = h('tr', {
            staticClass: 'vs-table__tr__expand'
        }, [
            td
        ]);
        return h('transition', {
            props: {
                name: 'fade-expand'
            }
        }, [!this.hidden && expand]);
    };
    __decorate([
        Prop({})
    ], VsTableTr.prototype, "colspan");
    __decorate([
        Watch('hidden')
    ], VsTableTr.prototype, "handleChangeHidden");
    VsTableTr = __decorate([
        Component
    ], VsTableTr);
    return VsTableTr;
}(VsComponent));
export default VsTableTr;
