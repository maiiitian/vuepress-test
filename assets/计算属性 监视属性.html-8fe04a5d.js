import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},e=t(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><p><a href="#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7">计算属性</a></p></li><li><p><a href="#%E7%9B%91%E8%A7%86%E5%B1%9E%E6%80%A7">监视属性</a></p><ul><li><a href="#%E6%B7%B1%E5%BA%A6%E7%9B%91%E8%A7%86">深度监视</a></li></ul></li><li><p><a href="#computed-vs-watch">computed VS watch</a></p></li></ul><h1 id="计算属性-监视属性" tabindex="-1"><a class="header-anchor" href="#计算属性-监视属性" aria-hidden="true">#</a> 计算属性 监视属性</h1><p>姓名案例 插值+方法实现</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>性<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xing<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>名<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ming<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>名字是：{{xing.slice(0,3)}}{{ming}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>名字是：{{showname()}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!-- 会多次重新解析模板 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">xing</span><span class="token operator">:</span><span class="token string">&#39;张&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">ming</span><span class="token operator">:</span><span class="token string">&#39;三&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">showname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>xing<span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>ming
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>名字是：{{showname}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        computed:{
            //简写形式不考虑修改
            showname(){
                return this.xing+&quot;-&quot;+this.ming
            }
            /*
            showname:{ //计算属性
                //get什么时候调用？1.初次获取showname，2.依赖的数据发生改变
                get(){
                    console.log(&quot;get被调用&quot;)
                    console.log(this)//此处的this是vm
                    return this.xing+&quot;-&quot;+this.ming
                },
                //set什么时候调用？showname被修改时
                set(value){
                    console.log(value)
                    const arr = value.split(&#39;-&#39;)
                    this.xing = arr[0]
                    this.ming = arr[1]
                }
            }
            */
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监视属性" tabindex="-1"><a class="header-anchor" href="#监视属性" aria-hidden="true">#</a> 监视属性</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>今天天气很{{info}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isHot=!isHot;x++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>切换天气<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeWeather<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>切换天气<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>window.alert(1)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">isHot</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            window
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isHot<span class="token operator">?</span><span class="token string">&quot;炎热&quot;</span><span class="token operator">:</span><span class="token string">&quot;寒冷&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">changeWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>isHot<span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isHot
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 写法一</span>
        <span class="token comment">// watch:{</span>
        <span class="token comment">//     isHot:{//监视属性</span>
        <span class="token comment">//         immediate:true,//初始化时让handler调用一下</span>
        <span class="token comment">//         //handler什么时候内调用？isHot发生改变时</span>
        <span class="token comment">//         handler(newValue,oldValue){</span>
        <span class="token comment">//             console.log(&quot;siHot被修改了&quot;,newValue,oldValue)</span>
        <span class="token comment">//         }</span>
        <span class="token comment">//     }</span>
        <span class="token comment">// }</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 写法二</span>
    vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;isHot&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//初始化时让handler调用一下</span>
        <span class="token comment">//handler什么时候内调用？isHot发生改变时</span>
        <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;siHot被修改了&quot;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>isHot(newValue,oldValue){
    console.log(&quot;siHot被修改了&quot;,newValue,oldValue)
}
vm.$watch(&#39;isHot&#39;,function(newValue,oldValue){
    console.log(&quot;siHot被修改了&quot;,newValue,oldValue)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深度监视" tabindex="-1"><a class="header-anchor" href="#深度监视" aria-hidden="true">#</a> 深度监视</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>a的值时{{numbers.a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numbers.a++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我a+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>b的值时{{numbers.b}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numbers.b++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我b+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&quot;#root&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">//Vue自身可以监测对象内部值的改变，但watch默认不检测对象内部值的的改变，需配置deep:true</span>
        <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">//监视多级结构中的某个属性的变化</span>
            <span class="token string-property property">&#39;numbers.a&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a被改变了&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">//监视多级结构中的所有属性变化</span>
            <span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;numbers被改变了&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computed-vs-watch" tabindex="-1"><a class="header-anchor" href="#computed-vs-watch" aria-hidden="true">#</a> computed VS watch</h2><p>watch能进行异步操作，无set</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>showname(){
  return this.xing+&quot;-&quot;+this.ming
}

watch:{
  xing(val){
    setTimeout(() =&gt;{//此处必须为箭头函数，因为不是被Vue管理的函数
      this.fullname = val+this.ming
    },1000);
  },
  ming(val){
    this.fullname = this.xing+val
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><p>1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或组件实例对象。 2.所有不被Vue所管理的函数(定时器的回调函数、ajax的回调函数等)，最好写成箭头函数，这样this的指向才是vm或组件实例对象。</p>`,18),l=[e];function o(c,i){return s(),a("div",null,l)}const r=n(p,[["render",o],["__file","计算属性 监视属性.html.vue"]]);export{r as default};
