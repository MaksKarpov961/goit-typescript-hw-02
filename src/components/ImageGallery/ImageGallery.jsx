import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ galleryItems }) => {
  return (
    <ul>
      {galleryItems.map(({ id, urls: { small } }) => (
        <li key={id}>
          <ImageCard small={small} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
