(function(t){function e(e){for(var n,a,c=e[0],i=e[1],l=e[2],m=0,p=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,c=1;c<s.length;c++){var i=s[c];0!==o[i]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},o={app:0},r=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"44be":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"forum",attrs:{id:"app"}},[s("div",{staticClass:"forum__posts"},t._l(t.filteredPosts,(function(e){return s("div",{key:e.title},[s("Post",{attrs:{author:t.checkAuthor(e.userId),title:e.title,text:e.body},on:{showComments:function(s){return t.getComments(e.id)}}},[t.comments?s("div",t._l(t.getCurrentComments(e.id),(function(t){return s("div",{key:t.name},[s("Comment",{attrs:{id:e.id,name:t.name,text:t.body}})],1)})),0):t._e()])],1)})),0),s("div",{staticClass:"forum__filters"},[s("div",{staticClass:"filters"},[s("p",{staticClass:"filters__title"},[t._v("Фильтры")]),s("label",{staticClass:"filters__filter",attrs:{for:"name"}},[s("p",[t._v("Имя/Название")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchName,expression:"searchName"}],attrs:{type:"text",id:"name"},domProps:{value:t.searchName},on:{input:function(e){e.target.composing||(t.searchName=e.target.value)}}})]),s("label",{staticClass:"filters__filter",attrs:{for:"content"}},[s("p",[t._v("Контент")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text",id:"content"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])])])])},r=[],a=(s("4de4"),s("4160"),s("c975"),s("b0c0"),s("d3b7"),s("3ca3"),s("159b"),s("ddb0"),s("2909")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"post",staticClass:"post"},[s("div",{staticClass:"post__body"},[s("img",{attrs:{src:"http://placekitten.com/130/130",alt:"cat"}}),s("p",{staticClass:"post__author"},[t._v(t._s(t.author))]),s("p",{staticClass:"post__title"},[t._v(t._s(t.title))]),s("p",{staticClass:"post__text"},[t._v(t._s(t.text))])]),s("button",{ref:"downloadBtn",staticClass:"post__show-comments",on:{click:t.showComments}},[t._v("Открыть комментарии")]),s("div",{ref:"comments",staticClass:"post__comments"},[t._t("default"),s("button",{ref:"closeBtn",staticClass:"post__show-comments post__show-comments--close",on:{click:t.closeComments}},[t._v("Скрыть комментарии")])],2)])},i=[],l={name:"post",props:["author","title","text"],data:function(){return{downloadData:!1}},methods:{showComments:function(){this.downloadData||this.$emit("showComments"),this.$refs.downloadBtn&&(this.$refs.post.style="margin-bottom: 80px",this.$refs.comments.style.display="block",this.$refs.downloadBtn.style.display="none"),this.downloadData=!0},closeComments:function(){this.$refs.post.style="margin-bottom: 20px",this.$refs.comments.style.display="none",this.$refs.downloadBtn.style.display="block"}}},u=l,m=(s("d1ff"),s("2877")),p=Object(m["a"])(u,c,i,!1,null,"023023ec",null),d=p.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[t._m(0),s("div",{staticClass:"comment__textblock"},[s("p",{staticClass:"comment__name"},[t._v(t._s(t.name)),s("span",[t._v("промурчал")])]),s("p",{staticClass:"comment__text"},[t._v(t._s(t.text))])])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment__img"},[s("img",{attrs:{src:"http://placekitten.com/50/80",alt:"comment-img"}})])}],_={name:"comment",props:["name","text","id"]},v=_,b=(s("962d"),Object(m["a"])(v,f,h,!1,null,"529e095b",null)),y=b.exports,C=s("bc3a"),x=s.n(C),g={name:"app",data:function(){return{posts:[],usersId:[],comments:[],searchName:"",searchText:""}},components:{Post:d,Comment:y},methods:{checkAuthor:function(t){var e="";return this.usersId.forEach((function(s){s.id===t&&(e=s.name)})),e},getComments:function(t){var e=this;x.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(t)).then((function(t){var s;(s=e.comments).push.apply(s,Object(a["a"])(t.data))}))},getCurrentComments:function(t){var e=[];return this.comments.forEach((function(s){s.postId===t&&e.push(s)})),e}},computed:{filteredPosts:function(){var t=this,e=this.posts.filter((function(e){var s=t.checkAuthor(e.userId);return-1!==s.indexOf(t.searchName)}));return e.filter((function(e){return-1!==e.body.indexOf(t.searchText)}))}},watch:{},mounted:function(){var t=this,e=x.a.get("https://jsonplaceholder.typicode.com/posts"),s=x.a.get("https://jsonplaceholder.typicode.com/users");Promise.all([e,s]).then((function(e){t.posts=e[0].data,t.usersId=e[1].data}))}},w=g,O=(s("5c0b"),Object(m["a"])(w,o,r,!1,null,null,null)),j=O.exports;n["a"].config.productionTip=!0,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("9c0c"),o=s.n(n);o.a},"962d":function(t,e,s){"use strict";var n=s("44be"),o=s.n(n);o.a},"9c0c":function(t,e,s){},b57b:function(t,e,s){},d1ff:function(t,e,s){"use strict";var n=s("b57b"),o=s.n(n);o.a}});
//# sourceMappingURL=app.fe489e5a.js.map