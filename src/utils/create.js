import Vue from 'vue'

export default function(Component, props) {
    const instance = new Vue({
        render(h) {
            return h(Component, props)
        }
    }).$mount();
    // 将生成的Dom元素追加到body
    document.body.appendChild(instance.$el)
    const childrens = instance.$children[0];
    childrens.remove = () => {
        document.body.removeChild(instance.$el)
        instance.$destroy();
    }
    return childrens
}