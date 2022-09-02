import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../components/App/App';
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'

test("The application started correctly, the main component is displayed", () => {
    const queryClient = new QueryClient();
    render(<QueryClientProvider client={queryClient}>
        <App/>
    </QueryClientProvider>);
    const headerText = screen.getByText(/StarGo Test Task/i);
    expect(headerText).toBeInTheDocument();
});
