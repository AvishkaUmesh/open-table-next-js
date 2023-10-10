function Images({ images }: { images: string[] }) {
  return (
    <div>
      <h1 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
        {images.length} photo{images.length > 1 ? 's' : ''}
      </h1>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <img
            key={image}
            className="mb-1 mr-1 h-44 w-56"
            src={image}
            alt="restaurant_iamge"
          />
        ))}
      </div>
    </div>
  );
}
export default Images;
