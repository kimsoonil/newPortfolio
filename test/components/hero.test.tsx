import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '@/components/hero';

describe('Hero Component', () => {
  it('히어로 섹션이 렌더링되어야 한다', () => {
    render(<Hero />);
    expect(screen.getByText('kimsunil')).toBeInTheDocument();
  });

  it('소개 텍스트가 렌더링되어야 한다', () => {
    render(<Hero />);
    expect(
      screen.getByText('프론트엔드 리더십 및 기술 혁신을 주도하는 개발자')
    ).toBeInTheDocument();
  });

  it('설명 텍스트가 렌더링되어야 한다', () => {
    render(<Hero />);
    expect(
      screen.getByText(/프론트엔드 챕터를 리딩하며/)
    ).toBeInTheDocument();
  });

  it('소셜 링크가 렌더링되어야 한다', () => {
    render(<Hero />);
    
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/kimsoonil');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('블로그 링크가 렌더링되어야 한다', () => {
    render(<Hero />);
    
    const blogLink = screen.getByRole('link', { name: /Blog/i });
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute('href', 'https://k-soonil.tistory.com/');
  });

  it('이메일 링크가 렌더링되어야 한다', () => {
    render(<Hero />);
    
    const emailLink = screen.getByRole('link', { name: /Email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:rlatnsdlf158@naver.com');
  });

  it('스크롤 버튼이 렌더링되어야 한다', () => {
    render(<Hero />);
    
    const scrollButton = screen.getByRole('button', { name: /더 알아보기/i });
    expect(scrollButton).toBeInTheDocument();
  });

  it('올바른 섹션 id를 가져야 한다', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('#home');
    expect(section).toBeInTheDocument();
  });

  it('버튼 클릭 시 about 섹션으로 스크롤되어야 한다', async () => {
    const user = userEvent.setup();
    
    // #about 요소를 DOM에 추가
    const aboutElement = document.createElement('div');
    aboutElement.id = 'about';
    document.body.appendChild(aboutElement);
    
    const scrollIntoViewMock = vi.fn();
    aboutElement.scrollIntoView = scrollIntoViewMock;
    
    // querySelector가 올바른 요소를 반환하도록 모킹
    const originalQuerySelector = document.querySelector;
    document.querySelector = vi.fn((selector: string) => {
      if (selector === '#about') {
        return aboutElement;
      }
      return originalQuerySelector.call(document, selector);
    });

    render(<Hero />);
    
    const scrollButton = screen.getByRole('button', { name: /더 알아보기/i });
    await user.click(scrollButton);

    // scrollIntoView가 호출되었는지 확인
    expect(scrollIntoViewMock).toHaveBeenCalled();
    
    // 정리
    document.body.removeChild(aboutElement);
    document.querySelector = originalQuerySelector;
  });
});

