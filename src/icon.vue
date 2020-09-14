<template>
    <svg class="m-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
export default {
    props:['name']
}
</script>

<style lang="scss">
.m-icon{
        width: 1em;
        height: 1em;
    }
</style>