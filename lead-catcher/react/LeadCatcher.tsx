import React from 'react'
import {useForm} from './hooks/useForm'

interface LeadCatcherProps {}

const LeadCatcher: StorefrontFunctionComponent<LeadCatcherProps> = ({}) => {

  const initialState = {
    nome: "",
    email: "",
    telefone: ""
  };

  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );

  async function loginUserCallback() {

    const lead = JSON.stringify(values);

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: lead
    };

    fetch('https://8plwc00xh5.execute-api.us-east-2.amazonaws.com/items', requestOptions)
    .then((response: Response) => console.log("Success!", response))
    .catch((error: Error) => console.error("There was an error!", error))



  }

  return (
      <div>
        <form id="leadform" onSubmit={onSubmit}>
          <input name="nome" id="nome" value={(values as any).nome} type="text" onChange={onChange} placeholder="Digite seu nome" required></input>
          <input name="email" id="email" value={(values as any).email} type="email" onChange={onChange} placeholder="Digite seu email" required></input>
          <input name="telefone" id="telefone" value={(values as any).telefone} type="tel" onChange={onChange} placeholder="Digite seu telefone" required></input>
          <button type="submit">Cadastrar</button>
        </form >
      </div>
    )
}

LeadCatcher.schema = {
  title: 'editor.leadcatcher.title',
  description: 'editor.leadcatcher.description',
  type: 'object',
  properties: {},
}

export default LeadCatcher

