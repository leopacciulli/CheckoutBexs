import styled from 'styled-components';

interface CardProps {
  isNumberValid?: boolean;
  isNameValid?: boolean;
  isExpiryValid?: boolean;
  isCvcValid?: boolean;
}

export const Page = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    max-width: 360px;
  }
`;

export const CheckoutCard = styled.div`
  min-height: 600px;
  display: flex;
  background: #fff;
  margin-top: 150px;
  border: 1px solid #eee;
  position: relative;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormaPagamento = styled.div`
  background: #de4b4b;
  color: #fff;
  width: 352px;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 260px;
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    width: 100%;
    height: 239px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 54px;
    font-size: 13px;
    cursor: pointer;

    @media only screen and (min-width: 360px) and (max-width: 767px) {
      margin-top: 34px;
    }
  }
`;

export const TextoNovoCartao = styled.div`
  display: flex;
  align-items: center;
  margin-top: 54px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
    margin-top: 34px;
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    margin-top: 24px;
    padding: 0 70px;
    font-size: 16px;
    div {
      text-align: end;
    }
  }

  img {
    width: 50px;
    height: 50px;
    margin-left: 64px;
    margin-right: 15px;

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      width: 40px;
      height: 40px;
      margin-left: 34px;
    }

    @media only screen and (min-width: 360px) and (max-width: 767px) {
      width: 40px;
      height: 40px;
      margin: 0px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 50px 50px 50px 180px;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 50px;
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    padding: 30px;
    align-items: center;
  }
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    display: none;
  }
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

export const InputFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 360px) and (max-width: 1023px) {
    section {
      width: 45%;
    }
  }
`;

export const Form = styled.div`
  margin-top: 70px;
  width: 100%;

  @media only screen and (min-width: 360px) and (max-width: 1023px) {
    width: 100%;
    margin-top: 20px;
  }

  section {
    min-height: 80px;

    div.input-number.false {
      input {
        border-bottom: ${({ isNumberValid }: CardProps): string =>
          isNumberValid ? '2px solid #EB5757' : ''};
      }
    }

    div.input-name.false {
      input {
        border-bottom: ${({ isNameValid }: CardProps): string =>
          isNameValid ? '2px solid #EB5757' : ''};
      }
    }

    div.input-expiry.false {
      input {
        border-bottom: ${({ isExpiryValid }: CardProps): string =>
          isExpiryValid ? '2px solid #EB5757' : ''};
      }
    }

    div.input-cvc.false {
      input {
        border-bottom: ${({ isCvcValid }: CardProps): string =>
          isCvcValid ? '2px solid #EB5757' : ''};
      }
    }
  }
`;

export const Error = styled.div`
  color: #eb5757;
  font-size: 13px;
  margin-top: -17px;
`;

export const CardComponent = styled.div`
  position: absolute;
  left: 65px;
  top: 200px;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    margin-top: 30px;
    position: relative;
    top: 0;
    left: 0;
  }

  @media only screen and (min-width: 360px) and (max-width: 767px) {
    margin-top: -130px;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
  }

  div.rccs {
    width: 330px;
    @media only screen and (min-width: 360px) and (max-width: 767px) {
      width: initial;
    }
    div.rccs__card {
      width: 330px;
      @media only screen and (min-width: 360px) and (max-width: 767px) {
        width: initial;
      }
      div.rccs__card--front {
        background: linear-gradient(25deg, #a7a7a7, #797979);
        @media only screen and (min-width: 360px) and (max-width: 767px) {
          box-shadow: 0 12px 12px -10px #636363;
        }
      }
      div.rccs__card--back {
        background: linear-gradient(25deg, #797979, #a7a7a7);
        @media only screen and (min-width: 360px) and (max-width: 767px) {
          box-shadow: 0 12px 12px -10px #636363;
        }

        div.rccs__signature {
          height: 12%;
          width: 50%;
          top: 40%;
        }

        div.rccs__cvc {
          background: #fff;
          height: 12%;
          top: 40%;
          left: 55%;
          width: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;

export const FillFields = styled.div`
  color: #de4b4b;
  font-weight: bold;
`;

export const Continuar = styled.div`
  margin-top: 60px;

  @media only screen and (min-width: 360px) and (max-width: 1023px) {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      width: 100%;
    }
  }

  button {
    width: 246px;
    height: 51px;
    border-radius: 10px;
    color: #fff;
    text-transform: uppercase;
    background: #de4b4b;

    @media only screen and (min-width: 360px) and (max-width: 1023px) {
      width: 100%;
      font-weight: bold;
    }
  }
`;
