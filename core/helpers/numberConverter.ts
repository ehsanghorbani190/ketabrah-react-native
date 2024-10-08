const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
const persianMap = persianDigits.split('');
export function convertToPersianDigits(x: string) {
  return x
    ? x.replace(/\d/g, m => {
        return persianMap[parseInt(m)];
      })
    : '';
}
