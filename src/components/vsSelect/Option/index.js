import './style.sass';
import component from './vsSelectOption';
component.install = function (vue) {
    vue.component('vs-option', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
