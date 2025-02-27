import { ThemeProvider } from 'styled-components';
import theme from "./src/app/styles/theme";
import { ReactElement } from 'react';
import { render } from '@testing-library/react';

const renderWithTheme = (
    ui: ReactElement,
  ) =>
    render(
      <ThemeProvider theme={theme}>
            {ui}
      </ThemeProvider>
    )
  
  export * from '@testing-library/react'
  export { renderWithTheme as render }