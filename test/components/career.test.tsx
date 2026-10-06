import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Career from "@/app/(home)/_components/Career";

describe("Career", () => {
  it("공식 회사명과 근무 기간을 렌더링한다", () => {
    render(<Career />);

    expect(screen.getByText("CAREER")).toBeInTheDocument();
    expect(
      screen.getByText("공식 경력 정보와 주요 담당 업무를 최근 순으로 정리했습니다."),
    ).toBeInTheDocument();
    expect(screen.getByText("주식회사 어메스 (AmassCo., Ltd.)")).toBeInTheDocument();
    expect(screen.getByText("2023.09 - 2026.08")).toBeInTheDocument();
    expect(screen.getByText("아이디스트 (IDist)")).toBeInTheDocument();
    expect(screen.getByText("주식회사 내모마켓")).toBeInTheDocument();
  });

  it("공식 직책과 법인 변경에 따른 경력 연속성을 설명한다", () => {
    render(<Career />);

    expect(screen.getByText("선임연구원 · 프론트엔드 챕터 리딩")).toBeInTheDocument();
    expect(screen.getAllByText("연구원 · 프론트엔드 개발")).toHaveLength(4);
    expect(
      screen.getByText(
        "법인 변경으로 내모마켓과 별도 경력으로 등록됐으나 동일 조직과 구성원 아래 연속 근무",
      ),
    ).toBeInTheDocument();
  });
});
