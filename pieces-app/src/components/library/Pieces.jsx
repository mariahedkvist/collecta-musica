import { Link } from 'react-router-dom';

const Pieces = ({ pieces }) => {
  return (
    <>
      {pieces.map((piece) => (
        <tr key={piece.id}>
          <td className="title">
            <Link to={`/details/?id=${piece.id}`}>{piece.title}</Link>
          </td>
          <td>
            {piece.composerLastName}, {piece.composerFirstName}
          </td>
        </tr>
      ))}
    </>
  );
};

export default Pieces;
