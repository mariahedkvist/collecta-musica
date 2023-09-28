import PageHeader from '../../components/ui/PageHeader';
import Form from '../../components/form/Form';

import './newpiece.css';

const NewPiece = ({ onAddPiece }) => {
  const inputs = [
    { name: 'title', placeholder: 'Titel' },
    { name: 'published', placeholder: 'Publikationsår' },
    { name: 'composerFirstName', placeholder: 'Kompositör (förnamn)' },
    { name: 'composerLastName', placeholder: 'Kompositör (efternamn)' },
    { name: 'language', placeholder: 'Språk' },
    { name: 'setting', placeholder: 'Sättning' },
    { name: 'quantity', placeholder: 'Antal' },
  ];
  return (
    <>
      <PageHeader headertext={'Lägg till stycke'} />
      <main>
        <Form onSubmit={onAddPiece} inputs={inputs} />
      </main>
    </>
  );
};

export default NewPiece;
