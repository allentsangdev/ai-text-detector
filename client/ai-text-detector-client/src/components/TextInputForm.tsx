import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function TextInputForm() {
    const [highlighedText, setHighlighedText] = useState('')
    const [checkResult, setCheckResult] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.text) {
          var selectedText = request.text;
          // Do something with the selected text from the active tab
          setHighlighedText(selectedText);
        }
      });

    function handleChange(event:any) {
        const newValue = event.target.value;
        setHighlighedText(newValue)
    }

    /*async function handleSubmit() {
        const options = {
            method: 'POST',
            url: `https://ai-text-detector-api.onrender.com`,
            data: {
                writerApiKey: writerApiKey,
                organizationId: organizationId,
                content: highlighedText
            }
            
          };
        const response = await axios.request(options)
        setCheckResult(response.data)
    }*/
    
    return (
        <>
            <Form className='d-grid gap-3'>

                <InputGroup>
                    <FloatingLabel controlId="floatingTextarea2" label="Writer API Key">
                        <Form.Control type="password" {...register('writerApiKey')} />
                    </FloatingLabel>
                </InputGroup>

                <InputGroup>
                    <FloatingLabel controlId="floatingTextarea2" label="Organization ID">
                    <Form.Control {...register('organizationId')} />
                    </FloatingLabel>
                </InputGroup>
                
                <InputGroup>
                    <FloatingLabel controlId="floatingTextarea2" label="Text">
                        <Form.Control as="textarea" aria-label="With textarea" onChange={handleChange} value = {highlighedText} />
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

                {checkResult? `There is ${checkResult}% chance that that ocntent is human-generated content` : `The checking result will appears here`  }

            </Alert>
        </>
    );
}

export default TextInputForm;