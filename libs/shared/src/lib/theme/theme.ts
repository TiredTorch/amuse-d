import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: true;
		xxs: true;
		mb: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			xxs: 360,
			mb: 375,
			sm: 700,
			md: 991,
			lg: 1024,
			xl: 1440
		}
	},
	palette: {
		primary: {
			light: "#FFC107",
			main: "#FF5722",
			dark: "#2196F3"
		},
		secondary: {
			light: "#CCCCCC",
			main: "#FFFFFF",
			dark: "#333333"
		}
	}
});