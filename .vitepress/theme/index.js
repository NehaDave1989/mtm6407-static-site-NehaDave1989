import DefaultTheme from 'vitepress/theme'
import LayoutSelector from './LayoutSelector.vue'

export default {
    ...DefaultTheme,
    Layout: LayoutSelector
}
