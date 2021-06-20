<template>
    <div>
         <div class="col-12 col-md-6 q-pa-md q-pb-lg">
         <q-card style="margin-bottom:40px; " class="">
             <q-card-section>
               <list-services/>

             </q-card-section>
             <q-card-section>
                   <q-btn style="" @click="openAdd= true" class="glossy q-ma-md absolute-bottom-right" type="submit" round color="primary" icon="add" />
             </q-card-section>
            
        <div>
        <q-dialog ref="model" v-model="openAdd">
                <add-service />
        </q-dialog>
        
    </div>
         </q-card>

         
     </div>
   
    </div>
</template>

<script>
import AddService from "./AddService.vue"
import ListServices from "./ListServices.vue"

export default {
    components:{AddService, ListServices},
    data(){
        return {
            openAdd:false,
        }
    }
}
</script>