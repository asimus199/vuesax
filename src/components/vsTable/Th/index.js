import './style.sass';
import component from './vsTableTh';
component.install = function (vue) {
    vue.component('vs-th', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
