import React from 'react';
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa';

import logo from '../../assets/logo.png';
import addcard from '../../assets/addcard.png';

import {
  Page,
  HeaderContainer,
  Menu,
  CheckoutCard,
  FormaPagamento,
  TextoNovoCartao,
  InfoContainer,
  Breadcrumbs,
  Crumb,
  Checked,
  Unchecked,
  Continuar,
} from './styles';

const Checkout: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <header>
          <img src={logo} alt="logo" />
          <div>
            <Menu />
            <Menu />
            <Menu />
            <Menu />
            <Menu />
          </div>
        </header>
      </HeaderContainer>
      <Page>
        <CheckoutCard>
          <FormaPagamento>
            <p>
              <FaAngleLeft color="#fff" size={18} />
              Alterar forma de pagamento
            </p>
            <TextoNovoCartao>
              <img src={addcard} alt="card icon" />
              Adicione um novo cartão de crédito
            </TextoNovoCartao>
          </FormaPagamento>
          <InfoContainer>
            <Breadcrumbs>
              <Crumb>
                <Checked>
                  <FaCheck color="#fff" size={12} />
                </Checked>
                Carrinho
              </Crumb>
              <FaAngleRight color="#DE4B4B" size={16} />
              <Crumb>
                <Unchecked>2</Unchecked>
                Pagamento
              </Crumb>
              <FaAngleRight color="#DE4B4B" size={16} />
              <Crumb>
                <Unchecked>3</Unchecked>
                Confirmação
              </Crumb>
            </Breadcrumbs>

            <Continuar onClick={() => console.log('oi')}>Continuar</Continuar>
          </InfoContainer>
        </CheckoutCard>
      </Page>
    </>
  );
};

export default Checkout;
