<template><div><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<ul>
<li>
<p><a href="#%E9%85%8D%E7%BD%AE%E4%BB%A3%E7%90%86-1">配置代理</a></p>
</li>
<li>
<p><a href="#github%E6%A1%88%E4%BE%8B">Github案例</a></p>
</li>
</ul>
<h1 id="配置代理" tabindex="-1"><a class="header-anchor" href="#配置代理" aria-hidden="true">#</a> 配置代理</h1>
<p><code v-pre>npm install axios</code></p>
<p><code v-pre>vue.config.js</code>是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。</p>
<p><strong>vue.config.js中配置如下代码</strong></p>
<p><strong>方法一：</strong> 无法配置多个代理，无法灵活控制走不走代理</p>
<p>开启代理服务器</p>
<p>代理服务器转发请求给5000</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>module.exports = {   
    devServer: {
        proxy:'http://localhost:5000'
    },
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法二：</strong></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>    devServer: {
        proxy: {
            '/naitiam': {  //请求前缀xxx，想走代理就在前面加xxx
                target: 'http://localhost:5000',
                pathRewrite:{'^/naitiam':''},   //路径重写，向5000请求http://localhost:5000/naitiam/students，没有，需要使用正则来替换成空字符
                ws: true,  //用于支持websocket
                changeOrigin: true   //
            },
            '/demo': {  
                target: 'http://localhost:5001',
                pathRewrite:{'^/demo':''},  
                ws: true,  
                changeOrigin: true   
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>src/App.vue</strong></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getStudents<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取学生信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">getStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">////不走代理,匹配前端资源 public/sudents 文件</span>
      axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://localhost:8080/Students'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token parameter">response</span><span class="token operator">=></span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"请求成功了"</span><span class="token punctuation">,</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token parameter">error</span> <span class="token operator">=></span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"请求失败了"</span><span class="token punctuation">,</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//走代理</span>
    <span class="token comment">// getStudents(){</span>
    <span class="token comment">//   axios.get('http://localhost:8080/naitiam/Students').then(</span>
    <span class="token comment">//     response=>{</span>
    <span class="token comment">//       console.log("请求成功了",response.data)</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     error =>{</span>
    <span class="token comment">//       console.log("请求失败了",error.message)</span>
    <span class="token comment">//     }</span>
    <span class="token comment">//   )</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务器</p>
<p>cmd中</p>
<p><code v-pre>node server1</code>  </p>
<p>server1.js</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>const express = require('express')
const app = express()

app.use((request,response,next)=>{
  console.log('有人请求服务器1了');
  console.log('请求来自于',request.get('Host'));
  console.log('请求的地址',request.url);
  next()
})

app.get('/students',(request,response)=>{
  const students = [
    {id:'001',name:'tom',age:18},
    {id:'002',name:'jerry',age:19},
    {id:'003',name:'tony',age:120},
  ]
  response.send(students)
})

app.listen(5000,(err)=>{
  if(!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students');
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="github案例" tabindex="-1"><a class="header-anchor" href="#github案例" aria-hidden="true">#</a> Github案例</h1>
<p>实现利用github接口，查询用户名信息</p>
<p><strong>\src\components\List.vue</strong></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 展示用户列表 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user in info.users<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.login<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.html_url<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user.avatar_url<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{user.login}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 展示欢迎词 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info.isFirst<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>欢迎使用！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 展示加载中 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info.isLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>加载中....<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 展示错误信息 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info.errMsg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{info.errMsg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'List'</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">info</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">isFirst</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isLoading</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">errMsg</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span>
                <span class="token literal-property property">users</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'getUsers'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">dataObj</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
            <span class="token comment">// console.log("接受到的数据"+users[0].avatar_url)</span>
            <span class="token comment">// console.log("接受到的数据"+users)</span>
            <span class="token comment">// this.users = users</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>info<span class="token punctuation">,</span><span class="token operator">...</span>dataObj<span class="token punctuation">}</span><span class="token comment">//es6语法,解构赋值</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.card</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\src\components\Search.vue</strong></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jumbotron<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jumbotron-heading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Search Github Users<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enter the name you search<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyWord<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getUsers<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Search<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Search'</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">keyWord</span><span class="token operator">:</span><span class="token string">''</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'getUsers'</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">isFirst</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token literal-property property">isLoading</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">errMsg</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token literal-property property">users</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.github.com/search/users?q=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>keyWord<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
                <span class="token parameter">response</span> <span class="token operator">=></span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"请求成功"</span><span class="token punctuation">)</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'getUsers'</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">isFirst</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token literal-property property">isLoading</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token literal-property property">errMsg</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token literal-property property">users</span><span class="token operator">:</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>items<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token parameter">error</span> <span class="token operator">=></span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"请求失败"</span><span class="token operator">+</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'getUsers'</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">isFirst</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token literal-property property">isLoading</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token literal-property property">errMsg</span><span class="token operator">:</span>error<span class="token punctuation">.</span>message<span class="token punctuation">,</span><span class="token literal-property property">users</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


