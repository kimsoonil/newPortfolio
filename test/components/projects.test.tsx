import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "@/app/(home)/_components/Projects";

describe("Projects", () => {
  it("개인 프로젝트 네 개와 코드 및 데모 링크를 복원한다", () => {
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
    ]);
    expect(screen.getAllByRole("link", { name: /코드 보기/ })).toHaveLength(4);
    for (const link of demos) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
