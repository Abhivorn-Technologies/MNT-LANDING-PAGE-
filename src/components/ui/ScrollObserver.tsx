'use client';

import { useGlobalScrollReveal } from '@/hooks/useScrollAnimation';

export function ScrollObserver() {
  useGlobalScrollReveal();
  return null;
}
