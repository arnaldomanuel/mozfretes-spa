(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"49e2":function(a,t,A){"use strict";var s=function(){var a=this,t=a.$createElement,A=a._self._c||t;return A("div",[A("q-card",{staticClass:"my-card"},[A("q-card-section",[A("div",{staticClass:"text-h5"},[a._v("Gestão de cargas")]),A("div",{staticClass:"text-subtitle2"},[a._v("Se possui alguma carga que precisa despachar, registe aqui")])]),A("q-card-section",{staticClass:"q-pt-none"},[[A("div",{},[A("q-btn",{staticClass:"q-mr-lg",attrs:{to:"/carga/criar",color:"secondary",label:"Criar",icon:"add"}}),A("q-btn",{staticClass:"q-mr-lg",attrs:{to:"/carga",color:"secondary",label:"Listar",icon:"visibility"}})],1)]],2)],1)],1)},d=[],o={},c=o,r=A("2877"),e=A("f09f"),l=A("a370"),i=A("9c40"),n=A("eebe"),q=A.n(n),Q=Object(r["a"])(c,s,d,!1,null,null,null);t["a"]=Q.exports;q()(Q,"components",{QCard:e["a"],QCardSection:l["a"],QBtn:i["a"]})},"6ef2":function(a,t,A){"use strict";A.r(t);var s=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("header-load"),s("q-card",{staticClass:"my-card q-mt-md"},[s("q-card-section",[s("div",{staticClass:"text-h6"},[a._v("Carga ")])]),s("q-card-section",{},[s("div",{staticClass:"row"},[s("div",{staticClass:" col-12 col-lg-6 q-mr-lg"},[s("q-img",{attrs:{src:A("89de")}},[s("div",{staticClass:"absolute-bottom text-body1 text-center"},[a._v("\n                Foto da carga\n              ")])]),s("div",{staticClass:"q-mt-md"},[s("q-btn",{staticClass:"q-mr-md",attrs:{color:"secondary",icon:"edit",to:"/carga/editar/"+a.load.id}},[a._v("Editar")]),s("q-btn",{attrs:{color:"negative",icon:"delete"}},[a._v("Apagar")])],1)],1),s("div",{staticClass:"col-12 col-lg-4"},[s("div",{staticClass:"text-h5"},[a._v("Partida")]),a._v("\n           "+a._s(a.load.from_location)+"\n\n           "),s("div",{staticClass:"text-h5 q-mt-md"},[a._v("Destino")]),a._v("\n           "+a._s(a.load.to_location)+"\n\n            "),s("div",{staticClass:"text-h5 q-mt-md"},[a._v("Hora de partida")]),a._v("\n            "+a._s(a.load.from_date)+"\n\n            "),s("div",{staticClass:"text-h5 q-mt-md"},[a._v("Hora de chegada")]),a._v("\n            "+a._s(a.load.to_date)+"\n           "),s("div",{staticClass:"text-h5 q-mt-md"},[a._v("Capacidade máxima")]),a._v("\n           "+a._s(a.load.weight)+" KG\n\n            "),s("div",{staticClass:"text-h5 q-mt-md"},[a._v("Descrição")]),a._v("\n            "+a._s(a.load.description)+"\n          ")])])]),s("q-separator")],1)],1)},d=[],o=A("49e2"),c={components:{HeaderLoad:o["a"]},data(){return{load:{name:"",description:"",from_location:"",to_location:"",from_date:"",to_date:"",phone_journey:"",status:"",id:"",weight:"",picture:null,from_date_date_part:"",from_date_hour_part:""},file:null}},computed:{},methods:{onSubmit(){},onRejectedTruckPic(){}}},r=c,e=A("2877"),l=A("f09f"),i=A("a370"),n=A("068f"),q=A("9c40"),Q=A("eb85"),V=A("eebe"),g=A.n(V),m=Object(e["a"])(r,s,d,!1,null,null,null);t["default"]=m.exports;g()(m,"components",{QCard:l["a"],QCardSection:i["a"],QImg:n["a"],QBtn:q["a"],QSeparator:Q["a"]})},"89de":function(a,t){a.exports="data:image/jpeg;base64,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"}}]);