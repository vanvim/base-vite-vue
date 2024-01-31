<template>
    <div class="flex justify-between items-center p-5">
        <div class="flex items-center">
            <div class="icon-hamburger cursor-pointer" @click="toggleSidebar()">
                <Icon :type="HUMBURER" />
            </div>
            <div class="logo pl-6">
                <img :src="Logo">
            </div>
        </div>
        <div>
            <div>
                <img :src="AvaterDefault" class="max-w-11">
                <div class="dropdown">
                    <DropdownProfile/>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import Icon from '@/components/elements/Icon.vue';
import DropdownProfile from '@/components/layout/DropdownProfile.vue';
import { HUMBURER } from '@/utils/constant';
import Logo from "@/assets/images/logo.png";
import AvaterDefault from "@/assets/images/avatar.png";

const emit = defineEmits(["toggleSidebar"]);
const toggleSidebar = () => {
    emit('toggleSidebar')
}
</script>
<style  lang="scss">
.dropdown{
    z-index: 107;
    margin: 0;
    position: fixed ;
    inset: 0 0 auto auto;
    transform: translate(-29px, 68px);
    box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);
    border-radius: 0.75rem;
    width: 275px;
}
</style>