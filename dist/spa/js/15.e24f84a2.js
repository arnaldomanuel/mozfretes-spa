(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"49e2":function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("q-card",{staticClass:"my-card"},[t("q-card-section",[t("div",{staticClass:"text-h5"},[e._v("Gestão de cargas")]),t("div",{staticClass:"text-subtitle2"},[e._v("Se possui alguma carga que precisa despachar, registe aqui")])]),t("q-card-section",{staticClass:"q-pt-none"},[[t("div",{},[t("q-btn",{staticClass:"q-mr-lg",attrs:{to:"/carga/criar",color:"secondary",label:"Criar",icon:"add"}}),t("q-btn",{staticClass:"q-mr-lg",attrs:{to:"/carga",color:"secondary",label:"Listar",icon:"visibility"}})],1)]],2)],1)],1)},l=[],r={},s=r,i=t("2877"),n=t("f09f"),c=t("a370"),d=t("9c40"),u=t("eebe"),f=t.n(u),m=Object(i["a"])(s,o,l,!1,null,null,null);a["a"]=m.exports;f()(m,"components",{QCard:n["a"],QCardSection:c["a"],QBtn:d["a"]})},"6fe2":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("header-freight-journey"),t("div",{staticClass:"q-pt-md"},[[t("div",{staticClass:"q-mt-md"},[t("q-table",{attrs:{title:"Cargas",data:e.data,columns:e.columns,filter:e.filter,"row-key":"id"},on:{"row-click":e.goTo},scopedSlots:e._u([{key:"top-right",fn:function(){return[t("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Pesquise"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}})]},proxy:!0}])})],1)]],2)],1)},l=[],r=t("49e2"),s=(t("db25"),{components:{HeaderFreightJourney:r["a"]},data(){return{filter:"",columns:[{name:"id",required:!0,label:"id",align:"left",field:e=>e.id,format:e=>`${e}`,sortable:!0},{name:"from_location",required:!0,label:"Partida",align:"left",field:e=>e.from_location,format:e=>`${e}`,sortable:!0},{name:"weight",align:"left",label:"Peso estimado (Kg)",field:"weight",sortable:!0},{name:"to_location",align:"left",label:"Destino",field:"to_location",sortable:!0},{name:"from_date",align:"left",label:"Data Saída",field:"from_date",sortable:!0}],data:[{id:"12",from_location:"Maputo/Massinga",to_location:"Mazda",from_date:"Corolla",weight:2000.67}]}},methods:{goTo(e,a,t){console.log(a),this.$router.push("carga/"+a.id)},teste(){this.$axios.get("/user").then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}}),i=s,n=t("2877"),c=t("eaac"),d=t("27f9"),u=t("0016"),f=t("eebe"),m=t.n(f),g=Object(n["a"])(i,o,l,!1,null,null,null);a["default"]=g.exports;m()(g,"components",{QTable:c["a"],QInput:d["a"],QIcon:u["a"]})}}]);