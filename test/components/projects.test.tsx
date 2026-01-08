import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '@/components/projects';

describe('Projects Component', () => {
  it('프로젝트 섹션 제목이 렌더링되어야 한다', () => {
    render(<Projects />);
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();
  });

  it('프로젝트 설명이 렌더링되어야 한다', () => {
    render(<Projects />);
    expect(
      screen.getByText('다양한 도메인에서의 프로젝트 경험을 소개합니다.')
    ).toBeInTheDocument();
  });

  it('모든 프로젝트가 렌더링되어야 한다', () => {
    render(<Projects />);
    
    expect(screen.getByText('효도 비서')).toBeInTheDocument();
    expect(screen.getByText('민원똑똑')).toBeInTheDocument();
  });

  it('프로젝트 설명이 렌더링되어야 한다', () => {
    render(<Projects />);
    
    expect(
      screen.getByText(/어르신들을 위한 특별한 디지털 어시스턴트/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/AI를 활용한 대화형 민원 창구 서비스/)
    ).toBeInTheDocument();
  });

  it('프로젝트 기술 스택이 렌더링되어야 한다', () => {
    render(<Projects />);
    
    // 모든 기술 스택이 여러 프로젝트에 나타날 수 있으므로 getAllByText 사용
    const reactElements = screen.getAllByText('React');
    expect(reactElements.length).toBeGreaterThan(0);
    
    const typescriptElements = screen.getAllByText('TypeScript');
    expect(typescriptElements.length).toBeGreaterThan(0);
    
    const aiElements = screen.getAllByText('AI');
    expect(aiElements.length).toBeGreaterThan(0);
    
    // Chat Interface 확인
    expect(screen.getByText('Chat Interface')).toBeInTheDocument();
    
    // Natural Language Processing 확인
    expect(screen.getByText('Natural Language Processing')).toBeInTheDocument();
  });

  it('GitHub 링크가 렌더링되어야 한다', () => {
    render(<Projects />);
    
    const githubLinks = screen.getAllByRole('link', { name: /코드 보기/i });
    expect(githubLinks).toHaveLength(2);
    
    expect(githubLinks[0]).toHaveAttribute(
      'href',
      'https://github.com/kimsoonil/hyodoSecretary'
    );
    expect(githubLinks[1]).toHaveAttribute(
      'href',
      'https://github.com/kimsoonil/MinwonTalk'
    );
  });

  it('데모 링크가 렌더링되어야 한다', () => {
    render(<Projects />);
    
    const demoLinks = screen.getAllByRole('link', { name: /데모 보기/i });
    expect(demoLinks).toHaveLength(2);
    
    expect(demoLinks[0]).toHaveAttribute(
      'href',
      'https://hyodosecretary.netlify.app/'
    );
    expect(demoLinks[1]).toHaveAttribute(
      'href',
      'https://minwontalk.netlify.app/'
    );
  });

  it('올바른 섹션 id를 가져야 한다', () => {
    const { container } = render(<Projects />);
    const section = container.querySelector('#projects');
    expect(section).toBeInTheDocument();
  });

  it('외부 링크가 올바른 속성을 가져야 한다', () => {
    render(<Projects />);
    
    const externalLinks = screen.getAllByRole('link');
    externalLinks.forEach((link) => {
      if (link.getAttribute('href')?.startsWith('http')) {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });
});

