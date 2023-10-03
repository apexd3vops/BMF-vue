<template>
    <div class=" bg-base h-50 flex flex-col w-full items-center">
        <div class="container items-center gap-1 py-2  mt-3">
            <router-link v-for="letter of letters" :key="letter" :to="{name: 'produce', params: {letter} }"
                class="px-2 justify-between items-center font-Krona text-gray-800 font-semibold border-l-2 border-darkGreen">{{
                    letter }}</router-link>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        };
    }
}
</script>

<style lang="scss" scoped></style>