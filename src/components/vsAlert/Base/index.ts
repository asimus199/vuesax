import './style.sass'
import component from './vsAlert'

component.install = (vue: any) => {
  vue.component('vs-alert', component)
}


if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
