import { Component } from 'react';
import { Header, Input, Button, Breadcrumb, Statistic, Divider, Table } from 'semantic-ui-react'
import './SurveyContent.css';

const sections = [
    { key: '1차분류', content: '1차분류', link: true },
    { key: '2차분류', content: '2차분류', link: true },
    { key: '3차분류', content: '3차분류', link: true },
    { key: '키워드', content: '키워드', link: true },
]

class SurveyContent extends Component {
    render() {
        return(
            <div className="Content">
                <div className="Sub-menu">
                    <div className="Search-box">
                        <Header size='huge'>키워드 분석</Header>
                        <Input size='large' placeholder='Search...'></Input>
                    </div>
                    <Button size='big'>분석하기</Button>
                </div>
                <div className="Main">
                    <div className="Contents-title">
                        <h2>쇼핑 카테고리</h2>
                        <Breadcrumb icon='right angle' sections={sections}></Breadcrumb>     
                    </div>
                    <div className="Statistic_result">
                        <Statistic.Group size='large'>                        
                            <Statistic color='olive'>
                                <Statistic.Label>키워드 경쟁도</Statistic.Label>
                                <Statistic.Value>0:1</Statistic.Value>
                            </Statistic>
                            <Statistic color='grey'>
                                <Statistic.Label>카테고리 경쟁도</Statistic.Label>
                                <Statistic.Value>SOSO</Statistic.Value>
                            </Statistic>    
                        </Statistic.Group>
                        <Statistic.Group size='tiny'>  
                            <Statistic>
                                <Statistic.Label>검색량</Statistic.Label>                                
                                <Statistic.Value>85,170회</Statistic.Value>
                            </Statistic>
                            <Statistic>
                                <Statistic.Label>상품량</Statistic.Label>
                                <Statistic.Value>702개</Statistic.Value>
                            </Statistic>
                            <Statistic>
                                <Statistic.Label>상위 100개의 판매량</Statistic.Label>
                                <Statistic.Value>10,945개</Statistic.Value>
                            </Statistic> 
                            <Statistic>
                                <Statistic.Label>최근 6개월 시장규모</Statistic.Label>
                                <Statistic.Value>108,669만원</Statistic.Value>
                            </Statistic> 
                            <Statistic>
                                <Statistic.Label>광고비와 평균가</Statistic.Label>
                                <Statistic.Value>210원/49,236원</Statistic.Value>
                            </Statistic>
                            <Statistic color='olive'>
                                <Statistic.Label>상품가 대비 광고비</Statistic.Label>
                                <Statistic.Value>0.42%</Statistic.Value>
                            </Statistic>
                        </Statistic.Group>
                    </div>
                    <Divider />
                    <div className="Releated-word">
                        <Header as='h3'>
                            연관 검색어
                            <Header.Subheader>네이버 검색시 연관되는 검색어</Header.Subheader>
                        </Header>
                        <Table celled selectable basic='very'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>검색어</Table.HeaderCell>
                                    <Table.HeaderCell>검색량(PC)</Table.HeaderCell>
                                    <Table.HeaderCell>검색량(Mobile)</Table.HeaderCell>
                                    <Table.HeaderCell>상품량</Table.HeaderCell>
                                    <Table.HeaderCell>경쟁률</Table.HeaderCell>
                                    <Table.HeaderCell>쇼핑전환</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                    <div className="Releated-keyword">
                        <Header as='h3'>
                            연관 키워드
                            <Header.Subheader>네이버 광고에서 연관된 상품 키워드</Header.Subheader>
                        </Header>
                        <Table celled selectable basic='very'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>키워드</Table.HeaderCell>
                                    <Table.HeaderCell>검색량(PC)</Table.HeaderCell>
                                    <Table.HeaderCell>검색량(Mobile)</Table.HeaderCell>
                                    <Table.HeaderCell>상품량</Table.HeaderCell>
                                    <Table.HeaderCell>경쟁률</Table.HeaderCell>
                                    <Table.HeaderCell>쇼핑전환</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>sample</Table.Cell>
                                    <Table.Cell>31,000</Table.Cell>
                                    <Table.Cell>198,700</Table.Cell>
                                    <Table.Cell>3,887</Table.Cell>
                                    <Table.Cell>0.01</Table.Cell>
                                    <Table.Cell>6.04</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </div>                
            </div>
        );
    }
}

export default SurveyContent;