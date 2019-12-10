import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../assets/logo_gabicell_preto.png";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

const SignIn = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async e => {
    e.preventDefault();
    // const { email, password } = this.state;
    if (!email || !password) {
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        props.history.push("/home");
      } catch (err) {
        setError("Houve um problema com o login, verifique suas credenciais. T.T");
      }
    }
  }
  
  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <img src={Logo} alt="Airbnb logo" />
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Endereço de e-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}

// class SignIn extends Component {
//   state = {
//     email: "",
//     password: "",
//     error: ""
//   };

//   handleSignIn = async e => {
//     e.preventDefault();
//     const { email, password } = this.state;
//     if (!email || !password) {
//       this.setState({ error: "Preencha e-mail e senha para continuar!" });
//     } else {
//       try {
//         const response = await api.post("/sessions", { email, password });
//         login(response.data.token);
//         this.props.history.push("/app");
//       } catch (err) {
//         this.setState({
//           error:
//             "Houve um problema com o login, verifique suas credenciais. T.T"
//         });
//       }
//     }
//   };

//   render() {
//     return (
//       <Container>
//         <Form onSubmit={this.handleSignIn}>
//           <img src={Logo} alt="Airbnb logo" />
//           {this.state.error && <p>{this.state.error}</p>}
//           <input
//             type="email"
//             placeholder="Endereço de e-mail"
//             onChange={e => this.setState({ email: e.target.value })}
//           />
//           <input
//             type="password"
//             placeholder="Senha"
//             onChange={e => this.setState({ password: e.target.value })}
//           />
//           <button type="submit">Entrar</button>
//           {/* <hr />
//           <Link to="/signup">Criar conta grátis</Link> */}
//         </Form>
//       </Container>
//     );
//   }
// }

export default withRouter(SignIn);