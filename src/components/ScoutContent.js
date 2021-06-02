import { Component } from 'react';
import { Button, Header, Input, Breadcrumb, Table, Modal } from 'semantic-ui-react'
import CategorySelect from './CategorySelect'
import './ScoutContent.css';

const sections = [
    { key: '1차분류', content: '1차분류', link: true },
    { key: '2차분류', content: '2차분류', link: true },
    { key: '3차분류', content: '3차분류', link: true },
    { key: '키워드', content: '키워드', link: true },
]

class ScoutContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_mode: 'category'
        }
    }

    shouldComponentUpdate(newProps, newState){
        if(this.state.search_mode === newState.search_mode) {
            return false;
        }
        return true;
    }

    handleSearchMode(e) {    
        var type = e.target.getAttribute('type');
        if(this.state.search_mode !== type) {
            if(type === 'category') {
                this.setState({search_mode:'category'});
            } else {
                this.setState({search_mode:'keyword'});
            }        
        }
    }

    SearchBox() {
        var _article;

        if(this.state.search_mode === 'category') {
            _article = <CategorySelect></CategorySelect>
        } else {
            _article = <Input icon='search' placeholder='Search...'></Input>
        }

        return _article
    }

    render() {
        return(
            <div className="Content">
                <div className="Sub-menu">
                    <div className="Title">
                        <Header size='huge'>키워드 찾기</Header>
                    </div>
                    <div className="Search-mode">
                        <Button.Group size='large' toggle>
                            <Button type={'category'} onClick={this.handleSearchMode.bind(this)}>카테고리</Button>
                            <Button.Or />
                            <Button type={'keyword'} onClick={this.handleSearchMode.bind(this)}>키워드</Button>
                        </Button.Group>
                    </div>
                    {this.SearchBox()}                    
                </div>
                <div className="Main">
                    <div className="Contents-title">
                        <h2>쇼핑 카테고리</h2>
                        <Breadcrumb icon='right angle' sections={sections}></Breadcrumb>                        
                        <div className="Current">
                            <span>2021-05-31 00시 기준 | 카테고리 경쟁도</span>
                            <span className="Current-state"><b>나쁨</b></span>
                            <span className="Current-rank">(3054위 / 5043개)</span>
                        </div>
                    </div>
                    <div className="Contents-menubar">
                        <Header size='large' className="Title-header">키워드 분석</Header>
                        <div>
                            <Modal
                                trigger={<Button>검색필터</Button>}
                                header='검색필터'
                                content='신규몰이라면 검색량이 5,000-50,000 사이 키워드 추천합니다. 최소 5,000이상의 검색량 키워드를 사용하세요.
                                전 날 없었던 키워드는 검색량이 급상승한 키워드입니다. 한 발 빠르게 제품을 소싱해 보세요.'
                                actions={[{ key: 'done', content: '검색필터 적용하기' }]}
                            ></Modal>
                            <Button>간단히 / 숫자</Button>
                            <Button>엑셀 다운로드</Button>
                        </div>
                    </div>
                    
                    <Table celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>키워드</Table.HeaderCell>
                                <Table.HeaderCell>경쟁률</Table.HeaderCell>
                                <Table.HeaderCell>쇼핑전환</Table.HeaderCell>
                                <Table.HeaderCell>광고비</Table.HeaderCell>
                                <Table.HeaderCell>검색량</Table.HeaderCell>
                                <Table.HeaderCell>상품량</Table.HeaderCell>
                                <Table.HeaderCell>평균가</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Sample</Table.Cell>
                                <Table.Cell>최적</Table.Cell>
                                <Table.Cell>중간</Table.Cell>
                                <Table.Cell>최악</Table.Cell>
                                <Table.Cell>1,101,300</Table.Cell>
                                <Table.Cell>398,642</Table.Cell>
                                <Table.Cell>25,700</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Sample</Table.Cell>
                                <Table.Cell>최적</Table.Cell>
                                <Table.Cell>중간</Table.Cell>
                                <Table.Cell>최악</Table.Cell>
                                <Table.Cell>1,101,300</Table.Cell>
                                <Table.Cell>398,642</Table.Cell>
                                <Table.Cell>25,700</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Sample</Table.Cell>
                                <Table.Cell>최적</Table.Cell>
                                <Table.Cell>중간</Table.Cell>
                                <Table.Cell>최악</Table.Cell>
                                <Table.Cell>1,101,300</Table.Cell>
                                <Table.Cell>398,642</Table.Cell>
                                <Table.Cell>25,700</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Sample</Table.Cell>
                                <Table.Cell>최적</Table.Cell>
                                <Table.Cell>중간</Table.Cell>
                                <Table.Cell>최악</Table.Cell>
                                <Table.Cell>1,101,300</Table.Cell>
                                <Table.Cell>398,642</Table.Cell>
                                <Table.Cell>25,700</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ScoutContent;