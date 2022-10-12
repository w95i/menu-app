import React from "react";
import { Col, Row } from "react-bootstrap";
import Jump from 'react-reveal/Jump';

const Categore=({filterbycategory,allcategory})=>{
    const Onfilter=(cat)=>{
        filterbycategory(cat)
    }
    return(
        <Row className="my-2 mb-5">
            <Col sm="12" className="justify-content-center d-flex">
            {
                allcategory.length >=1 ? (allcategory.map((cat)=>{
                    return(
                        <Jump>
                            <div>
                                <button onClick={()=>Onfilter(cat)} className="btn mx-2">{cat}</button>
                            </div>
                        </Jump>
                    )
                })) : null 
            }
            </Col>
        </Row>
    )
}
export default Categore;