import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';


function TextInputForm() {
    return (
        <>
            <Form className='d-grid gap-3'>

                <InputGroup>
                    <FloatingLabel controlId="floatingTextarea2" label="Text">
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </FloatingLabel>
                </InputGroup>


                <Button variant="primary" type="submit">
                    Submit
                </Button>


                <Button variant="secondary">
                    Clear
                </Button>

            </Form>

            <Alert variant={'dark'} style={{ marginTop: '40px' }}>

                The classifier considers the text to be unclear if it is AI-generated.

            </Alert>
        </>
    );
}

export default TextInputForm;