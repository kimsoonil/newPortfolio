import {describe,it,expect} from 'vitest';
import {render,screen} from '@testing-library/react';
import Projects from '@/app/(home)/_components/Projects';
describe('포트폴리오 공개 범위',()=>{it('승인된 네 프로젝트와 개발중 상태를 표시한다',()=>{render(<Projects/>);expect(screen.getAllByRole('heading',{level:3}).map(x=>x.textContent)).toEqual(['ERP · 재고·주문·매출 통합관리','물류 모니터링 대시보드','민원똑똑','영웅합전서']);expect(screen.getByText('개발중 · 데모 배포')).toBeInTheDocument();expect(screen.queryByText('효도 비서')).not.toBeInTheDocument();expect(screen.queryByText('사신의 명부')).not.toBeInTheDocument();expect(screen.getAllByRole('link',{name:/코드 보기/})).toHaveLength(3);expect(screen.getAllByRole('link',{name:/데모 보기/})).toHaveLength(3);});});
