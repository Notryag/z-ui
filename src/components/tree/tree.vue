<template>
    <li class="z-tree">
        <span v-if="isFolder" @click="toggle">{{ open ? '-' : '+' }}</span>
        <div
            @click.stop="select(data, $event)"
            @blur="unselect"
            tabIndex="0"
            class="text"
            :class="{ selected }"
        >
            {{ data[labelField] }}
        </div>
        <ul class="tree-list" v-if="open">
            <z-tree
                v-for="(child, index) in data.children"
                :key="index"
                :data="child"
                :labelField="labelField"
                @select="select"
            />
        </ul>
    </li>
</template>
<script lang="ts">
export default {
    name: 'ZTree',
    props: { 
        data: { type: Object, required: true },
        labelField: { type: String, default: 'label' }
    },
    data() {
        return {
            open: false,
            selected: false
        }
    },
    computed: {
        isFolder() {
            return this.data.children && this.data.children.length
        }
    },
    methods: {
        toggle() {
            this.open = this.isFolder && !this.open
        },
        select(data, e) {
            e.stopPropagation()

            e.target.classList.add('selected')
            this.$emit('select', data, e)
        },
        unselect(e) {
            e.target.classList.remove('selected')
        }
    }
}
</script>
<style lang="scss">
@import "../../assets/css/vars.scss";
ul,li{ padding:0;margin:0;list-style:none}
.z-tree {
    line-height: 1.4;
    cursor: pointer;
    .text {
        display: inline;
        transition: 0.1s all ease;
        outline: none;
        color: $input-color;
        line-height: 30px;

        &.selected {
            color: $primary-color;
        }
    }

    .tree-list {
        margin-left: 20px;
    }
}
</style>
