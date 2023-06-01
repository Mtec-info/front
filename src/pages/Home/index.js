import '../../pages/Home/style.css';
import Logo from '../../images/logo.svg';
import Email from '../../images/iconeEmail.svg';
import Senha from '../../images/iconeSenha.svg';

function Home() {
    return (
        <div className=''>
            <section className='left'>
                <div className='titulo'>
                    <img src={Logo} width="300px" height="300px" />
                </div>
                <div className='form'>
                    <h2>Entre para começar</h2>
                    <form>
                        <div className='grupoEmail'>
                            <label className='email'>Email:</label>
                            <input className='inputEmail' id="Email" type='text' placeholder='Digite o seu email' required></input>
                            <img className='iconeSenha' src={Email} width="20px" height="16px" />
                        </div>

                        <div>
                            <label className='senha' >Senha:</label>
                            <input className='inputSenha' id="senha" type='password' placeholder='Digite a sua senha' required></input>
                            <img className='iconeSenha' src={Senha} width="20px" height="16px" />
                        </div>

                        <button id="enviar" type='submit'>Enviar</button>

                    </form>
                </div>
            </section>

            <section className='right'>
                <h1>Faça parte dessa incrível comunidade!</h1>
            </section>
        </div>
    )
}

export default Home;