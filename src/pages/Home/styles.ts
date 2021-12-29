import styled from 'styled-components';
 
export const Container = styled.div`
   display: flex;
   align-items: stretch;
   height: 100vh;
`;

export const Aside = styled.aside`
    flex: 7;

    background: #835afd;
    color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;
`;

export const Illustration = styled.img`
    max-width: 320px;
`;

export const AsideTitle = styled.strong`
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top:16px;
`;
export const AsideText = styled.text`
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8; 
`;
export const Main = styled.main`
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;
`;
export const Logo = styled.img`
    align-self: center;
`;
export const MainButton = styled.button`
    
`;
export const GoogleIcon = styled.img``;
export const Line = styled.div``;
export const Form = styled.form`
    
`;
export const FormInput = styled.input`
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: #FFF;
    border: 1px solid #a8a8b3;
    width: 100%;
`;
export const FormButton = styled.button`
    margin-top: 16px;
    width: 100%;
`;
