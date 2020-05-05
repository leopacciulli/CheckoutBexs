/* eslint-disable no-plusplus */
// Verifica se não foi digitado letra no campo do número
export function validateNumber(number: string, valid: boolean): boolean {
  const regex = /[0-9]$/;
  const isNumberValid = regex.test(number);
  return isNumberValid && valid;
}

// Verifica se o nome do usuário não contém apenas "o pimeiro nome"
export function validateName(name: string): boolean {
  let errorName = false;
  const split = name.trim().split(' ');
  for (let i = 0; i < split.length; i++) {
    if (name !== '' && (split.length < 2 || split[i].length < 2)) {
      errorName = false;
    } else {
      errorName = true;
    }
  }

  return errorName;
}

// Verifica se não foi digitado uma data fora do padrão
export function validateDate(date: string): boolean {
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{5}|[0-9]{2})$/;
  const isDateValid = regex.test(date);
  return isDateValid;
}

// Verifica o campo cvc
export function validateCvc(cvc: string): boolean {
  if (cvc.length < 3) {
    return false;
  }
  return true;
}
