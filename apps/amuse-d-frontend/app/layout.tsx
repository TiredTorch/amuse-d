import "./global.scss";

export const metadata = {
	title: {
		default: "Amuse-d",
		template: "%s | Amuse-d"
	}
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
