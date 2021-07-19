import * as React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { nav_links } from '../../utils/content';
import { NavLinksProps } from '@types';

const Nav: React.FC = React.memo(
  (): JSX.Element => (
    <Box display={['none', null, 'block']} as="nav">
      <Flex as="ul" listStyleType="none" marginBlock="0" marginInline="0" paddingInline="0">
        {nav_links.map(
          ({ name, url, emoji }: NavLinksProps): JSX.Element => (
            <Box key={name} as="li" m={['1rem 0 1rem 50px', null, '0 0 0 1.2rem']}>
              <Box
                as="a"
                href={url}
                className="remove-tap-highlight"
                fontFamily="monospace"
                fontSize="1.04rem"
                _hover={{
                  bg: 'linear-gradient(0deg, var(--chakra-colors-brand-primary) 15%, rgba(0,0,0,0) 15%)',
                }}>
                {name}
                <Box as="span" color="brand.primary" pl="5px">
                  {emoji}
                </Box>
              </Box>
            </Box>
          )
        )}
      </Flex>
    </Box>
  )
);

Nav.displayName = 'Navigation';

export default Nav;
