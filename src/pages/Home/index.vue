<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <!-- <Rank></Rank> -->
        <Like></Like>
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor>
        <!-- <Floor></Floor> -->
        <!-- 需要用v-for遍历的 -->
        <Brand></Brand>
    </div>
</template>

<script>

import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex'



export default {
    name:"Home",
    mounted() {
        // this.getBannerList()
        this.getFloorList()
    },
    methods: {
        // getBannerList(){
        //     this.$store.dispatch('getBannerList')
        // },
        getFloorList(){
             this.$store.dispatch('getFloorList')
        }
    },
    computed: {
        ...mapState({
            floorList:state => state.home.floorList
        })
    },
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    }
}
</script>

<style lang="less" scoped>
    
</style>