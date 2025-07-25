export function formatPlural(
  count: number,
  { singular, plural }: { singular: string; plural: string },
  { includeCount = true } = {}
) {
  const word = count === 1 ? singular : plural;

  return includeCount ? `${count} ${word}` : word;
}

export function formatPrice(amount: number, { showZeroAsNumber = false } = {}) {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "SAR",
    currencySign: "standard",
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  });

  if (amount === 0 && !showZeroAsNumber) return "مجانا";
  return formatter.format(amount);
}
