import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hero from "@/app/(home)/_components/Hero";

describe("Hero", () => {
  it("핵심 소개와 프로필을 렌더링한다", () => {
    render(<Hero />);

    expect(screen.getByText("kimsunil")).toBeInTheDocument();
    expect(
      screen.getByText("커머스·SCM·관리자 콘솔을 개발해 온 7년차 프론트엔드 개발자"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "사용자 구매 흐름과 운영 업무를 연결하고, 팀이 함께 유지보수할 수 있는 구조를 만듭니다.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByAltText("김순일 프로필")).toBeInTheDocument();
  });

  it("외부 프로필과 이메일 링크를 제공한다", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      "https://github.com/kimsoonil",
    );
    expect(screen.getByRole("link", { name: /Blog/i })).toHaveAttribute(
      "href",
      "https://k-soonil.tistory.com/",
    );
    expect(screen.getByRole("link", { name: /Notion/i })).toHaveAttribute(
      "href",
      "https://www.notion.so/Soonil-Kim-8b0de4d95bfe40db8e725e980cca5fdb",
    );
    expect(screen.getByRole("link", { name: /Email/i })).toHaveAttribute(
      "href",
      "mailto:rlatnsdlf158@naver.com",
    );
  });

  it("더 알아보기 버튼으로 소개 영역을 이동한다", async () => {
    const user = userEvent.setup();
    const aboutElement = document.createElement("div");
    aboutElement.id = "about";
    aboutElement.scrollIntoView = vi.fn();
    document.body.appendChild(aboutElement);

    render(<Hero />);
    await user.click(screen.getByRole("button", { name: /더 알아보기/i }));

    expect(aboutElement.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
    aboutElement.remove();
  });
});
