import React, { useState } from 'react';
import type { FormProps } from 'antd';
import {Button, Flex, Form, Input, Modal, Switch} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import {useAddCategory} from "./useCategories";

const CategoryModal: React.FC = () => {
    const [open, setOpen] = useState(false);
    const {Add, addCategoryLoading} = useAddCategory();
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
       Add(values);
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Flex gap="small" vertical>
                <Flex wrap="wrap" gap="small">
                    <Button type="primary" className="my-2" icon={<PlusOutlined />}  onClick={() => setOpen(true)}>
                        AddNewCategory
                    </Button>
                </Flex>
            </Flex>
            <Modal
                title="Modal 1000px width"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
                footer={false}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 800 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="type"
                        name="type"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Activity"  name="activity" valuePropName="checked">
                        <Switch />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default CategoryModal;