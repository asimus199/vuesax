import './style.sass';
import component from './vsSidebarGroup';
component.install = function (vue) {
    vue.component('vs-sidebar-group', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
