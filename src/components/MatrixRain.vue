<template>
    <div class="matrix">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
    import * as matrixJs from '../assets/matrix'
    export default {
        name: "MatrixRain",
        mounted() {
            matrixJs.default()
        }
    }
</script>

<style scoped>
    .matrix {
        display:inline-block;
        transform:scale(1.4,1);
        -webkit-transform:scale(1.4,1);
        -moz-transform:scale(1.4,1);
        -ms-transform:scale(1.4,1);
        -o-transform:scale(1.4,1);
        background: #000;
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;
    }

    #canvas{
        width: 100%;
        height: 100%;
        margin: 0px;
        border: 0;
        overflow: hidden; /*  Disable scrollbars */
        display: block;  /* No floating content on sides */
    }
</style>