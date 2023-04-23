<template><div><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<ul>
<li>
<p><a href="#v-text--v-html">v-text &amp;&amp; v-html</a></p>
</li>
<li>
<p><a href="#v-cloak">v-cloak</a></p>
</li>
<li>
<p><a href="#v-once">v-once</a></p>
</li>
<li>
<p><a href="#v-pre">v-pre</a></p>
</li>
<li>
<p><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4">自定义指令</a></p>
<ul>
<li><a href="#%E5%B8%B8%E7%94%A8%E7%9A%84%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0">常用的钩子函数</a></li>
</ul>
</li>
</ul>
<h1 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h1>
<h2 id="v-text-v-html" tabindex="-1"><a class="header-anchor" href="#v-text-v-html" aria-hidden="true">#</a> v-text &amp;&amp; v-html</h2>
<p>不支持结构解析 支持结构解析</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>渲染数据文本内容，会替换掉标签中的内容，无法解释标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-cloak" tabindex="-1"><a class="header-anchor" href="#v-cloak" aria-hidden="true">#</a> v-cloak</h2>
<p>v-cloak指令（没有值）本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">[v-cloak]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-cloak</span><span class="token punctuation">></span></span>
  {{ message }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-once" tabindex="-1"><a class="header-anchor" href="#v-once" aria-hidden="true">#</a> v-once</h2>
<p>只渲染元素和组件<strong>一次</strong>。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-once</span><span class="token punctuation">></span></span>初始化的n值是: {{n}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>当前的n值是: {{n}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我n+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-pre" tabindex="-1"><a class="header-anchor" href="#v-pre" aria-hidden="true">#</a> v-pre</h2>
<p>跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-pre</span><span class="token punctuation">></span></span>初始化的n值是: {{n}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h2>
<p>全局定义</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>Vue.directive('自定义指令名', {
  //配置对象（钩子函数 or 回调函数（对dom进行操作
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>局部定义</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>directives:{
        //函数式
        指令名(el,binding){
          //对dom进行操作
        },
        //对象式
        指令名:{
            //钩子函数
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的钩子函数" tabindex="-1"><a class="header-anchor" href="#常用的钩子函数" aria-hidden="true">#</a> 常用的钩子函数</h3>
<ul>
<li>
<p><code v-pre>bind</code>：只调用一次，指令第一次绑定到元素时调用。</p>
</li>
<li>
<p><code v-pre>inserted</code>：指令所在元素被插入页面时调用。</p>
</li>
<li>
<p><code v-pre>update</code>：指令所在模板结构被重新解析时调用。</p>
</li>
</ul>
<p>允许被传入的此参数：</p>
<ul>
<li>
<p><code v-pre>el</code>：指令所绑定的元素，可以用来直接操作 DOM。</p>
</li>
<li>
<p><code v-pre>binding</code>：一个对象，包含以下 property：</p>
<ul>
<li>
<p><code v-pre>name</code>：指令名，不包括 <code v-pre>v-</code> 前缀。</p>
</li>
<li>
<p><code v-pre>value</code>：指令的绑定值，例如：<code v-pre>v-my-directive=&quot;1 + 1&quot;</code> 中，绑定值为 <code v-pre>2</code>。</p>
</li>
<li>
<p><code v-pre>oldValue</code>：指令绑定的前一个值，仅在 <code v-pre>update</code> 和 <code v-pre>componentUpdated</code> 钩子中可用。无论值是否改变都可用。</p>
</li>
</ul>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>当前n的值为<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>放大10倍后的值是<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-big</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击n+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-fbind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'aaa'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">n</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">directives</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">//big函数何时会被调用?1.指令与元素成功绑定时(一上来)。2.指令所在的模板被重新解析时。</span>
        <span class="token function">big</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>binding<span class="token punctuation">)</span>
            el<span class="token punctuation">.</span>innerText <span class="token operator">=</span> binding<span class="token punctuation">.</span>value <span class="token operator">*</span><span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fbind</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">// 指令与元素成功绑定时（一上来）</span>
            <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// element就是DOM元素，binding就是要绑定的</span>
            element<span class="token punctuation">.</span>value <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 指令所在元素被插入页面时</span>
            <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            element<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 指令所在的模板被重新解析时</span>
            <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            element<span class="token punctuation">.</span>value <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//   Vue.directive('fbind', {</span>
<span class="token comment">//     bind(element, binding) {  </span>
<span class="token comment">//       element.value = binding.value</span>
<span class="token comment">//     },</span>
<span class="token comment">//     inserted(element, binding) {</span>
<span class="token comment">//       element.focus()</span>
<span class="token comment">//     },</span>
<span class="token comment">//     update(element, binding) {</span>
<span class="token comment">//       element.value = binding.value</span>
<span class="token comment">//     }</span>
<span class="token comment">// })</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


