import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

function TextInputForm() {
    const [highlighedText, setHighlighedText] = useState(null)
    
    document.addEventListener('mouseup', function(event: MouseEvent) {
        var selectedText: string = window.getSelection()?.toString() || '';
        if (selectedText !== '') {
            chrome.runtime.sendMessage({ text: selectedText });
        }
      })
    
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.text) {
          var selectedText = request.text;
          // Do something with the selected text from the active tab
          setHighlighedText(selectedText);
        }
      });
    
    return (
        <>
            <Form className='d-grid gap-3'>

                <InputGroup>
                    <FloatingLabel controlId="floatingTextarea2" label="Text">
                        {highlighedText ? <Form.Control as="textarea" aria-label="With textarea" value = {highlighedText} /> : <Form.Control as="textarea" aria-label="With textarea" /> }
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