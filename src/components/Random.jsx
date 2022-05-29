function Random({ max, min }) {
  const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="randomBox">
    <p>Random value between {min} and {max} => {getRandom(max, min)}</p>
    </div>
  )
}

export default Random;