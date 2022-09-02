import React from 'react';
import {render, screen} from '@testing-library/react';
import UserInfo from "../../src/components/App/UsersList/UserInfo/UserInfo";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {renderHook, act} from '@testing-library/react-hooks'
import ImitateSetIsVisible from "./CustomHooksForTests/ImitateSetIsVisible";
import ImitateSetUserInfo from "./CustomHooksForTests/ImitateSetUserInfo";

test("The application started correctly, the main component is displayed", () => {
    const queryClient = new QueryClient();
    const {result: visibleResult} = renderHook(() => ImitateSetIsVisible())
    const {result: userInfoResult} = renderHook(() => ImitateSetUserInfo())

    act(() => {
        visibleResult.current.setFakeVisible()
        userInfoResult.current.setFakeUserInfo()
    })


    render(<QueryClientProvider client={queryClient}>
        <UserInfo isVisible={visibleResult.current.isVisible} setIsVisible={visibleResult.current.setFakeVisible}
                  userInfo={userInfoResult.current.userInfo}/>
    </QueryClientProvider>);
    const firstName = screen.getByText(/Rick/i);
    const lastName = screen.getByText(/Smith/i);
    const age = screen.getByText(/64/i);
    const gender = screen.getByText(/Male/i);
    const country = screen.getByText(/UnitedStates/i);


    expect(visibleResult.current.isVisible).toBe(true)
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(country).toBeInTheDocument();
});
