import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const authOptions = {
    providers: [GitHub],
};

// Configuración de NextAuth
const authHandler = NextAuth(authOptions);

export const { handlers } = authHandler; // Para manejar autenticación en API Routes
export { authHandler as GET, authHandler as POST }; // Exporta los manejadores de API para Next.js

export default authHandler;
