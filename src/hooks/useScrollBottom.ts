import { useEffect, useRef, useCallback } from 'react';
import type { CharactersQuery } from '../generated/graphql';

export const useScrollBottom = (
  _data: CharactersQuery | undefined,
  onBottomReached?: () => void,
  isFetchingMore?: boolean
) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!isFetchingMore && hasTriggeredRef.current) {
      hasTriggeredRef.current = false;
    }
  }, [isFetchingMore]);

  const handleScroll = useCallback(() => {
    if (
      scrollRef.current &&
      !isFetchingMore &&
      !hasTriggeredRef.current &&
      onBottomReached
    ) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 10;

      if (isNearBottom) {
        console.log('🚀 Triggering load more!');
        hasTriggeredRef.current = true;
        onBottomReached();
      }
    }
  }, [isFetchingMore, onBottomReached]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', debouncedHandleScroll);
    }

    return () => {
      clearTimeout(timeoutId);
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('scroll', debouncedHandleScroll);
      }
    };
  }, [handleScroll]);

  return { scrollRef };
};
