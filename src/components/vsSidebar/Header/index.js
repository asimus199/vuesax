import './style.sass';
import component from './vsSidebarHeader';
component.install = function (vue) {
    vue.component('vs-sidebar-header', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
