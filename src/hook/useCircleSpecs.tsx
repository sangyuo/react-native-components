import {useMemo} from 'react';

interface Props {
  size: number;
  strokeWidth: number;
}
export default function useCircleSpecs({size, strokeWidth}: Props) {
  return useMemo(() => {
    const radius = size - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    return {
      radius,
      circumference,
      strokeDasharray: `${circumference} ${circumference}`,
    };
  }, [size, strokeWidth]);
}
