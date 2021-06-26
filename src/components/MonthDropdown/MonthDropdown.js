import { Listbox, ListboxOption } from '@reach/listbox';
import VisuallyHidden from '@reach/visually-hidden';

const MonthDropdown = ({ month, setMonth }) => {
  return (
    <>
      <VisuallyHidden id="month-label">Choose a month</VisuallyHidden>
      <Listbox aria-labelledby="month-label" value={month} onChange={setMonth}>
        <ListboxOption value="January">January</ListboxOption>
        <ListboxOption value="February">February</ListboxOption>
        <ListboxOption value="March">March</ListboxOption>
        <ListboxOption value="April">April</ListboxOption>
        <ListboxOption value="May">May</ListboxOption>
        <ListboxOption value="June">June</ListboxOption>
        <ListboxOption value="July">July</ListboxOption>
        <ListboxOption value="August">August</ListboxOption>
        <ListboxOption value="September">September</ListboxOption>
        <ListboxOption value="October">October</ListboxOption>
        <ListboxOption value="November">November</ListboxOption>
        <ListboxOption value="December">December</ListboxOption>
      </Listbox>
    </>
  );
};

export default MonthDropdown;
