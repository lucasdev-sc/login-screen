import {
  Container,
  Headers,
  BoxLogin,
  BoxImage,
  InputBox,
  CheckBox,
  HasAccount,
} from "./styles";

import Logo from "../../images/logo.png";
import ImageSaily from "../../images/image.png";

import { MdAlternateEmail, FiLock } from "react-icons/all";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  return (
    <Container>
      <BoxLogin>
        <Headers>
          <img src={Logo} alt="Logo" />
          <h1>Cadastre-se</h1>
          <span>Não demora muito para você embarcar nesta jornada!</span>
        </Headers>
        <InputBox>
          <span>E-mail</span>
          <div>
            <input
              type="text"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdAlternateEmail size={24} color="rgba(0,0,0,0.4)" />
          </div>
        </InputBox>
        <InputBox>
          <span>Senha</span>
          <div>
            <input
              type="password"
              placeholder="8+ Caracteres, 1 Letra maiúscula"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <FiLock size={24} color="rgba(0,0,0,0.4)" />
          </div>
        </InputBox>
        <CheckBox>
          <input type="checkbox" />
          <span>
            Eu li e concordo com os <b>Termos de Serviço</b> e nossa{" "}
            <b>Política de Privacidade</b>
          </span>
        </CheckBox>

        <button>Crie a sua conta aqui</button>

        <HasAccount>
          <span>
            Já tem uma conta? <button>Entrar</button>
          </span>
        </HasAccount>
      </BoxLogin>
      <BoxImage>
        <img src={ImageSaily} alt="image-background" />
      </BoxImage>
    </Container>
  );
};

export default Login;
