import AuthProvider from "@/app/components/SessionProvider";
import Navbar from "@/components/Navbar"; // Importa el nuevo provider

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
            <Navbar />
            {children}
        </AuthProvider>
      </body>
    </html>
  );
}
