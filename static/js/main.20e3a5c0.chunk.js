(this.webpackJsonpgithubfind=this.webpackJsonpgithubfind||[]).push([[0],{19:function(e,a,t){e.exports=t(47)},24:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),s=t.n(c),l=(t(24),t(14)),o=t(15),i=t(17),m=t(16),u=t(18),d=(t(25),t(3)),p=t.n(d),g=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"#",className:"navbar-brand"},"Github Search")))},b=function(e){var a=e.user;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card",style:{with:"18rem"}},r.a.createElement("img",{src:a.avatar_url,alt:"picture",className:"card-img-top"}),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},"Nome:",r.a.createElement("span",{className:"badge",style:{fontSize:"15px"}},a.name)),r.a.createElement("li",{className:"list-group-item"},"Reposit\xf3rios:",r.a.createElement("span",{className:"badge",style:{fontSize:"15px"}},a.public_repos)),r.a.createElement("li",{className:"list-group-item"},"Seguidores:",r.a.createElement("span",{className:"badge",style:{fontSize:"15px"}},a.followers)),r.a.createElement("li",{className:"list-group-item"},"Seguindo:",r.a.createElement("span",{className:"badge",style:{fontSize:"15px"}},a.following))),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:a.html_url,target:"blank",className:"btn btn-dark btn-block"},"Ver perfil"))))))},E=function(e){var a=e.repo;return r.a.createElement("div",{className:"card card-body mb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("a",{href:a.html_url,target:"blank"},a.name)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("span",{className:"badge",style:{fontSize:"15px"}},"Stars: ",a.stargazers_count),r.a.createElement("span",{className:"badge",style:{fontSize:"15px"}},"Watch: ",a.watchers_count),r.a.createElement("span",{className:"badge",style:{fontSize:"15px"}},"Forks: ",a.forks_count))))},h=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).getUser=function(e){var a=e.target.value,n=t.state.github,r=n.url,c=n.client_id,s=n.client_secret,l=n.count,o=n.sort;p.a.get("".concat(r,"/").concat(a,"?client_id=").concat(c,"&client_secret=").concat(s)).then((function(e){var a=e.data;return t.setState({user:a})})),p.a.get("".concat(r,"/").concat(a,"/repos?per_page=").concat(l).concat(o,"&client_id=").concat(c,"&\n      clint_secret=").concat(s)).then((function(e){var a=e.data;return t.setState({repos:a})}))},t.renderProfile=function(){var e=t.state,a=e.user,n=e.repos;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4",style:{marginTop:"10px"}},r.a.createElement(b,{user:a})),r.a.createElement("div",{className:"col-md-8",style:{marginTop:"10px"}},n.map((function(e){return r.a.createElement(E,{key:e.name,repo:e})}))))},t.state={github:{url:"https://api.github.com/users",count:7,sort:"created: asc"},user:[],repos:[]},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h1",null,"Pesquisar Usu\xe1rio"),r.a.createElement("form",{action:""},r.a.createElement("input",{onBlur:this.getUser,type:"text",id:"search",placeholder:"Digite o nome do usu\xe1rio",className:"form-control required"})),r.a.createElement("button",{className:"btn btn-dark btn-block",style:{width:"100px",alignSelf:"center",marginTop:"20px"}}," Buscar ")),0!==this.state.user.length?this.renderProfile():null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.20e3a5c0.chunk.js.map