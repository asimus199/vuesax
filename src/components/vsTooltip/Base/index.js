import './style.sass';
import component from './vsTooltip';
component.install = function (vue) {
    vue.component('vs-tooltip', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
