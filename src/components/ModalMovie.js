
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function ModalMovie(props) {

    // for add a comment on movie 

    const url = `${process.env.REACT_APP_serverURL}/addMovie`;

    const addComment = (e) => {

        e.preventDefault();
        const obj = {
            title: props.clickedMovie.title,
            release_date: props.clickedMovie.release_date,
            poster_path: props.clickedMovie.poster_path,
            overview: props.clickedMovie.overview,
            comment: e.target.comment.value || ""
        }

        console.log(obj);

        axios.post(url, obj)
            .then(response => {
                console.log(response);
                console.log('success');
            })
            .catch(error => {
                console.log(error);
            });
    }


    // for update a comment on movie 

    const updateComment = (e) => {


        const url = `${process.env.REACT_APP_serverURL}/UPDATE/${props.clickedMovie.id}`; const obj = {
            title: props.clickedMovie.title,
            release_date: props.clickedMovie.release_date,
            poster_path: props.clickedMovie.poster_path,
            overview: props.clickedMovie.overview,
            comment: e.target.comment.value || ""
        };

        axios.put(url, obj)
            .then(response => {
                console.log('PUT request successful');
                const updatedMovie = response.data.updatedMovie;

                const updatedMovies = props?.moviesFavorite?.map(movie => {
                    if (movie.id === updatedMovie.id) {
                        return updatedMovie;
                    }
                    return movie;
                });

                props.updateFavoriteMovies(updatedMovies);

                // console.log(response.data);

                window.location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };



    return (

        <><Modal show={props.show}
            onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Info Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={props.isFavPage ? updateComment : addComment}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${props.clickedMovie.poster_path}`} width='100%'
                        style={{
                            width: "100%",
                            height: "400px"
                        }} />
                    <h3 style={{ textAlign: "center" }}>{props.clickedMovie.title}</h3>
                    <Form.Group className="mb-3">
                        {props.isFavPage &&
                            <>
                                <Form.Label>Edit a comment</Form.Label>
                                <Form.Control
                                    name='comment'
                                    defaultValue={props.clickedMovie.comment || ''}
                                    placeholder="Enter your comment"
                                />

                            </>
                        }
                        {!props.isFavPage &&
                            <>
                                <Form.Group className="mb-3">
                                    <Form.Label>Add a comment</Form.Label>
                                    <Form.Control name='comment' placeholder="Enter your comment" />
                                </Form.Group>
                            </>
                        }
                    </Form.Group>
                    <Button variant="primary" type='submit'>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

        </>
    );
}

export default ModalMovie;
