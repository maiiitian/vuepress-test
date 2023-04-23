<template><div><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<ul>
<li>
<p><a href="#%E7%BB%84%E4%BB%B6">组件</a></p>
</li>
<li>
<p><a href="#render%E5%87%BD%E6%95%B0">render函数</a></p>
</li>
<li>
<p><a href="#vueconfigjs-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">vue.config.js 配置文件</a></p>
</li>
</ul>
<h1 id="vue-cli脚手架" tabindex="-1"><a class="header-anchor" href="#vue-cli脚手架" aria-hidden="true">#</a> Vue CLI脚手架</h1>
<p>创建项目vue create xxx</p>
<ul>
<li>
<p>babel.config.js babel配置文件</p>
</li>
<li>
<p>package.json 应用包配置文件</p>
</li>
<li>
<p>package-lock.json 包版本配置文件</p>
</li>
</ul>
<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2>
<p>复用率高</p>
<blockquote>
<p>从p53开始就究极迷茫。因为知道后期脚手架中如何使用，以及这些都没使用，所以仅记录部分要点</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">//定义组件</span>
  <span class="token keyword">const</span> hello <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'hello'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token comment">//data必须写成函数的形式</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">//全局注册组件</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">,</span>hello<span class="token punctuation">)</span>

  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//局部注册组件</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
        hello
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>VueComponent 组件实例对象</strong> 无需el ，data只能写为data(){}</p>
<p><strong>Vue 实例对象</strong> 需el，data可为函数型也可为对象型</p>
<h2 id="render函数" tabindex="-1"><a class="header-anchor" href="#render函数" aria-hidden="true">#</a> render函数</h2>
<p>main.js</p>
<p>为何使用render函数挂载模板？</p>
<p><strong>vue.js</strong> 是完整版的Vue，包含：核心功能+模板解析器</p>
<p>**vue.runtime.xxx.js **是运行版的Vue，只包含核心功能，没有模板解析器。所以不能使用template配置项，需使用render函数接收到的createElement函数去指定具体内容。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  // render函数功能：将App组件放入容器中
  // 简写形式
  render: h => h(App),
  // 完整形式
  // render(createElement){
  //   return createElement(App)
  // }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-config-js-配置文件" tabindex="-1"><a class="header-anchor" href="#vue-config-js-配置文件" aria-hidden="true">#</a> vue.config.js 配置文件</h2>
<p>查看脚手架默认配置：<code v-pre>vue inspect &gt; output.js</code></p>
<p><a href="https://cli.vuejs.org/zh/config/#vue-config-js" target="_blank" rel="noopener noreferrer">https://cli.vuejs.org/zh/config/#vue-config-js<ExternalLinkIcon/></a></p>
<p>注意：和 <code v-pre>package.json</code> 同级的目录下</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>module.exports = {
  pages: {
    index: {
      entry: 'src/index/main.js' // 入口
    }
  },
  lineOnSave: false  // 关闭语法检查
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


