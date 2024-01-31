<template>
    <div class="bg-white content-dropdown">
        <div class="flex items-center p-3">
            <div class="avatar">
                <img :src="AvaterDefault" class="max-w-11">
            </div>
            <div>
                <div>Nguyeenx Vaan</div>
                <div>nguyenvan@gmail.com</div>
            </div>
        </div>
        <hr class="text-gray_01">
        <div class="p-3">
            Demo 5712436
        </div>
    </div>
</template>
<script setup>
import AvaterDefault from "@/assets/images/avatar.png";
</script>
<style scoped lang="scss">
.content-dropdown {
    border-radius: 0.75rem;
}
</style>