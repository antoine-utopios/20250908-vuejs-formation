<template>
    <div class="card-container">
        <div class="card-header">
            <slot name="header">
                <h3>Card Header</h3>
            </slot>
        </div>
        <div class="card-body">
            <slot name="default">
                <div class="grey-box"></div>
            </slot>
        </div>
        <div class="card-footer">
            <slot name="footer">
                <span>Card footer</span>
            </slot>
        </div>
    </div>
</template>

<style scoped>
    .grey-box {
        background-color: grey;
        height: 250px;
        aspect-ratio: 1 / 1;
    }

</style>