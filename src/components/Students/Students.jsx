import { Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from "react-bootstrap";

const Students = () => {
  return (
    <>
        <Container >
            <Row>
                <Col md={8} >
                    <Card >
                        <CardHeader >
                            <CardTitle>All Students</CardTitle>
                        </CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Students;
