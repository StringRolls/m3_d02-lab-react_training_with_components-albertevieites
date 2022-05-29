import visaPic from '.././assets/images/visa.png';
import masterCardPic from '.././assets/images/master-card.svg';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const selectCard = (type) =>
    type.toLowerCase() === 'visa' ? visaPic : masterCardPic;

  const hideCardNumber = (number) => {
    number.slice(-4);
  };

  const formatedDate = (expirationMonth, expirationYear) => {
    const month = ('0' + expirationMonth).slice(-2);
    const year = String(expirationYear).slice(-2);

    return `${month}/${year}`;
  };

  return (
    <div className="creditBox">
      <div className="credit-card" style={{ backgroundColor: bgColor }}>
        <div className="card-type">
          <img src={selectCard(type)} alt="type" />
        </div>
        <p className="card-number" style={{ color: color }}>
          <strong>···· ···· ···· </strong>
          {hideCardNumber(number)}
        </p>
        <div className="card-owner" style={{ color: color }}>
          <p>
            Expires {formatedDate(expirationMonth, expirationYear)} {bank}
          </p>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
