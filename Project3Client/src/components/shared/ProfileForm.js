import React from 'react';
import {
    Form,
    Button,
    Container
} from 'react-bootstrap'

// profile model fields:
// image, aboutMe, phone

const ProfileForm = (props) => {
    const { profile, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor='image'>Profile Image</Form.Label>
                <Form.Control 
                    name="image" 
                    id="image" 
                    type="text" 
                    placeholder="imageUrl"
                    // value={ profile.image }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='aboutMe'>Profile About Me </Form.Label>
                <Form.Control 
                    name="aboutMe" 
                    id="aboutMe" 
                    as="textarea" 
                    rows={3}
                    // type="text" 
                    placeholder="Tell us about your self"
                    // value={ profile.aboutMe }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='phone'>Profile Phone Number</Form.Label>
                <Form.Control 
                    name="phone" 
                    id="phone" 
                    type="text" 
                    placeholder="555-555-5555"
                    // value={ profile.phone }
                    onChange={ handleChange }
                />
                <Button 
                    variant="primary" 
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ProfileForm;