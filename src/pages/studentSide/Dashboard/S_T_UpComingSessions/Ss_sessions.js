import React from 'react';
import {
    Col,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
} from "reactstrap";
import { Ss_SessionData } from './Ss_SessionData';

const Ss_Sessions = () => {
    // document.title = "Datatables | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col lg={12} className='pad-0'>
                        <Card>
                            <CardHeader>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                        <h4 className="card-title mb-0 flex-grow-1">Upcoming Sessions List</h4>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div id="table-gridjs">
                                    <Ss_SessionData />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Ss_Sessions;
