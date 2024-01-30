<template>
    <div class="content">
        <div class="header"></div>
        <div class="main-content">
            <div class="main-content__sidebar">
                <Sidebar/>
            </div>
            <div class="main-content__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import Sidebar from '../components/layout/Sidebar.vue';

</script>
<style lang="scss" scoped>
$height_header : 5rem;
.content{
    @apply bg-secondary;
}
.header{
    height: $height_header;
}
.main-content{
    height: calc(100vh - $height_header);
    @apply flex items-center;
    &__sidebar{
        @apply h-full w-[20rem] p-5;
    }
    &__content{
        @apply rounded-tl-xl w-full h-full bg-white  p-5;
    }
}
</style>