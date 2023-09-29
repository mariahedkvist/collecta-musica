import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import Table from '../../components/library/Table';
import Piece from '../../components/library/Piece';
import PageHeader from '../../components/ui/PageHeader';

const PieceDetails = () => {
  const [queryParameters] = useSearchParams();
  const url = `http://localhost:5020/api/v1/pieces/${queryParameters.get(
    'id'
  )}`;

  const [piece, setPiece] = useState([]);

  useEffect(() => {
    const loadPiece = async () => {
      const { data } = await axios.get(url);
      setPiece(data);
    };
    loadPiece();
  }, []);

  const tableHeadings = [''];
  const tableContents = <Piece piece={piece} />;

  return (
    <>
      <PageHeader headertext={piece.title} />
      <main>
        <Table tableHeadings={tableHeadings} tableContents={tableContents} />;
      </main>
    </>
  );
};

export default PieceDetails;
