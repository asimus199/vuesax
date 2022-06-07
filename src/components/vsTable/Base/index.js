import './style.sass';
import component from './vsTable';
component.install = function (vue) {
    vue.component('vs-table', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
