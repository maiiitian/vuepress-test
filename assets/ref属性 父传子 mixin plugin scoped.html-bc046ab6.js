import{_ as i,M as l,p,q as c,R as n,t as e,N as t,a1 as s}from"./framework-5866ffd3.js";const o="/vuepress-test/assets/image_PADaJ5BIQs-b070cb4a.png",u={},d=s(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><p><a href="#ref%E5%B1%9E%E6%80%A7">ref属性</a></p></li><li><p><a href="#%E7%88%B6%E4%BC%A0%E5%AD%90-propsv-bind">父传子 props+v-bind</a></p></li><li><p><a href="#mixin%E6%B7%B7%E5%85%A5">mixin混入</a></p></li><li><p><a href="#-plugin%E6%8F%92%E4%BB%B6"> plugin插件</a></p></li><li><p><a href="#style-scoped">style scoped</a></p></li></ul><h1 id="ref属性-父传子-mixin-plugin-scoped" tabindex="-1"><a class="header-anchor" href="#ref属性-父传子-mixin-plugin-scoped" aria-hidden="true">#</a> ref属性 父传子 mixin plugin scoped</h1><h2 id="ref属性" tabindex="-1"><a class="header-anchor" href="#ref属性" aria-hidden="true">#</a> ref属性</h2><p><code>ref</code> 被用来给元素或子组件注册引用信息</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showBtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击输出DOM<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>school<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span>
  showBtn(){
      console.log(document.getElementById(&#39;title&#39;))
      console.log(this.$refs.text)
      console.log(this.$refs.school)//Vue组件对象
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt=""></p>',7),r={href:"https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0",target:"_blank",rel:"noopener noreferrer"},v=s(`<blockquote><p>关于使用？？？？....</p></blockquote><h2 id="父传子-props-v-bind" tabindex="-1"><a class="header-anchor" href="#父传子-props-v-bind" aria-hidden="true">#</a> 父传子 props+v-bind</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  //三种props配置
    props:[&#39;name&#39;,&#39;age&#39;,&#39;sex&#39;],
    //限制接受的参数类型
    props:{
        name:String,
        age:Number,
        sex:String
    },
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:20
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>  //父组件节点
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Student</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>李四<span class="token punctuation">&quot;</span></span> <span class="token attr-name">sex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>女<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>19<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Student</span><span class="token punctuation">&gt;</span></span>
  //子组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>学生姓名:{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>学生性别:{{sex}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>学生年龄:{{stuAge+1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addAge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击增加年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;sex&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;啊啊啊啊啊&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stuAge</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>age
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">addAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>stuAge <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mixin混入" tabindex="-1"><a class="header-anchor" href="#mixin混入" aria-hidden="true">#</a> mixin混入</h2><p>使用混合，来分发 Vue 组件中的可复用功能</p><ul><li>全局混入Vue.mixin(xxx) 在main.js中配置（不推荐）</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import {mixin,mixin2} from &#39;../mixin&#39;
Vue.mixin(mixin,mixin2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>局部混入</strong>mixins:[&#39;xxx&#39;]备注</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//src/mixin.js
//内部对象需要暴露export
export const mixin = {
    data(){
        return{
            msg:&#39;点击出信息&#39;
        }
    },
    methods: {
        show(){
            console.log(this.name)
        },
       
    },
}
 const mixin2 = {
    methods: {
        showMsg(){
            alert(this.msg)
        }
    }
}
export default {mixin2,mixin}
//使用
import {mixin,mixin2} from &#39;../mixin&#39;
export default {
  mixins:[mixin,mixin2]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plugin插件" tabindex="-1"><a class="header-anchor" href="#plugin插件" aria-hidden="true">#</a> plugin插件</h2>`,11),m={href:"https://cn.vuejs.org/guide/reusability/plugins.html",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//src/plugin.js
//包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
export default {
    install(Vue,x,y,z){
      console.log(x,y,z)
      //全局过滤器
      Vue.filter(&#39;mySlice&#39;, function(value){return value.slice(0,4)})
  
      //定义全局指令
      Vue.directive(&#39;fbind&#39;,{
        //指令与元素成功绑定时（一上来）
        bind(element,binding){element.value = binding.value},
        //指令所在元素被插入页面时
        inserted(element,binding){element.focus()},
        //指令所在的模板被重新解析时
        update(element,binding){element.value = binding.value}
      })
  
      //定义混入
      Vue.mixin({
        data() {return {x:100,y:200}},
      })
  
      //给Vue原型上添加一个方法（vm和vc就都能用了）
      Vue.prototype.hello = ()=&gt;{alert(&#39;你好啊&#39;)}
    }
  }
  //使用
  import plugins from &#39;./plugins&#39;
  Vue.use(plugins,1,2,3)//使用插件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="style-scoped" tabindex="-1"><a class="header-anchor" href="#style-scoped" aria-hidden="true">#</a> style scoped</h2><p>局部样式，防止样式冲突</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//默认是lang=&quot;css&quot;
//使用less，需要安装插件less-loader
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.demo</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>aquamarine<span class="token punctuation">;</span>
    <span class="token selector">.test</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>antiquewhite<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(b,h){const a=l("ExternalLinkIcon");return p(),c("div",null,[d,n("p",null,[n("a",r,[e("https://cn.vuejs.org/v2/guide/components-edge-cases.html#访问子组件实例或子元素"),t(a)])]),v,n("p",null,[n("a",m,[e("https://cn.vuejs.org/guide/reusability/plugins.html"),t(a)])]),k])}const f=i(u,[["render",g],["__file","ref属性 父传子 mixin plugin scoped.html.vue"]]);export{f as default};
