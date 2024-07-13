import styled from '@emotion/styled';
import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';

import apiClient from '@/api/index';
import type { GetThemesResponse, ThemeData } from '@/api/types/apiTypes';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { useThemes } from '@/hooks/useThemes';
import { getDynamicPath } from '@/routes/path';
import ErrorMessage from '@/styles/ErrorMessage';
import Loading from '@/styles/Loading';
import { breakpoints } from '@/styles/variants';

import { ThemeCategoryItem } from './ThemeCategoryItem';

export const ThemeCategorySection = () => {

  const [themeData, { isLoading, isError, errorMessage}] = useThemes();

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !themeData) {
    return (
      <ErrorMessage>
        에러가 발생했습니다.
        <br />
        {errorMessage}
      </ErrorMessage>
    )
  }
  return (
    <Wrapper>
      <Container>
        <Grid
          columns={{
            initial: 4,
            md: 6,
          }}
        >
          {themeData && themeData.map((theme) => {
            return (
              <Link
                key={theme.id}
                to={getDynamicPath.theme(theme.key)}
              >
                <ThemeCategoryItem image={theme.imageURL} label={theme.label}/>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 14px 14px 3px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 45px 52px 23px;
  }
`;