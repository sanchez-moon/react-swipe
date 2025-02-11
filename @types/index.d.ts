// Type definitions for react-swipe 6.0
// Project: https://github.com/voronianski/react-swipe
// Definitions by: Deividas Bakanas <https://github.com/DeividasBakanas>, Ammar Alakkad <https://github.com/AAlakkad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface SwipeOptions {
  startSlide?: number;
  speed?: number;
  auto?: number;
  draggable?: boolean;
  continuous?: boolean;
  autoRestart?: boolean;
  disableScroll?: boolean;
  stopPropagation?: boolean;
  ignore?: string;
  callback?: (index: number, elem: HTMLElement, dir: number) => void;
  transitionEnd?: (index: number, elem: HTMLElement) => void;
}

import * as React from 'react';

declare class ReactSwipe extends React.Component<ReactSwipe.Props> {
  prev(): void;
  next(): void;
  getPos(): number;
  getNumSlides(): number;
  slide(index: number, duration: number): void;
}

declare namespace ReactSwipe {
  interface Style {
    container: React.CSSProperties;
    wrapper: React.CSSProperties;
    child: React.CSSProperties;
  }

  interface Props {
    children?: React.ReactNode;
    id?: string | undefined;
    swipeOptions?: SwipeOptions | undefined;
    childCount?: number | undefined;
    style?: Style | undefined;
    className?: string | undefined;
  }
}

export = ReactSwipe;
