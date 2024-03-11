import { render, screen } from '@testing-library/react'
import { Menu } from '..'

test('Deve renderizar um link para a pagina inicial', () => {
  render(<Menu />)
  const link = screen.getByText('Inicial')
  expect(link).toBeDefined()
})

test('Deve renderizar uma lista de 4 links', () => {
  render(<Menu />)
  const links = screen.getAllByRole('link')
  expect(links).toHaveLength(4)
})

test('Deve renderizar uma lista de 4 links', () => {
  render(<Menu />)
  const links = screen.getAllByRole('link')
  expect(links).toHaveLength(4)
})

test('Deve renderizar uma lista de links com a classe link', () => {
  render(<Menu />)
  const links = screen.getAllByRole('link')
  links.forEach((link) => {
    expect(link.className).toBe(
      'cursor-pointer text-[#111111] no-underline hover:font-semibold hover:text-black',
    )
  })
  expect(links).toMatchSnapshot()
})
