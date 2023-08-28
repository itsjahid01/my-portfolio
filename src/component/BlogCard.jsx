const BlogCard = ({ blog }) => {
  const { blogTitle, description, image } = blog;
  return (
    <div className="card card-compact bg-[#405366] shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{blogTitle}</h2>
        <p>{description}...</p>
        <div className="card-actions justify-start">
          <button
            type="button"
            className="px-4 py-2 rounded text-white  bg-blue-500 hover:bg-blue-700"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
