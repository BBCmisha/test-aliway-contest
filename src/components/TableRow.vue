<template>
    <tr class="table-row">
        <td>
            <info-block 
                :imgUrl="influencer.avatarUrl"
                :profileUrl="influencer.profileUrl"
                :name="influencer.name"
            />
        </td>

        <td>{{ influencer.followers }}</td>
        
        <td>{{ influencer.er }} %</td>
    </tr>
</template>

<script>
import InfoBlock from './InfoBlock.vue'

export default {
    name: 'table-row',
    props: ['influencer'],
    components: {
        InfoBlock
    }
    
}
</script>

<style lang="scss" scoped>
    .table-row {
        height: 100px;

        td {
            border-bottom: 1px solid #ccc;
        }

        &:hover {
            background-color: #E9FFFA;
        }
    }
</style>