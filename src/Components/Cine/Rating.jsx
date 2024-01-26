import Star from "../../assets/star.svg";

// eslint-disable-next-line react/prop-types
const Rating = ({ value }) => {
  const stars = Array(value).fill(Star);

  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="Star" />
      ))}
    </>
  );
};

export default Rating;
