import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import TelaPadrao from '../../componentes/TelaPadrao';
import StatusCarrinho from '../../componentes/StatusCarrinho';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.90,
        descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos!",
        quantidade: 3
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.90,
        descricao: "Uma dose da Vacina V4. Seu gato precisa de duas.",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.90,
        descricao: "Uma dose da Vacina Antirrábica. Seu gato precisa de uma dose por ano.",
        quantidade: 2
    },
];

export default function Carrinho() {
    const total = servicos.reduce((soma, { preco, quantidade }) => {
        return soma + (preco * quantidade);
    }, 0)

    return (
        <TelaPadrao >
            <StatusCarrinho total={total} />
            <FlatList
                data={servicos}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </TelaPadrao>
    );
};