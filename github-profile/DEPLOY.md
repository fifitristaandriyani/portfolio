# Deploy GitHub Stats (Vercel) — langkah cepat

Public instance `github-readme-stats` sering mati. Deploy milikmu sendiri agar stats di profil GitHub tetap jalan.

## 1. Buat GitHub Personal Access Token (PAT)

1. Buka: https://github.com/settings/tokens?type=beta  
   (atau Classic: https://github.com/settings/tokens)
2. **Generate new token**
3. Nama: `github-readme-stats`
4. Permission yang cukup:
   - Fine-grained: **Account permissions → Metadata: Read-only**
   - Classic: centang **`read:user`** saja
5. Generate, lalu **copy token** (simpan dulu — hanya muncul sekali)

## 2. Deploy ke Vercel

1. Login Vercel dengan akun GitHub: https://vercel.com/login  
2. Klik tombol deploy ini:

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anuraghazra/github-readme-stats)

3. Import project → Deploy
4. Setelah selesai, buka project → **Settings → Environment Variables**
5. Tambah:
   - **Name:** `PAT_1`
   - **Value:** token GitHub dari langkah 1
   - Environment: Production, Preview, Development (semua)
6. **Save**, lalu **Redeploy** project (Deployments → … → Redeploy)

## 3. Ambil URL milikmu

Di dashboard Vercel, salin domain, contoh:

`https://github-readme-stats-xxxxx.vercel.app`

Uji di browser:

`https://DOMAIN-KAMU/api?username=AzizLike29&show_icons=true&theme=tokyonight`

Kalau muncul kartu stats (bukan error) → sukses.

## 4. Update README profil

1. Buka repo profil: https://github.com/AzizLike29/AzizLike29  
2. Edit `README.md`
3. Ganti isi dengan file `README.md` di folder ini
4. Ganti `YOUR-VERCEL-APP` menjadi nama domain Vercelmu (tanpa `https://`)

Contoh benar:

```html
<img src="https://github-readme-stats-azizlike29.vercel.app/api?username=AzizLike29&show_icons=true&theme=tokyonight&hide_border=true" height="165" alt="GitHub stats" />
```

5. Commit → Refresh profil GitHub

## Troubleshooting

| Gejala | Perbaikan |
|--------|-----------|
| `Maximum retries exceeded` / minta `PAT_1` | Env `PAT_1` belum di-set, atau belum Redeploy |
| Broken image | Domain salah / masih pakai URL lama |
| 503 Deployment paused | Itu instance publik orang lain — jangan dipakai |
