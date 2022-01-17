import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';

import { useQuery } from 'react-query';
import { ProductApi } from '../../service/api';

import Utils from '../../service/utils';

const HomeRoute = ({ history }) => {
    
    const [products, setProducts] = useState([]);

    useQuery(
        ['loadProductSection'],
        async () => await ProductApi.getBySection(),
        {
            onSuccess: data => {
                if (data?.data?.rows) {
                    let result = [];

                    for (let i = 0; i < data.data.rows.length; i++) {
                        const row = data.data.rows[i];
                        const gallery = row.gallery[0];
                        const photo = gallery.photo;

                        result.push({
                            discount: Number(row.discount),
                            image: Utils.generateImageUrl(photo.hash, photo.extension, photo.type),
                            url: `/produto/detalhe/${Utils.generateUrlFromName(row.name)}/${row.id}`,
                            id: row.id,
                            name: row.name,
                            price: Number(row.price),
                        });

                    }

                    setProducts(result);
                }

                console.log(data.data.rows);

            },
            onError: err => console.log(err.toString()),
        },
    );

    return (
        <>
            <HeaderComponent></HeaderComponent>

            {/* <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text-center">
                            <div className="w-100 d-flex justify-content-around">
                                <Link to="/" className="d-inline-block text-secondary">Promoções </Link>
                                <Link to="/aparelhos" className="d-inline-block text-secondary">Aparelhos </Link>
                                <Link to="/proteinas" className="d-inline-block text-secondary">Proteinas </Link>
                                <Link to="/remedios" className="d-inline-block text-secondary">Remédios </Link>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div> */}

            <div className="bg-white shadow py-4 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9"></div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <select name="ordenar-por" className="form-control input-sm">
                                    <option value="">Busca avançada</option>
                                    <option value="preco-asc">Menor valor</option>
                                    <option value="mais-vendidos">Mais vendidos</option>
                                    <option value="melhor-avaliados">Avaliação</option>
                                    <option value="nome-asc">Ordem Alfabetica</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="my-4">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <h4 className="m-0 mr-4 h3"> Produtos </h4>
                            <span className="d-inline-block bg-light" style={{ width: 'calc(100% - 100px)', height: '2px' }}></span>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className="row" id="products-container">
                        {
                            products.length === 0 && (
                                <div className="col-md-12">
                                    <div className="d-flex w-100 justify-content-center">
                                        <div>
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {
                            products.map((item, index) =>
                                <Link class="col-md-3 col-sm-6" key={index} title={item.name} to={item.url}>
                                    <div class="d-inline-block w-100 rounded p-3 mb-3 position-relative product-hover">
                                        <div class="bg-cover d-inline-block same-height rounded" style={{ width: '100%', backgroundImage: `url('${item.image}')`, height: '223px' }}>
                                        </div>
                                        <div className="position-absolute bg-success text-white rounded-right shadow-sm" style={{ top: '10px', left: '0px' }}>
                                            <p className="m-0 px-3">{item.discount}%</p>
                                        </div>
                                        <p class="text-dark text-uppercase d-inline-block m-0" style={{ minHeight: '3rem' }}>
                                            {item.name.length > 70 ? item.name.substring(0, 70) + '...' : item.name}
                                        </p>
                                        <div class="mb-0">
                                            <p class="text-dark mb-0"><strong> Por apenas </strong></p>
                                            <div class="d-flex align-items-end">
                                                <p class="text-primary m-0 mr-2"> R$ </p>
                                                <h4 class="text-primary d-inline-block mb-0 h2"><strong>{item.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</strong></h4>
                                            </div>
                                        </div>
                                        <p class="text-dark mb-1">10x de R$&nbsp;{(item.price / 10).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
                                        <span class="btn btn-primary btn-block text-white rounded"> Comprar </span>
                                    </div>
                                </Link>
                            )
                        }


                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <span className="d-inline-block bg-light my-4" style={{ width: 'calc(100%)', height: '2px' }}></span>
                        </div>
                        <div className="col-md-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <Link className="page-link" to="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            <FooterComponent></FooterComponent>
        </>






    )
}


export default HomeRoute;