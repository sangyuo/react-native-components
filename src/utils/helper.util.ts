import {Varian} from '../model';

export const getClassNameVarian = (varian?: Varian) => {
  switch (varian) {
    case 'outline':
      return 'rounded border border-blue-500 px-4 py-2';
    case 'primary':
      return 'rounded bg-blue-500 px-4 py-2';
    default:
      return '';
  }
};

export const getClassNameTextVarian = (varian?: Varian) => {
  switch (varian) {
    case 'outline':
      return 'text-blue-500 font-bold';
    case 'primary':
      return 'text-white font-bold';
    default:
      return 'text-black';
  }
};
