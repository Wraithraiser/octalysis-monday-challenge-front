import styled from 'styled-components/macro';
import { differenceInYears } from 'date-fns';
import { QUERIES } from '../../utils/constants';

const About = () => {
  const yearSinceJoinOctalysisPrime = differenceInYears(new Date(), new Date('01/06/2019'));

  return (
    <Wrapper>
      <Title>What is the Octalysis Mini&nbsp;Challenge?</Title>
      <Text>
        Octalysis Mini Challenge is a weekly event for Octalysis Prime members happening in the Slack community. It's a
        safe and fun place for primers to put their knowledge into practice and learn from others.
      </Text>
      <Text>The Octalysis Prime team proposes challenges, but primers can also host the event for the week.</Text>
      <Separator />
      <Title>Why this website?</Title>
      <Text>
        Only the most recent 10,000 messages can be viewed and searched in the Slack free version. I built this website
        to save the content of the mini-challenge. The challenges are good, and there are a lot of quality answers from
        the community. I wanted to preserve the hard work of everyone and let new members discover previous challenges.
      </Text>
      <Separator />
      <Title>Who are you?</Title>
      <Text>
        I'm a software developer from France and an Octalysis Prime member. I joined the community{' '}
        {yearSinceJoinOctalysisPrime}&nbsp;years ago to learn more about gamification and found that the Octalysis
        Framework is practical and fun to apply in many situations.
      </Text>
      <Separator />
      <Title>Want to know more about Octalysis?</Title>
      <Text>Yu-kai Chou created the Octalysis Framework.</Text>
      <Link href="https://yukaichou.com/gamification-expert/" target="_blank" rel="noopener">
        Who is Yu-Kai Chou?
      </Link>
      <Link
        href="https://yukaichou.com/gamification-examples/octalysis-complete-gamification-framework/"
        target="_blank"
        rel="noopener"
      >
        What is the Octalysis Framework?
      </Link>
      <Link href="https://join.octalysisprime.com/" target="_blank" rel="noopener">
        What is Octalysis Prime?
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1.25rem;
  }
`;

const Text = styled.p`
  text-align: justify;
  padding: 0px 16px;
`;

const Separator = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border: 1px solid var(--color-gray-100);
`;

const Link = styled.a`
  padding: 0px 16px;
  color: var(--color-blue-link);

  &:hover {
    color: var(--color-blue-link-hover);
  }
`;

export default About;
