<template>
    <div class="info-block">
        <img class="info-block__img" :src="imgUrl" alt="icon">
        <div class="info-block__info">
            <a class="info-block__name" :href="profileUrl" target="_blank">@{{ name }}</a>
            <span class="info-block__social">Instagram</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'info-block',
    props: ['imgUrl', 'profileUrl', 'name']
}
</script>

<style lang="scss" scoped>
    .info-block {
        display: flex;
        align-items: center;

        &__img {
            width: 60px;
            margin-right: 10px;
            border-radius: 50%;
        }

        &__info {
            display: flex;
            height: 100%;
            flex-direction: column;
        }

        &__name {
            margin-bottom: 5px;
            font-weight: 600;
            color: #22194D;
            text-decoration: none;
        }

        &__social {
            font-size: 14px;
            color: #ccc;
            text-align: start;
        }
    }
</style>