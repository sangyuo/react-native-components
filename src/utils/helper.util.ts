export const getClassNameVarian = (varian?: 'primary' | 'outline') => {
  switch (varian) {
    case 'outline':
      return 'rounded border border-blue-500 px-4 py-2';
    case 'primary':
      return 'rounded bg-blue-500 px-4 py-2';
    default:
      return '';
  }
};
