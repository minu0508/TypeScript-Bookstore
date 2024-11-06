import { Pagination as IPagination } from '../../../models/pagination.model';
import * as S from './Pagination.style';
import { Button } from '../Button';
import { LIMIT } from '../../../constants/pagination';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../../constants/querystring';

interface PaginationProps {
  pagination: IPagination;
}

export const Pagination = ({ pagination }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalCount, currentPage } = pagination;
  const pages: number = Math.ceil(totalCount / LIMIT);

  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.PAGE, page.toString());

    setSearchParams(newSearchParams);
  };
  return (
    <S.PaginationStyle>
      {pages > 0 && (
        <ol>
          {Array(pages)
            .fill(0)
            .map((_, index) => (
              <li>
                <Button
                  key={index}
                  size="small"
                  scheme={index + 1 === currentPage ? 'primary' : 'normal'}
                  onClick={() => handleClickPage(index + 1)}
                >
                  {index + 1}
                </Button>
              </li>
            ))}
        </ol>
      )}
    </S.PaginationStyle>
  );
};
