import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/main.css';
import api from './api/axiosBase';
import Header from './componets/Header';
import Main from './componets/Main';
import { Form } from '@unform/web';
import { Fragment } from 'react/cjs/react.production.min';
import Input from './componets/form/Input';
import Button from './componets/form/Button';
import { BasicTable } from './componets/Table/BasicTable';
import Label from './componets/form/Label';

export default function App() {
  const handleSubmit = async (data, { reset }) => {
    // const response = await api.post('/MOCK_DATA', Request);

    console.log(data);

    reset();
  };
  return (
    <Fragment>
      <Header>UTI</Header>
      <Main>
        <Form onSubmit={handleSubmit} className="container ">
          <Label idLabel="id-date" textLabel="Insira a data de lançamento" />
          <Input id="id-date" type="date" name="date" />
          <Label idLabel="id-date" textLabel="Insira o valor da pesagem:" />
          <Input
            id="id-peso"
            type="number"
            name="number"
            placeholder="00.00"
            step="00.01"
            min="0"
            max="300.00"
          />
          <Label idLabel="id-name" textLabel="Usuário:" />
          <Input
            id="id-name"
            type="text"
            name="name"
            placeholder="Insira seu nome"
          />
          <Button nameButton="Salvar" textButton="Salvar" typeButton="submit" />
        </Form>
        <BasicTable />
      </Main>
    </Fragment>
  );
}
