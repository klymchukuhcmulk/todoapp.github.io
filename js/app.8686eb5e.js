(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},o={app:0},a=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a45":function(t,e,n){},"1b9b":function(t,e,n){"use strict";var s=n("5383"),o=n.n(s);o.a},3039:function(t,e,n){},5383:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"headerWrap"},[n("div",{staticClass:"header"},[n("router-link",{staticClass:"logo",attrs:{tag:"div",to:"/"}},[n("h1",[t._v("TODO")])])],1)]),n("router-view",{staticClass:"main"})],1)},a=[],i={},r=i,c=(n("5c0b"),n("2877")),l=Object(c["a"])(r,o,a,!1,null,null,null),d=l.exports,u=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},[n("div",{staticClass:"notesDiv"},t._l(t.notes,(function(e,s){return n("div",{key:s,staticClass:"noteDiv",class:{odd:t.notes.length%2}},[n("h1",[t._v(t._s(e.title))]),n("div",t._l(e.tasks,(function(e,s){return n("div",{key:s,staticClass:"taskDiv"},[e.done?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"}})]):t._e(),e.done?t._e():n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"}})]),n("p",[t._v(t._s(e.task))])])})),0),n("div",{staticClass:"navDiv"},[n("router-link",{staticClass:"editBtn",attrs:{tag:"div",to:"/edit/"+s}},[n("h3",[t._v("Edit")])]),n("div",{staticClass:"deleteBtn",on:{click:function(e){t.deleteIndex=s}}},[n("h3",[t._v("Delete")])])],1)])})),0),n("router-link",{staticClass:"create",attrs:{tag:"div",to:"/create/new"}},[n("h1",[t._v("Create new")])]),null!==t.deleteIndex?n("alert-window",{attrs:{message:"Delete note?"},on:{yes:t.deleteNote,no:function(e){t.deleteIndex=null}}}):t._e()],1)},h=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"alert-window"}},[n("div",{staticClass:"back"}),n("div",{staticClass:"window-wrap"},[n("div",{staticClass:"window"},[n("h1",[t._v(t._s(t.message))]),n("div",{staticClass:"window-btn"},[n("div",{staticClass:"yes cancel",on:{click:function(e){return t.$emit("yes")}}},[n("h3",[t._v("Yes")])]),n("div",{staticClass:"no edit",on:{click:function(e){return t.$emit("no")}}},[n("h3",[t._v("No")])])])])])])},f=[],m={name:"AlertWindow",props:["message"]},w=m,g=(n("efec"),Object(c["a"])(w,v,f,!1,null,null,null)),k=g.exports,b={data:function(){return{deleteIndex:null}},computed:{notes:function(){return this.$store.getters.notes}},components:{AlertWindow:k},methods:{deleteNote:function(){this.$store.dispatch("deleteNote",this.deleteIndex),this.deleteIndex=null}}},y=b,x=(n("abcb"),Object(c["a"])(y,p,h,!1,null,null,null)),C=x.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit"}},[n("div",{staticClass:"taskEdit"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.noteCopy.title,expression:"noteCopy.title"}],staticClass:"title",attrs:{maxlength:"30",type:"text"},domProps:{value:t.noteCopy.title},on:{input:function(e){e.target.composing||t.$set(t.noteCopy,"title",e.target.value)}}}),t._l(t.noteCopy.tasks,(function(e,s){return n("div",{key:s,staticClass:"task"},[n("label",{staticClass:"checkbox"},[e.done?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"}})]):t._e(),e.done?t._e():n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"}})]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"item.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{change:function(n){var s=e.done,o=n.target,a=!!o.checked;if(Array.isArray(s)){var i=null,r=t._i(s,i);o.checked?r<0&&t.$set(e,"done",s.concat([i])):r>-1&&t.$set(e,"done",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(e,"done",a)}}})]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.task,expression:"item.task"}],staticClass:"taskText",attrs:{type:"text",maxlength:"30",placeholder:e.task},domProps:{value:e.task},on:{input:function(n){n.target.composing||t.$set(e,"task",n.target.value)}}})])})),n("button",{staticClass:"addTask",on:{click:t.addTask}},[t._v("Add task")])],2),n("div",{staticClass:"navButtons"},[n("button",{staticClass:"cancel",on:{click:function(e){t.alertWindow=!0}}},[t._v("Cancel")]),n("button",{staticClass:"edit",on:{click:t.updateList}},[t._v(t._s("create"===t.action?"Add to list":"Update"))])]),t.alertWindow?n("alert-window",{attrs:{message:"Continue?"},on:{yes:t.cancel,no:function(e){t.alertWindow=!1}}}):t._e()],1)},N=[],$=(n("4de4"),n("4160"),n("a9e3"),n("498a"),n("159b"),{name:"Edit",props:["action","index"],components:{AlertWindow:k},data:function(){return{noteCopy:null,alertWindow:!1}},computed:{note:{get:function(){var t;return"create"===this.action?t={title:"Title",tasks:[]}:"edit"===this.action&&(t=this.$store.getters.noteByIndex(Number(this.index))),t},set:function(t){var e=this;"create"===this.action?this.$store.dispatch("addNote",t).then((function(){return e.$router.push("/")})).catch(console.log):"edit"===this.action&&this.$store.dispatch("updateNote",{note:t,index:this.index}).then((function(){return e.$router.push("/")})).catch(console.log)}}},created:function(){var t=this;this.note?(this.noteCopy={},this.noteCopy.title=this.note.title,this.noteCopy.tasks=[],this.note.tasks.forEach((function(e,n){t.noteCopy.tasks[n]=Object.assign({},e)}))):this.$router.push("/")},methods:{updateList:function(){this.note=this.noteCopy,this.note.tasks=this.noteCopy.tasks.filter((function(t){if(""!==t.task.trim())return t}))},addTask:function(){this.noteCopy.tasks.push({task:"",done:!1})},cancel:function(){this.alertWindow=!1,this.$router.push("/")}}}),O=$,j=(n("1b9b"),Object(c["a"])(O,_,N,!1,null,null,null)),P=j.exports;s["a"].use(u["a"]);var A=[{path:"",name:"List",component:C,props:!0},{path:"/:action/:index",name:"Edit",component:P,props:!0}],B=new u["a"]({routes:A}),E=B,T=(n("a434"),n("2f62"));s["a"].use(T["a"]);var W=new T["a"].Store({state:{notes:[{title:"Note 1",tasks:[{task:"lab1",done:!1}]},{title:"Note 2",tasks:[{task:"lab2",done:!1}]},{title:"Note 3",tasks:[{task:"lab1",done:!0},{task:"lab2",done:!1}]}]},mutations:{addNote:function(t,e){t.notes.push(e)},addNotes:function(t,e){t.notes=e},updateNote:function(t,e){var n=e.note,s=e.index;t.notes[s]=n},deleteNote:function(t,e){t.notes.splice(e,1)}},actions:{addNotes:function(t,e){var n=t.commit;n("addNotes",e)},addNote:function(t,e){var n=t.commit;n("addNote",e)},updateNote:function(t,e){var n=t.commit,s=e.note,o=e.index;n("updateNote",{note:s,index:Number(o)})},deleteNote:function(t,e){var n=t.commit;n("deleteNote",e)}},modules:{},getters:{notes:function(t){return t.notes},noteByIndex:function(t){return function(e){return t.notes[e]}}}});s["a"].config.productionTip=!1,new s["a"]({router:E,store:W,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),o=n.n(s);o.a},"9c0c":function(t,e,n){},abcb:function(t,e,n){"use strict";var s=n("1a45"),o=n.n(s);o.a},efec:function(t,e,n){"use strict";var s=n("3039"),o=n.n(s);o.a}});
//# sourceMappingURL=app.8686eb5e.js.map