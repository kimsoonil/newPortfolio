import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "@/app/(home)/_components/Projects";

describe("Projects", () => {
  it("기존 개인 프로젝트를 유지하고 영웅합전서를 추가한다", () => {
    render(<Projects />);
    for (const title of ["민원똑똑", "효도 비서", "펫토리 (Petory)", "가방똑똑 (BagKnock)"]) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }
    expect(screen.queryByText("파츠핏몰")).not.toBeInTheDocument();
    expect(screen.queryByText("SCM")).not.toBeInTheDocument();
    const demos = screen.getAllByRole("link", { name: /데모 보기/ });
    expect(demos.map(link => link.getAttribute("href"))).toEqual([
      "https://minwontalk.netlify.app/", "https://hyodosecretary.netlify.app/",
      "https://petory.netlify.app/", "https://bagknock.netlify.app/",
      "https://korean-history-merge-defense.slskdkfdl12.chatgpt.site/",
    ]);
    expect(screen.getAllByRole("link", { name: /코드 보기/ })).toHaveLength(4);
    expect(screen.getAllByRole("heading", { level: 3 }).at(-1)).toHaveTextContent("영웅합전서");
    for (const link of demos) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("영웅합전서의 서버와 운영 범위 및 확인된 출시 준비 상태를 표시한다", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { name: "영웅합전서" })).toBeInTheDocument();
    expect(screen.getByText("2026.09.17 ~ 현재 · 개발·운영 중")).toBeInTheDocument();
    expect(screen.getByText(/서버 권위형 재화 처리/)).toBeInTheDocument();
    expect(screen.getByText(/관리자 권한 기반 사용자 검색/)).toBeInTheDocument();
    expect(screen.getByText(/Google Play·App Store 출시 준비 중/)).toBeInTheDocument();
    expect(screen.queryByText(/심사 중/)).not.toBeInTheDocument();
  });
});
