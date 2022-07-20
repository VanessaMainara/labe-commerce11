import React from "react";
import { Main, Filtros, Cards, Prod } from "./styled";

function Home(props) {

    const listaProdutos = props.produtos.map((item, index) => {
        return <Prod key={index}> <img src={item.photo} /> <div>{item.name}</div> <div>R$ {item.price.toFixed(2)}</div> <button onClick={()=> props.addCarrinho(item)}> Adicionar ao carrinho </button></Prod>
    })

    return (
        <Main>
            <Filtros>
                <div>
                    <p>Quantidade de produtos: </p>
                </div>
                <div>
                    <p>Ordenação:
                        <select
                            name="order"
                            value={props.order}
                            onChange={props.updateOrder}
                        >
                            <option value={1}>Crescente</option>
                            <option value={-1}>Decrescente</option>
                        </select>
                    </p>
                </div>
            </Filtros>
            <Cards>
                {listaProdutos}
            </Cards>
        </Main>
    );
}

export default Home;