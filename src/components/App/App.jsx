import React, { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
        <Modal />
      </Container>
    );
  }
}

export default App;
