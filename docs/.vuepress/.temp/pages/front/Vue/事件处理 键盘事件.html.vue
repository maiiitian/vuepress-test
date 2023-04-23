<template><div><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<ul>
<li>
<p><a href="#%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86">事件处理</a></p>
<ul>
<li><a href="#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6">事件修饰符</a></li>
</ul>
</li>
<li>
<p><a href="#%E9%94%AE%E7%9B%98%E4%BA%8B%E4%BB%B6">键盘事件</a></p>
</li>
</ul>
<h1 id="事件处理-键盘事件" tabindex="-1"><a class="header-anchor" href="#事件处理-键盘事件" aria-hidden="true">#</a> 事件处理 键盘事件</h1>
<h2 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h2>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMsg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我提示信息1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMsg1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我提示信息1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMsg2(66,$event)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我提示信息2,传参且保留event对象<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        methods:{
            showMsg1(event){//event事件对象
                // console. log( event. target. innerText)
                // console.log(this) //此处的this是vm
                alert("✌")
            },
            showMsg2(num,c){//event事件对象
                console.log(num)
                console.log(c)
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h3>
<ol>
<li>
<p><strong>prevent</strong>:阻止默认事件(常用) </p>
</li>
<li>
<p><strong>stop</strong>:阻止事件冒泡(常用)</p>
</li>
<li>
<p><strong>once</strong>:事件只触发一 次(常用)</p>
</li>
<li>
<p>capture:使用事件的捕获模式</p>
</li>
<li>
<p>self:只有event. target是当前操作的元素时才触发事件，也可用于阻止事件冒泡</p>
</li>
<li>
<p>passive:事件的默认行为立即执行，无需等待事件回调执行完毕</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>www.baidu.com<span class="token punctuation">"</span></span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMsg3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击提示信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            showMsg3(e){
                // e.preventDefault()
                alert("✌")
            }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>antiquewhite</span><span class="token punctuation">"</span></span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMsg1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMsg1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击提示信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                // e.stopPropagation()
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMsg1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击提示信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>        <span class="token comment">&lt;!-- 捕获阶段开始处理 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div1<span class="token punctuation">"</span></span> <span class="token attr-name">@click.capture</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showInfo(1)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            div1
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div2<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMsg(2)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                div2
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>antiquewhite</span><span class="token punctuation">"</span></span></span> <span class="token attr-name">@click.self</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showMsg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>div2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        
        <span class="token comment">&lt;!-- @wheel 鼠标滚轮滚动,先处理事件再滚动滚条，会延迟，使用passive --></span>
        <span class="token comment">&lt;!-- @scroll 滚动条滚动，不会延迟--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">@wheel.passive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
            showMsg(e){
                alert("✌")
            },
            showInfo(e){
                alert("显示信息"+e)
                console.log(e.target)
            },
            demo(){
                for (let i = 0; i &lt; 10000; i++) {
                    console.log("#")
                }
                console.log("累坏了")
            }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h2>
<p>1.Vue中常用的按键别名</p>
<ul>
<li>
<p>回车enter</p>
</li>
<li>
<p>删除delete捕获“删除”和“退格”键</p>
</li>
<li>
<p>退出esc</p>
</li>
<li>
<p>空格space</p>
</li>
<li>
<p>换行tab特殊，必须配合keydown去使用</p>
</li>
<li>
<p>上up</p>
</li>
<li>
<p>下down</p>
</li>
<li>
<p>左left</p>
</li>
<li>
<p>右right</p>
</li>
</ul>
<p>2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（多单词小写短横线写法）</p>
<p>3.系统修饰键（用法特殊）ctrl alt shift meta（meta就是win键）</p>
<ul>
<li>
<p>配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发指定 ctr+y 使用 @keyup.ctr.y</p>
</li>
<li>
<p>配合keydown使用：正常触发事件</p>
</li>
</ul>
<p>4.也可以使用keyCode去指定具体的按键（不推荐）</p>
<p>5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>按下回车提示输入<span class="token punctuation">"</span></span> <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>按下tab提示输入<span class="token punctuation">"</span></span> <span class="token attr-name">@keydown.tab</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


