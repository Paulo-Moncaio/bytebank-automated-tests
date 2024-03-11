import { render, screen } from '@testing-library/react'
import { Header } from '../../components/index'

test('Deve renderizar o nome do usuário logado', () => {
  render(<Header />)
  const userName = screen.getByText('Joana Fonseca Gomes')
  expect(userName).toBeDefined()
})
