# AGENTS.md – Pete McPherson Portfolio

Guidance for AI agents and developers working on this project.

---

## Project overview

- **Stack:** Astro, Tailwind CSS, @astrojs/tailwind, @astrojs/sitemap
- **Scripts:** `npm run dev` | `start` | `build` | `preview` (see `package.json`)

---

## 1. PowerShell: “Running scripts is disabled” (npm install fails)

On Windows, running `npm install` in PowerShell can fail with:

```text
File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

### Fix (recommended)

Allow scripts for the current user:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run `npm install` again.

### Alternatives

- **Use the .cmd launcher:** `npm.cmd install` (no policy change).
- **Use Command Prompt:** Run `npm install` from `cmd.exe` instead of PowerShell.

---

## 2. npm audit: Security vulnerabilities (Astro / esbuild / Vite)

This project was updated from Astro 4 to Astro 6 to resolve reported vulnerabilities.

### What was reported (before fix)

- **astro** (high): Multiple CVEs (X-Forwarded-Host, URL manipulation, XSS, dev server file read, middleware/auth bypass, etc.).
- **esbuild** (moderate): Dev server request/response issue.
- **vite**: Pulled in by Astro; fixed by upgrading Astro.

### How it was fixed

```powershell
npm audit fix --force
```

This installed **astro@6.0.5** (SemVer major upgrade) and cleared all reported issues (`found 0 vulnerabilities`).

- **Non‑force fix:** `npm audit fix` (no `--force`) did **not** resolve these; they required the major upgrade.

---

## 3. After `npm audit fix --force`: Peer dependency warning

You may see:

```text
npm warn ERESOLVE overriding peer dependency
peer astro@"^3.0.0 || ^4.0.0 || ^5.0.0" from @astrojs/tailwind@5.1.5
```

### Why it happens

- The project now uses **Astro 6**.
- **@astrojs/tailwind@5.1.5** only declares support for Astro `^3 || ^4 || ^5`, so npm warns that Astro 6 is not in the supported range.
- npm still installs and runs; the warning is informational.

### What to do

1. **Verify the site:** Run `npm run dev`, click through the site, then run `npm run build`. If both succeed and the site looks correct, the warning can be ignored.
2. **Optional – align package.json:** If `package.json` still has `"astro": "^4.16.0"`, update it to `"astro": "^6.0.5"` and run `npm install` so the lockfile and manifest match. This does not remove the peer dependency warning; only a future @astrojs/tailwind release that supports Astro 6 would do that.
3. **Note:** @astrojs/tailwind is deprecated in favor of [Tailwind’s Vite plugin](https://tailwindcss.com/docs/installation/framework-guides/astro). For new work or a future cleanup, consider migrating to that approach (see [Astro Styles & CSS](https://docs.astro.build/en/guides/styling/#tailwind)).

---

## 4. Quick reference

| Task              | Command / action                                      |
|-------------------|--------------------------------------------------------|
| Install deps      | `npm install` (after fixing execution policy if needed) |
| Dev server        | `npm run dev`                                          |
| Production build  | `npm run build`                                        |
| Preview build     | `npm run preview`                                     |
| Fix audit (major) | `npm audit fix --force` (Astro 6 upgrade; test after)  |
| Check audit       | `npm audit`                                            |

---

*Last updated to reflect Astro 6 upgrade, PowerShell execution policy, and @astrojs/tailwind peer dependency behavior.*
