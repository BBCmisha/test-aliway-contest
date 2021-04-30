<template>
    <div class="list">
        <table>
            <table-head-row 
                :count="influencerCount"
            />
            <table-row
                v-for="influencer of sortedInfluencers"
                :key="influencer.name"
                :influencer="influencer"
            />
        </table>
    </div>
</template>

<script>
import TableHeadRow from './TableHeadRow.vue'
import TableRow from './TableRow.vue'

export default {
    name: 'list',
    computed: {
        sortedInfluencers() {
            const list = this.$store.getters.getAllInfluencers
            const key = this.$store.getters.getSortKey
            const isAsc = this.$store.getters.getAsc

            if (key) {
                list.sort((a, b) => a[key] > b[key] ? 1 : -1)

                return isAsc ? list : list.reverse()
            }
            
            return list
        },
        influencerCount() {
            return this.$store.getters.getCountInfluencers
        }
    },
    components: {
        TableHeadRow,
        TableRow
    }
}
</script>

<style lang="scss" scoped>
table {
    width: 100%;
    border-collapse: collapse;
}
</style>