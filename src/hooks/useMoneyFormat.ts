export default function useMoneyFormat() {
  const moneyFormat = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  });

  return moneyFormat;
}