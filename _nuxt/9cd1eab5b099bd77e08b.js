(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{172:function(t,e,n){var content=n(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("580ab874",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";n.d(e,"c",function(){return c}),n.d(e,"b",function(){return l}),n.d(e,"a",function(){return m});var o=n(174),r=n(175);function c(){return r}function l(t){return r.find(e=>e.$slug===t)}function m(t){return o.find(e=>e.$slug===t)}},174:function(t){t.exports=[{$html:'<h1>C\'est quoi Popcorn 🍿 ?</h1>\n<p><em>Popcorn</em> est une plateforme initié par <a href="https://popcorn-nantes.github.io/">Popcorn-Nantes</a> qui vous permet de trouver un·e développeur·e freelance dans votre région <strong>avec (vraiment) 0% de commission</strong> pour tout le monde et sans intermédiaire.</p>\n<p>Popcorn-Morbihan vous permet d\'entrer directement en contact avec les freelances du Morbihan : <em>Popcorn</em> n\'intervient pas dans les échanges qui suivent entre vous et les freelances.</p>\n<h2>Pourquoi c\'est gratuit ?</h2>\n<p>Puisque que nous sommes développeurs, nous maintenons nous-même cette plateforme (qui est <a href="https://github.com/popcorn-morbihan/popcorn-morbihan">opensource</a> et participons à ses dépendances comme <a href="https://github.com/popcorn-nantes/popcorn-machine">la machine à popcorn</a>). La valeur ajoutée pour nous, ce sont les projets trouvés par le biais du site et le fait de pouvoir entrer en contact avec vous sans commission ni intermédiaire.</p>\n<p>Par ailleurs, puisque <em>Popcorn</em> vous permet de contacter les freelances directement et n\'intervient pas dans les échanges qui suivent, il n\'y a pas de travail ni de frais liés à la mise en relation.</p>\n<p>Enfin, Popcorn n\'est pas une entreprise mais une <a href="https://opencollective.com/popcorn">association</a>.</p>\n',$slug:"a-propos",$id:"a-propos.md"},{$html:'<h1>S\'inscrire sur Popcorn</h1>\n<p>Popcorn-Morbihan est une plateforme open source et sans commission conçue <em>par</em> et <em>pour</em> les développeur·e·s freelances du Morbihan. L\'inscription se fait en faisant une <em>pull request</em> sur le dépôt <em>Git</em> du code source de <em>Popcorn</em> en suivant les instructions du README.</p>\n<div class="has-text-centered section">\n<a class="button is-primary" href="https://github.com/popcorn-morbihan/popcorn-nantes#cr%C3%A9er-son-profil"><img style="width:20px;margin-right:5px" src="/public/images/icons/github.png"> S\'INSCRIRE </a>\n</div>\n',$slug:"inscription",$id:"inscription.md"}]},175:function(t){t.exports=[]},176:function(t,e,n){"use strict";var o=n(172);n.n(o).a},177:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,".card-image[data-v-5e3eb9e7]{position:relative}.photo-container[data-v-5e3eb9e7]{height:300px}.photo[data-v-5e3eb9e7]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.name[data-v-5e3eb9e7]{text-align:center;height:40px;padding:8px;position:absolute;bottom:0;width:100%;color:#fff}.name-overlay[data-v-5e3eb9e7]{background:#000;opacity:.6}",""])},180:function(t,e,n){"use strict";var o={props:{tags:{type:Array,required:!0}}},r=n(9),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.tags,function(e){return n("span",{key:e,staticClass:"tag is-light",staticStyle:{"margin-right":"5px"}},[t._v(t._s(e))])}),0)},[],!1,null,null,null);e.a=component.exports},181:function(t,e,n){"use strict";var o={props:{person:{type:Object,required:!0}}},r=(n(176),n(9)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-image"},[n("div",{staticClass:"photo-container"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.person.photo,expression:"person.photo"}],staticClass:"photo"}),t._v(" "),n("div",{staticClass:"name name-overlay"})]),t._v(" "),n("p",{staticClass:"name"},[t._v(t._s(t.person.prenom)+" "+t._s(t.person.nom))])])},[],!1,null,"5e3eb9e7",null);e.a=component.exports},182:function(t,e,n){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return o})},188:function(t,e,n){"use strict";n.r(e);var o=n(182),r=n(180),c=n(181),l={components:{Tags:r.a,PersonCardPhoto:c.a},props:{person:{type:Object,required:!0}},data:function(){return{showModal:!1}}},m=n(9),d=Object(m.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"person container section"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("PersonCardPhoto",{attrs:{person:t.person}})],1),t._v(" "),n("div",{staticClass:"column is-two-thirds"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-thirds"},[n("h1",{staticClass:"title",staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(t.person.prenom)+" "+t._s(t.person.nom))]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v(t._s(t.person.titre))]),t._v(" "),n("h2",{staticClass:"subtitle"},[n("Tags",{staticClass:"domaines-metiers",attrs:{tags:t.person.domaines_metiers}})],1),t._v(" "),n("h2",{staticClass:"subtitle"},[n("Tags",{staticClass:"technologies",attrs:{tags:t.person.technologies}})],1)]),t._v(" "),n("div",{staticClass:"column"},[n("button",{staticClass:"button is-primary",on:{click:function(e){t.showModal=!0}}},[n("img",{staticStyle:{width:"20px","padding-right":"5px"},attrs:{src:"/icons/envelope.svg"}}),t._v(" "),n("span",[t._v("Proposer un projet")])])])]),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.person.$html)}})])]),t._v(" "),t.showModal?n("div",{staticClass:"modal",class:{"is-active":t.showModal}},[n("div",{staticClass:"modal-background",on:{click:function(e){t.showModal=!1}}}),t._v(" "),n("div",{staticClass:"modal-content has-text-centered"},[n("div",{staticClass:"box"},[n("h1",{staticClass:"title"},[t._v("Contacter "+t._s(t.person.prenom)+" "+t._s(t.person.nom))]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v(t._s(t.person.titre))]),t._v(" "),n("p",{staticClass:"is-size-5",staticStyle:{"margin-top":"1rem"}},[t._v(t._s(t.person.mail))]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.person.telephone,expression:"person.telephone"}],staticClass:"is-size-5",staticStyle:{"margin-top":"1rem"}},[t._v(t._s(t.person.telephone))]),t._v(" "),t._m(0),t._v(" "),n("div",{staticStyle:{"font-size":"3rem"}},[t._v("🍿")])])]),t._v(" "),n("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"fermer"},on:{click:function(e){t.showModal=!1}}})]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"margin-top":"2rem"}},[e("em",[this._v("Indiquez-lui que vous l'avez trouvé·e sur Popcorn :)")])])}],!1,null,null,null).exports,content=n(173);function h({title:title,description:t,image:image,url:e}){return[{hid:"og:site_name",name:"og:site_name",content:"Popcorn"},{hid:"og:url",property:"og:url",content:e},{hid:"og:title",property:"og:title",content:title},{hid:"og:url",property:"og:url",content:e},{hid:"og:image",property:"og:image",content:image},{hid:"og:description",property:"og:description",content:t},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:image}]}var v={components:{Person:d},computed:{person:function(){return Object(content.b)(this.$route.params.slug)}},head:function(){if(!this.person)return{};var title="Profil de ".concat(this.person.prenom," ").concat(this.person.nom,", freelance ").concat(this.person.technologies.join(", ")),t="Popcorn : trouvez un développeur freelance".concat(""," avec (vraiment) 0% de commission pour tout le monde"),image="".concat(void 0).concat(this.person.photo),e="".concat(void 0).concat(this.$route.path);return{meta:Object(o.a)(h({title:title,description:t,image:image,url:e}))}}},f=Object(m.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container section"},[this.person?e("Person",{attrs:{person:this.person}}):e("div",[this._v("Désolé, cette page n'existe pas ou a été dépubliée. 😭")])],1)},[],!1,null,null,null);e.default=f.exports}}]);