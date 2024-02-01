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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        v-if="props.type === ARROW_DOWN">
        <path d="M18 10L13.0606 14.5932C12.4773 15.1356 11.5227 15.1356 10.9394 14.5932L6 10"
            :stroke="props.active ? COLOR.primary : COLOR.gray" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- hamburger icon -->
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="props.type === HUMBURER">
        <rect width="30" height="30" rx="2" fill="white" />
        <path d="M6 10H24" :stroke="COLOR.primary" stroke-width="1.5" stroke-linecap="round" />
        <path d="M6 15H24" :stroke="COLOR.primary" stroke-width="1.5" stroke-linecap="round" />
        <path d="M6 20H24" :stroke="COLOR.primary" stroke-width="1.5" stroke-linecap="round" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none"
        v-if="props.type === NEXT_BREADCRUMB">
        <path
            d="M5.66369 8.49996C5.74908 8.50025 5.83344 8.48141 5.91058 8.44483C5.98773 8.40824 6.05569 8.35484 6.10949 8.28855L8.86998 4.8603C8.95405 4.75807 9 4.62983 9 4.49748C9 4.36514 8.95405 4.2369 8.86998 4.13466L6.01233 0.70641C5.91532 0.589726 5.77591 0.516348 5.62478 0.502418C5.47366 0.488488 5.32318 0.535147 5.20647 0.632132C5.08975 0.729116 5.01635 0.868481 5.00242 1.01957C4.98848 1.17065 5.03516 1.32109 5.13217 1.43777L7.68691 4.50034L5.2179 7.56291C5.14801 7.64678 5.10361 7.7489 5.08997 7.85721C5.07632 7.96551 5.09399 8.07546 5.14089 8.17403C5.18778 8.27261 5.26195 8.3557 5.3546 8.41346C5.44725 8.47122 5.55451 8.50124 5.66369 8.49996Z"
            fill="#9D9D9D" />
        <path
            d="M0.663692 8.49996C0.749076 8.50025 0.83344 8.48141 0.910584 8.44483C0.987729 8.40824 1.05569 8.35484 1.10949 8.28855L3.86998 4.8603C3.95405 4.75807 4 4.62983 4 4.49748C4 4.36514 3.95405 4.2369 3.86998 4.13466L1.01233 0.70641C0.915315 0.589726 0.775912 0.516348 0.624784 0.502418C0.473656 0.488488 0.323183 0.535147 0.206467 0.632132C0.0897505 0.729116 0.0163522 0.868481 0.00241828 1.01957C-0.0115156 1.17065 0.0351567 1.32109 0.132168 1.43777L2.68691 4.50034L0.217898 7.56291C0.148009 7.64678 0.103614 7.7489 0.0899663 7.85721C0.0763183 7.96551 0.0939882 8.07546 0.140886 8.17403C0.187783 8.27261 0.261945 8.3557 0.354596 8.41346C0.447248 8.47122 0.55451 8.50124 0.663692 8.49996Z"
            fill="#9D9D9D" />
    </svg>

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="props.type === LOGOUT">
        <path
            d="M15.1001 7.55999C14.7901 3.95999 12.9401 2.48999 8.8901 2.48999H8.7601C4.2901 2.48999 2.5001 4.27999 2.5001 8.74999V15.27C2.5001 19.74 4.2901 21.53 8.7601 21.53H8.8901C12.9101 21.53 14.7601 20.08 15.0901 16.54"
            stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.99988 12H20.3799" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.15 8.6499L21.5 11.9999L18.15 15.3499" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- pen -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="props.type === PENCIL">
        <path
            d="M12.9493 5.12701L6.79017 11.9325C6.5576 12.191 6.33254 12.7 6.28753 13.0524L6.00995 15.5898C5.91243 16.5061 6.5426 17.1326 7.41284 16.976L9.82849 16.5453C10.1661 16.4826 10.6387 16.2242 10.8713 15.9579L17.0305 9.15237C18.0957 7.97766 18.5759 6.63848 16.9179 5.00171C15.2675 3.3806 14.0146 3.95229 12.9493 5.12701Z"
            stroke="#A1A1A1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 7C12.3156 8.60777 13.9596 9.83689 16 10" stroke="#A1A1A1" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 20H19" stroke="#A1A1A1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>


    <!-- delete -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        v-if="props.type === DELETE">
        <path d="M20 6C17.04 6 14.0622 6 11.0933 6C9.33333 6 7.57333 6 5.81333 6H4" stroke="#A1A1A1" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M9 5L9.18857 4.11785C9.32571 3.47811 9.42857 3 10.8771 3H13.1229C14.5714 3 14.6829 3.50505 14.8114 4.12458L15 5"
            stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M18 10L17.4307 18.6135C17.3343 19.9565 17.2555 21 14.8117 21H9.18832C6.74453 21 6.66569 19.9565 6.56934 18.6135L6 10"
            stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.3301 16.5H13.6601" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M10 12H14" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
<script setup>
import { COLOR } from '../../utils/theme';
import { MANAGE_EXAM, CIRCLE, MANAGE_SCHEDULE, MANAGE_COMPANY, ARROW_DOWN, HUMBURER, NEXT_BREADCRUMB, LOGOUT, PENCIL, DELETE } from '../../utils/constant';

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