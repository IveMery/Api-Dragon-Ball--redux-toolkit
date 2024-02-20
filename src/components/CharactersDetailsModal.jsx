import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal} from '../redux/charactersSlice';

const CharacterDetailsModal = () => {
    const dispatch = useDispatch();
   
    const selectedCharacter = useSelector((state) => state.characters.selectedCharacter);
    const isModalOpen = useSelector(state => state.characters.isModalOpen);
    console.log(isModalOpen);
    const {id, name, image, ki, maxKi, gender, race, description } = selectedCharacter

   console.log("character desde details: ",selectedCharacter);
    const handleClose = () => {
        dispatch(closeModal());
    };
   
    return (
        <>
       
            <Modal show={isModalOpen} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Detalles del Personaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} md={4}>
                            <img src={image} alt={name} style={{ maxWidth: '100%' }} />
                        </Col>
                        <Col xs={12} md={8}>
                            <p><strong>Nombre:</strong> {name}</p>
                            <p><strong>Ki:</strong> {ki}</p>
                            <p><strong>Máximo Ki:</strong> {maxKi}</p>
                            <p><strong>Género:</strong> {gender}</p>
                            <p><strong>Raza:</strong> {race}</p>
                            <p><strong>Raza:</strong> {description}</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CharacterDetailsModal;
