const UserCard = ({ user }) => {
    const { firstName, lastName, photoUrl, age, gender, about } = user;
    return (
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img src={user.photoUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>{about}</p>
        </div>
      </div>
    );
  };
  export default UserCard;