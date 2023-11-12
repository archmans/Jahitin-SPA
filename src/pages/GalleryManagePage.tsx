import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GalleryManagePage: React.FC = () => {
    // Dummy data for demonstration
    const [galleryData, setGalleryData] = useState([
        { id: 1, imageId: 'img001', imageName: 'Image 1' },
        { id: 2, imageId: 'img002', imageName: 'Image 2' },
        // Add more data as needed
    ]);

    useEffect(() => {
        // Fetch data from the database or another source
        // Replace the following with actual fetch logic when you have a backend
        // For example: fetchGalleryDataFromDatabase();
    }, []);

    // const handleEdit = (imageId: string) => {
    //     // Logic to handle edit, e.g., redirect to edit page
    //     console.log(`Editing image with ID: ${imageId}`);
    //     // Navigasi ke halaman edit dengan SPA
    // };

    const handleDelete = (imageId: string) => {
        // Logic to handle delete
        setGalleryData((prevData) => prevData.filter((item) => item.imageId !== imageId));
        console.log(`Deleting image with ID: ${imageId}`);
    };

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
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.imageId}</td>
                        <td>{item.imageName}</td>
                        <td>
                            <Link to={`/edit`}>
                                <Button variant="primary">Edit</Button>
                            </Link>
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => handleDelete(item.imageId)}>
                              Delete
                            </Button>
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
