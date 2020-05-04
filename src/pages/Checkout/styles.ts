import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: #fff;
  border-bottom: 1px solid #ccc;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    width: 1120px;
    margin: 0 auto;
  }

  div {
    display: flex;
    align-items: center;
    margin-left: 10px;
    opacity: 0.5;
  }
`;

export const Menu = styled.div`
  background: #3c3c3c;
  width: 100px;
  height: 18px;
  border-radius: 5px;
`;

export const Page = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;
`;

export const CheckoutCard = styled.div`
  width: 1024px;
  min-height: 600px;
  display: flex;
  background: #fff;
  margin-top: 65px;
  border: 1px solid #eee;
`;

export const FormaPagamento = styled.div`
  background: #de4b4b;
  color: #fff;
  width: 352px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 53px;
    font-size: 13px;
    cursor: pointer;
  }
`;

export const TextoNovoCartao = styled.div`
  display: flex;
  align-items: center;
  margin-top: 54px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    margin-left: 64px;
    margin-right: 15px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 50px 50px 50px 180px;
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
`;

export const Crumb = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #de4b4b;
  margin: 0 14px;
`;

export const Checked = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #de4b4b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const Unchecked = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #de4b4b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const Continuar = styled.button`
  background: #de4b4b;
  border-radius: 10px;
  width: 246px;
  height: 51px;
  color: #fff;
  text-transform: uppercase;
  margin-top: 60px;
`;
