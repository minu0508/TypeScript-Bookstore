import * as S from './BooksViewSwitcher.style';
import { Button } from '@/components/atoms/Button';
import { useEffect } from 'react';
import { QUERYSTRING } from '@/constants/querystring';
import { FaList, FaTh } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

const viewOptions = [
  {
    value: 'list',
    icon: <FaList />,
  },
  {
    value: 'grid',
    icon: <FaTh />,
  },
];

export type ViewMode = 'grid' | 'list';

export const BooksViewSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch('grid');
    }
  }, []);
  return (
    <>
      <S.BooksViewSwitcherStyle>
        {viewOptions.map((option) => (
          <Button
            key={option.value}
            size="medium"
            scheme={searchParams.get(QUERYSTRING.VIEW) === option.value ? 'primary' : 'normal'}
            onClick={() => handleSwitch(option.value as ViewMode)}
          >
            {option.icon}
          </Button>
        ))}
      </S.BooksViewSwitcherStyle>
    </>
  );
};
