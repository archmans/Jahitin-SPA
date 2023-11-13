import React, { useState } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditImage: React.FC = () => {
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newImageName, setNewImageName] = useState<string>('');

  // Dummy data for existing image
  const existingImageName = 'Gambar 1';
  const existingImagePath = '/logo_premium.png';

  const handleNewImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      setNewImage(selectedImage);
    }
  };

  const handleNewImageNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewImageName(e.target.value);
  };

  const handleDone = () => {
    // Logic to handle updating image in the database
    // Replace the following with actual fetch logic when you have a backend
    // For example: updateImageInDatabase(existingImageName, newImageName, newImage);
    console.log(`Updating image: ${existingImageName} -> ${newImageName}`);
    // Reset form after updating image
    setNewImage(null);
    setNewImageName('');
  };

  const handleCancel = () => {
    // kembali ke halaman manage karya dengan SPA

  };

  return (
    <Container className="ms-auto d-flex flex-column justify-content-center align-items-center">
        <h1 className='py-5 fw-bold text-white'>Edit Image</h1>
        <Form>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <Form.Group controlId="formExistingImage">
                  <Image src={existingImagePath} alt={existingImageName} fluid style={{ maxWidth: '300px' }} />
              </Form.Group>

              <Form.Group controlId="formExistingImageName">
                  <Form.Label className='text-white'>{existingImageName}</Form.Label>
              </Form.Group>
            </div>

            <Form.Group controlId="formNewImageName">
              <Form.Label className='text-white'>New Image Name</Form.Label>
              <Form.Control type="text" value={newImageName} onChange={handleNewImageNameChange} />
            </Form.Group>

            <Form.Group className='mt-4' controlId="formNewImage">
              <Form.Label className='text-white'>New Image</Form.Label>
              <Form.Control type="file" onChange={handleNewImageChange} accept="image/*" />
            </Form.Group>
            
            <div className='d-flex justify-content-center'>
                <Link to='/manage'>
                    <Button 
                        className='mt-5 me-3 border border-white bg-transparent'
                        onClick={handleCancel}
                        style={{ transition: 'color 0.3s ease' }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.color = '#dc3545'; // Ganti dengan warna teks yang diinginkan
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.color = '#fff'; // Ganti dengan warna teks default
                        }}>
                        Cancel
                    </Button>
                </Link>
              <Button className='mt-5 ms-3' variant="success" onClick={handleDone}>
                Done
              </Button>
            </div>
        </Form>
    </Container>
  );
};

export default EditImage;
