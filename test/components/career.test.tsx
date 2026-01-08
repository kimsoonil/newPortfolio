import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Career from '@/components/career';

describe('Career Component', () => {
  it('경력 섹션 제목이 렌더링되어야 한다', () => {
    render(<Career />);
    expect(screen.getByText('CAREER')).toBeInTheDocument();
  });

  it('경력 설명이 렌더링되어야 한다', () => {
    render(<Career />);
    expect(
      screen.getByText('다양한 프로젝트와 회사에서의 경험을 소개합니다.')
    ).toBeInTheDocument();
  });

  it('모든 경력 경험이 렌더링되어야 한다', () => {
    render(<Career />);
    
    // 모든 회사명이 렌더링되는지 확인
    expect(screen.getByText('어메스 (Ames)')).toBeInTheDocument();
    expect(screen.getByText('아이디어스 (Ideas)')).toBeInTheDocument();
    expect(screen.getByText('스냅태그 (Snaptag)')).toBeInTheDocument();
    expect(screen.getByText('포지큐브 (Posicube)')).toBeInTheDocument();
    expect(screen.getByText('CMESOFT')).toBeInTheDocument();
  });

  it('직책이 렌더링되어야 한다', () => {
    render(<Career />);
    
    expect(screen.getByText('프론트엔드 챕터 리더')).toBeInTheDocument();
    expect(screen.getAllByText('프론트엔드 개발자')).toHaveLength(4);
  });

  it('경력 기간이 렌더링되어야 한다', () => {
    render(<Career />);
    
    expect(screen.getByText(/2022\.04 - 2023\.04/)).toBeInTheDocument();
    expect(screen.getByText(/2021\.11 - 2022\.04/)).toBeInTheDocument();
    expect(screen.getByText(/2019\.04 - 2020\.11/)).toBeInTheDocument();
    expect(screen.getByText(/2018\.07 - 2019\.03/)).toBeInTheDocument();
  });

  it('경력 설명이 렌더링되어야 한다', () => {
    render(<Career />);
    
    expect(
      screen.getByText(/프론트엔드 챕터 리딩 및 팀의 기술 스택 선정/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/AI 장비 관리 시스템 프론트엔드 개발/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/코인 거래소 실시간 시세\/호가\/거래 기능 개발/)
    ).toBeInTheDocument();
  });

  it('올바른 섹션 id를 가져야 한다', () => {
    const { container } = render(<Career />);
    const section = container.querySelector('#career');
    expect(section).toBeInTheDocument();
  });
});

