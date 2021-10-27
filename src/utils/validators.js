import {
  schoolYears as schoolYearOptions,
  schoolTypes as schoolTypeOptions,
  disciplines as disciplineOptions,
  timesReproved as timesReprovedOptions,
  federativeUnits as federativeUnitOptions,
} from "../utils/staticInfo";

export function usernameValidator(username, setError) {
  if (!username) {
    setError("Este campo é obrigatório!");
  } else if (username.length < 4) {
    setError("Nome de usuário deve ter no mínimo 4 caracteres!");
  } else if (username.length > 16) {
    setError("Nome de usuário deve ter no máximo 16 caracteres!");
  } else {
    setError(null);
    return username;
  }
}

export function passwordValidator(password, setError) {
  if (!password) {
    setError("Este campo é obrigatório!");
  } else if (password.length < 8) {
    setError("Senha deve ter no mínimo 8 caracteres!");
  } else {
    setError(null);
    return password;
  }
}

export function checkPasswordValidator(checkPassword, password, setError) {
  if (!checkPassword) {
    setError("Este campo é obrigatório!");
  } else if (password !== checkPassword) {
    setError("Senhas incompatíveis!");
  } else {
    setError(null);
    return checkPassword;
  }
}

export function nameValidator(name, setError) {
  if (!name) {
    setError("Este campo é obrigatório!");
  } else if (name.length > 100) {
    setError("Nome deve ter no máximo 100 caracteres!");
  } else {
    setError(null);
    return name;
  }
}

export function emailValidator(email, setError) {
  if (!email) {
    setError("Este campo é obrigatório!");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("Email inválido!");
  } else {
    setError(null);
    return email;
  }
}

export function schoolYearValidator(schoolYear, setError) {
  if (!schoolYear) {
    setError("Este campo é obrigatório!");
  } else if (!schoolYearOptions.some((option) => option.value === schoolYear)) {
    setError("Ano escolar inválido!");
  } else {
    setError(null);
    return schoolYear;
  }
}

export function schoolTypeValidator(schoolType, setError) {
  if (!schoolType) {
    setError("Este campo é obrigatório!");
  } else if (!schoolTypeOptions.some((option) => option.value === schoolType)) {
    setError("Tipo de escola inválido!");
  } else {
    setError(null);
    return schoolType;
  }
}

export function weakDisciplinesValidator(weakDisciplines, setError) {
  if (
    !weakDisciplines.every((element) =>
      disciplineOptions.some((option) => option.value === element)
    )
  ) {
    setError("Disciplinas inválidas!");
  } else {
    setError(null);
    return weakDisciplines;
  }
}

export function timesReprovedValidator(timesReproved, setError) {
  if (!timesReproved && timesReproved !== 0) {
    setError("Este campo é obrigatório!");
  } else if (
    !timesReprovedOptions.some((option) => option.value === timesReproved)
  ) {
    setError("Número de reprovações inválido!");
  } else {
    setError(null);
    return timesReproved;
  }
}

export function federativeUnitValidator(federativeUnit, setError) {
  if (!federativeUnit) {
    setError("Este campo é obrigatório!");
  } else if (
    !federativeUnitOptions.some((option) => option.value === federativeUnit)
  ) {
    setError("Unidade federativa inválida!");
  } else {
    setError(null);
    return federativeUnit;
  }
}
