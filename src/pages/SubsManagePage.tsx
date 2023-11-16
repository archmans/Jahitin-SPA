import { Container, Table, Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import axios from 'axios';

const SubsManagePage: React.FC = () => {
    const [data, setData] = React.useState<{ user_id: string; status: string }[]>([]);
    useEffect(() => {
        fetchSubscriptionData();
    }, []);

    const fetchSubscriptionData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/subscription/get', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const formattedData = response.data.map((item: any) => ({
                user_id: item.user_id[0],
                status: item.status[0],
            }));
            setData(formattedData);
        } catch (error) {
            console.error('Error fetching subscription data: ', error);
        }


    }
    const handleAccept = (id: string) => {
        // Handle accept logic here
        console.log(`Accept request with ID: ${id}`);
    };

    const handleReject = (id: string) => {
        // Handle reject logic here
        console.log(`Reject request with ID: ${id}`);
    };

    return (
        <Container className="ms-auto d-flex flex-column justify-content-center align-items-center">
            <h1 className='py-5 fw-bold text-white'>Subscription Requests</h1>
            <Table striped hover variant='dark' style={{ lineHeight: '3' }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.user_id}</td>
                            <td>
                                {row.status === 'PENDING' && (
                                    <>
                                        <Button className="me-2" variant="success" onClick={() => handleAccept(row.user_id)}>
                                            Accept
                                        </Button>
                                        <Button className="mx-2" variant="danger" onClick={() => handleReject(row.user_id)}>
                                            Reject
                                        </Button>
                                    </>
                                )}
                                {row.status !== 'PENDING' && row.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default SubsManagePage;
