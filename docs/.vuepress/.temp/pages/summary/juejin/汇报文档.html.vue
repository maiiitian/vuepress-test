<template><div><h4 id="_3-3-1-文章详情页" tabindex="-1"><a class="header-anchor" href="#_3-3-1-文章详情页" aria-hidden="true">#</a> 3.3.1 文章详情页</h4>
<p>（我就像毕业论文那样写了，不需要的东西，请无情删掉）</p>
<ol>
<li>文章预览模块</li>
</ol>
<ul>
<li>将md格式数据渲染为html数据：这里使用 markdown-it 插件，markdown-it 提供了renderer类实例，其中使用render方法，获取 token 流并生成 HTML。</li>
</ul>
<div class="language-Plain line-numbers-mode" data-ext="Plain"><pre v-pre class="language-Plain"><code>//获取 [id].vue 父组件传来的数据
const props = defineProps({
  data: {},
});
const articleData = ref({});
articleData.value = props.data;

//md 转 html
const renderer = md();
let articleContent = renderer.render(articleData.value.content);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用v-html指令加载html元素。</li>
</ul>
<div class="language-Plain line-numbers-mode" data-ext="Plain"><pre v-pre class="language-Plain"><code>&lt;div class=&quot;markdown-body&quot; id=&quot;article-body&quot; v-html=&quot;articleContent&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol>
<li>文章导航显示以及点击转跳：
<ul>
<li>思路：在文章内容组件中由md格式得到html数据时，通过数据查找h标签，把h1和h2的内容提取出来，然后传标签size，标签内容，标签id 给导航。通过使用 pinia 进行状态管理将数据保留</li>
<li>我选择使用a标签锚点进行转跳，给原本筛选出来的h标签套一层div。这也导致了文章同级标题内容相同会导致目录转跳失败。</li>
<li>这里套一层的div 的 id 采用&quot;jump-xx&quot;命名，直接追加上 # 传标签id，这样目录组件使用更方便。</li>
</ul>
</li>
</ol>
<p><em>components\detail\ArticleContent.vue</em></p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// 把h1和h2标签的内容提取出来，传标签size，标签内容，标签id
const tocs = articleContent.match(/&lt;h[1-2].*?&gt;.*?&lt;\/h[1-2]&gt;/g);
tocs.forEach((item, index) =&gt; {
    let _tocs = `&lt;div id=&quot;jump-${index}&quot;&gt;${item}&lt;/div&gt;`;
    articleContent = articleContent.replace(item, _tocs);
});
let hData = tocs.map((item, index) =&gt; {
    let hContent = item.match(/&lt;h(\d).*?&gt;(.*?)&lt;\/h[1-2]&gt;/);
    const jump = `#jump-${index}`;
    return { id: hContent[1], content: hContent[2], jumpId: jump };
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>导航滚动高亮：
<ul>
<li>hTopList 数组是获取到页面中所有 h1，h2标签的 offsetTop。</li>
<li>监听页面滚动，对比页面滚动值scrollTop和标签的高度来判断是否高亮， 通过定义一个 activeIndex 来判断是哪个导航条高亮样式。采用节流的方式，减少函数的执行次数。</li>
<li>这里的keep参数就是导航条过多时，滚动条高亮处在第七个，其实应该根据导航box的高度对半取整算一下，这里图方便，数了下掘金是在第几个高亮就写了第几个。34 是每条导航 li 标签的高度。</li>
</ul>
</li>
</ul>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>import { useHListStore } from '~~/composables/hData';
import { ref, onMounted, onUnmounted } from '#imports';

let scrollTop = ref(0);
let scroll;
let timer;
onMounted(() =&gt; {
  setTimeout(() =&gt; {
    getHTopList();
  }, 0);
  window.addEventListener(
    'scroll',
    (scroll = () =&gt; {
      if (timer) {
        return;
      }
      timer = setTimeout(() =&gt; {
        scrollTop.value = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        watchActive();
        timer = null;
      }, 100);
    }),
  );
});

let activeIndex = ref(0);

//获取所有h标签的offsetTop
let hTopList = ref([]);
const getHTopList = () =&gt; {
  let arr = [];
  for (let i = 0; i &lt; hList.length; i++) {
    arr.push(document.querySelector(hList[i].jumpId).offsetTop);
  }
  arr.push(Number.MAX_VALUE); //兜底
  hTopList.value = arr;
};

//滚动导航高亮
const watchActive = () =&gt; {
  if (scrollTop.value &lt; hTopList.value[0]) {
    activeIndex.value = 0;
  }
  for (let i = 0; i &lt; hTopList.value.length; i++) {
    if (scrollTop.value &gt; hTopList.value[i] &amp;&amp; scrollTop.value &lt; hTopList.value[i + 1] &amp;&amp; activeIndex.value != i) {
      activeIndex.value = i;
    }
  }
  let catalogList = document.querySelector('.catalog-list');
  const keep = 7;
  let hListLength = hList.length;
  if (activeIndex.value &lt;= keep) {
    catalogList.scrollTop = 0;
  } else if (activeIndex.value &gt; hListLength - keep) {
    catalogList.scrollTop = 34 * (hListLength - keep);
  } else {
    catalogList.scrollTop = 34 * (activeIndex.value - keep);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


