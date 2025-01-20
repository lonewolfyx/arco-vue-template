/**
 * 构造树型结构数据
 * @param data
 */
export const handleTree = (data: any[]): any[] => {
    // 创建一个映射，用于快速查找每个节点的子节点
    const map = new Map<string, any>();
    const roots: any[] = []; // 用于存储根节点

    // 首先将所有节点放入映射中
    data.forEach(item => {
        map.set(item.id, {...item});
    });

    // 遍历数据，构建树形结构
    data.forEach(item => {
        const parentId = item.parent_id;
        if (parentId === "0") {
            // 如果 parent_id 为 "0"，说明是根节点
            roots.push(map.get(item.id)!);
        } else {
            // 否则，找到父节点并将当前节点添加到父节点的 children 中
            const parent = map.get(parentId);
            if (parent) {
                parent.children = parent.children || [];
                parent.children!.push(map.get(item.id)!);
            }
        }
    });

    return roots;
}