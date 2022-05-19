import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(255,255,255, 0.1)'
      }
    },
    typography: {
      button: {
        textTransform: 'initial'
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              fontSize: '16px',
              lineHeight: '16px',
              fontWeight: 400,
              width: '100%',
              padding: '16px 0',
              borderRadius: '30px',
              boxShadow: 'none',
              color: '#fff',
            },
          },
        ],
      },
    },
  })