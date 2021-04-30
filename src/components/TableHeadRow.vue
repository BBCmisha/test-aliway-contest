<template>
    <tr class="table-head">
        <th class="table-head__count">Выбрано: {{ count }}</th>

        <th class="table-head__followers" :class="sortedClass('followers')">
            <span @click="setSortKey('followers')">Подписчиков</span>
        </th>
        
        <th class="table-head__er" :class="sortedClass('er')">
            <span @click="setSortKey('er')">Рейтинг увлеченности</span>
        </th>
    </tr>
</template>

<script>
export default {
    name: 'table-head-row',
    props: ['count'],
    data: () => {
        return {
            key: ''
        }
    },
    methods: {
        setSortKey(key) {
            if (key === this.key) {
                this.$store.dispatch('changeAsc')
            } else {
                this.$store.dispatch('changeSortKey', key)
                this.key = key
            }
        },
        sortedClass(key) {
            return this.key === key ? `sorted ${this.isAsc ? 'asc' : ''}` : ''
        }
    },
    computed: {
        isAsc() {
            return this.$store.getters.getAsc
        }
    }
}
</script>

<style lang="scss" scoped>
    .table-head {
        height: 70px;

        &__count {
            text-align: start;
        }

        &__followers,
        &__er {
            span {
                position: relative;
                cursor: pointer;

                &::after {
                    content: '\25bc';
                    position: absolute;
                    top: 0;
                    right: -12px;
                    font-size: 12px;
                    transform: translateY(15%);
                }
            }
        }

        th {
            border-bottom: 1px solid #ccc;
        }

        .sorted {
            color: #51E0C2;

            &.asc {
                span {
                    &::after {
                        transform: translateY(15%) rotateX(180deg);
                    }
                }
            }
        }
    }
</style>