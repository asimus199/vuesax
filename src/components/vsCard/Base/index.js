import './style.sass';
import component from './vsCard';
component.install = function (vue) {
    vue.component('vs-card', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
