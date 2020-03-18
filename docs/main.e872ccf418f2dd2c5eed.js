(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(){},function(a,b,c){'use strict';function d(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function e(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function f(d,a,b){return a&&e(d.prototype,a),b&&e(d,b),d}function g(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function h(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function i(d,a,b){return a&&h(d.prototype,a),b&&h(d,b),d}c.r(b);var j=c(0),k=function(){function h(a){d(this,h),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return f(h,null,[{key:'fromJson',value:function(a){var b=a.id,c=a.tarea,d=a.completado,e=a.creado,f=new h(c);return f.id=b,f.completado=d,f.creado=e,f}}]),f(h,[{key:'imprimerClase',value:function(){console.log(''.concat(this.tarea,' - ').concat(this.id))}}]),h}(),l=function(){function b(){g(this,b),this.cargarLocalStorage()}return i(b,[{key:'nuevoTodo',value:function(b){this.todos.push(b)}},{key:'eliminarTodo',value:function(c){this.todos=this.todos.filter(function(a){return a.id!=c}),this.guardarLocalStorage()}},{key:'marcarCompletado',value:function(h){var i,a=!0,b=!1;try{for(var c,d,e=this.todos[Symbol.iterator]();!(a=(c=e.next()).done);a=!0)if(d=c.value,console.log(h,d.id),d.id==h){d.completado=!d.completado,this.guardarLocalStorage();break}}catch(c){b=!0,i=c}finally{try{a||null==e['return']||e['return']()}finally{if(b)throw i}}}},{key:'eliminarCompletados',value:function(){this.todos=this.todos.filter(function(b){return!b.completado}),this.guardarLocalStorage()}},{key:'guardarLocalStorage',value:function(){localStorage.setItem('todo',JSON.stringify(this.todos))}},{key:'cargarLocalStorage',value:function(){this.todos=localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')):[],this.todos=this.todos.map(function(b){return k.fromJson(b)})}}]),b}(),m=document.querySelector('.todo-list'),n=document.querySelector('.new-todo'),o=document.querySelector('.clear-completed'),p=document.querySelector('.filters'),q=document.querySelectorAll('.filtro'),r=function(d){var a='\n    <li class="'.concat(d.completado?'completed':'','" data-id="').concat(d.id,'">\n            <div class="view">\n                <input class="toggle" type="checkbox" ').concat(d.completado?'checked':'','>\n                <label>').concat(d.tarea,'</label>\n                <button class="destroy"></button>\n            </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),b=document.createElement('div');return b.innerHTML=a,m.append(b.firstElementChild),b.firstElementChild};n.addEventListener('keyup',function(c){if(13===c.keyCode&&0<n.value.length){console.log(n.value);var a=new k(n.value);s.nuevoTodo(a),r(a),n.value=''}}),m.addEventListener('click',function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute('data-id');a.includes('input')?(s.marcarCompletado(c),b.classList.toggle('completed')):a.includes('button')&&(s.eliminarTodo(c),m.removeChild(b)),console.log(s)}),o.addEventListener('click',function(){s.eliminarCompletados();for(var c,a=m.children.length-1;;a--)c=m.children[a],c.classList.contains('completed')&&m.removeChild(c)}),p.addEventListener('click',function(j){var a=j.target.text;if(a){q.forEach(function(b){return b.classList.remove('selected')}),j.target.classList.add('selected');var b,e=!0,c=!1;try{for(var d,f,g=m.children[Symbol.iterator]();!(e=(d=g.next()).done);e=!0){f=d.value,f.classList.remove('hidden');var h=f.classList.contains('completed');'Pendientes'===a?h&&f.classList.add('hidden'):'Completados'===a?h||f.classList.add('hidden'):void 0}}catch(d){c=!0,b=d}finally{try{e||null==g['return']||g['return']()}finally{if(c)throw b}}}}),c.d(b,'todoList',function(){return s});var s=new l;s.todos.forEach(r),console.log('todos',s.todos)}]);