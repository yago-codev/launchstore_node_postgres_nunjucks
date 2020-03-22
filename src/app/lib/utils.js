module.exports = {
  date(timestamp) {
    const data = new Date(timestamp);

    const year = date.getUTCFullYear();

    const month = `0${ date.getUTCMonth() + 1 }`.slice(-2); // o mês é retornado de 0(jan) a 11(dez), portanto adicionamos +1 pra formatar os dados.

    const day = `0${ date.getUTCDate() }`.slice(-2); // retorna os dias do mês, de 1 a 31.UTC

    return {
      day,
      month,
      year,
      iso: `${ano}-${mes}-${dia}`,
      birthDay: `${dia}/${mes}`,
      format: `${day}/${month}/${year}`
    }
  }
}