import './style.sass';
import component from './vsNavbarItem';
component.install = function (vue) {
    vue.component('vs-navbar-item', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
