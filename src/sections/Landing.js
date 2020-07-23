import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text, Image } from 'rebass/styled-components';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import { InlineWidget } from 'react-calendly';
import styled from 'styled-components';

const ProfilePicture = styled(Image)`
  transition: all 0.25s ease-out;
`;
const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
            headerImage {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => {
        const { name, headerImage } = contentfulAbout;
        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[6, 7]}
              mb={[3, 4, 5]}
            >
              {`Hey, I'm ${name}!`}
            </Heading>
            <Box width={[1, 1, 1 / 2]} px={[1, 2, 4]}>
              <InlineWidget
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: true,
                  primaryColor: '00a2ff',
                  textColor: '4d5055',
                }}
                prefill={{
                  customAnswers: {
                    a1: 'a1',
                    a10: 'a10',
                    a2: 'a2',
                    a3: 'a3',
                    a4: 'a4',
                    a5: 'a5',
                    a6: 'a6',
                    a7: 'a7',
                    a8: 'a8',
                    a9: 'a9',
                  },
                  email: 'test@test.com',
                  firstName: 'Jon',
                  lastName: 'Snow',
                  name: 'Jon Snow',
                }}
                styles={{ height: 500 }}
                url="https://calendly.com/amandabelldevelopment/30min"
              />
            </Box>
            <Box width={[1, 1, 1 / 4]} px={[1, 2, 4]}>
              <ProfilePicture
                src={headerImage.image.src}
                alt={headerImage.title}
                mt={[4, 4, 0]}
                ml={[0, 0, 1]}
              />
            </Box>

            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
