import{_ as i,p as n,q as e,a1 as d}from"./framework-5866ffd3.js";const l={},s=d(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><p><a href="#todolist%E6%A1%88%E4%BE%8B-nexttick">ToDoList案例 $nextTick</a></p></li><li><p><a href="#nexttick">$nextTick</a></p></li><li><p><a href="#todolist%E6%A1%88%E4%BE%8B">ToDoList案例</a></p></li></ul><h1 id="todolist案例-nexttick" tabindex="-1"><a class="header-anchor" href="#todolist案例-nexttick" aria-hidden="true">#</a> ToDoList案例 $nextTick</h1><h1 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> $nextTick</h1><p>语法： <code>this.$nextTick(回调函数)</code></p><p>作用：在下一次dom更新结束后执行其指定的回调</p><p>什么时候用：当改变数据后，要基于更新后的新dom进行某些操作时，要在nextTick所指定的回调函数中执行。</p><h1 id="todolist案例" tabindex="-1"><a class="header-anchor" href="#todolist案例" aria-hidden="true">#</a> ToDoList案例</h1><p>src/main.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import App from &#39;./App.vue&#39;

Vue.config.productionTip = false

new Vue({
  render: h =&gt; h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/App.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;div class=&quot;todo-container&quot;&gt;
      &lt;div class=&quot;todo-wrap&quot;&gt;
        &lt;!-- &lt;MyHeader :addTodo=&quot;addTodo&quot; /&gt; --&gt;
        &lt;!-- 添加自定义事件 --&gt;
        &lt;MyHeader @addTodo=&quot;addTodo&quot; /&gt;
        &lt;!-- &lt;MyList :todos=&quot;todos&quot; :checkTodo=&quot;checkTodo&quot; :deleteTodo=&quot;deleteTodo&quot; /&gt; --&gt;
        &lt;MyList :todos=&quot;todos&quot; /&gt;
        &lt;MyFooter :todos=&quot;todos&quot; @checkAllTodo=&quot;checkAllTodo&quot; @clearAllTodo=&quot;clearAllTodo&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import MyHeader from &#39;./components/MyHeader.vue&#39;
import MyList from &#39;./components/MyList.vue&#39;
import MyFooter from &#39;./components/MyFooter.vue&#39;
import pubsub from &#39;pubsub-js&#39;

export default {
    name: &quot;App&quot;,
    components: { MyHeader, MyList, MyFooter },
    data(){
      return {
          todos:JSON.parse(localStorage.getItem(&#39;todos&#39;)) || []
      }
    },
    methods:{
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      checkTodo(msgName,id){
        this.todos.forEach((todo)=&gt;{
          if(todo.id === id) todo.done = !todo.done
        })
      },
      updateTodo(id,title){
        this.todos.forEach((todo)=&gt;{
          if(todo.id === id) todo.title = title
        })
      },
      deleteTodo(id){
        this.todos = this.todos.filter(todo =&gt; todo.id !== id)
      },
      checkAllTodo(done){
        this.todos.forEach((todo)=&gt;{
          todo.done = done
        })
      },
      clearAllTodo(){
        this.todos = this.todos.filter(todo =&gt; !todo.done)
      }
    },
    watch:{
      // todos(value){
        // localStorage.setItem(&#39;todos&#39;,JSON.stringify(value)) 
        // 单纯的监视不会检测到对象内部数值的变化,比如这里的勾选done的true和false
      // }
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem(&#39;todos&#39;,JSON.stringify(value)) 
        }
      }
    },
    mounted(){
      this.pubId = pubsub.subscribe(&#39;checkTodo&#39;,this.checkTodo);
      this.$bus.$on(&#39;deleteTodo&#39;,this.deleteTodo);
      this.$bus.$on(&#39;updateTodo&#39;,this.updateTodo);
    },
    destroyed(){
      pubsub.unsubscribe(this.$childrenpubId);
      this.$bus.$off(&#39;deleteTodo&#39;);
      this.$bus.$off(&#39;updateTodo&#39;);
    }
}

&lt;/script&gt;

&lt;style&gt;
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #49acda;
  border: 1px solid #2f89bd;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/components/myHeader.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;todo-header&quot;&gt;
        &lt;input type=&quot;text&quot; placeholder=&quot;请输入你的任务名称，按回车键确认&quot; v-model=&quot;title&quot; @keyup.enter=&quot;add&quot;/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import {nanoid} from &#39;nanoid&#39;
export default {
    name:&#39;MyHeder&#39;,
    // props:[&#39;addTodo&#39;],
    data(){
      return{
        title:&quot;&quot;
      }
    },
    methods:{
      add(){
        const todoObj = { id:nanoid(), title:this.title, done:false }
        // this.addTodo(todoObj)
        this.$emit(&quot;addTodo&quot;,todoObj);
        this.title = &quot;&quot;
      }
    }
}
&lt;/script&gt;

&lt;style scoped&gt;
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/components/myList.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;ul class=&quot;todo-main&quot;&gt;
    &lt;MyItem v-for=&quot;todoObj in todos&quot; :key=&quot;todoObj.id&quot; :todo=&quot;todoObj&quot; :checkTodo=&quot;checkTodo&quot; :deleteTodo=&quot;deleteTodo&quot;/&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
import MyItem from &#39;./MyItem&#39;
export default {
    name:&#39;MyList&#39;,
    components:{MyItem},
    props:[&#39;todos&#39;,&#39;checkTodo&#39;,&#39;deleteTodo&#39;]
}
&lt;/script&gt;
&lt;style scoped&gt;
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/components/myItem.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;li&gt;
        &lt;label&gt;
            &lt;input type=&quot;checkbox&quot; :checked=&quot;todo.done&quot; @change=&quot;handleCheck(todo.id)&quot; /&gt;
            &lt;!-- &lt;input type=&quot;checkbox&quot;  v-model=&quot;todo.done&quot; /&gt; --&gt;
            &lt;span v-show=&quot;!todo.isEdit&quot;&gt;{{todo.title}}&lt;/span&gt;
            &lt;input v-show=&quot;todo.isEdit&quot; type=&quot;text&quot; :value=&quot;todo.title&quot; ref=&quot;inputTitle&quot; @blur=&quot;handleBlur(todo,$event)&quot;&gt;
        &lt;/label&gt;
        &lt;button class=&quot;btn btn-danger&quot; @click=&quot;handleDelete(todo.id)&quot;&gt;删除&lt;/button&gt;
        &lt;button class=&quot;btn btn-edit&quot; v-show=&quot;!todo.isEdit&quot; @click=&quot;handleEdit(todo)&quot;&gt;编辑&lt;/button&gt;
    &lt;/li&gt;
&lt;/template&gt;

&lt;script&gt;
import pubsub from &#39;pubsub-js&#39;

export default {
    name: &#39;MyItem&#39;,
    // props:[&#39;todo&#39;,&#39;checkTodo&#39;,&#39;deleteTodo&#39;],
    props:[&#39;todo&#39;],
    methods:{
        handleCheck(id){
            // this.checkTodo(id)
            // this.$bus.$emit(&#39;checkTodo&#39;,id);
            pubsub.publish(&#39;checkTodo&#39;,id);
        },
        handleDelete(id){
            // this.deleteTodo(id)
            this.$bus.$emit(&#39;deleteTodo&#39;,id);
        },
        handleEdit(todo){
            // todo.isEdit = true;//dame
            // console.log(todo);//会有isEdit属性但不是响应式的，没有getset方法
            if(todo.isEdit != undefined){//或者todo.hasOwnProperty.call(&#39;isEdit&#39;)，检测todo中有无isEdit这个属性
                todo.isEdit = true;
            }else{
                this.$set(todo,&#39;isEdit&#39;,true);//给todo添加新属性
            }
            //执行本方法后inpu框才出现
            //所以要进行异步操作
            //setTimeout或者nextTick
            //定时器是异步的宏任务。需要等到全部同步任务执行结束和异步微调任务结束才能执行
            // setTimeout(()=&gt;{
            //     this.$refs.inputTitle.focus()
            // })
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
        },
        handleBlur(todo,e){
            todo.isEdit = false;
            if(!e.target.value.trim()) return alert(&#39;输入不能为空！&#39;)
            this.$bus.$emit(&#39;updateTodo&#39;,todo.id,e.target.value)
        }
    }
}
&lt;/script&gt;

&lt;style scoped&gt;
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
li:hover{
    background-color: #ddd;
}
li:hover button{
    display: block;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/components/myFooter.vue</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;todo-footer&quot; v-show=&quot;total&quot;&gt;
        &lt;label&gt;
          &lt;input type=&quot;checkbox&quot; :checked=&quot;isAll&quot; @change=&quot;checkAll&quot;/&gt;
        &lt;/label&gt;
        &lt;span&gt;
          &lt;span&gt;已完成{{doneTotal}}&lt;/span&gt; / 全部{{total}}
        &lt;/span&gt;
        &lt;button class=&quot;btn btn-danger&quot; @click=&quot;clearAll&quot;&gt;清除已完成任务&lt;/button&gt;
      &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name:&#39;MyFooter&#39;,
    // props:[&#39;todos&#39;,&#39;checkAllTodo&#39;,&#39;clearAllTodo&#39;],
    props:[&#39;todos&#39;],
    computed:{
      total(){
        return this.todos.length  
      },
      doneTotal(){
        //方法一
        // let i = 0
        // this.todos.forEach((todo)=&gt;{
        //   if(todo.done) i++
        // }) 
        // return i 
        return this.todos.reduce((pre,current)=&gt;{
          console.log(&quot;#&quot;,pre,current)
          return pre + (current.done?1:0)
        },0)
      },
      isAll(){
        return this.total === this.doneTotal &amp;&amp; this.total&gt;0
      },
    },
    methods:{
      checkAll(e){
        console.log(&quot;checkall&quot;+e.target)
        // this.checkAllTodo(e.target.checked)
        this.$emit(&#39;checkAllTodo&#39;,e.target.checked)
      },
      clearAll(){
        // this.clearAllTodo()
        this.$emit(&quot;clearAllTodo&quot;)
      }
    }
}
&lt;/script&gt;

&lt;style scoped&gt;
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[s];function v(a,r){return n(),e("div",null,t)}const u=i(l,[["render",v],["__file","ToDoList案例 _nextTick.html.vue"]]);export{u as default};
