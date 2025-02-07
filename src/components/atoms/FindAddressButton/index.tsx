import { useEffect, useState } from 'react';
import { Button } from '../Button';
import * as S from './FindAddressButton.style';

interface FindAddressButtonProps {
  onCompleted: (address: string) => void;
}

const POST_SCRIPT_URL = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

export const FindAddressButton = ({ onCompleted }: FindAddressButtonProps) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isScriptLoaded || !window.daum?.Postcode) {
      console.error('Daum Postcode API is not loaded yet.');
      return;
    }

    new window.daum.Postcode({
      oncomplete: (data: any) => {
        onCompleted(data.address as string);
      },
    }).open();
  };

  useEffect(() => {
    if (document.querySelector(`script[src="${POST_SCRIPT_URL}"]`)) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = POST_SCRIPT_URL;
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <S.FindAddressButtonStyle>
      <Button type="button" size="medium" scheme="normal" onClick={handleOpen} disabled={!isScriptLoaded}>
        주소 찾기
      </Button>
    </S.FindAddressButtonStyle>
  );
};
