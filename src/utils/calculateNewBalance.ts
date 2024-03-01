export const calculateNewBalance = (
  valores: { transacao: string; valor: string },
  saldo: number,
) => {
  if (valores.transacao === 'Depósito') {
    return saldo + parseInt(valores.valor)
  } else {
    return saldo - parseInt(valores.valor)
  }
}
