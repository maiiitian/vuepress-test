import{_ as p,M as l,p as o,q as c,R as n,t as s,N as i,v as u,a1 as a}from"./framework-5866ffd3.js";const r="/vuepress-test/assets/image_Jq4qSGVSZk-4f5641c6.png",d="/vuepress-test/assets/image_2ZILoHFsvS-9b7919bc.png",k={},v=n("h1",{id:"初识-mvvm-数据绑定",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#初识-mvvm-数据绑定","aria-hidden":"true"},"#"),s(" 初识 MVVM 数据绑定")],-1),m=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),g=n("p",null,"中文官网",-1),b={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},h=a('<p>Vue 是一套用来动态构建用户界面的渐进式JavaScript框架</p><ul><li><p><strong>构建用户界面</strong>：把数据通过某种办法变成用户界面</p></li><li><p><strong>渐进式</strong>：Vue可以自底向上逐层的应用，简单应用只需要一个轻量小巧的核心库，复杂应用可以引入各式各样的Vue插件</p></li></ul><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><p>？</p><h3 id="周边库" tabindex="-1"><a class="header-anchor" href="#周边库" aria-hidden="true">#</a> 周边库</h3><ul><li><p>vue-cli：vue 脚手架</p></li><li><p>vue-resource(axios)：ajax 请求</p></li><li><p>vue-router：路由</p></li><li><p>vuex：状态管理（它是 vue 的插件但是没有用 vue-xxx 的命名规则）</p></li><li><p>vue-lazyload：图片懒加载</p></li><li><p>vue-scroller：页面滑动相关</p></li><li><p>mint-ui：基于 vue 的 UI 组件库（移动端）</p></li><li><p>element-ui：基于 vue 的 UI 组件库（PC 端）</p></li></ul><h2 id="初识vue" tabindex="-1"><a class="header-anchor" href="#初识vue" aria-hidden="true">#</a> 初识VUE</h2>',7),_=n("li",null,[n("p",null,"想让Vue工作，就必须创建一个Vue实例，且要传入个 配置对象;")],-1),x=n("li",null,[n("p",null,"root容器里的代码依然符合html规范,只不过混入了一些特殊的Vue语法;")],-1),V=n("li",null,[n("p",null,"root容器里的代码被称为[Vue模板] ;")],-1),f=n("li",null,[n("p",null,"Vue实例和容器是一对应的: ")],-1),q=n("li",null,[n("p",null,"真实开发中只有一个Vue实例，并且公配合着组件一起使用;")],-1),y=n("li",null,[n("p",null,"且data中的数据发生改变，那么模板中用到该数据的地方也会自动更新:")],-1),w=a(`<p>注意区分: js表达式和js代码(语句)</p><ol><li><p>表达式:个 表达式会产生一个值， 可以放在任何个需要值的地方:</p><p> a a+b demo(1) x === y ? &#39;a&#39;: &#39;b&#39;</p></li><li><p>js代码(语句)</p><p> if(){} for(){}</p></li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 容器 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>hello,{{name}},{{Date.now()}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- {{ js表达式 }}插值语法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//阻止 Vue 再启动时产生生产提示</span>
    <span class="token comment">//创建Vue实例</span>
    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span><span class="token comment">//e1用于指定当前Vue实例为哪个容器服务，值通常为css选择器宁符串。</span>
        <span class="token comment">// el:document.getElementById(&#39;root&#39;)</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;名字&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token comment">//new Vue()括号里 配置对象</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种el写法</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        v<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种data写法</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//对象式</span>
        <span class="token comment">// data:{</span>
        <span class="token comment">//     name:&quot;名字&quot;</span>
        <span class="token comment">// }</span>
    <span class="token comment">//函数式</span>
    <span class="token comment">//data:function(){}</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token comment">//此处的this是Vue实例对象</span>
            <span class="token keyword">return</span><span class="token punctuation">{</span>
                <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;名字&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token comment">//若写成箭头函数=&gt;，this获取到windows对象</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h2><ul><li><p>插值语法</p><p><code>{{}}</code></p></li><li><p>指令语法</p></li></ul><h2 id="mvvm模型" tabindex="-1"><a class="header-anchor" href="#mvvm模型" aria-hidden="true">#</a> MVVM模型</h2><p>M<strong>模型(Model)</strong> : data中的数据</p><p>V <strong>视图(View)</strong> :模板代码</p><p>VM <strong>视图模型(ViewModel)</strong>: Vue实例</p><p>Vue原型上所有属性，在Vue模板中都可以直按使用。</p><p><img src="`+r+`" alt=""></p><h2 id="底层数据代理" tabindex="-1"><a class="header-anchor" href="#底层数据代理" aria-hidden="true">#</a> 底层数据代理</h2><p> 回顾es6的Object.defineProperty</p><p>1.Vue中的数据代理:</p><p>通过vm对象来代理data对象中属性的操作(读/写)</p><p>2.Vue中数据代理的好处:</p><p>更加方便的操作data中的数据</p><p>3.基本原理:</p><p>通过object . defineProperty( )把data对象中所有属性添加到vm上。</p><p>为每一个添加到vm 上的属性， 都指定个getter/setter.</p><p>在getter/setter内部去操作(读/写) data中对应的属性。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">18</span>
    <span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// age:18 </span>
    <span class="token punctuation">}</span>

    <span class="token comment">//此时age属性不可被枚举</span>
    <span class="token comment">// Object.defineProperty(person,&#39;age&#39;,{</span>
    <span class="token comment">//     value:18</span>
    <span class="token comment">// })</span>

    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token comment">// value:18,</span>
        <span class="token comment">// enumerable:true,//控制属性是否可以被枚举</span>
        <span class="token comment">// writable:true,//控制属性是否可以被修改</span>
        <span class="token comment">// configurable:true//控制属性是否可以被删除 </span>

        <span class="token comment">//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人读取age属性了&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> number
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人修改了age属性的值,且值是&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
            number <span class="token operator">=</span> value
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt=""></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>控制台
vm.name = &quot;aaa&quot;//触发了setter
vm._data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>单项数据绑定：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- v-model默认收集value值，只能应用在表单元素上 --&gt;</span>
双向数据绑定：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 简写 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function j(t,M){const e=l("ExternalLinkIcon");return o(),c("div",null,[v,m,g,n("p",null,[n("a",b,[s("https://cn.vuejs.org/"),i(e)])]),h,n("ol",null,[_,x,V,f,q,n("li",null,[n("p",null,u(t.xxx)+"中的xx要写js表达式，且xxx可以自动读取到data中的所有属性;",1)]),y]),w])}const S=p(k,[["render",j],["__file","初识 MVVM 数据绑定.html.vue"]]);export{S as default};
