import "./Style/CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="parent text-white bg-dark">
      <div
        className="d-flex align-items-center justify-content-center mb-3 child"
        style={{
          width: "100%",
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${item.img})`,
          borderRadius: "25px",
        }}
      />
      <h1 className="hide text-white">{item.title}</h1>
    </div>
  );
};

export default CategoryItem;
