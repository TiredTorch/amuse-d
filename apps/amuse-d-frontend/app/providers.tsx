"use client";
import { FC, PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@amuse-d/shared";

const Providers: FC<PropsWithChildren> = ({
	children
}) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			{children}
		</ThemeProvider>
	);
};

export default Providers;