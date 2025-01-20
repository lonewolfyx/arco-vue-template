<template>
    <div class="app-container">
        <a-card :bordered="false">
            <CardHeader>
                <div class="flex-1 font-bold">菜单管理</div>
                <div class="btn-wrapper">
                    <a-space>
                        <a-button type="primary" size="small" @click="addEditMenuRef?.showDrawer()">
                            <template #icon>
                                <IconPlus/>
                            </template>
                            新增菜单
                        </a-button>
                        <a-button
                            type="outline"
                            status="danger"
                            size="small"
                            @click="batchDeleteHandle"
                        >
                            <template #icon>
                                <IconDelete/>
                            </template>
                            批量删除
                        </a-button>
                        <a-tooltip content="刷新">
                            <a-button
                                type="outline"
                                status="normal"
                                size="small"
                                @click="getTableData"
                            >
                                <template #icon>
                                    <IconRefresh/>
                                </template>
                            </a-button>
                        </a-tooltip>
                    </a-space>
                </div>
            </CardHeader>

            <a-table
                :columns="columns"
                :data="tableData"
                :loading="loading"
                :bordered="false"
                :row-selection="tableRowSelection"
                :pagination="false"
                row-key="id"
                @selectionChange="handleSelectionChange"
            >
                <template #setting="{record}">
                    <a-space>
                        <a-button type="primary" size="small" class="px-1">
                            <template #icon>
                                <IconEdit/>
                            </template>
                            修改
                        </a-button>
                        <a-button type="primary" size="small" @click="addEditMenuRef?.showDrawer(record.id)">
                            <template #icon>
                                <IconPlus/>
                            </template>
                            新增子菜单
                        </a-button>
                        <a-button type="outline" size="small" status="danger" @click="deleteHandle(record.id)">
                            <template #icon>
                                <IconDelete/>
                            </template>
                            删除
                        </a-button>
                    </a-space>
                </template>
            </a-table>
        </a-card>

        <AddEditMenuDrawer ref="addEditMenuRef" @refresh="getTableData"/>
    </div>
</template>

<script setup lang="ts">
import {useTemplateRef} from "vue";
import CardHeader from "@/components/CardHeader/index.vue";
import AddEditMenuDrawer, {AddEditMenuRef} from "@/components/MenuManage/AddEditMenuDrawer.vue";
import {batchDeleteMenuAPI, getMenuListAPI} from "@/api/menu";
import {MenuItems} from "@/types";
import type {TableColumnData} from "@arco-design/web-vue";
import {useLoading} from '@/hooks/loading'
import {tableRowSelection} from "@/common/default.config";
import {handleTree} from "@/utils";

defineOptions({
    name: 'MenuSetting'
})

const addEditMenuRef = useTemplateRef<AddEditMenuRef>('addEditMenuRef')
const {loading, setLoading} = useLoading()

const selectRowKey = ref<(string | number)[]>([])

const columns = <TableColumnData[]>[
    {
        title: '菜单名称',
        dataIndex: 'menu_name',
    },
    {
        title: '顺序',
        dataIndex: 'order',
    },
    {
        title: '图标',
        dataIndex: 'menu_icon',
    },
    {
        title: '路由名称',
        dataIndex: 'link',
    },
    {
        title: '组件路径',
        dataIndex: 'component'
    },
    {
        title: '状态',
        dataIndex: 'status',
        width: 80
    },
    {
        title: '操作',
        dataIndex: 'setting',
        slotName: 'setting',
        align: 'center',
        width: 350
    }
];
const tableData = ref<MenuItems[]>([])


onMounted(() => {
    getTableData()
})

// 获取 table 数据
const getTableData = async () => {
    try {
        setLoading(true)
        const res = await getMenuListAPI({
            pagination: 1
        })
        // @ts-ignore
        tableData.value = handleTree(res.data);
    } finally {
        setLoading(false)
    }
}

// 表格选择事件
const handleSelectionChange = (rowKey: (string | number)[]) => {
    selectRowKey.value = rowKey;
}

// 单个删除
const deleteHandle = (id: number) => {
    setLoading(true)
    batchDeleteMenuAPI({ids: [id]})
        .then(async () => {
            await getTableData()
        })
}

// 批量删除
const batchDeleteHandle = () => {
    if (selectRowKey.value.length <= 0) {
        return
    }
    setLoading(true)
    batchDeleteMenuAPI({ids: selectRowKey.value})
        .then(async () => {
            await getTableData()
        })
}
</script>