import './style.sass';
import component from './vsTableTd';
component.install = function (vue) {
    vue.component('vs-td', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
