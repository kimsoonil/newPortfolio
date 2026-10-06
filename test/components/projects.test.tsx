import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "@/app/(home)/_components/Projects";

describe("Projects", () => {
  it("최근 실무 프로젝트를 우선해 렌더링한다", () => {
    render(<Projects />);

    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
    expect(
      screen.getByText("최근 업무와 지원 직무에 직접 연결되는 프로젝트를 선별했습니다."),
    ).toBeInTheDocument();
    expect(screen.getByText("파츠핏몰")).toBeInTheDocument();
    expect(screen.getByText("B2B 커머스")).toBeInTheDocument();
    expect(screen.getByText("SCM")).toBeInTheDocument();
    expect(screen.getByText("어드민 React 전환·PV 시각화")).toBeInTheDocument();
    expect(screen.getByText("슈퍼클럽")).toBeInTheDocument();
  });

  it("프로젝트 기간, 역할, 수행 내용을 보여준다", () => {
    render(<Projects />);

    expect(screen.getByText("2026.01 - 2026.07")).toBeInTheDocument();
    expect(screen.getByText("자사몰·모바일 웹뷰 프론트엔드 개발")).toBeInTheDocument();
    expect(
      screen.getByText("소셜 로그인, 상품, 장바구니, 주문, 배송과 차량 관리 화면 구현"),
    ).toBeInTheDocument();
  });

  it("파츠핏 데모 링크를 안전한 외부 링크로 제공한다", () => {
    render(<Projects />);

    const demoLink = screen.getByRole("link", { name: /데모 보기/i });
    expect(demoLink).toHaveAttribute("href", "https://partsfit.co.kr");
    expect(demoLink).toHaveAttribute("target", "_blank");
    expect(demoLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
