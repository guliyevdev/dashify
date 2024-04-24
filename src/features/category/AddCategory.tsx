import React, { useState } from 'react';
import {Button, Flex, Modal} from 'antd';
import {PlusOutlined} from "@ant-design/icons";

const CategoryModal: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Flex gap="small" vertical>
                <Flex wrap="wrap" gap="small">
                    <Button type="primary" icon={<PlusOutlined />}  onClick={() => setOpen(true)}>
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
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
};

export default CategoryModal;