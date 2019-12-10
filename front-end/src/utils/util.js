export const formatDate = (numero) => {
  switch (numero) {
    case '01':
      return 'Jan';
    case '02':
      return 'Fev';
    case '03':
      return 'Mar';
    case '04':
      return 'Abr';
    case '05':
      return 'Mai';
    case '06':
      return 'Jun';
    case '07':
      return 'Jul';
    case '08':
      return 'Ago';
    case '09':
      return 'Set';
    case '10':
      return 'Out';
    case '11':
      return 'Nov';
    case '12':
      return 'Dez';
    default:
      return 'Err'
  }
}