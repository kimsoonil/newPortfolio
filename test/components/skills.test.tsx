import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "@/app/(home)/_components/Skills";

describe("Skills", () => {
  it("검증된 기술 카테고리와 핵심 기술을 렌더링한다", () => {
    render(<Skills />);

    expect(screen.getByText("SKILLS")).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Delivery & Collaboration")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("Vitest")).toBeInTheDocument();
    expect(screen.getByText("GitHub Actions")).toBeInTheDocument();
  });

  it("실제 사용 근거가 부족한 기술을 표시하지 않는다", () => {
    render(<Skills />);

    expect(screen.queryByText("Vue.js")).not.toBeInTheDocument();
    expect(screen.queryByText("Docker")).not.toBeInTheDocument();
    expect(screen.queryByText("Vercel")).not.toBeInTheDocument();
  });
});
