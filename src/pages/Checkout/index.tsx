/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/button-has-type */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
  FaCheck,
  FaInfoCircle,
} from 'react-icons/fa';
import { CallbackArgument } from 'react-credit-cards';
import Cards from '../../lib/react-credit-cards/src/index.js';
import 'react-credit-cards/es/styles-compiled.css';
import Input from 'muicss/lib/react/input';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import {
  validateNumber,
  validateName,
  validateDate,
  validateCvc,
} from '../../utils';
import api from '../../services/api';

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
  Form,
  InputFlex,
  Error,
  CardComponent,
  Continuar,
  FillFields,
} from './styles';

const Checkout: React.FC = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const [parcela, setParcela] = useState('1000');
  const [maxLength, setMaxLength] = useState();
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [verifyNumber, setVerifyNumber] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isExpiryValid, setIsExpiryValid] = useState(true);
  const [isCvcValid, setIsCvcValid] = useState(true);
  const [fillFields, setFillFields] = useState(false);

  const handleInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocus(e.target.name);
  };

  const mask = (x: string, y: number, z: string) => {
    if (x.length > y) return x.slice(0, y) + z + x.slice(y);
    return x;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    if (e.target.name === 'number') {
      if (number.length === 4) value = mask(value, 4, ' ');
      if (number.length === 9) value = mask(value, 9, ' ');
      if (number.length === 14) value = mask(value, 14, ' ');
      setNumber(value);
    }

    if (e.target.name === 'name') {
      setName(value);
    }

    if (e.target.name === 'expiry') {
      if (expiry.length === 2) value = mask(value, 2, '/');
      setExpiry(value);
    }

    if (e.target.name === 'cvc') {
      setCvc(value);
    }
  };

  const verifyCreditCardNumber = (type: CallbackArgument, isValid: boolean) => {
    const length = type.maxLength + 3;
    setMaxLength(length);
    setVerifyNumber(isValid);
  };

  const handleSelecionarParcela = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParcela(e.target.value);
  };

  const handleConfirmarPagamento = async () => {
    if (number === '' || name === '' || expiry === '' || cvc === '') {
      return setFillFields(true);
    }
    const numberValid = validateNumber(number, verifyNumber);
    const nameValid = validateName(name);
    const dateValid = validateDate(expiry);
    const cvcValid = validateCvc(cvc);
    setIsNumberValid(numberValid);
    setIsNameValid(nameValid);
    setIsExpiryValid(dateValid);
    setIsCvcValid(cvcValid);
    setFillFields(false);

    if (numberValid && nameValid && dateValid && cvcValid) {
      try {
        const card = {
          number,
          name,
          cvc,
          expiry,
          parcela,
        };
        await api.post('/pagar', card);
      } catch (err) {
        console.log(err);
      }
    }

    return null;
  };

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

            <CardComponent>
              <Cards
                cvc={cvc}
                expiry={expiry}
                name={name}
                number={number}
                placeholders={{ name: 'NOME DO TÍTULAR' }}
                callback={verifyCreditCardNumber}
                focused={focus}
              />
            </CardComponent>

            <Form isNumberValid isNameValid isExpiryValid isCvcValid>
              <section>
                <Input
                  floatingLabel
                  label="Número do cartão"
                  type="numeric"
                  name="number"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={maxLength}
                  value={number}
                  className={`input-number ${isNumberValid}`}
                />
                {!isNumberValid && <Error>Número de cartão inválido</Error>}
              </section>

              <section>
                <Input
                  floatingLabel
                  type="text"
                  name="name"
                  label="Nome (igual ao cartão)"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`input-name ${isNameValid}`}
                />
                {!isNameValid && <Error>Insira seu nome completo</Error>}
              </section>

              <InputFlex>
                <section>
                  <Input
                    floatingLabel
                    type="text"
                    name="expiry"
                    label="Validade"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    value={expiry}
                    className={`input-expiry ${isExpiryValid}`}
                    maxLength={5}
                  />
                  {!isExpiryValid && <Error>Data inválida</Error>}
                </section>
                <section>
                  <Input
                    floatingLabel
                    type="text"
                    name="cvc"
                    label={
                      <div>
                        CVV <FaInfoCircle color="#ccc" size={12} />
                      </div>
                    }
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    maxLength={4}
                    className={`input-cvc ${isCvcValid}`}
                  />
                  {!isCvcValid && cvc.length > 0 && (
                    <Error>Código inválido</Error>
                  )}
                </section>
              </InputFlex>
              <Select
                defaultValue={parcela}
                label="Número de parcelas"
                onChange={handleSelecionarParcela}
              >
                <Option value="1000" label="1x de R$ 1000,00" />
                <Option value="500" label="2x de R$ 500,00" />
                <Option value="333" label="3x de R$ 333,00" />
                <Option value="250" label="4x de R$ 250,00" />
              </Select>
            </Form>
            {fillFields && <FillFields>Preencha todos os campos</FillFields>}

            <Continuar>
              <button onClick={handleConfirmarPagamento}>Continuar</button>
            </Continuar>
          </InfoContainer>
        </CheckoutCard>
      </Page>
    </>
  );
};

export default Checkout;
