import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalsProps {
  show: boolean;
  onHide: () => void;
  // Tambahkan tipe data untuk properti lain yang digunakan dalam komponen
  // Contoh:
  // fileId?: string;
}

const DeleteModal: React.FC<ModalsProps> = (props) => {
  const handleLogout = async () => {
    // try {
    //   // Gantilah URL dengan URL backend Anda yang menangani penghapusan data
    //   const response = await fetch('https://example.com/delete', {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     // Gantilah dengan data yang diperlukan untuk mengidentifikasi file yang akan dihapus
    //     body: JSON.stringify({ fileId: props.fileId }),
    //   });
    //   if (response.ok) {
    //     // Hapus modal setelah penghapusan berhasil
    //     props.onHide();
    //   } else {
    //     // Handle kesalahan atau tampilkan pesan kesalahan
    //     console.error('Failed to delete file');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  const handleCancel = () => {
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="d-flex flex-row justify-content-center align-items-center">
        <Modal.Title id="contained-modal-title-vcenter">Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
        <p>Are you sure you want to logout?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
