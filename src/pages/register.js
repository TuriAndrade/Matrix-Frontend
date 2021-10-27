import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import api from "../utils/api";
import { Items, PencilGuy2 } from "../svgs/background";
import { ArrowLeft2, ArrowRight2 } from "../svgs/icons";
import {
  schoolYears as schoolYearOptions,
  schoolTypes as schoolTypeOptions,
  disciplines as disciplineOptions,
  timesReproved as timesReprovedOptions,
  federativeUnits as federativeUnitOptions,
} from "../utils/staticInfo";
import ControlledInput from "../components/controlledInput";
import ControlledSelect from "../components/controlledSelect";
import ControlledCheckbox from "../components/controlledCheckbox";
import {
  nameFormatter,
  usernameFormatter,
  emailFormatter,
  passwordFormatter,
} from "../utils/formatters";
import {
  nameValidator,
  emailValidator,
  usernameValidator,
  passwordValidator,
  checkPasswordValidator,
  schoolYearValidator,
  schoolTypeValidator,
  weakDisciplinesValidator,
  timesReprovedValidator,
  federativeUnitValidator,
} from "../utils/validators";

export default function Register() {
  const [formSection, setFormSection] = useState(1);

  const [errorRegister, setErrorRegister] = useState(null);
  const [successRegister, setSuccessRegister] = useState(null);
  const [loadingRegister, setLoadingRegister] = useState(false);

  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(null);

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);

  const [username, setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState(null);

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(null);

  const [checkPassword, setCheckPassword] = useState("");
  const [errorCheckPassword, setErrorCheckPassword] = useState(null);

  const [schoolYear, setSchoolYear] = useState(null);
  const [errorSchoolYear, setErrorSchoolYear] = useState(null);

  const [schoolType, setSchoolType] = useState(null);
  const [errorSchoolType, setErrorSchoolType] = useState(null);

  const [weakDisciplines, setWeakDisciplines] = useState([]);
  const [errorWeakDisciplines, setErrorWeakDisciplines] = useState(null);

  const [timesReproved, setTimesReproved] = useState(null);
  const [errorTimesReproved, setErrorTimesReproved] = useState(null);

  const [federativeUnit, setFederativeUnit] = useState(null);
  const [errorFederativeUnit, setErrorFederativeUnit] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const pushTimeout = () => setTimeout(() => router.push("/login"), 2000);

    if (successRegister) {
      pushTimeout();
    }

    return () => clearTimeout(pushTimeout);
  }, [successRegister]);

  useEffect(() => {
    if (
      errorName ||
      errorEmail ||
      errorUsername ||
      errorPassword ||
      errorCheckPassword
    ) {
      setFormSection(1);
    } else if (errorSchoolYear || errorSchoolType) {
      setFormSection(2);
    } else if (errorWeakDisciplines) {
      setFormSection(3);
    } else if (errorTimesReproved || errorFederativeUnit) {
      setFormSection(4);
    }
  }, [
    errorName,
    errorEmail,
    errorUsername,
    errorPassword,
    errorCheckPassword,
    errorSchoolYear,
    errorSchoolType,
    errorWeakDisciplines,
    errorTimesReproved,
    errorFederativeUnit,
  ]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (formSection < 5) {
      setFormSection((previous) => previous + 1);
    } else {
      setLoadingRegister(true);

      const data = {
        name: nameValidator(name, setErrorName),
        email: emailValidator(email, setErrorEmail),
        username: usernameValidator(username, setErrorUsername),
        password: passwordValidator(password, setErrorPassword),
        checkPassword: checkPasswordValidator(
          checkPassword,
          password,
          setErrorCheckPassword
        ),
        schoolYear: schoolYearValidator(schoolYear, setErrorSchoolYear),
        schoolType: schoolTypeValidator(schoolType, setErrorSchoolType),
        weakDisciplines: weakDisciplinesValidator(
          weakDisciplines,
          setErrorWeakDisciplines
        ),
        timesReproved: timesReprovedValidator(
          timesReproved,
          setErrorTimesReproved
        ),
        federativeUnit: federativeUnitValidator(
          federativeUnit,
          setErrorFederativeUnit
        ),
      };

      if (
        Object.keys(data).every((entry) => !!data[entry] || data[entry] === 0)
      ) {
        try {
          await api.post("/student", data);
          setSuccessRegister("Cadastro efetuado com sucesso!");
          setErrorRegister(null);
        } catch (e) {
          setSuccessRegister(null);

          const error = e.response.data.error;

          if (error) {
            if (error.code === "exists" && error.attr === "username") {
              setErrorUsername("Nome de usuário em uso!");
            } else if (error.code === "exists" && error.attr === "email") {
              setErrorEmail("Email em uso!");
            } else setErrorRegister("Erro ao efetuar o cadastro!");
          } else {
            setErrorRegister("Erro ao efetuar o cadastro!");
          }
        } finally {
          setFormSection(6);
          setLoadingRegister(false);
        }
      }
    }
  }

  return (
    <div className="registerPage">
      <Items className="registerPage__backgroundItems" />
      <PencilGuy2 className="registerPage__backgroundGuy" />
      <div className="registerPage__main">
        <form
          onSubmit={handleSubmit}
          className={
            successRegister
              ? "form form--success"
              : errorRegister
              ? "form form--error"
              : "form"
          }
        >
          {formSection === 1 && (
            <>
              <ControlledInput
                placeholder="Nome"
                label="Nome"
                type="text"
                state={name}
                setState={setName}
                formatter={nameFormatter}
                error={errorName}
              />
              <ControlledInput
                placeholder="Email"
                label="Email"
                type="text"
                state={email}
                setState={setEmail}
                formatter={emailFormatter}
                error={errorEmail}
              />
              <ControlledInput
                placeholder="Nome de usuário"
                label="Crie um nome de usuário"
                type="text"
                state={username}
                setState={setUsername}
                formatter={usernameFormatter}
                error={errorUsername}
              />
              <ControlledInput
                placeholder="Senha"
                label="Crie uma senha"
                type="password"
                state={password}
                setState={setPassword}
                formatter={passwordFormatter}
                error={errorPassword}
              />
              <ControlledInput
                placeholder="Senha"
                label="Confirme sua senha"
                type="password"
                state={checkPassword}
                setState={setCheckPassword}
                formatter={passwordFormatter}
                error={errorCheckPassword}
              />
              <div className="form__btnBox form__btnBox--center">
                <button type="submit" className="btnPrimary">
                  <p className="btnPrimary__text">
                    Próximo <ArrowRight2 className="btnPrimary__text--icon" />
                  </p>
                </button>
              </div>
            </>
          )}
          {formSection === 2 && (
            <>
              <ControlledSelect
                label="Em que ano você está?"
                state={schoolYear}
                setState={setSchoolYear}
                options={schoolYearOptions}
                error={errorSchoolYear}
              />
              <ControlledSelect
                label="Que tipo de escola você frequenta?"
                state={schoolType}
                setState={setSchoolType}
                options={schoolTypeOptions}
                error={errorSchoolType}
              />
              <div className="form__box">
                <p className="form__text">
                  Se cadastrando você concorda com os termos do Projeto Matrix.
                </p>
              </div>
              <div className="form__btnBox form__btnBox--spaceBetween">
                <ArrowLeft2
                  onClick={() => setFormSection((previous) => previous - 1)}
                  className="form__backBtn"
                />
                <button type="submit" className="btnPrimary">
                  <p className="btnPrimary__text">
                    Próximo <ArrowRight2 className="btnPrimary__text--icon" />
                  </p>
                </button>
              </div>
            </>
          )}
          {formSection === 3 && (
            <>
              <ControlledCheckbox
                label="Em quais matérias tem maior dificuldade?"
                options={disciplineOptions}
                state={weakDisciplines}
                setState={setWeakDisciplines}
                error={errorWeakDisciplines}
              />
              <div className="form__btnBox form__btnBox--spaceBetween">
                <ArrowLeft2
                  onClick={() => setFormSection((previous) => previous - 1)}
                  className="form__backBtn"
                />
                <button type="submit" className="btnPrimary">
                  <p className="btnPrimary__text">
                    Próximo <ArrowRight2 className="btnPrimary__text--icon" />
                  </p>
                </button>
              </div>
            </>
          )}
          {formSection === 4 && (
            <>
              <ControlledSelect
                label="Quantas vezes você já repetiu algum ano?"
                state={timesReproved}
                setState={setTimesReproved}
                options={timesReprovedOptions}
                error={errorTimesReproved}
              />
              <ControlledSelect
                label="Em qual estado  você estuda?"
                state={federativeUnit}
                setState={setFederativeUnit}
                keepCase={true}
                options={federativeUnitOptions}
                error={errorFederativeUnit}
              />
              <div className="form__btnBox form__btnBox--spaceBetween">
                <ArrowLeft2
                  onClick={() => setFormSection((previous) => previous - 1)}
                  className="form__backBtn"
                />
                <button type="submit" className="btnPrimary">
                  <p className="btnPrimary__text">
                    Próximo <ArrowRight2 className="btnPrimary__text--icon" />
                  </p>
                </button>
              </div>
            </>
          )}
          {formSection === 5 && (
            <>
              <p className="form__text">
                Não se preocupe, esses dados não serão associados a você. Apenas
                pedimos para personalizar sua experiência e fins de pesquisa do
                projeto ;)
              </p>
              <div className="form__btnBox form__btnBox--spaceBetween">
                <ArrowLeft2
                  onClick={() => setFormSection((previous) => previous - 1)}
                  className="form__backBtn"
                />
                <CSSTransition
                  in={loadingRegister}
                  timeout={400}
                  classNames="btnPrimary"
                >
                  <button type="submit" className="btnPrimary">
                    <CSSTransition
                      in={loadingRegister}
                      timeout={400}
                      classNames="btnPrimary__text"
                    >
                      <p className="btnPrimary__text">Cadastrar-se</p>
                    </CSSTransition>
                    <CSSTransition
                      in={loadingRegister}
                      timeout={400}
                      classNames="btnPrimary__loading"
                      unmountOnExit
                    >
                      <div className="btnPrimary__loading">
                        <div className="loadingBox">
                          <div className="loadingBox__bar loadingBox__bar--1 loadingBox__bar--white"></div>
                          <div className="loadingBox__bar loadingBox__bar--2 loadingBox__bar--white"></div>
                          <div className="loadingBox__bar loadingBox__bar--3 loadingBox__bar--white"></div>
                        </div>
                      </div>
                    </CSSTransition>
                  </button>
                </CSSTransition>
              </div>
            </>
          )}
          {formSection === 6 && (
            <>
              {successRegister && (
                <p className="form__text form__text--success">
                  {successRegister}
                </p>
              )}
              {errorRegister && (
                <p className="form__text form__text--error">{errorRegister}</p>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}
