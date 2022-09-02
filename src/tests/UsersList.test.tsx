import React from 'react';
import {render, screen} from '@testing-library/react';
import UsersList from "../components/App/UsersList/UsersList";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


test("The UsersList rendering correctly", () => {
    const queryClient = new QueryClient();
    const {container} = render(<QueryClientProvider client={queryClient}><UsersList/></QueryClientProvider>);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass('UsersList')
    const headerText = screen.getByText(/Users/i);
    expect(headerText).toBeInTheDocument();
});
