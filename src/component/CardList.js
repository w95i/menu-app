import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const CardList = ({ itemdata }) => {
    return (
        <Row>
            {itemdata.length >= 1 ? (
                itemdata.map((item) => {
                    return (
                        <Col key={item.id} sm="12" className="mb-3">
                            <Zoom>
                                <Card className="d-flex flex-row">
                                    <Card.Img
                                        className="img-item"
                                        variant="Top"
                                        src={item.imgurl}
                                    />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            <div className="item-title">{item.title}</div>
                                            <div className="item-price">{item.price}</div>
                                        </Card.Title>
                                        <Card.Text className="py-2">
                                            <div className="item-description">{item.description}</div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Zoom>
                        </Col>
                    );
                })
            ) : (
                <h3 className="text-center">لا توجد اصناف</h3>
            )}
        </Row>
    );
};
export default CardList;
