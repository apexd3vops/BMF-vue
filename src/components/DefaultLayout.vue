<template>
    <div>
        <Navbar />
        <Main>
            <router-view />
        </Main>
        <EndNote />
    </div>
</template>

<script>
import EndNote from './EndNote.vue';
import Navbar from './Navbar.vue';

export default {
    components: { Navbar, EndNote }
}
</script>

<style lang="scss" scoped></style>