import { addCart } from '@/api/carts.api';
import { useAlert } from './useAlert';
import { BookDetail } from '@/models/book.model';
import { useAuthStore } from '@/store/authStore';
import { useEffect, useState } from 'react';
import { fetchBook, likeBook, unlikeBook } from '@/api/books.api';

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [cartAdded, setCardAdded] = useState(false);
  const { isloggedIn } = useAuthStore();
  const { showAlert } = useAlert();

  const likeToggle = () => {
    /** 권한 확인 */
    if (!isloggedIn) {
      showAlert('로그인이 필요합니다.');
      return;
    }

    if (!book) return;

    if (book.liked) {
      // Like 상태 -> Unlike 실행
      unlikeBook(book.bid).then(() => {
        setBook({
          ...book,
          liked: false,
          likes: book.likes - 1,
        });
      });
    } else {
      // Unlike 상태 -> Like 실행
      likeBook(book.bid).then(() => {
        setBook({
          ...book,
          liked: true,
          likes: book.likes + 1,
        });
      });
    }
  };

  const addToCart = (quantity: number) => {
    if (!book) return;

    console.log(book.bid, quantity);
    addCart({
      book_id: book?.bid,
      quantity: quantity,
    }).then(() => {
      setCardAdded(true);
      setTimeout(() => {
        setCardAdded(false);
      }, 3000);
    });
  };

  useEffect(() => {
    if (!bookId) return;

    fetchBook(bookId).then((res) => {
      setBook(res);
    });
  }, [bookId]);

  return { book, likeToggle, addToCart, cartAdded };
};
