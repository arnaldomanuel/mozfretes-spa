(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"1e9d":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header-truck"),a("q-card",{staticClass:"my-card q-mt-md"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Adicionar caminhão")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8"},[a("q-input",{staticClass:"q-mr-lg",attrs:{filled:"",label:"Nome único do veículo",hint:"Pode colocar a matrícula ou um nome que identifique o seu veículo","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Campo obrigatório"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"local_shipping"}})]},proxy:!0}]),model:{value:t.truck.name,callback:function(e){t.$set(t.truck,"name",e)},expression:"truck.name"}})],1),a("div",{staticClass:"col-12 col-lg-4"},[a("q-input",{staticClass:"q-mr-lg",attrs:{filled:"",type:"number",step:".01",label:"Capacidade máxima de carga em KG","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Campo obrigatório"},function(t){return t>0||"Peso deve possuir valor positivo"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"add_location"}})]},proxy:!0}]),model:{value:t.truck.maximum_capacity,callback:function(e){t.$set(t.truck,"maximum_capacity",e)},expression:"truck.maximum_capacity"}})],1),a("div",{staticClass:"col-12 col-lg-6  q-mt-md"},[a("q-input",{staticClass:"q-mr-lg",attrs:{filled:"",label:"Marca veículo","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Campo obrigatório"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"dashboard"}})]},proxy:!0}]),model:{value:t.truck.brand,callback:function(e){t.$set(t.truck,"brand",e)},expression:"truck.brand"}})],1),a("div",{staticClass:"col-12 col-lg-6 q-mt-md"},[a("q-input",{staticClass:"q-mr-lg",attrs:{filled:"",label:"Modelo do veículo","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Campo obrigatório"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"layers"}})]},proxy:!0}]),model:{value:t.truck.model,callback:function(e){t.$set(t.truck,"model",e)},expression:"truck.model"}})],1),a("div",{staticClass:"col-12"},[a("q-file",{attrs:{name:"poster_file",filled:"","use-chips":"",accept:".jpeg, .png, .jpg","max-file-size":"1024",label:"Carregue a foto do veículo"},on:{rejected:t.onRejectedTruckPic},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"image"}})]},proxy:!0}]),model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)]),a("div",[a("q-btn",{attrs:{label:"Criar",type:"submit",color:"primary"}})],1)])],1)],1)],1)},c=[],o=a("6693"),r={components:{HeaderTruck:o["a"]},data(){return{truck:{name:"",brand:"",model:"",maximum_capacity:"",photo_path:""},file:null}},methods:{onSubmit(){},onRejectedTruckPic(){}}},s=r,n=a("2877"),i=a("f09f"),u=a("a370"),d=a("0378"),m=a("27f9"),p=a("0016"),f=a("7d53"),b=a("9c40"),v=a("eebe"),q=a.n(v),C=Object(n["a"])(s,l,c,!1,null,null,null);e["default"]=C.exports;q()(C,"components",{QCard:i["a"],QCardSection:u["a"],QForm:d["a"],QInput:m["a"],QIcon:p["a"],QFile:f["a"],QBtn:b["a"]})},6693:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("div",{staticClass:"text-h5"},[t._v("Gestão de veículos")]),a("div",{staticClass:"text-subtitle2"},[t._v("Registe, edite e elimine veículos que sua empresa possui")])]),a("q-card-section",{staticClass:"q-pt-none"},[[a("div",{},[a("q-btn",{staticClass:"q-mr-lg",attrs:{to:"/veiculo/criar",color:"secondary",label:"Criar",icon:"add"}}),a("q-btn",{staticClass:"q-mr-lg",attrs:{to:"/veiculo",color:"secondary",label:"Listar",icon:"visibility"}})],1)]],2)],1)],1)},c=[],o={},r=o,s=a("2877"),n=a("f09f"),i=a("a370"),u=a("9c40"),d=a("eebe"),m=a.n(d),p=Object(s["a"])(r,l,c,!1,null,null,null);e["a"]=p.exports;m()(p,"components",{QCard:n["a"],QCardSection:i["a"],QBtn:u["a"]})}}]);