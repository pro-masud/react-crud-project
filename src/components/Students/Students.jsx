import { Button, Card, CardBody, CardHeader, CardTitle, Col, Container, Row, Table } from "react-bootstrap";
import { BiShow } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Students = () => {
  return (
    <>
        <Container >
            <Row className="py-5 justify-content-center">
                
                <Col lg={12} >
                <Button className="mb-2">Add New Student</Button>
                    <Card >
                        <CardHeader >
                            <CardTitle>All Students</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table style={{verticalAlign: "middle" }}>
                                <thead>
                                    <tr>
                                        <th>#Id</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Skill</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <td>01</td>
                                        <td>Masud Rana</td>
                                        <td>23</td>
                                        <td>MERN Stack Developer</td>
                                        <td><img style={{width: "70px", height: "70px", objectFit: "cover", borderRadius: "20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63sU7to-2HmO6svZTvQvjed6RxcEsA9HVYw&s" alt="" /></td>
                                        <td>
                                            <Button variant="info" className="ms-2 btn-sm"><BiShow /></Button>
                                            <Button variant="primary" className="ms-2 btn-sm"><FaEdit /></Button>
                                            <Button variant="danger" className="ms-2 btn-sm"><MdDelete /></Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Students;
