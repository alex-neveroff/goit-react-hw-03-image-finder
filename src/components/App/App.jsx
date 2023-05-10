import React, { Component } from 'react';
import { Notify } from 'notiflix';
import { Container } from './App.styled';
import getImagesByName from 'api/api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

// 1. Сделать сообщения о количестве найденного
// 2. Сделать чтобы кнопка не показывалась, когда это последняя страница
// 3. Сделать лоадер

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showModal: false,
    largeImage: '',
    alt: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getGallery();
    }
    if (prevState.page < this.state.page) {
      this.getGallery();
    }
  }

  getGallery = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const { hits } = await getImagesByName(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
    } catch (error) {
      Notify.failure(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = query => {
    this.setState({
      query: query,
      page: 1,
      images: [],
    });
  };

  handleImageClick = (largeImageURL, tags) => {
    this.setState({ largeImage: largeImageURL, alt: tags });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, largeImage, alt, showModal, isLoading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {images && (
          <ImageGallery images={images} onClick={this.handleImageClick} />
        )}
        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && <Button onClick={this.loadMore} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img className="modal-content" src={largeImage} alt={alt} />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
