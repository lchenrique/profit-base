import { Container, Table } from 'reactstrap';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useState } from 'react';

const Title = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const SubTitle = styled.h3`
  font-size: 35px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.success};
`;

const Base = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 70vh;
  border-radius: 20px;
  background-color: #ffffff;
  backdrop-filter: blur(5px);
  padding: 24px;
  text-align: center;
`;

let formatter = new Intl.NumberFormat([], {
  style: 'currency',
  currency: 'BRL',
});

export default function Home() {
  const [initialValue, setinitialValue] = useState(0);
  const [percent, setpercent] = useState(0);
  const arr = [
    {
      dia: 1,
      entrada: initialValue,
      retorno: percent,
      lucro: 0,
      acumulado: 0,
    },
  ];


  var valorInicial = 0;

  let soma: number;

  while (arr.length < 30) {
    soma = arr.reduce((acumulador, valorAtual) => {
      return valorAtual.entrada + valorAtual.entrada * (percent / 100);
    }, valorInicial);

    arr.push({
      dia: arr.length,
      entrada: soma,
      retorno: percent,
      lucro: soma * (percent / 100),
      acumulado: 0,
    });
  }
  return (
    <>
      <Container className="mt-3 text-center">
        <Title>Controle de Lucros</Title>
        <SubTitle>Total em 30 dias : {formatter.format( arr[arr.length-1]?.entrada + arr[arr.length-1]?.entrada  * (percent / 100) )}</SubTitle>
        <FormGroup className="d-flex">
          <div className="w-100 mr-3">
            <Label for="exampleEmail">Valor inical</Label>
            <Input
              type="number"
              placeholder="exmplo: 1000"
              onChange={(v) => setinitialValue(Number(v.target.value))}
            />
          </div>
          <div className="w-100">
            <Label for="exampleEmail">Retorno do dia %</Label>
            <Input
              type="number"
              onChange={(v) => setpercent(Number(v.target.value))}
              placeholder="%"
            />
          </div>
        </FormGroup>
      </Container>
      <Container>
        <Base>
          <div className="overflow-auto" style={{ height: '65vh' }}>
            <Table>
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Entrada</th>
                  <th>Retorno dia %</th>
                  <th>Lucro do dia</th>
                  <th>Valor acunulado</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((v, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>
                        {v.entrada ? formatter.format(v.entrada || 0) : 0}
                      </td>
                      <td>{v.retorno}%</td>
                      <td>
                        {v.entrada
                          ? formatter.format(v.entrada * (v.retorno / 100) || 0)
                          : 0}
                      </td>
                      <td>
                        {v.entrada
                          ? formatter.format(
                              v.entrada + v.entrada * (v.retorno / 100)
                            )
                          : 0}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

          </div>
      
        </Base>
      </Container>
    </>
  );
}
