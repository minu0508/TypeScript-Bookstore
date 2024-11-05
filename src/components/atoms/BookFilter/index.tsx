import { useCategory } from '../../../hooks/useCategory';
import { Button } from '../Button';
import * as S from './BooksFilter.style';
import { useSearchParams } from 'react-router-dom';

/**
 * [Querystring의 장점]
 * - 상태 공유
 * - 재사용성 보장
 * - 검색 엔진 최적화 유리
 * - 마케팅 측면에서 데이터 추적 및 분석 좋음
 */

export const BooksFilter = () => {
  const { category } = useCategory();

  return (
    <S.BooksFilterStyle>
      <div className="category">
        {category.map((item) => (
          <Button size="medium" scheme="normal" key={item.id}>
            {item.name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button size="medium" scheme="normal">
          신간
        </Button>
      </div>
    </S.BooksFilterStyle>
  );
};
