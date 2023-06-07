import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryImages } from './gallery-task/creat-gallery-images.js';
gallery.innerHTML = galleryImages;
var lightbox = new SimpleLightbox('.gallery a', {
  capttion: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});