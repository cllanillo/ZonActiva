export function createTheme() {
    return {}; // Devuelve tema vacío
}

export function generateAtomics() {
    // No hacer nada en SSR
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return children;
};

export const useTheme = () => ({});
