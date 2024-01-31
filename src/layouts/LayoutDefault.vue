<template>
    <div class="content">
        <div class="header">
            <div @click="toggleSidebar">toggle sidebar</div>
        </div>
        <div class="main-content">
            <div class="main-content__sidebar" id="sidebar">
                <Sidebar ref="sidebar" />
            </div>
            <div class="main-content__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import Sidebar from '../components/layout/Sidebar.vue';
import { ref, onMounted } from 'vue'

const sidebar = ref(null)

const toggleSidebar = () => {
    var element = document.getElementById("sidebar");
    element.classList.toggle("main-content__sidebar_sm");
    sidebar.value.openMenu()
}

</script>
<style lang="scss" scoped>
$height_header : 5rem;

.content {
    @apply bg-secondary;
}

.header {
    height: $height_header;
}

.main-content {
    height: calc(100vh - $height_header);
    @apply flex items-center;

    &__sidebar {
        transition: width 500ms;
        @apply h-full w-[20rem] p-5;
    }

    &__sidebar_sm {
        @apply h-full w-[5rem] p-3;
    }

    &__content {
        @apply rounded-tl-xl w-full h-full bg-white p-5;
    }
}
</style>