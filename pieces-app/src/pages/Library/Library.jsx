import { Link } from 'react-router-dom';

import Table from '../../components/library/Table';
import PageHeader from '../../components/ui/PageHeader';
import Pieces from '../../components/library/Pieces';

import './library.css';

const Library = ({ pieces }) => {
  const onFilterPieces = (e) => {
    const pieces = document.querySelectorAll('.title');
    const value = e.target.value.toLowerCase();

    pieces.forEach((item) => {
      const itemName = item.firstChild.textContent.toLowerCase();
      if (itemName.indexOf(value) !== -1) {
        // dvs om vi inte hittar ngt
        item.parentElement.style.display = 'table-row';
      } else {
        item.parentElement.style.display = 'none';
      }
    });
  };

  const tableHeadings = ['Titel', 'Kompositör'];
  const tableContents = <Pieces pieces={pieces}/>

  return (
    <>
      <header>
        <PageHeader headertext="Notbibliotek" />
      </header>
      <main>
        <section className="filter-area">
          <input type="text" id="filter" placeholder="Sök" onInput={onFilterPieces}/>
          <Link to="/library/new">Lägg till stycke</Link>
        </section>
        <Table tableHeadings={tableHeadings} tableContents={tableContents} />
      </main>
    </>
  );
};

export default Library;
