(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{dfb1:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("q-card",{staticClass:"my-card"},[t("q-card-section",[t("div",{staticClass:"text-h5"},[e._v("Gestão de empresas")]),t("div",{staticClass:"text-subtitle2"},[e._v("Aqui verifique a lista de empresas que se registaram na plataforma")])]),t("q-card-section",{staticClass:"q-pt-none"},[[t("div",{},[t("q-btn",{staticClass:"q-mr-lg",attrs:{to:"/empresa",color:"secondary",label:"Listar",icon:"visibility"}})],1)]],2)],1)],1)},n=[],o={},i=o,r=t("2877"),l=t("f09f"),d=t("a370"),c=t("9c40"),p=t("eebe"),u=t.n(p),m=Object(r["a"])(i,s,n,!1,null,null,null);a["a"]=m.exports;u()(m,"components",{QCard:l["a"],QCardSection:d["a"],QBtn:c["a"]})},fed6:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("header-company"),t("div",[t("q-card",{staticClass:"my-card"},[t("q-card-section",[t("div",{staticClass:"text-h5"},[e._v("Filtre")]),t("div",{staticClass:"text-subtitle2"},[e._v("Verifique a lista de empresas que se registaram na plataforma")])]),t("q-card-section",{staticClass:"q-pt-none"},[[t("div",{},[t("q-select",{attrs:{dense:e.dense,options:e.options,"options-dense":e.denseOpts,outlined:""},on:{input:e.filterCompanies},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"business"}})]},proxy:!0}]),model:{value:e.company_type,callback:function(a){e.company_type=a},expression:"company_type"}})],1)]],2)],1)],1),t("div",{staticClass:"q-pt-md"},[[t("div",{staticClass:"q-mt-md"},[t("q-table",{attrs:{columns:e.columns,filter:e.filter,loading:e.loading,pagination:e.pagination,data:e.rows,"binary-state-sort":"","row-key":"id",title:"Empresas"},on:{"update:pagination":function(a){e.pagination=a},request:e.onRequest,"row-click":e.goTo},scopedSlots:e._u([{key:"top-right",fn:function(){return[t("q-input",{attrs:{borderless:"",debounce:"300",dense:"",placeholder:"Pesquise"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}})]},proxy:!0}])})],1)]],2)],1)},n=[],o=(t("ddb0"),t("dfb1")),i={components:{HeaderCompany:o["a"]},data(){return{pagination:{sortBy:"id",descending:!1,page:1,rowsPerPage:3,rowsNumber:10},options:[{label:"Transportadora de cargas",value:"1"},{label:"Empresa de mercadorias",value:"2"},{label:"Transportadora de cargas e Empresa de mercadorias",value:"3"}],denseOpts:!1,company_type:"",dense:!1,filter:"",columns:[{name:"id",required:!0,label:"id",align:"left",field:e=>e.id,format:e=>`${e}`,sortable:!0},{name:"name",required:!0,label:"Nome",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"company_type",align:"left",format:e=>1==e?"Transportadora de cargas":2==e?"Empresa de mercadorias":"Empresa de mercadorias e cargas",label:"Tipo de empresa",field:"company_type",sortable:!0},{name:"address1",align:"left",label:"Endereço",field:"address1",sortable:!0},{name:"telephone",align:"left",label:"Telefone",field:"telephone",sortable:!0}],loading:!1,data:[],rows:[]}},methods:{filterCompanies(e,a){this.onRequest()},goTo(e,a,t){console.log(a),this.$router.push("empresa/"+a.id)},async getRowsNumberCount(e){let a=0;return await this.$axios.get("company/search/count/?filter="+e+"&company_type="+this.company_type.value).then((e=>{a=e.data,this.pagination.rowsNumber=e.data,a=parseInt(a)})),a},async fetchFromServer(e,a,t,s,n){let o=[];return await this.$axios.get(`company/search/?filter=${t}&startRow=${e}&fetchCount=${a}&sortBy=${s}&descending=${n}&company_type=${this.company_type.value}`).then((e=>{console.log("done",e.data),o=e.data})),o},async onRequest(e){console.log("props",e);const{page:a,rowsPerPage:t,sortBy:s,descending:n}=e?e.pagination:this.pagination,o=this.filter;this.loading=!0,this.pagination.rowsNumber=await this.getRowsNumberCount(o),console.log("payroll",this.pagination.rowsNumber);const i=0===t?this.pagination.rowsNumber:t,r=(a-1)*t,l=await this.fetchFromServer(r,i,o,s,n);this.rows.splice(0,this.rows.length,...l),console.log("rows ",this.rows),this.pagination.page=a,this.pagination.rowsPerPage=t,this.pagination.sortBy=s,this.pagination.descending=n,this.loading=!1}},async mounted(){let e=await this.getRowsNumberCount("");this.pagination.rowsNumber=e,this.onRequest()}},r=i,l=t("2877"),d=t("f09f"),c=t("a370"),p=t("ddd8"),u=t("0016"),m=t("eaac"),g=t("27f9"),f=t("eebe"),h=t.n(f),y=Object(l["a"])(r,s,n,!1,null,null,null);a["default"]=y.exports;h()(y,"components",{QCard:d["a"],QCardSection:c["a"],QSelect:p["a"],QIcon:u["a"],QTable:m["a"],QInput:g["a"]})}}]);