
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/logomarca.jpg';
import { CategoryApi } from '../../service/api';
import { useQuery } from 'react-query';
import Utils from '../../service/utils';

const HeaderComponent = () => {

    const [category, setCategory] = useState([]);


    useQuery(
        ['loadCategory'],
        async () => await CategoryApi.getByParent(0),
        {
            onSuccess: data => {
                if (data?.data?.rows) {
                    setCategory(data?.data?.rows);
                }

            },
            onError: err => console.log(err.toString()),
        },
    );

    return (
        <>
            <div className="py-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <Link to="/cadastro" className="d-inline-block text-secondary">
                                <i className="fas fa-user mr-1"></i>
                                Olá, bem vindo, seja um consumidor.
                            </Link>
                        </div>
                        <div className="col-md-4 text-center d-none d-sm-block">
                            <div className="w-100 d-flex justify-content-around">
                                <Link to="#" className="d-inline-block text-secondary">Institucional</Link>
                                <p className="m-0"> - </p>
                                <Link to="#" className="d-inline-block text-secondary">Empreender</Link>
                                <p className="m-0"> - </p>
                                <Link to="#" className="d-inline-block text-secondary">FAQ</Link>
                            </div>
                        </div>
                        <div className="col-md-4 text-right">
                            <Link className="btn btn-outline-secondary" to="/login" role="button"><i
                                className="fas fa-sign-in-alt mr-1"></i>Fazer login</Link>
                            <Link className="btn btn-secondary" to="/cadastro" role="button"><i className="fas fa-user mr-1"></i> Fazer
                                Cadastro</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-4" style={{ borderRadius: '0px 0px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <Link to="/" className="d-block">
                                <img src={LogoImage} className="d-none d-sm-inline-block w-100" alt=""></img>
                                <img src={LogoImage} className="d-block d-sm-none mx-auto mb-3 w-100"
                                    style={{ maxWidth: '200px' }} alt="ig"></img>
                            </Link>
                        </div>
                        <div className="col-md-5">
                            <div className="w-100 d-inline-block position-relative">
                                <input type="text" className="form-control" placeholder="Pesquisar"></input>
                                <div className="position-absolute text-light" style={{ right: '8px', top: '.4rem' }}>
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex">
                                <div className="d-inline-block w-50">
                                    <Link to="/carrinho" className="d-flex align-items-center remove-hover-underline rounded">
                                        <div className="mr-1">
                                            <span style={{ width: '40px', height: '40px' }}
                                                className="rounded-circle bg-primary d-flex justify-content-center align-items-center text-white">
                                                <i className="fas fa-shopping-cart"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="m-0 text-secondary">Carrinho</p>
                                            <p className="m-0 text-primary">0 Item</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="d-inline-block w-50">
                                    <Link to="/carrinho" className="d-flex align-items-center remove-hover-underline rounded">
                                        <div className="mr-1">
                                            <span style={{ width: '40px', height: '40px' }}
                                                className="rounded-circle bg-primary d-flex justify-content-center align-items-center text-white">
                                                <i className="fas fa-box"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="m-0 text-secondary">Meus</p>
                                            <p className="m-0 text-secondary">pedidos</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-primary shadow mb-5 py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 position-relative">
                            <button type="button" className="btn btn-primary c-menu-button text-white m-0 btn-block"> Departamentos <i className="fas fa-chevron-down"></i> </button>
                            <div className="bg-white shadow-sm p-2 position-absolute rounded-bottom c-menu-option" style={{ top: '35px', zIndex: '3' }}>
                                {
                                    category.map((item, index) => index < category.length - 3 ?
                                        <Link to={`/departamento/${Utils.generateUrlFromName(item.name)}/${item.id}`} key={index} className="btn btn-link text-dark c-menu-button text-white m-0 btn-block"> {item.name} </Link> : null
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-primary text-white m-0 btn-block"> Lançamentos </button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-primary text-white m-0 btn-block"> Destaques </button>
                        </div>
                        {
                            category.map((item, index) => index > category.length - 4  ?
                                <div className="col-md-2">
                                    <Link to={`/departamento/${Utils.generateUrlFromName(item.name)}/${item.id}`} className="btn btn-primary text-white m-0 btn-block"> {item.name} </Link>
                                </div> : null
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default HeaderComponent;