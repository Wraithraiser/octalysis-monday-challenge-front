import { Listbox, ListboxOption } from '@reach/listbox';
import VisuallyHidden from '@reach/visually-hidden';
import styled from 'styled-components/macro';

const YearDropdown = ({ year, setYear }) => {
  return (
    <>
      <VisuallyHidden id="year-label">Choose a year</VisuallyHidden>
      <ListboxCustom aria-labelledby="year-label" value={year} onChange={setYear}>
        <ListboxOption value="2020">2020</ListboxOption>
        <ListboxOption value="2021">2021</ListboxOption>
      </ListboxCustom>
    </>
  );
};

const ListboxCustom = styled(Listbox)`
  background-color: var(--color-white);
`;

export default YearDropdown;
