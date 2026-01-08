import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '@/components/skills';

describe('Skills Component', () => {
  it('스킬 섹션 제목이 렌더링되어야 한다', () => {
    render(<Skills />);
    expect(screen.getByText('SKILLS')).toBeInTheDocument();
  });

  it('스킬 설명이 렌더링되어야 한다', () => {
    render(<Skills />);
    expect(
      screen.getByText('다양한 프로젝트를 통해 쌓아온 기술 역량입니다.')
    ).toBeInTheDocument();
  });

  it('모든 스킬 카테고리가 렌더링되어야 한다', () => {
    render(<Skills />);
    
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('DevOps')).toBeInTheDocument();
  });

  it('언어 스킬이 렌더링되어야 한다', () => {
    render(<Skills />);
    
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('HTML/CSS')).toBeInTheDocument();
    expect(screen.getByText('Dart')).toBeInTheDocument();
  });

  it('프론트엔드 스킬이 렌더링되어야 한다', () => {
    render(<Skills />);
    
    expect(screen.getByText('Next.js / React')).toBeInTheDocument();
    expect(screen.getByText('Zustand')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('Vue.js')).toBeInTheDocument();
  });

  it('DevOps 스킬이 렌더링되어야 한다', () => {
    render(<Skills />);
    
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Vercel')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
  });

  it('올바른 섹션 id를 가져야 한다', () => {
    const { container } = render(<Skills />);
    const section = container.querySelector('#skills');
    expect(section).toBeInTheDocument();
  });
});

