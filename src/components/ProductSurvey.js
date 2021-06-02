import { Component } from 'react';
import { Header, Input, Button, Table, Image, List } from 'semantic-ui-react'
import './ProductSurvey.css';

class ProductSurvey extends Component {
    render() {
        return(
            <div className="Content">
                <div className="Sub-menu">
                    <div className="Search-box">
                        <Header size='huge'>상품 분석</Header>
                        <Header size='tiny'>상품명</Header>
                        <Input size='large' placeholder='Search...'></Input>
                    </div>
                    <Button size='big'>분석하기</Button>
                </div>
                <div className="Main">
                    <div className="Main-title">
                        <Header as='h2'>
                            Sample 검색 결과
                            <Header.Subheader>2021년 05월 31일 00시 기준</Header.Subheader>
                        </Header>
                    </div>
                    <div className="Naver-products">
                        <Header as='h3'>실시간 네이버 상위랭킹 상품</Header>
                        <Table basic='very' celled collapsing>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>상품명</Table.HeaderCell>
                                    <Table.HeaderCell>구매수</Table.HeaderCell>
                                    <Table.HeaderCell>리뷰수</Table.HeaderCell>
                                    <Table.HeaderCell>판매가</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4' image>
                                            <Image src='/image/emo1.png' rounded size='mini' />
                                            <Header.Content>sample product</Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>2,298개</Table.Cell>
                                    <Table.Cell>1,366개</Table.Cell>
                                    <Table.Cell>54000원</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4' image>
                                            <Image src='/image/emo1.png' rounded size='mini' />
                                            <Header.Content>sample product</Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>2,298개</Table.Cell>
                                    <Table.Cell>1,366개</Table.Cell>
                                    <Table.Cell>54000원</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4' image>
                                            <Image src='/image/emo1.png' rounded size='mini' />
                                            <Header.Content>sample product</Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>2,298개</Table.Cell>
                                    <Table.Cell>1,366개</Table.Cell>
                                    <Table.Cell>54000원</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4' image>
                                            <Image src='/image/emo1.png' rounded size='mini' />
                                            <Header.Content>sample product</Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>2,298개</Table.Cell>
                                    <Table.Cell>1,366개</Table.Cell>
                                    <Table.Cell>54000원</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                    <div className="Coupang-products">
                        <Header as='h3'>쿠팡 인기 상품</Header>
                        <List divided relaxed='very'>
                            <List.Item>쿠팡 파트너스 인기상품 - 1</List.Item>
                            <List.Item>쿠팡 파트너스 인기상품 - 2</List.Item>
                            <List.Item>쿠팡 파트너스 인기상품 - 3</List.Item>
                            <List.Item>쿠팡 파트너스 인기상품 - 4</List.Item>
                            <List.Item>쿠팡 파트너스 인기상품 - 5</List.Item>
                            <List.Item>쿠팡 파트너스 인기상품 - 6</List.Item>
                            <List.Item>쿠팡 파트너스 인기상품 - 7</List.Item>
                            <List.Item>쿠팡 파트너스 인기상품 - 8</List.Item>
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductSurvey;