import React from "react";
import {Steps, Button, message} from 'antd';
import "./agreement-page.less";
import MedicalStep from "./steps/medical-data/medical-step";
import ConfirmStep from "./steps/confirm/confirm-step";

const {Step} = Steps;

const steps: AgreementPageStep[] = [
    {
        title: 'Check in blockchain',
        number: 0
    },
    {
        title: 'Confirmation',
        number: 1
    },
    {
        title: 'Success step',
        number: 2
    },
];

interface AgreementPageStep {
    title: string;
    number: number;
}

interface AgreementPageState {
    current: number
}

interface AgreementPageProps {
}

const getCurrentStepContent = (stepNumber: number) => {
    switch(stepNumber) {
        case 0:
            return <MedicalStep/>;
        case 1:
            return <ConfirmStep/>;
        default:
            return <div>Content {stepNumber}</div>
    }
};

class AgreementPage extends React.Component<AgreementPageProps, AgreementPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: 1,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }

    render() {
        const {current} = this.state;
        return (
            <div className="ux-agreement-page__container">
                <div className="ux-agreement-page__content">
                    {getCurrentStepContent(this.state.current)}
                </div>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title}/>
                    ))}
                </Steps>
                <div className="ux-agreement-page__buttons-wrapper">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary"
                                onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button className="ux-agreement-page__prev-button"
                            onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}

export default AgreementPage;
