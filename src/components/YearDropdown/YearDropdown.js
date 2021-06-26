import { Listbox, ListboxOption } from '@reach/listbox';
import VisuallyHidden from '@reach/visually-hidden';

const YearDropdown = ({ year, setYear }) => {
  return (
    <>
      <VisuallyHidden id="year-label">Choose a year</VisuallyHidden>
      <Listbox aria-labelledby="year-label" value={year} onChange={setYear}>
        <ListboxOption value="2020">2020</ListboxOption>
        <ListboxOption value="2021">2021</ListboxOption>
      </Listbox>
    </>
  );
};

export default YearDropdown;
