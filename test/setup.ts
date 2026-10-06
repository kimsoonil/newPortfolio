import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import React from 'react';

// 각 테스트 후 cleanup
afterEach(() => {
  cleanup();
});

// Next.js Image 컴포넌트 모킹
vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & {
    fill?: boolean;
    priority?: boolean;
  }) => {
    const imgProps = { ...props };
    delete imgProps.fill;
    delete imgProps.priority;
    return React.createElement('img', imgProps);
  },
}));

// Next.js Link 컴포넌트 모킹
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return React.createElement('a', { href }, children);
  },
}));

// Framer Motion 모킹 (애니메이션 제거하여 테스트 속도 향상)
// Framer Motion의 특수 prop들을 필터링하여 DOM에 전달되지 않도록 함
vi.mock('framer-motion', () => {
  const framerPropNames = new Set([
    'initial',
    'animate',
    'exit',
    'transition',
    'whileHover',
    'whileTap',
    'whileInView',
    'whileFocus',
    'viewport',
    'variants',
    'custom',
  ]);

  const filterFramerProps = (props: Record<string, unknown>) => {
    return Object.fromEntries(
      Object.entries(props).filter(([key]) => !framerPropNames.has(key)),
    );
  };

  const createMotionComponent = (tag: string) => {
    const MotionComponent = ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {
      const filteredProps = filterFramerProps(props);
      return React.createElement(tag, filteredProps, children);
    };
    MotionComponent.displayName = `MockMotion(${tag})`;
    return MotionComponent;
  };

  return {
    motion: {
      div: createMotionComponent('div'),
      section: createMotionComponent('section'),
      button: createMotionComponent('button'),
      a: createMotionComponent('a'),
      span: createMotionComponent('span'),
      p: createMotionComponent('p'),
      h1: createMotionComponent('h1'),
      h2: createMotionComponent('h2'),
      h3: createMotionComponent('h3'),
      ul: createMotionComponent('ul'),
      li: createMotionComponent('li'),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => 
      React.createElement(React.Fragment, null, children),
  };
});
