<template><div><h1 id="vue管理css样式" tabindex="-1"><a class="header-anchor" href="#vue管理css样式" aria-hidden="true">#</a> Vue管理CSS样式</h1>
<p>!!!!!高级用法</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>:style="{'background-color': item.meta.title.includes(msg) &amp;&amp; msg!==''?'yellow':''}"
:style="{
          'background-color': bgList[curColorIndex],
          'color': curColorIndex==(bgList.length-1)?'#fff':'#333',
          'font-size': curFontSize + 'px',
          'line-height': (curFontSize+10)+'px'
         }"
:class="['iconfont',curColorIndex == index?'icon-selected':'']"
:class="[item.meta.title.includes(msg) &amp;&amp; msg!==''?'bg':'']"
.bg{
	background-color: yellow;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.basic</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> antiquewhite<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.pink</span><span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.green</span><span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.grey</span><span class="token punctuation">{</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.add1</span><span class="token punctuation">{</span>
            <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Trebuchet MS'</span><span class="token punctuation">,</span> <span class="token string">'Lucida Sans Unicode'</span><span class="token punctuation">,</span> <span class="token string">'Lucida Grande'</span><span class="token punctuation">,</span> <span class="token string">'Lucida Sans'</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> cadetblue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.add2</span><span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 点击切换样式 --></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mood<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changcolor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>moji<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
       <span class="token comment">&lt;!-- 数组写法 追加样式 --></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>classArr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>moji<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
       <span class="token comment">&lt;!-- 对象写法 判断是否启用该样式 --></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>classObj<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>moji<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 数组写法 --></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styleArr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>moji<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
       <span class="token comment">&lt;!-- 对象写法--></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>basic<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styleObj<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>moji<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
           <span class="token literal-property property">mood</span><span class="token operator">:</span><span class="token string">'normal'</span><span class="token punctuation">,</span>
           <span class="token literal-property property">classArr</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'add1'</span><span class="token punctuation">,</span><span class="token string">'add2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
           <span class="token literal-property property">classObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">add1</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">add2</span><span class="token operator">:</span><span class="token boolean">true</span>
           <span class="token punctuation">}</span><span class="token punctuation">,</span>
           <span class="token literal-property property">styleArr</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">'25px'</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">'#666'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">styleObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">'35px'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">'white'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">'#888'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function">changcolor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'pink'</span><span class="token punctuation">,</span><span class="token string">'green'</span><span class="token punctuation">,</span><span class="token string">'grey'</span><span class="token punctuation">]</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>mood <span class="token operator">=</span> arr<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


