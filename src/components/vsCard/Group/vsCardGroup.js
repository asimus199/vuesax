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
import { Component } from 'vue-property-decorator';
import VsIconsArrow from '../../../icons/arrow';
import VsComponent from '../../../mixins/component';
var VsCardGroup = /** @class */ (function (_super) {
    __extends(VsCardGroup, _super);
    function VsCardGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsCardGroup.prototype.render = function (h) {
        var _this = this;
        var arrowPrev = h('button', {
            staticClass: 'vs-card__group-prev',
            on: {
                click: function (evt) {
                    console.log('paso');
                    var cards = _this.$refs.cards;
                    console.dir(cards);
                    cards.scrollTo(cards.scrollLeft - cards.clientWidth, 0);
                }
            }
        }, [
            h(VsIconsArrow)
        ]);
        var arrowNext = h('button', {
            staticClass: 'vs-card__group-next',
            on: {
                click: function (evt) {
                    console.log('paso');
                    var cards = _this.$refs.cards;
                    console.dir(cards);
                    cards.scrollTo(cards.scrollLeft + cards.clientWidth, 0);
                }
            }
        }, [
            h(VsIconsArrow)
        ]);
        var space = h('div', {
            staticClass: 'vs-card__group-space'
        });
        var cards = h('div', {
            staticClass: 'vs-card__group-cards',
            ref: 'cards'
        }, [
            this.$slots["default"],
            space
        ]);
        return h('div', {
            staticClass: 'vs-card__group'
        }, [
            arrowPrev,
            cards,
            arrowNext
        ]);
    };
    VsCardGroup = __decorate([
        Component
    ], VsCardGroup);
    return VsCardGroup;
}(VsComponent));
export default VsCardGroup;
