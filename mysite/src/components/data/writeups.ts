export interface Writeup {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export const writeups: Writeup[] = [
  {
    id: "sql-auth-bypass",
    title: "SQL Injection Authentication Bypass",
    date: "2026-03-20",
    author: "Sanjog Gautam",
    excerpt:
      "Critical SQL injection vulnerability leading to authentication bypass.",
    content: `
# SQL Injection Authentication Bypass

## Discovery
During testing, input fields were not sanitized.

## Impact
Full login bypass possible.

## Fix
Use parameterized queries.
    `
  },
  {
    id: "xss-reflected",
    title: "Reflected XSS in Search Feature",
    date: "2026-02-10",
    author: "Sanjog Gautam",
    excerpt: "Reflected XSS found in search query parameter.",
    content: `
# Reflected XSS

## Discovery
User input reflected without encoding.

## Impact
Session hijacking possible.

## Fix
Escape user input properly.
    `
  }
];