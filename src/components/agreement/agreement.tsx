import React, {useState} from "react";
import { Modal, Button } from 'antd';
import "./agreement.less";

const Agreement = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="ux-agreement__button-wrapper">
            <Button type="primary"
                    block size="large"
                    onClick={() => setVisible(true)}>
                Agreement
            </Button>
            <Modal
                title="Agreement with privacy"
                width="30%"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                okText="Agree"
                cancelText="Cancel"
            >
                <p>I confirm that the data provided by me is correct and I agree with the rules for using the service</p>
            </Modal>
        </div>
    )
};

export default Agreement;
