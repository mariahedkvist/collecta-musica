const Piece = ({ piece }) => {
  return (
    <>
      <tr>
        <td>Kompositör</td>
        <td>
          {piece.composerLastName}, {piece.composerFirstName}
        </td>
      </tr>
      <tr>
        <td>Utgivningsår</td>
        <td>{piece.published}</td>
      </tr>
      <tr>
        <td>Språk</td>
        <td>{piece.language}</td>
      </tr>
      <tr>
        <td>Sättning</td>
        <td>{piece.setting}</td>
      </tr>
      <tr>
        <td>Antal exemplar</td>
        <td>{piece.quantity}</td>
      </tr>
    </>
  );
};

export default Piece;