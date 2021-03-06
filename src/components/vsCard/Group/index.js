import './style.sass';
import component from './vsCardGroup';
component.install = function (vue) {
    vue.component('vs-card-group', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
