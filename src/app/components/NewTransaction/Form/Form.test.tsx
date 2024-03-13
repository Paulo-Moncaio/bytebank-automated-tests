import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TransactionForm from './Form'

function Form() {
  return (
    <TransactionForm
      makeTransaction={function (): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
}

describe('Deve renderizar um campo de input', () => {
  test('no documento', () => {
    render(<Form />)
    const campoTexto = screen.getByPlaceholderText('Digite um valor')
    expect(campoTexto).toBeDefined()
  })

  test('com o type number', () => {
    render(<Form />)
    const campoTexto = screen.getByPlaceholderText('Digite um valor')
    expect(campoTexto).toHaveAttribute('type', 'number')
  })

  test('que pode ser preenchido', async () => {
    const user = userEvent.setup()
    render(<Form />)
    const campoTexto = screen.getByPlaceholderText('Digite um valor')
    await user.type(campoTexto, '50')
    expect(campoTexto).toHaveValue('50')
  })
})

test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
  const user = userEvent.setup()
  render(<Form />) // renderiza o componente
  const select = screen.getByRole('combobox') // faz a consulta do elemento select
  user.selectOptions(select, ['Depósito']) // simula a ação de selecionar uma opção do select

  expect(
    (
      screen.getByRole('option', {
        name: 'Selecione um tipo de transação',
      }) as HTMLOptionElement
    ).selected,
  ).toBe(false) // verifica se a opção de selecionar um tipo de transação não foi selecionada
  expect(
    (screen.getByRole('option', { name: 'Depósito' }) as HTMLOptionElement)
      .selected,
  ).toBe(true) // verifica se a opção de depósito foi selecionada
})
