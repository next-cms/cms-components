import React from 'react';
import { List, Card, Icon } from 'antd';
import "../../../static/eventlist.css"

const AllNews = () => {
    const news = [
        {
            key: 1,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO SYSTEMS - CASE KOJAMO SYSTEMS - CASE KOJAMO SYSTEMS - CASE KOJAMO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Quis viverra nibh cras pulvinar mattis nunc. Luctus venenatis lectus magna fringilla. Urna condimentum mattis pellentesque id nibh tortor. Adipiscing diam donec adipiscing tristique risus nec feugiat. Malesuada nunc vel risus commodo viverra maecenas. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Suspendisse interdum consectetur libero id faucibus. Lacus suspendisse faucibus interdum posuere lorem. Quam pellentesque nec nam aliquam. At quis risus sed vulputate. Sit amet consectetur adipiscing elit. ",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 2,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 3,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 4,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 5,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 6,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 7,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 8,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Quis viverra nibh cras pulvinar mattis nunc. Luctus venenatis lectus magna fringilla. Urna condimentum mattis pellentesque id nibh tortor. Adipiscing diam donec adipiscing tristique risus nec feugiat. Malesuada nunc vel risus commodo viverra maecenas. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Suspendisse interdum consectetur libero id faucibus. Lacus suspendisse faucibus interdum posuere lorem. Quam pellentesque nec nam aliquam. At quis risus sed vulputate. Sit amet consectetur adipiscing elit. ",
            date: "10/01/2019",
            tag: "Business"
        },
    ]

    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a><Icon type="left" /> Previous</a>;
        }
        if (type === 'next') {
            return <a>Next<Icon type="right" /></a>;
        }
        return originalElement;
    }

    return (
        <div>
            <div className="news-container" >
                <div className="latest-news" style={{ width: "100%", display: "flex", paddingBottom: "50px" }}>
                    <div style={{ width: "50%", height: "440px" }}>
                        <img style={{ width: "100%", height: "100%" }} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                    </div>
                    <div style={{ width: "50%", height: "380px", padding: "0px 30px" }}>
                        <div style={{ padding: "20px 0px", }}>
                            <h2>{news[news.length - 1].title}</h2>
                        </div>
                        <p style={{ fontStyle: "italic", marginBottom: "0px" }}>{news[news.length - 1].date} | 5 min read</p>
                        <div style={{ height: "270px", marginTop: "10px" }}>
                            <p style={{ fontSize: "18px", display: "-webkit-box", lineHeight: "2.3", WebkitLineClamp: "6", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{news[news.length - 1].description}</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <a href="#" style={{ color: "black", textDecoration: "underline", fontStyle: "italic" }}>Read More</a>
                            </div>
                            <div><a style={{ color: "green", fontWeight: "1000", textTransform: "uppercase" }}>{news[news.length - 1].tag}</a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <List
                        grid={{ gutter: 40, column: 4 }}
                        dataSource={news}
                        pagination={{
                            pageSize: 8,
                            itemRender
                        }}
                        renderItem={item => (
                            <List.Item>
                                <Card style={{ height: "580px", padding: "0px 0px" }} cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }>
                                    <div style={{ height: "60px", margin: "25px 0px" }}>
                                        <h4 style={{ display: "-webkit-box", lineHeight: "1.5", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.title}</h4>
                                    </div>
                                    <p style={{ fontStyle: "italic", marginBottom: "0px" }}>{item.date} | 5 min read</p>
                                    <div style={{ height: "235px", marginTop: "10px" }}>
                                        <p style={{ display: "-webkit-box", lineHeight: "2.3", WebkitLineClamp: "7", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.description}</p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>
                                            <a style={{ color: "black", textDecoration: "underline", fontStyle: "italic" }}>Read More</a>
                                        </div>
                                        <div><a style={{ color: "green", fontWeight: "1000", textTransform: "uppercase" }}>{item.tag}</a></div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
export default AllNews;
