import { Component } from 'react';
import { Header, Input, Button, Message } from 'semantic-ui-react'
import './OptimizeContent.css';

class OptimizeContent extends Component {
    render() {
        return(
            <div className="Content">
                <div className="Sub-menu">
                    <div className="Search-box">
                        <Header size='huge'>키워드 최적화</Header>
                        <Input size='large' placeholder='Search...'></Input>
                    </div>
                    <Button size='big' onClick={function(e){
                        e.preventDefault();
                    }.bind(this)}>최적화 실행</Button>
                </div>
                <div className="Main">
                    <div className="Main-title">
                        <Header
                            as='h2'
                            content='키워드 추천'
                            subheader='입력한 키워드에 맞는 카테고리, 키워드, 태그를 추천해드립니다'
                        />
                    </div>
                    <div className="Main-content">
                        <Message>
                            <Message.Header>쇼핑 카테고리</Message.Header>
                            <p>
                                1차분류 {'>'} 2차분류 {'>'} 3차분류
                            </p>
                            <Message.Header>상품 키워드</Message.Header>
                            <p>
                                키워드1, 키워드2, 키워드3, 키워드4, 키워드5, 키워드6, 키워드7, 키워드8, 키워드9, 키워드10
                            </p>
                            <Message.Header>태그</Message.Header>
                            <p>
                                태그1, 태그2, 태그3, 태그4, 태그5, 태그6, 태그7, 태그8, 태그9, 태그10
                            </p>
                        </Message>                         
                    </div>
                </div>
            </div>
        );
    }
}

export default OptimizeContent;