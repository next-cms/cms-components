import React from 'react';
import { List, Card, Icon } from 'antd';
import "../../../static/eventlist.css"

const AllNews = ({ news }) => {

    const tagColor = {
        business: "#5ECE60",
        future: "#FFB2CA",
        society: "#4BC9F2"
    }

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
                            <div><a style={{ color: tagColor[news[news.length - 1].tag.toLowerCase()], fontWeight: "1000", textTransform: "uppercase" }}>{news[news.length - 1].tag}</a></div>
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
                                        <div><a style={{ color: tagColor[item.tag.toLowerCase()], fontWeight: "1000", textTransform: "uppercase" }}>{item.tag}</a></div>
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
