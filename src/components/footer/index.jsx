
import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {

    return (
        <>
            <div className="bg-dark shadow py-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-4">
                                    <h4 className="text-light cursor-default">Comprando</h4>
                                    <Link to="#" className="text-white d-block mb-1">Segurança</Link>
                                    <Link to="#" className="text-white d-block mb-1">Termos de uso</Link>
                                    <Link to="#" className="text-white d-block mb-1">Política de troca e devolução</Link>
                                    <Link to="#" className="text-white d-block mb-1">Política de privacidade</Link>
                                </div>
                                <div className="col-md-4">
                                    <h4 className="text-light cursor-default">Institucional</h4>
                                    <Link to="#" className="text-white d-block mb-1">Sobre nós</Link>
                                    <Link to="#" className="text-white d-block mb-1">Contato</Link>
                                </div>
                                <div className="col-md-4">
                                    <h4 className="text-light cursor-default">Atendimento</h4>
                                    <Link to="#" className="text-white d-block mb-1">Minha conta</Link>
                                    <Link to="#" className="text-white d-block mb-1">Meus pedidos</Link>
                                    <Link to="#" className="text-white d-block mb-1">Perguntas Frequentes</Link>
                                    <Link to="#" className="text-white d-block mb-1">
                                        <i className="fas fa-mobile-alt"></i>
                                        (65) 9999-9999
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                                <label className="p text-white d-block mb-1">Assine nossa newsletter:</label>
                                <div className="d-flex">
                                    <input type="text" className="form-control" style={{ borderRadius: '0.25rem 0px 0px 0.25rem' }}></input>
                                    <button type="button" className="btn btn-primary"
                                        style={{ borderRadius: '0px 0.25rem 0.25rem 0px' }}> Enviar </button>
                                </div>
                            </div>
                            <div>
                                <Link to="#" className="btn btn-dark rounded">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                                <Link to="#" className="btn btn-dark rounded">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                <Link to="#" className="btn btn-dark rounded">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link to="#" className="btn btn-dark rounded">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white shadow py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-dark text-center m-0">

                                SPIGREEN INTERNACIONAL DISTRIBUIDORA DE ALIMENTOS E COSMETICOS LTDA | CNPJ: 31.716.218/0001-70 |
                                <br></br>
                                Inscrição Estadual: 13.741.427-7 <br></br>
                                Endereço: Edifício Top Tower Sala 1503, Av. Historiador Rubens de Mendonça, 2368 - Bosque da
                                <br></br>
                                Saúde, Cuiabá - MT, 78050-000 <br></br>
                                SPIGREEN | Todos os direitos reservados 2021 <br></br>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default FooterComponent;