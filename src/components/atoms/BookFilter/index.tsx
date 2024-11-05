/**
 * [Querystring의 장점]
 * - 상태 공유
 * - 재사용성 보장
 * - 검색 엔진 최적화 유리
 * - 마케팅 측면에서 데이터 추적 및 분석 좋음
 */
import { useCategory } from '../../../hooks/useCategory';
import { Button } from '../Button';
import * as S from './BooksFilter.style';
import { useSearchParams } from 'react-router-dom';

export const BooksFilter = () => {
  const { category } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id === null) {
      newSearchParams.delete('category_id');
    } else {
      newSearchParams.set('category_id', id.toString());
    }

    setSearchParams(newSearchParams);
  };

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get('news')) {
      newSearchParams.delete('news');
    } else {
      newSearchParams.set('news', 'true');
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
            {item.name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button size="medium" scheme={searchParams.get('news') ? 'primary' : 'normal'} onClick={() => handleNews()}>
          신간
        </Button>
      </div>
    </S.BooksFilterStyle>
  );
};
