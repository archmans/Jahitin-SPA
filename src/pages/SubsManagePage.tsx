import { Container, Table, Button } from 'react-bootstrap';

const SubsManagePage: React.FC = () => {
    const data = [
        { id: 1, userId: 'user123', username: 'john_doe', status: 'Pending' },
        { id: 2, userId: 'user456', username: 'jane_smith', status: 'Approved' },
        { id: 3, userId: 'user789', username: 'bob_jackson', status: 'Rejected' },
    ];

    const handleAccept = (id: number) => {
        // Handle accept logic here
        console.log(`Accept request with ID: ${id}`);
    };

    const handleReject = (id: number) => {
        // Handle reject logic here
        console.log(`Reject request with ID: ${id}`);
    };

    return (
        <Container className="ms-auto d-flex flex-column justify-content-center align-items-center">
            <h1 className='py-5 fw-bold text-white'>Subscription Requests</h1>
            <Table striped hover variant='dark'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User ID</th>
                        <th>Tailor</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.userId}</td>
                            <td>{row.username}</td>
                            <td>
                                {row.status === 'Pending' && (
                                    <>
                                        <Button className="me-2" variant="success" onClick={() => handleAccept(row.id)}>
                                            Accept
                                        </Button>
                                        <Button className="mx-2" variant="danger" onClick={() => handleReject(row.id)}>
                                            Reject
                                        </Button>
                                    </>
                                )}
                                {row.status !== 'Pending' && row.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default SubsManagePage;
