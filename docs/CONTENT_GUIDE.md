# 콘텐츠 관리 가이드

EMAIL Lab 홈페이지 콘텐츠 수정 안내서입니다.

## 새로운 학생 추가

`src/data/people.ts` 파일을 열고 `people` 배열에 새 항목을 추가하세요.

```typescript
{
  id: 'hong-gildong',        // 영문 이름 (소문자, 하이픈)
  name: 'Gildong Hong',      // 영문 이름
  nameKo: '홍길동',           // 한국어 이름
  role: 'ms',                // pi, postdoc, phd, ms-phd, ms, undergraduate
  roleLabel: 'M.S. Student',
  roleLabelKo: '석사과정',
  period: '2025–present',
  photo: '/images/people/hong-gildong.jpg',  // 사진 경로 (선택)
  alumni: false,
  displayOrder: 30,          // 표시 순서 (낮을수록 먼저)
  verified: true,
}
```

**프로필 사진 추가**: `public/images/people/` 폴더에 사진을 넣으세요.

## 졸업생으로 이동

해당 학생의 데이터에서:
- `alumni: false` → `alumni: true`
- `period: '2022–present'` → `period: '2022–2025'`
- `alumniInfo: 'Graduated 2025'` 추가

## 새 논문 추가

`src/data/publications.ts`에서 배열 맨 앞에 추가:

```typescript
{
  id: 67,                    // 다음 번호
  authors: '저자1, 저자2, & Baek, S. S.',
  title: '논문 제목',
  journal: '저널명',
  year: 2025,
  volume: '권',
  doi: '10.xxxx/xxxxx',     // DOI (있는 경우)
  researchArea: 'water-quality-hab',  // 연구 분야 ID
  needsVerification: false,
}
```

## 새 연구과제 추가

`src/data/projects.ts`에서 배열에 추가:

```typescript
{
  id: 'project-id',
  title: '영문 과제명',
  titleKo: '국문 과제명',
  fundingAgency: '지원기관 (영문)',
  fundingAgencyKo: '지원기관',
  period: '2025–2028',
  role: 'PI',               // PI 또는 Co-PI
  summary: '과제 요약',
  status: 'ongoing',        // ongoing 또는 completed
  verified: true,
}
```

## 새 연구실 소식 추가

`src/content/news/` 폴더에 마크다운 파일 생성:

파일명: `2025-07-논문게재.md`

```markdown
---
title: "논문 게재 소식"
date: 2025-07-12
category: "publication"
draft: false
---

소식 내용을 여기에 작성합니다.
```

`draft: true`로 설정하면 빌드에서 제외됩니다.

## 사진 추가 (갤러리)

1. `public/images/gallery/이벤트ID/` 폴더에 사진 저장
2. `src/data/gallery.ts`에서 해당 이벤트의 `images` 배열에 경로 추가
3. 사진은 가로 1200px 이하, 200KB 이하로 최적화

## 모집 상태 변경

`src/pages/openings.astro`에서 해당 포지션의 내용을 직접 수정하세요.

## 연락처 변경

`src/data/site.ts`에서 수정하세요. 이메일, 전화번호, 주소 등 모든 연락처 정보가 이 파일에 있습니다.

## 빌드 및 확인

수정 후 아래 명령으로 빌드하세요:

```bash
npm run build
npm run preview
```

브라우저에서 `http://localhost:4321`로 확인할 수 있습니다.

## GitHub에 반영

```bash
git add .
git commit -m "update: 변경 내용"
git push
```

push하면 GitHub Actions가 자동으로 배포합니다.
