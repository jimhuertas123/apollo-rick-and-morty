import { useEffect, useRef, useCallback } from 'react';
import type { CharactersQuery } from '../generated/graphql';

export const useScrollBottom = (
  _data: CharactersQuery | undefined,
  onBottomReached?: () => void,
  isFetchingMore?: boolean
) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!isFetchingMore && hasTriggeredRef.current) {
      hasTriggeredRef.current = false;
    }
  }, [isFetchingMore]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      if (
        entry.isIntersecting &&
        !isFetchingMore &&
        !hasTriggeredRef.current &&
        onBottomReached
      ) {
        hasTriggeredRef.current = true;
        onBottomReached();
      }
    },
    [isFetchingMore, onBottomReached]
  );

  useEffect(() => {
    const currentTriggerRef = triggerRef.current;

    if (!currentTriggerRef) return;

    const observer = new IntersectionObserver(handleIntersection, {
      root: scrollRef.current,
      rootMargin: '100px',
      threshold: 0,
    });

    observer.observe(currentTriggerRef);

    return () => {
      if (currentTriggerRef) {
        observer.unobserve(currentTriggerRef);
      }
      observer.disconnect();
    };
  }, [handleIntersection]);

  return { scrollRef, triggerRef };
};
