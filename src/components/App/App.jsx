import React, { Component } from 'react';
import { Notify } from 'notiflix';
import { Container } from './App.styled';
import getImagesByName from 'api/api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isModalOpen: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getGallery();
    }
  }

  handleSubmit = query => {
    this.setState({ query: query });
  };

  getGallery = async () => {
    const { query, page } = this.state;

    try {
      const { hits } = await getImagesByName(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
    } catch (error) {
      Notify.failure(error.message);
    }
  };

  handleImageClick = largeImageURL => {
    this.setState({ largeImage: largeImageURL });
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));

    if (this.state.isModalOpen) {
      this.setState({
        largeImage: '',
      });
    }
  };

  render() {
    const { images, largeImage } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {images && (
          <ImageGallery images={images} onClick={this.handleImageClick} />
        )}

        <Loader />
        <Button />
        <Modal image={largeImage} onClose={this.toggleModal} />
      </Container>
    );
  }
}

export default App;
