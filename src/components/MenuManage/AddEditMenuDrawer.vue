<template>
    <a-drawer
        :visible="visible"
        width="25%"
        @ok="handleOk"
        @cancel="handleCancel"
        unmountOnClose
        ok-text="提交"
        :title="title"
        :mask-closable="false"
    >
        <a-form
            :model="queryForm"
            label-align="left"
            :auto-label-width="true"
        >
            <a-row :gutter="24">
                <a-col :span="24">
                    <a-form-item field="menu_type" label="父级菜单" required>
                        <a-tree-select
                            :data="treeData"
                            placeholder="请选择上级菜单"
                            v-model="queryForm.parent_id"
                            :field-names="{
                                    key: 'id',
                                    title: 'menu_name'
                                }"
                            :tree-props="{
                                defaultExpandAll: false,
                            }"
                        />
                    </a-form-item>
                </a-col>
                <a-col :span="24">
                    <a-form-item field="menu_type" label="菜单类型" required>
                        <a-radio-group v-model="queryForm.menu_type">
                            <a-radio value="menu">目录</a-radio>
                            <a-radio value="children">菜单</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :span="24">
                    <a-form-item field="menu_name" label="菜单名称" required>
                        <a-input v-model="queryForm.menu_name" placeholder="请输入菜单名称"/>
                    </a-form-item>
                </a-col>
                <a-col :span="24">
                    <a-form-item field="order" label="菜单顺序" required>
                        <a-input-number v-model="queryForm.order" placeholder="请输入菜单顺序" mode="button" :min="1"/>
                    </a-form-item>
                </a-col>
                <a-col :span="24">
                    <a-form-item field="menu_icon" label="菜单图标">
                        <a-input v-model="queryForm.menu_icon" placeholder="请输入菜单图标"/>
                    </a-form-item>
                </a-col>
                <a-col :span="24">
                    <a-form-item field="target" label="是否外链">
                        <a-radio-group v-model="queryForm.target">
                            <a-radio value="blank">是</a-radio>
                            <a-radio value="base">否</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :span="24">
                    <a-form-item field="link" label="路由地址" required>
                        <a-input v-model="queryForm.link" placeholder="请输入路由地址"/>
                    </a-form-item>
                </a-col>
                <a-col :span="24" v-if="queryForm.menu_type === 'children' ">
                    <a-form-item field="component" label="组件地址">
                        <a-input v-model="queryForm.component" placeholder="请输入组件地址"/>
                    </a-form-item>
                </a-col>

                <a-col :span="24">
                    <a-form-item field="hidden" label="显示状态">
                        <a-switch
                            type="round"
                            v-model="queryForm.hidden"
                            :checked-value="1"
                            :unchecked-value="0"
                        >
                            <template #checked>
                                显示
                            </template>
                            <template #unchecked>
                                隐藏
                            </template>
                        </a-switch>
                    </a-form-item>
                </a-col>
                <a-col :span="24">
                    <a-form-item field="status" label="菜单状态">
                        <a-switch
                            type="round"
                            v-model="queryForm.status"
                            :checked-value="1"
                            :unchecked-value="0"
                        >
                            <template #checked>
                                启用
                            </template>
                            <template #unchecked>
                                禁用
                            </template>
                        </a-switch>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
        {{ queryForm }}
    </a-drawer>

</template>

<script setup lang="ts">
import {addMenuApi, getMenuListAPI} from "@/api/menu";
import {handleTree} from "@/utils";

defineOptions({
    name: 'AddEditMenuDrawer'
})

const emit = defineEmits(['refresh'])
const visible = ref(false);
const title = ref('新增菜单');

const defaultParams = {
    // 父级菜单 ID
    parent_id: '0',
    // 菜单名称
    menu_name: '',
    // 排序
    order: 1,
    // 菜单类型
    menu_type: 'menu',
    // 菜单图标
    menu_icon: '',
    // 路由地址
    link: '',
    // 打开方式
    target: 'base',
    // 组件路径
    component: '',
    // 显示状态
    hidden: 1,
    // 菜单状态
    status: 1
}
const queryForm = ref({...defaultParams})

const treeData = ref<any[]>([])

// 获取菜单树
const getMenuTree = async () => {
    const res = await getMenuListAPI({
        pagination: 1
    })
    // @ts-ignore
    const tree = handleTree(res.data);

    treeData.value = [
        {
            "id": "0",
            "menu_name": '主目录',
            "children": tree
        }
    ]
}

export interface AddEditMenuRef {
    showDrawer: () => void
}

const changeStatus = () => {
    visible.value = !visible.value;
}

// 展开新增窗口
const showDrawer = async (childrenId: string = '') => {
    changeStatus()
    await getMenuTree()
    if (childrenId) {
        queryForm.value.parent_id = childrenId
    }
}

defineExpose({showDrawer})


const handleOk = async () => {
    // changeStatus()
    await addMenuApi(queryForm.value).then(() => {
        changeStatus()
        emit('refresh')
    })

};

const handleCancel = () => {
    changeStatus()
}


</script>

<style scoped>

</style>