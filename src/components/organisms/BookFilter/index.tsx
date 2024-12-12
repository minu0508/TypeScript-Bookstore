/**
 * [Querystring의 장점]
 * - 상태 공유
 * - 재사용성 보장
 * - 검색 엔진 최적화 유리
 * - 마케팅 측면에서 데이터 추적 및 분석 좋음
 */
import { QUERYSTRING } from '../../../constants/querystring';
import { useCategory } from '../../../hooks/useCategory';
import { Button } from '../../atoms/Button';
import * as S from './BooksFilter.style';
import { useSearchParams } from 'react-router-dom';

export const BooksFilter = () => {
  const { category } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id === null) {
      newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
    } else {
      newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
    }

    setSearchParams(newSearchParams);
  };

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get(QUERYSTRING.NEWS)) {
      newSearchParams.delete(QUERYSTRING.NEWS);
    } else {
      newSearchParams.set(QUERYSTRING.NEWS, 'true');
    }

    setSearchParams(newSearchParams);
  };

  return (
    <S.BooksFilterStyle>
      <div className="category">
        {category.map((item) => (
          <Button
            size="medium"
            scheme={item.isActive ? 'primary' : 'normal'}
            key={item.id}
            onClick={() => {
              handleCategory(item.id);
            }}
          >
            {item.categoryName}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button
          size="medium"
          scheme={searchParams.get(QUERYSTRING.NEWS) ? 'primary' : 'normal'}
          onClick={() => handleNews()}
        >
          신간
        </Button>
      </div>
    </S.BooksFilterStyle>
  );
};
