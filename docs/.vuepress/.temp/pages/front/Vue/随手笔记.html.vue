<template><div><p>vuex插件 Vue.use(vuex)</p>
<p>多组件<strong>共享</strong>数据</p>
<p>api</p>
<p>npm i vuex@3</p>
<p>store仓库</p>
<p>dispatch   commit   state</p>
<p>getters</p>
<p>@click 方法无括号默认传参是点击事件</p>
<p>插槽</p>
<p>定义多个插槽，子组件slot标签使用name属性，父组件slot:定义的插槽名</p>
<p>作用域插槽</p>
<p>数据在子组件，需要v-model绑定数据给父组件</p>
<p>复用组件但是内容不同</p>
<p>常用发送ajax的方式</p>
<p>xhr    new XMLHttpResquest() xhr.open() xhr.send()  js内置</p>
<p>对xhr封装</p>
<p>jQuery $get $post  核心封装dom操作</p>
<p>axios promise风格 支持请求拦截器和响应拦截器</p>
<p>解决跨域</p>
<p>cors</p>
<p>jsonp</p>
<p>后端nginx代理服务器</p>
<p>前端vue框架代理</p>
<p>服务器之间服务器http请求</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    devServer: {
        proxy: {
            '/api': {
                target: '&lt;url>',
                ws: true,
                changeOrigin: true
            },
            '/foo':{
                target: '&lt;other_url>'
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


