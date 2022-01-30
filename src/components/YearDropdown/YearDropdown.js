import { eachYearOfInterval } from 'date-fns';
import { Listbox, ListboxOption } from '@reach/listbox';
import VisuallyHidden from '@reach/visually-hidden';
import styled from 'styled-components/macro';

import { getYearString } from '../../utils/date';

const YearDropdown = ({ year, setYear }) => {
  const dateYearsInterval = eachYearOfInterval({
    start: new Date('2020'),
    end: new Date(),
  });
  const yearsList = dateYearsInterval.map((date) => getYearString(date)).reverse();
  const yearsListOption = yearsList.map((year, index) => (
    <ListboxOption key={index} value={year}>
      {year}
    </ListboxOption>
  ));
  return (
    <>
      <VisuallyHidden id="year-label">Choose a year</VisuallyHidden>
      <ListboxCustom aria-labelledby="year-label" value={year} onChange={setYear}>
        {yearsListOption}
      </ListboxCustom>
    </>
  );
};

const ListboxCustom = styled(Listbox)`
  background-color: var(--color-white);
`;

export default YearDropdown;
