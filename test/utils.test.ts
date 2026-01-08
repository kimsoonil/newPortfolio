import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn utility function', () => {
  it('클래스 이름을 올바르게 병합해야 한다', () => {
    const result = cn('foo', 'bar');
    expect(result).toBe('foo bar');
  });

  it('조건부 클래스를 처리해야 한다', () => {
    const result = cn('foo', false && 'bar', 'baz');
    expect(result).toBe('foo baz');
  });

  it('Tailwind 클래스를 올바르게 병합해야 한다', () => {
    const result = cn('px-2 py-1', 'px-4');
    expect(result).toBe('py-1 px-4');
  });

  it('빈 문자열을 처리해야 한다', () => {
    const result = cn('foo', '', 'bar');
    expect(result).toBe('foo bar');
  });

  it('undefined와 null을 처리해야 한다', () => {
    const result = cn('foo', undefined, null, 'bar');
    expect(result).toBe('foo bar');
  });

  it('배열을 처리해야 한다', () => {
    const result = cn(['foo', 'bar'], 'baz');
    expect(result).toBe('foo bar baz');
  });

  it('객체를 처리해야 한다', () => {
    const result = cn({ foo: true, bar: false, baz: true });
    expect(result).toBe('foo baz');
  });

  it('충돌하는 Tailwind 클래스를 병합해야 한다', () => {
    const result = cn('bg-red-500', 'bg-blue-500');
    expect(result).toBe('bg-blue-500');
  });
});

