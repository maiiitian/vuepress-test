<template><div><h3 id="什么是防抖和节流" tabindex="-1"><a class="header-anchor" href="#什么是防抖和节流" aria-hidden="true">#</a> 什么是防抖和节流</h3>
<p>防抖和节流都是为了阻止操作高频触发，从而浪费性能</p>
<p>浏览器的 <code v-pre>resize</code>、<code v-pre>scroll</code>、<code v-pre>keypress</code>、<code v-pre>mousemove</code> 等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。</p>
<p>为了优化体验，需要对这类事件进行调用次数的限制，对此我们就可以采用<code v-pre>throttle</code>（防抖）和<code v-pre>debounce</code>（节流）的方式来减少调用频率。</p>
<h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3>
<p>在实现文章目录滚动样式，使用到了 <code v-pre>window.addEventListener</code> 监听鼠标滚动。于是编写了以下代码。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> scrollTop <span class="token operator">=</span> window<span class="token punctuation">.</span>pageYOffset <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scrollTop<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打印一下这个 <code v-pre>scrollTop</code> 数值，就会发现每次鼠标滚动这都是在不断刷新的。这里就需要用到防抖与节流。</p>
<h3 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let timer;
scroll = () => {
      if (timer) {
        clearTimeOut(timer);
      }
      timer = setTimeout(() => {
        scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }, 100);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let timer;
scroll = () => {
      if (timer) {
        reutrn;
      }
      timer = setTimeout(() => {
        scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        timer = null;
      }, 100);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h3>
<p>防抖：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。适用于可以多次触发但触发只生效最后一次的场景。</p>
<p>节流：高频事件触发，但在n秒内只会执行一次，如果n秒内触发多次函数，只有一次生效，节流会稀释函数的执行频率。</p>
<p>都设置时间频率为500ms，在2秒时间内，频繁触发函数，节流，每隔 500ms 就执行一次。防抖，则不管调动多少次方法，在2s后，只会执行一次。</p>
<h3 id="更多应用场景" tabindex="-1"><a class="header-anchor" href="#更多应用场景" aria-hidden="true">#</a> 更多应用场景</h3>
<p>防抖在连续的事件，只需触发一次回调的场景有：</p>
<ul>
<li>搜索框搜索输入。只需用户最后一次输入完，再发送请求</li>
<li>手机号、邮箱验证输入检测</li>
<li>窗口大小resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。</li>
</ul>
<p>节流在间隔一段时间执行一次回调的场景有：</p>
<ul>
<li>滚动加载，加载更多或滚到底部监听</li>
<li>搜索框，搜索联想功能</li>
</ul>
<h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3>
<p>https://blog.csdn.net/weixin_66375317/article/details/124625933</p>
</div></template>


