import './style.sass';
import component from './vsNavbarGroup';
component.install = function (vue) {
    vue.component('vs-navbar-group', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
