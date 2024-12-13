import { useEffect } from 'react';
import { Button } from '../Button';
import * as S from './FindAddressButton.style';

interface FindAddressButtonProps {
  onCompleted: (address: string) => void;
}

const POST_SCRIPT_URL = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

export const FindAddressButton = ({ onCompleted }: FindAddressButtonProps) => {
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    new window.daum.Postcode({
      oncomplete: (data: any) => {
        onCompleted(data.address as string);
      },
    }).open();
  };

  useEffect(() => {
    const script = document.createElement('script'); // <script></script>
    script.src = POST_SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script); // <head><script src="POST_SCRIPT_URL"></script></head>

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <S.FindAddressButtonStyle>
      <Button type="button" size="medium" scheme="normal" onClick={handleOpen}>
        주소 찾기
      </Button>
    </S.FindAddressButtonStyle>
  );
};
