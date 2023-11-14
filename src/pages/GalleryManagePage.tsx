import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeleteModal from '../components/DeleteModal';
import axios from 'axios';

const GalleryManagePage: React.FC = () => {
    const [galleryData, setGalleryData] = useState<{ imageID: string; imageName: string }[]>([]);

    useEffect(() => {
        fetchGalleryData();
    }, []);

    const fetchGalleryData = async () => {
        try {
            const idUser = localStorage.getItem('idUser');
            const response = await axios.get(`http://localhost:4000/manage/${idUser}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            const formatedData = response.data.data.data;
            setGalleryData(formatedData);
        } catch (error) {
            console.error("Error fetching gallery data: ", error);
        }
    };
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container className="ms-auto d-flex flex-column justify-content-center align-items-center">
            <h1 className='py-5 fw-bold text-white'>Gallery Management</h1>
            <Table striped hover variant='dark'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image ID</th>
                        <th>Image Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {galleryData.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.imageID}</td>
                        <td>{item.imageName}</td>
                        <td>
                            <Link to={`/edit/${item.imageID}`}>
                                <Button variant="primary">Edit</Button>
                            </Link>
                        </td>
                        <td>
                        <>
                            <Button variant="danger" onClick={() => setModalShow(true)}>
                                Delete
                            </Button>
                            <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
                            </>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            <Link className='my-5' to="/add">
                <Button variant='success'>Add Image</Button>
            </Link>
        </Container>
    );
};

export default GalleryManagePage;


    // const handleEdit = (imageId: string) => {
    //     // Logic to handle edit, e.g., redirect to edit page
    //     console.log(`Editing image with ID: ${imageId}`);
    //     // Navigasi ke halaman edit dengan SPA
    // };

    // const handleDelete = (imageId: string) => {
    //     // Logic to handle delete
    //     setGalleryData((prevData) => prevData.filter((item) => item.imageId !== imageId));
    //     console.log(`Deleting image with ID: ${imageId}`);
    // };