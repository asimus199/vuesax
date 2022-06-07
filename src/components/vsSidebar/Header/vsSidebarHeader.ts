import { VNode, } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsSidebarHeader extends VsComponent {

  @Prop({}) to: string
  @Prop({}) href: string
  @Prop({ default: '_blank' }) target: string

  @Prop({ type: String }) value: string
  @Prop({ type: String }) id: string
  @Prop({ type: Boolean }) arrow: boolean

  @Watch('$parent.reduce')
  handleReduce(val: boolean) {
    if (val) {
      console.log('reduce')
    }
  }

  public render(h: any): VNode {
    return h('div', {
      staticClass: 'vs-sidebar__header'
    }, [
      this.$slots.default
    ])
  }
}
