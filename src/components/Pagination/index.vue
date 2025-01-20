<template>
    <div class="relative flex justify-end items-center mt-4">
        <a-pagination
            :total="total"
            v-model:current="currentPage"
            v-model:page-size="pageSize"
            :showTotal="true"
            :showPageSize="true"
            :hideOnSinglePage="true"
            :pageSizeOptions="pageSizeOptions"
            @change="handleSizeChange"
            @pageSizeChange="handlePageSizeChange"
        />
    </div>
</template>

<script setup lang="ts">
// Use Demo:
// <Pagination
//     :total="total"
//     v-model:page="queryParams.page"
//     v-model:limit="queryParams.limit"
//     @pagination="事件名称"
// />
// const total = ref(0)
// const queryParams = ref({
//     page: 1,
//     limit: 10
// })

defineOptions({
    name: 'Pagination'
})

interface Props {
    total: number,
    page: number,
    limit: number
}

const props = defineProps<Props>()

const emit = defineEmits([
    // 更新当前的页码
    'update:page',
    // 更新页面数量大小
    'update:limit',
    'pagination'
])

// 数据条数选择器的选项列表
const pageSizeOptions = [10, 20, 30, 40, 50, 100, 200, 500]

// 当前页码
const currentPage = computed({
    get() {
        return props.page
    },
    set(value) {
        emit('update:page', value)
    }
})

// 每页数量限制
const pageSize = computed({
    get() {
        return props.limit
    },
    set(value) {
        emit('update:limit', value)
    }
})

// 分页切换
const handleSizeChange = (current: number) => {
    console.log(current)
    emitData()
}

// 每页数量切换
const handlePageSizeChange = (pageSize: number) => {
    console.log('pageSize', pageSize)
    emitData()
}

// 曝光事件数据
const emitData = () => {
    emit('pagination', {})
}
</script>

<style scoped>

</style>