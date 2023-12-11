import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
	--color-primary: #fd377e;
	--color-primary-2: #e34981;
	--color-secondary: #03b898;
	--color-gray-4: #212529;
	--color-gray-3: #343a40;
	--color-gray-2: #e9ecef;
	--color-gray-1: #f8f9fa;

    --font-primary: 'Nunito', sans-serif;
	--font-secondary: 'Inter', sans-serif;
}

    * {
		font-family: var(--font-primary);
        color: var(--color-gray-4);
	}
`;
