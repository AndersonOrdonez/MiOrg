import './Footer.css';

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/' >
                <img src='/img/facebook.png'></img>
            </a>
            <a href='https://www.aluracursos.com/' >
                <img src='/img/twitter.png'></img>
            </a>
            <a href='https://www.aluracursos.com/' >
                <img src='/img/instagram.png'></img>
            </a>
        </div>
        <img src='/img/logo.png' ></img>
        <strong>Desarrollado por Anderson Ordoñez</strong>
    </footer>
}

export default Footer;