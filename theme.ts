import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: 'rgba(255,255,255, 0.1)'
      },
      background: {
        default: "#3070CC",
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
      MuiDialog: {
        styleOverrides: {
          paper: {
            maxWidth: '350px',
            color: '#fff',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255, 0.2)',
            backgroundColor: '#145ECA',
            backgroundImage: 'none'
          }
        }
      },
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: '#145ECA',
          }
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#145ECA',
            backgroundImage: 'none'
          }
        }
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            backgroundColor: '#C2D3ED',
            borderRadius: '5px',
            transform: 'none' 
          }
        }
      }
    },
  })