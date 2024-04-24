import React, {useEffect, useState} from 'react';
import type { TableProps } from 'antd';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import {useCategories} from "./useCategories";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex  } from 'antd';
import CategoryModal from "./AddCategory";

import {useUpdateCategory} from "./useUpdateCategory";
interface Item {
    id: string;
    name: string;
    type: number;
    registerDate: string;
    activity: boolean;
}

const originData: Item[] = [];
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
                                                       editing,
                                                       dataIndex,
                                                       title,
                                                       inputType,
                                                       record,
                                                       index,
                                                       children,
                                                       ...restProps
                                                   }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const CategoryComponent = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const { categories, isLoading } = useCategories();
    const { CategoryIsEditing,editCategory } = useUpdateCategory();
    const [editingKey, setEditingKey] = useState('');

    useEffect(() => {
            console.log(categories, 'categories')
        }
    )
    const isEditing = (record: Item) => record.id === editingKey;
    const save = async (key: React.Key) => {

        try {
            const row = (await form.validateFields()) as Item;
            row.id = key as number;
            const editedCategory = editCategory(row)
            console.log(data)
            setEditingKey('');
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
        // try {
        //     console.log(key)
        //     const row = (await form.validateFields()) as Item;
        //     const newData = [...data];
        //     console.log(newData, 'newData')
        //     const index = newData.findIndex((item) => key === item.id);
        //     if (index > -1) {
        //         const item = newData[index];
        //         newData.splice(index, 1, {
        //             ...item,
        //             ...row,
        //         });
        //         setData(newData);
        //         setEditingKey('');
        //     } else {
        //         newData.push(row);
        //         setData(newData);
        //         setEditingKey('');
        //     }
        // } catch (errInfo) {
        //     console.log('Validate Failed:', errInfo);
        // }
    };
    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({ name: '', age: '', address: '', ...record });
        setEditingKey(record.id);
    };

    const cancel = () => {
        setEditingKey('');
    };



    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'type',
            dataIndex: 'type',
            width: '15%',
            editable: true,
        },
        {
            title: 'RegisterDate',
            dataIndex: 'registerDate',
            width: '25%',
            editable: false,
        },
        {
            title: 'Activity',
            dataIndex: 'activity',
            width: '15%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            align: 'center',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
            <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                 <a>Cancel</a>
            </Popconfirm>
          </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns: TableProps['columns'] = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <>
           <CategoryModal />
        <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={categories ? categories.pcategoryDtoList : null}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
        </Form>
    </>
    );
};

export default CategoryComponent;