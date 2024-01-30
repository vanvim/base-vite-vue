<template>
    <!-- manage exam  -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        v-if="props.type == MANAGE_EXAM">
        <path d="M2 12.6101H19" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z"
            :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z"
            :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M5.25 17.8101H6.96997" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.10986 17.8101H12.5499" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- circle -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        v-if="props.type == CIRCLE">
        <circle cx="12" cy="12" r="3" :fill="props.active ? COLOR.primary : COLOR.gray" />
    </svg>

    <!-- manage schedule -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        v-if="props.type == MANAGE_SCHEDULE">
        <path d="M8 2V5" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 2V5" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.5 9.08984H20.5" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z"
            :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.4399 19L17.4299 19.99L19.5599 18.02" :stroke="props.active ? COLOR.primary : COLOR.gray"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
            :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.9955 13.7002H12.0045" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.29431 13.7002H8.30329" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.29431 16.7002H8.30329" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- manage company -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        v-if="props.type === MANAGE_COMPANY">
        <path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994" :stroke="props.active ? COLOR.primary : COLOR.gray"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 21.61V12.54" :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M9.92989 2.47979L4.58989 5.43979C3.37989 6.10979 2.38989 7.78979 2.38989 9.16979V14.8198C2.38989 16.1998 3.37989 17.8798 4.58989 18.5498L9.92989 21.5198C11.0699 22.1498 12.9399 22.1498 14.0799 21.5198L19.4199 18.5498C20.6299 17.8798 21.6199 16.1998 21.6199 14.8198V9.16979C21.6199 7.78979 20.6299 6.10979 19.4199 5.43979L14.0799 2.46979C12.9299 1.83979 11.0699 1.83979 9.92989 2.47979Z"
            :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <!-- arrow down -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" v-if="props.type === ARROW_DOWN">
        <path d="M18 10L13.0606 14.5932C12.4773 15.1356 11.5227 15.1356 10.9394 14.5932L6 10" :stroke="props.active ? COLOR.primary : COLOR.gray"
            stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
<script setup>
import { COLOR } from '../../utils/theme';
import { MANAGE_EXAM, CIRCLE, MANAGE_SCHEDULE, MANAGE_COMPANY,ARROW_DOWN } from '../../utils/constant';

const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "#FFFFFF",
    },
});
</script>