const IdCard = (props) => {
  const { picture, lastName, firstName, gender, height, birth } = props;

  return (
    <div className="container">
      <div className="left">
        <img src={picture} alt="profile" />
      </div>

      <div className="right">
        <p><strong>Last Name: </strong>{lastName}</p>
        <p><strong>First Name: </strong>{firstName}</p>
        <p><strong>Gender: </strong>{gender}</p>
        <p><strong>Height: </strong>{height}cm</p>
        <p><strong>Birth: </strong>{birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
