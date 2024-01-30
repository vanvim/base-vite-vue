<template>
    <div>
        <div v-for="(menu, i) in menus" :key="i" class="my-5 text-base font-medium text-black w-full">
            <div class="flex items-center justify-between" :class="[
                menu.active && menu?.child && menu?.child.length > 0 ? 'active' : '',
                menu.active && menu?.child && menu?.child.length == 0 ? 'active-child' : ''
            ]">
                <div class="flex items-center cursor-pointer" @click="goToPage(menu)">
                    <Icon :type="menu.icon" :active="menu.active" />
                    <span class="pl-2">{{ t(menu.title) }}</span>
                </div>
                <div v-if="menu?.child && menu?.child.length > 0">
                    <Icon :type="ARROW_DOWN" :active="menu.active" />
                </div>
            </div>
            <div v-if="menu.active">
                <div v-for="child in menu?.child" class="pl-6 my-5" :class="child.active ? 'active-child' : ''">
                    <div class="flex items-center cursor-pointer" @click="goToPage(child)">
                        <Icon :type="child.icon" :active="child.active" />
                        <span class="pl-2">{{ t(child.title) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { MENU } from '../../utils/menu';
import { ARROW_DOWN, ACTIVE,INACTIVE } from '../../utils/constant';
import { useI18n } from "vue-i18n";
import Icon from '../elements/Icon.vue';
import { useRoute, useRouter } from "vue-router"
import { watchEffect, ref } from 'vue';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const menus = ref(MENU)


watchEffect(() => {
    menus.value.forEach(item => {
        item.active = INACTIVE
        if (item.key === route.meta.key) {
            item.active = ACTIVE
        }
        item.child?.forEach(child => {
            child.active = INACTIVE
            if (child.key === route.meta.key) {
                child.active = ACTIVE
                item.active = ACTIVE
            }
        })
    });
})

const goToPage = (item) => {
    if (item.child) {
        item.active = ACTIVE
    } else {
        router.push(item.path)
    }

}

</script>
<style scoped lang="scss">
.active {
    @apply text-primary;
}

.active-child {
    @apply rounded-xl bg-white text-primary py-2;
}
</style>