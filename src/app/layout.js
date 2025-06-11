import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Email Subscription App</title>
        <meta name="description" content="Subscribe to our email list!" />
      </head>
      <body>
        <header>
         
        </header>
        {children}
      </body>
    </html>
  );
}