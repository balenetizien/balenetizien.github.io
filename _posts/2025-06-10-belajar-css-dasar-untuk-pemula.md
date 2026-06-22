---
title: "Belajar CSS Dasar: Cara Membuat Website Jadi Cantik dan Rapi"
excerpt: "Panduan belajar CSS dari nol — selector, properti, box model, flexbox, dan cara styling halaman web pertama kamu. Mudah dipahami untuk pemula."
categories:
  - CSS
tags:
  - CSS
  - CSS Dasar
  - Tutorial CSS
  - Web Design
  - Pemula
---

## Apa Itu CSS?

**CSS** (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan halaman web. Kalau HTML adalah *kerangka* sebuah website, maka CSS adalah *pakaian dan dekorasinya*.

Tanpa CSS, semua website akan terlihat polos seperti dokumen teks biasa. Dengan CSS, kamu bisa:
- Mengubah warna teks dan background
- Mengatur ukuran dan jenis font
- Membuat layout yang rapi
- Menambahkan animasi
- Membuat website responsive di berbagai ukuran layar

## Cara Menambahkan CSS ke HTML

Ada 3 cara menambahkan CSS:

### 1. Inline CSS (langsung di tag HTML)
```html
<p style="color: red; font-size: 18px;">Teks ini berwarna merah</p>
```

### 2. Internal CSS (di dalam tag `<style>`)
```html
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
```

### 3. External CSS (file `.css` terpisah) — **Cara Terbaik!**
```html
<!-- Di file HTML -->
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

```css
/* Di file style.css */
p {
  color: green;
  font-size: 16px;
}
```

Cara eksternal adalah yang paling direkomendasikan karena memisahkan struktur (HTML) dari tampilan (CSS).

## Selector CSS

Selector adalah cara CSS "memilih" elemen HTML mana yang ingin di-styling.

```css
/* Element Selector - memilih semua tag <p> */
p {
  color: navy;
}

/* Class Selector - memilih elemen dengan class="judul" */
.judul {
  font-size: 24px;
  font-weight: bold;
}

/* ID Selector - memilih elemen dengan id="header" */
#header {
  background-color: #333;
  color: white;
}
```

Di HTML-nya:
```html
<h1 class="judul">Ini Judul Blog</h1>
<div id="header">Ini Header</div>
<p>Ini paragraf biasa.</p>
```

## Properti CSS yang Sering Dipakai

### Warna dan Background

```css
div {
  color: #333333;              /* Warna teks */
  background-color: #f5f5f5;  /* Warna background */
  background-color: rgba(0, 0, 0, 0.5); /* Background transparan */
}
```

### Font dan Teks

```css
p {
  font-family: 'Arial', sans-serif;  /* Jenis font */
  font-size: 16px;                    /* Ukuran font */
  font-weight: bold;                  /* Tebal tipis */
  line-height: 1.6;                   /* Jarak antar baris */
  text-align: center;                 /* Rata tengah */
  text-decoration: underline;         /* Garis bawah */
}
```

### Ukuran

```css
div {
  width: 300px;      /* Lebar */
  height: 200px;     /* Tinggi */
  max-width: 100%;   /* Lebar maksimum */
}
```

## Box Model — Konsep Penting!

Setiap elemen HTML adalah sebuah "kotak" yang terdiri dari:

```
┌─────────────────────────────────┐  ← Margin (jarak luar)
│  ┌───────────────────────────┐  │
│  │  Border (garis tepi)      │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  Padding (jarak dlm) │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   KONTEN      │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

```css
.kotak {
  margin: 20px;          /* Jarak luar (dari elemen lain) */
  padding: 15px;         /* Jarak dalam (konten ke border) */
  border: 2px solid #000; /* Garis tepi */
  border-radius: 8px;    /* Sudut membulat */
}
```

## Flexbox — Layout Modern

Flexbox adalah cara paling mudah untuk membuat layout yang fleksibel:

```css
.container {
  display: flex;
  justify-content: center;  /* Rata horizontal: center/flex-start/flex-end/space-between */
  align-items: center;      /* Rata vertikal: center/flex-start/flex-end */
  gap: 16px;                /* Jarak antar item */
  flex-wrap: wrap;          /* Bungkus ke baris baru jika penuh */
}
```

HTML-nya:
```html
<div class="container">
  <div class="item">Box 1</div>
  <div class="item">Box 2</div>
  <div class="item">Box 3</div>
</div>
```

## Contoh Lengkap: Card Sederhana

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Card Sederhana</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      padding: 40px;
    }

    .card {
      background-color: white;
      border-radius: 12px;
      padding: 24px;
      max-width: 350px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .card h2 {
      color: #2c3e50;
      margin-top: 0;
    }

    .card p {
      color: #555;
      line-height: 1.6;
    }

    .tombol {
      display: inline-block;
      background-color: #3498db;
      color: white;
      padding: 10px 20px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
    }

    .tombol:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Bale Tech</h2>
    <p>Tutorial programming dasar untuk pemula Indonesia. Belajar Python, PHP, JavaScript, dan CSS dengan mudah!</p>
    <a href="#" class="tombol">Baca Selengkapnya</a>
  </div>
</body>
</html>
```

## Langkah Selanjutnya

Kamu sudah menguasai dasar CSS! Berikut yang bisa dipelajari selanjutnya:

- **CSS Grid** — layout 2 dimensi yang lebih powerful dari Flexbox
- **Media Queries** — membuat website responsive di HP dan laptop
- **CSS Variables** — variabel untuk menyimpan nilai warna/ukuran
- **CSS Animations** — animasi tanpa JavaScript
- **Sass/SCSS** — CSS yang lebih canggih dengan fitur tambahan

Tetap semangat dan terus berlatih! Ingat, skill CSS terbaik didapat dari banyak *eksperimen* — jangan takut coba-coba! 💪
