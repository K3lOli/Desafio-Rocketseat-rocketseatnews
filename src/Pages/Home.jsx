import './left-side.css'
import './rigth-side.css'
import logo from './../assets/logo.svg'
import send from './../assets/send.svg'
import read from './../assets/read_news.jpg'

function Home() {
    return (
        <div className='pageArea'>
            <div className="left-side">
                <header className='left-side-components'>
                    <img src={logo} alt="rocketnews-logo" />
                </header>

                <h1 className='left-side-components'>atualize ideias e informações em 5 minutos.</h1>
                <h2 className='left-side-components'>tudo que você precisa saber para começar seu dia bem e informado</h2>
                <p className='left-side-components'>
                    noticias sobre o universo Rocketseat, e tudo o que precisa para começar o dia melhor.<br></br>
                    perfeito para se preparar para codar ☕</p>
                <label className='emailArea' >
                    <p>Insira seu e-mail:</p>
                    <div className='email-send'>
                        <input type="text" />
                        <button><img src={send} alt="" /></button>
                    </div>

                </label>
                <a id='link' href="">deixe-me ler primeiro</a>


            </div>
            <div className='rigth-side'>
            </div>
        </div>
    )
}

export default Home;