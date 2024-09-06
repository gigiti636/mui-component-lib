import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { themeDark as BackofficeDark, themeLight as BackofficeLight } from '../src/theme/back_office_theme';
import { themeDark as ExpenseDark, themeLight as ExpenseLight } from '../src/theme/expense_app_theme';
import { createTheme } from '@mui/material/styles';
import { PageLayout } from '../src/components/page';

import { enUS } from '@mui/material/locale';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const withPageLayout = (
  storyFn: () =>
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined,
  context: { kind: any },
) => {
  const { kind } = context;

  if (kind && (kind.toLowerCase().includes('common-pages') || kind.toLowerCase().includes('page'))) {
    return storyFn();
  }

  return <PageLayout height={'95%'}>{storyFn()}</PageLayout>;
};

const themes = {
  lightBackoffice: createTheme(BackofficeLight, enUS),
  darkBackoffice: createTheme(BackofficeDark, enUS),
  lightExpense: createTheme(ExpenseLight, enUS),
  darkExpense: createTheme(ExpenseDark, enUS),
};

export const storyDecorators = [
  withPageLayout,
  withThemeFromJSXProvider({
    themes: themes,
    defaultTheme: 'lightExpense',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
