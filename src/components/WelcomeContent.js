import { Component } from 'react';
import { Button, Input } from 'semantic-ui-react'
import './WelcomeContent.css';

class WelcomeContent extends Component {
    render() {
        return(
            <div className="Content">
                <h1>Welcome Market Helper!</h1>
                <div className="Input-box">
                    <Input fluid size='huge' placeholder='분석할 상품 키워드를 입력하세요' action={{ icon: 'search' }} />
                </div>
            </div>
            
        );
    }
}

export default WelcomeContent;