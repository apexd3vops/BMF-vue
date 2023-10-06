<template>
    <div>
        <Navbar/>
        <Main>
            <router-view />
        </Main>
        <EndNote />
    </div>
</template>

<script>
import Navbar from '../Navbar.vue';
import EndNote from '../EndNote.vue';

export default {
    components: { Navbar, EndNote }
}
</script>

<style lang="scss" scoped></style>