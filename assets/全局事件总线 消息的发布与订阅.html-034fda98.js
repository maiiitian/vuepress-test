import{_ as n,p as s,q as a,a1 as p}from"./framework-5866ffd3.js";const t={},e=p(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><p><a href="#%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF">全局事件总线</a></p></li><li><p><a href="#%E6%B6%88%E6%81%AF%E7%9A%84%E5%8F%91%E5%B8%83%E4%B8%8E%E8%AE%A2%E9%98%85pubsub">消息的发布与订阅pubsub</a></p></li></ul><h1 id="全局事件总线-消息的发布与订阅" tabindex="-1"><a class="header-anchor" href="#全局事件总线-消息的发布与订阅" aria-hidden="true">#</a> 全局事件总线 消息的发布与订阅</h1><h1 id="全局事件总线" tabindex="-1"><a class="header-anchor" href="#全局事件总线" aria-hidden="true">#</a> 全局事件总线</h1><blockquote><p>一种组件间通信方式，适用于任意组件之间通信，本质是一个对象，这个对象能被任意组件对象看到，能够使用<code>$on $emit $off</code>方法绑定，触发和解绑事件。</p></blockquote><p>安装全局事件总线</p><p>src/main.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">// 安装全局事件总线</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定事件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接收数据：不要忘记当前实例对象销毁后，也将事件解绑，使用<code>$off</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;School组件收到了数据&#39;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/main.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//将App组件放入容器中</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// mounted() {</span>
  <span class="token comment">//   setTimeout(() =&gt; {</span>
  <span class="token comment">//     this.$destroy()</span>
  <span class="token comment">//   }, 3000);</span>
  <span class="token comment">// }</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">// 安装全局事件总线</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/App.vue</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>School<span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Student<span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> School <span class="token keyword">from</span> <span class="token string">&#39;./components/School.vue&#39;</span>
<span class="token keyword">import</span> Student <span class="token keyword">from</span> <span class="token string">&#39;./components/Student.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Student<span class="token punctuation">,</span> School <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;信息&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
#app <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> Avenir<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>font<span class="token operator">-</span>smoothing<span class="token operator">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token operator">-</span>moz<span class="token operator">-</span>osx<span class="token operator">-</span>font<span class="token operator">-</span>smoothing<span class="token operator">:</span> grayscale<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #2c3e50<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/components/School.vue</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;demo&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>这里是School<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>address<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>现在number<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;School&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;苏科大啊啊啊啊&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;苏州&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;School组件收到了数据&#39;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>demo<span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span>aquamarine<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/components/Student.vue</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;demo&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>这里是Student<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;sendStudentName&quot;</span><span class="token operator">&gt;</span>点击传送数据<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Student&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">sendStudentName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>demo<span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> antiquewhite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="消息的发布与订阅pubsub" tabindex="-1"><a class="header-anchor" href="#消息的发布与订阅pubsub" aria-hidden="true">#</a> 消息的发布与订阅pubsub</h1><blockquote><p>是一种组件间的通信方式，适用于任意组件间的通信</p></blockquote><p>安装pubsub：<code>npm i pubsub-js</code></p><p>引用：<code>import pubsub from &#39;pubsub-js&#39;</code></p><p>发布消息：<code>pubsub.publish(&#39;消息名称&#39;,data);</code></p><p>消息订阅：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pubTd <span class="token operator">=</span> pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;\`消息名称\`&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">msgName<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  pubsub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pubId<span class="token punctuation">)</span> 
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/components/School.vue</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;demo&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>这里是School<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>address<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>现在number<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> pubsub <span class="token keyword">from</span> <span class="token string">&#39;pubsub-js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;School&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;苏科大啊啊啊啊&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;苏州&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//订阅</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pubTd <span class="token operator">=</span> pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">msgName<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;School组件收到了数据&#39;</span><span class="token punctuation">,</span>msgName<span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        pubsub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pubId<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/components/Student.vue</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;demo&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>这里是Student<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;sendStudentName&quot;</span><span class="token operator">&gt;</span>点击传送数据<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> pubsub <span class="token keyword">from</span> <span class="token string">&#39;pubsub-js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Student&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">sendStudentName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//发布消息</span>
            pubsub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","全局事件总线 消息的发布与订阅.html.vue"]]);export{u as default};
